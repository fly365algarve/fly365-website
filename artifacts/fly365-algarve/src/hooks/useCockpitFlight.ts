import { useEffect, useRef, useState, type RefObject } from "react";
import type { Map as MapboxMap } from "mapbox-gl";
import { routePlaces, type MapCoordinate } from "../config/routes";
import { FLIGHT_DURATION_MS as DURATION, easeFlightProgress, smoothFlightBearing } from "../lib/flightCameraMath";

export type MapboxSdk = typeof import("mapbox-gl").default;
type Playback = "idle" | "playing" | "paused" | "finished";

export function useCockpitFlight({
  mapRef, sdkRef, coordinates, reducedMotion, overview, onError,
}: {
  mapRef: RefObject<MapboxMap | null>;
  sdkRef: RefObject<MapboxSdk | null>;
  coordinates: MapCoordinate[];
  reducedMotion: boolean;
  overview: () => void;
  onError: () => void;
}) {
  const [playback, setPlayback] = useState<Playback>("idle");
  const [progress, setProgress] = useState(0);
  const [place, setPlace] = useState("");
  const playbackRef = useRef<Playback>("idle");
  const frame = useRef<number | null>(null);
  const generation = useRef(0);
  const elapsed = useRef(0);
  const callbacks = useRef({ overview, onError });
  callbacks.current = { overview, onError };

  const updatePlayback = (next: Playback) => {
    playbackRef.current = next;
    setPlayback(next);
  };
  const cancel = () => {
    generation.current++;
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = null;
  };
  const reset = () => {
    cancel();
    elapsed.current = 0;
    updatePlayback("idle");
    setProgress(0);
    setPlace("");
  };
  useEffect(() => {
    reset();
    return cancel;
  }, [coordinates, reducedMotion]);

  const play = async (restart = false) => {
    const map = mapRef.current;
    const sdk = sdkRef.current;
    if (!map || !sdk) return;
    if (reducedMotion) {
      reset();
      callbacks.current.overview();
      return;
    }
    const resume = playbackRef.current === "paused" && !restart;
    cancel();
    const currentGeneration = generation.current;
    if (!resume) {
      elapsed.current = 0;
      setProgress(0);
      setPlace("");
    }
    updatePlayback("playing");
    try {
      const turf = await import("@turf/turf");
      if (generation.current !== currentGeneration) return;
      map.stop();
      map.setPadding({ top: 0, right: 0, bottom: 0, left: 0 });
      const line = turf.lineString(coordinates);
      const length = turf.length(line, { units: "kilometers" });
      const savedElapsed = elapsed.current;
      const start = performance.now();
      let lastFrame = start;
      let lastHud = -Infinity;
      let bearing: number | undefined = resume ? map.getBearing() : undefined;
      let cameraAltitude: number | undefined;

      const step = (now: number) => {
        if (generation.current !== currentGeneration || playbackRef.current !== "playing" || mapRef.current !== map) return;
        try {
          elapsed.current = Math.min(DURATION, savedElapsed + now - start);
          const ratio = easeFlightProgress(elapsed.current / DURATION);
          const distance = length * ratio;
          const current = turf.along(line, distance, { units: "kilometers" });
          const position = current.geometry.coordinates as MapCoordinate;
          let ahead = turf.along(line, Math.min(length, distance + 2.5), { units: "kilometers" });
          // Keep a horizon at the final point instead of looking straight down.
          if (turf.distance(current, ahead, { units: "kilometers" }) < 0.05) {
            ahead = turf.destination(current, 2.5, bearing ?? map.getBearing(), { units: "kilometers" });
          }
          const targetBearing = turf.bearing(current, ahead);
          const seconds = Math.min(0.1, Math.max(0, (now - lastFrame) / 1000));
          bearing = bearing === undefined ? targetBearing : smoothFlightBearing(bearing, targetBearing, seconds);
          lastFrame = now;
          const terrain = map.queryTerrainElevation(position, { exaggerated: true }) ?? 0;
          const targetAltitude = terrain + 600;
          cameraAltitude = cameraAltitude === undefined ? targetAltitude
            : cameraAltitude + (targetAltitude - cameraAltitude) * (1 - Math.exp(-seconds / 0.4));
          cameraAltitude = Math.max(terrain + 100, cameraAltitude);
          const aheadPosition = ahead.geometry.coordinates as MapCoordinate;
          const aheadTerrain = map.queryTerrainElevation(aheadPosition, { exaggerated: true }) ?? 0;
          const pitch = 65;
          const camera = map.getFreeCameraOptions();
          camera.position = sdk.MercatorCoordinate.fromLngLat(position, cameraAltitude);
          camera.lookAtPoint(aheadPosition, undefined, aheadTerrain);
          camera.setPitchBearing(pitch, bearing);
          map.setFreeCameraOptions(camera);

          if (now - lastHud >= 100 || elapsed.current === DURATION) {
            setProgress(ratio * 100);
            const nearby = routePlaces.slice(1).map(location => ({
              location,
              distance: turf.distance(current, turf.point(location.position), { units: "kilometers" }),
            })).sort((a, b) => a.distance - b.distance)[0];
            setPlace(nearby.distance <= 1 ? nearby.location.name.replace(" / the grottos", "") : "");
            lastHud = now;
          }
          if (elapsed.current < DURATION) frame.current = requestAnimationFrame(step);
          else {
            frame.current = null;
            updatePlayback("finished");
          }
        } catch {
          reset();
          callbacks.current.onError();
        }
      };
      frame.current = requestAnimationFrame(step);
    } catch {
      if (generation.current === currentGeneration) {
        reset();
        callbacks.current.onError();
      }
    }
  };

  return {
    playback, progress, place,
    active: playback !== "idle",
    play,
    pause: () => { cancel(); updatePlayback("paused"); },
    reset,
    exit: () => { reset(); callbacks.current.overview(); },
  };
}
