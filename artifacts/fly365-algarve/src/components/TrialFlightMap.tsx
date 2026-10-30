import { useEffect, useRef, useState } from "react";
import type { Map as MapboxMap, Marker as MapboxMarker } from "mapbox-gl";
import { Link } from "wouter";
import { ArrowRight, Pause, Play, RotateCcw } from "lucide-react";
import { site } from "../config/site";
import { routePlaces, trialRoutes, type MapCoordinate } from "../config/routes";

type PlaybackState = "idle" | "playing" | "paused" | "finished";
type MapStatus = "waiting" | "loading" | "ready" | "fallback";

const formatPrice = (amount: number) => `€${amount.toLocaleString("en-IE")}`;
const token = import.meta.env.VITE_MAPBOX_TOKEN;

function routeBounds(coordinates: MapCoordinate[]) {
  const longitudes = coordinates.map(([longitude]) => longitude);
  const latitudes = coordinates.map(([, latitude]) => latitude);
  return [
    [Math.min(...longitudes), Math.min(...latitudes)],
    [Math.max(...longitudes), Math.max(...latitudes)],
  ] as [[number, number], [number, number]];
}

export function TrialFlightMap({ selected, onSelect }: { selected: number; onSelect: (index: number) => void }) {
  const mapElement = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapboxMap | null>(null);
  const markersRef = useRef<MapboxMarker[]>([]);
  const aircraftMarkerRef = useRef<MapboxMarker | null>(null);
  const frameRef = useRef<number | null>(null);
  const overviewTimeoutRef = useRef<number | null>(null);
  const progressRef = useRef(0);
  const startTimeRef = useRef(0);
  const selectedRef = useRef(selected);
  const playbackRef = useRef<PlaybackState>("idle");
  const [status, setStatus] = useState<MapStatus>("waiting");
  const [shouldLoad, setShouldLoad] = useState(false);
  const [playback, setPlayback] = useState<PlaybackState>("idle");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [showFallback, setShowFallback] = useState(!token);
  const flight = site.trialFlights[selected];
  const route = trialRoutes[selected];

  selectedRef.current = selected;
  const updatePlayback = (next: PlaybackState) => {
    playbackRef.current = next;
    setPlayback(next);
  };

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const target = mapElement.current;
    if (!target || !token) {
      setStatus("fallback");
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStatus("loading");
        setShouldLoad(true);
        observer.disconnect();
      }
    }, { rootMargin: "240px", threshold: 0.01 });

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad || !mapElement.current || !token) return;
    let cancelled = false;
    let map: MapboxMap | null = null;
    let loadTimeout: number | undefined;

    async function initialize() {
      try {
        const [mapboxModule] = await Promise.all([
          import("mapbox-gl"),
          import("mapbox-gl/dist/mapbox-gl.css"),
        ]);
        if (cancelled || !mapElement.current) return;
        const mapbox = mapboxModule.default;
        if (!mapbox.supported()) {
          setStatus("fallback");
          setShowFallback(true);
          return;
        }

        mapbox.accessToken = token;
        map = new mapbox.Map({
          container: mapElement.current,
          style: "mapbox://styles/mapbox/satellite-streets-v12",
          center: [-8.81, 37.065],
          zoom: 9,
          pitch: 55,
          bearing: -12,
          dragPan: true,
          dragRotate: true,
          touchPitch: true,
          touchZoomRotate: true,
          cooperativeGestures: true,
          attributionControl: true,
          antialias: true,
        });
        mapRef.current = map;
        map.addControl(new mapbox.NavigationControl({ visualizePitch: true }), "top-right");

        loadTimeout = window.setTimeout(() => {
          if (map && !map.isStyleLoaded()) {
            setStatus("fallback");
            setShowFallback(true);
          }
        }, 12000);

        map.on("error", (event) => {
          const message = event.error?.message ?? "";
          if (/token|unauthorized|forbidden|access token/i.test(message)) {
            setStatus("fallback");
            setShowFallback(true);
          }
        });

        map.once("load", () => {
          if (!map || cancelled) return;
          if (loadTimeout) window.clearTimeout(loadTimeout);
          try {
            map.addSource("mapbox-dem", {
              type: "raster-dem",
              url: "mapbox://mapbox.mapbox-terrain-dem-v1",
              tileSize: 512,
              maxzoom: 14,
            });
            map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });
            map.addLayer({
              id: "fly365-atmosphere",
              type: "sky",
              paint: {
                "sky-type": "atmosphere",
                "sky-atmosphere-sun": [0, 0],
                "sky-atmosphere-sun-intensity": 15,
              },
            });

            trialRoutes.forEach((flightRoute) => {
              const sourceId = `route-${flightRoute.minutes}`;
              map!.addSource(sourceId, {
                type: "geojson",
                data: {
                  type: "Feature",
                  properties: { minutes: flightRoute.minutes },
                  geometry: { type: "LineString", coordinates: flightRoute.coordinates },
                },
              });
              map!.addLayer({
                id: `${sourceId}-glow`,
                type: "line",
                source: sourceId,
                layout: { "line-cap": "round", "line-join": "round" },
                paint: {
                  "line-color": "#C8692F",
                  "line-width": flightRoute.minutes === trialRoutes[selectedRef.current].minutes ? 11 : 6,
                  "line-opacity": flightRoute.minutes === trialRoutes[selectedRef.current].minutes ? 0.28 : 0.08,
                  "line-blur": 4,
                },
              });
              map!.addLayer({
                id: `${sourceId}-line`,
                type: "line",
                source: sourceId,
                layout: { "line-cap": "round", "line-join": "round" },
                paint: {
                  "line-color": flightRoute.minutes === trialRoutes[selectedRef.current].minutes ? "#F1B36F" : "#C8692F",
                  "line-width": flightRoute.minutes === trialRoutes[selectedRef.current].minutes ? 4 : 2,
                  "line-opacity": flightRoute.minutes === trialRoutes[selectedRef.current].minutes ? 1 : 0.38,
                  "line-dasharray": [1.4, 1.2],
                },
              });
            });

            routePlaces.forEach((place) => {
              const isAirport = "kind" in place && place.kind === "aerodrome";
              const element = document.createElement("div");
              element.className = `mapbox-place-pin${isAirport ? " mapbox-place-pin-airport" : ""}`;
              element.setAttribute("role", "img");
              element.setAttribute("aria-label", place.name);
              if (isAirport) {
                const logo = document.createElement("img");
                logo.src = "/images/logo.png";
                logo.alt = "";
                logo.className = "mapbox-airport-logo circular-logo";
                element.append(logo);
              } else {
                const dot = document.createElement("span");
                dot.className = "mapbox-place-dot";
                element.append(dot);
              }
              const label = document.createElement("span");
              label.className = "mapbox-place-label";
              label.textContent = place.name;
              element.append(label);
              const marker = new mapbox.Marker({ element, anchor: "bottom" })
                .setLngLat([...place.position])
                .addTo(map!);
              markersRef.current.push(marker);
            });

            const bounds = routeBounds(trialRoutes.flatMap((item) => item.coordinates));
            map.fitBounds(bounds, { padding: { top: 80, right: 120, bottom: 90, left: 120 }, maxZoom: 9.5, duration: 0 });
            map.setPitch(55);

            const aircraft = document.createElement("div");
            aircraft.className = "mapbox-aircraft-marker";
            aircraft.setAttribute("aria-label", "Aircraft following the selected route");
            aircraft.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16Z" fill="currentColor"/></svg>';
            aircraftMarkerRef.current = new mapbox.Marker({ element: aircraft, anchor: "center", rotationAlignment: "map" })
              .setLngLat([...trialRoutes[selectedRef.current].coordinates[0]])
              .addTo(map);
            aircraftMarkerRef.current.getElement().style.display = "none";

            mapRef.current = map;
            setStatus("ready");
            setShowFallback(false);
          } catch {
            setStatus("fallback");
            setShowFallback(true);
          }
        });
      } catch {
        if (!cancelled) {
          setStatus("fallback");
          setShowFallback(true);
        }
      }
    }

    void initialize();
    return () => {
      cancelled = true;
      if (loadTimeout) window.clearTimeout(loadTimeout);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
      aircraftMarkerRef.current?.remove();
      aircraftMarkerRef.current = null;
      map?.remove();
      mapRef.current = null;
    };
    }, [shouldLoad]);

  useEffect(() => {
    if (status !== "ready" || !mapRef.current) return;
    const map = mapRef.current;
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    if (overviewTimeoutRef.current !== null) window.clearTimeout(overviewTimeoutRef.current);
    frameRef.current = null;
    updatePlayback("idle");
    progressRef.current = 0;
    aircraftMarkerRef.current?.getElement().style.setProperty("display", "none");

    trialRoutes.forEach((item) => {
      const selectedRoute = item.minutes === flight.minutes;
      const glowId = `route-${item.minutes}-glow`;
      const lineId = `route-${item.minutes}-line`;
      if (!map.getLayer(glowId) || !map.getLayer(lineId)) return;
      map.setPaintProperty(glowId, "line-width", selectedRoute ? 11 : 6);
      map.setPaintProperty(glowId, "line-opacity", selectedRoute ? 0.28 : 0.08);
      map.setPaintProperty(lineId, "line-color", selectedRoute ? "#F1B36F" : "#C8692F");
      map.setPaintProperty(lineId, "line-width", selectedRoute ? 4 : 2);
      map.setPaintProperty(lineId, "line-opacity", selectedRoute ? 1 : 0.38);
    });

    map.fitBounds(routeBounds(route.coordinates), {
      padding: { top: 85, right: 120, bottom: 90, left: 120 },
      maxZoom: 11,
      duration: reducedMotion ? 0 : 900,
    });
  }, [flight.minutes, route.coordinates, reducedMotion, status]);

  useEffect(() => () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    if (overviewTimeoutRef.current !== null) window.clearTimeout(overviewTimeoutRef.current);
  }, []);

  const play = async (restart = false) => {
    const map = mapRef.current;
    if (!map || status !== "ready") return;
    if (reducedMotion) {
      map.fitBounds(routeBounds(route.coordinates), { padding: 80, maxZoom: 11, duration: 0 });
      return;
    }

    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = null;
    if (overviewTimeoutRef.current !== null) window.clearTimeout(overviewTimeoutRef.current);
    if (restart || playbackRef.current === "idle" || playbackRef.current === "finished") progressRef.current = 0;
    if (playbackRef.current === "paused" && !restart) {
      startTimeRef.current = performance.now() - progressRef.current * 25000;
    } else {
      progressRef.current = 0;
      startTimeRef.current = performance.now();
    }

    const aircraft = aircraftMarkerRef.current;
    aircraft?.getElement().style.setProperty("display", "grid");
    updatePlayback("playing");

    const turf = await import("@turf/turf");
    if (playbackRef.current !== "playing") return;
    const line = turf.lineString(route.coordinates);
    const length = turf.length(line, { units: "kilometers" });
    const duration = 25000;
    const step = (now: number) => {
      if (!mapRef.current) return;
      const progress = Math.min(1, (now - startTimeRef.current) / duration);
      progressRef.current = progress;
      const distance = Math.max(0.001, length * progress);
      const point = turf.along(line, distance, { units: "kilometers" });
      const next = turf.along(line, Math.min(length, distance + 0.03), { units: "kilometers" });
      const [longitude, latitude] = point.geometry.coordinates;
      const bearing = turf.bearing(point, next);

      mapRef.current.easeTo({
        center: [longitude, latitude],
        zoom: 12.2,
        pitch: 67,
        bearing,
        offset: [0, 115],
        duration: 0,
      });
      aircraftMarkerRef.current?.setLngLat([longitude, latitude]).setRotation(bearing);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        frameRef.current = null;
        updatePlayback("finished");
        overviewTimeoutRef.current = window.setTimeout(() => {
          overviewTimeoutRef.current = null;
          if (mapRef.current) {
            mapRef.current.easeTo({
              center: [-8.81, 37.065],
              zoom: 9,
              pitch: 55,
              bearing: -12,
              offset: [0, 0],
              duration: 1600,
            });
          }
          aircraftMarkerRef.current?.getElement().style.setProperty("display", "none");
        }, 450);
      }
    };

    frameRef.current = requestAnimationFrame(step);
  };

  const pause = () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = null;
    updatePlayback("paused");
  };

  return <div className="trial-map-shell" data-testid="map-trial-routes">
    <div ref={mapElement} className="trial-map mapbox-map" aria-label="Interactive 3D satellite map of approximate trial flight routes">
      {status === "waiting" && <div className="map-loading-panel"><span className="map-loading-mark">FLY365</span><span>Loading route map…</span></div>}
      {status === "loading" && <div className="map-loading-panel"><span className="map-loading-mark">FLY365</span><span>Loading satellite map…</span></div>}
      {showFallback && <div className="map-fallback">
        <div className="map-fallback-photo" role="img" aria-label="View of the Algarve coast from a Fly365 microlight">
          <span className="map-fallback-caption">Approximate routes along the Algarve coast</span>
        </div>
        <div className="map-fallback-routes">
          {site.trialFlights.map((item, index) => <button key={item.minutes} type="button" className={`map-fallback-route ${selected === index ? "selected" : ""}`} onClick={() => onSelect(index)} aria-pressed={selected === index} data-testid={`fallback-route-${item.minutes}`}>
            <span>{item.minutes} min</span><strong>{formatPrice(item.price)}</strong><small>{item.route}</small>
          </button>)}
        </div>
      </div>}
    </div>
    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Select trial flight duration">
        {site.trialFlights.map((item, index) => <button key={item.minutes} type="button" onClick={() => onSelect(index)} aria-pressed={selected === index} className={`route-select ${selected === index ? "selected" : ""}`} data-testid={`button-flight-${item.minutes}`}>{item.minutes} min</button>)}
      </div>
      {status === "ready" && <div className="flex gap-2">
        {playback === "playing"
          ? <button type="button" className="route-select" onClick={pause} data-testid="button-pause-flyover"><Pause size={15} /> Pause</button>
          : <button type="button" className="route-select route-play" onClick={() => void play()} data-testid="button-play-flyover"><Play size={15} /> {playback === "finished" ? "Fly this route again" : playback === "paused" ? "Resume route" : "Fly this route"}</button>}
        {playback !== "idle" && <button type="button" className="route-select" onClick={() => void play(true)} aria-label="Replay route from the beginning" data-testid="button-replay-flyover"><RotateCcw size={15} /> Replay</button>}
      </div>}
    </div>
    <div className="mt-5 flex flex-col gap-4 border-t border-[rgba(11,42,60,.16)] pt-4 sm:flex-row sm:items-center sm:justify-between">
      <div><p className="text-xs uppercase tracking-[.18em] text-[var(--ocean)]">{flight.minutes} minute route</p><p className="mt-1 text-sm text-[var(--muted-foreground)]">{flight.route}</p></div>
      <div className="flex items-center gap-4"><strong className="display-heading text-3xl text-[var(--navy)]">{formatPrice(flight.price)}</strong><Link href="/contact" className="button-ochre px-4 py-3 text-xs font-bold uppercase tracking-wider" data-testid="link-book-selected-flight">Book this flight <ArrowRight className="ml-1 inline" size={14} /></Link></div>
    </div>
    <p className="mt-3 text-[11px] text-[var(--muted-foreground)]">Routes are approximate and depend on weather</p>
    <Link href="/prices#trial" className="motion-link mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--ocean)]">View full price list <ArrowRight size={14} /></Link>
  </div>;
}
