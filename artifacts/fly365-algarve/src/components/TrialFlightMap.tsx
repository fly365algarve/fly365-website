import { useEffect, useRef, useState } from "react";
import type { Map as MapboxMap, Marker as MapboxMarker } from "mapbox-gl";
import { Link } from "wouter";
import { ArrowRight, Pause, Play, RotateCcw } from "lucide-react";
import { site } from "../config/site";
import { routePlaces, trialRoutes, type MapCoordinate } from "../config/routes";
import { StaticRouteImage } from "./StaticRouteImage";
import { aerodromeMapsUrl } from "../lib/staticRouteMap";
import { useCockpitFlight, type MapboxSdk } from "../hooks/useCockpitFlight";
import { CockpitHud } from "./CockpitHud";
import { RouteFlightVideo } from "./RouteFlightVideo";

type MapStatus = "static" | "loading" | "ready" | "unavailable";

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

function coastOverview(map: MapboxMap, animate = false) {
  map.stop();
  const inset = map.getCanvas().clientWidth < 600 ? 35 : 55;
  map.fitBounds(routeBounds(routePlaces.map(place => place.position)), {
    padding: { top: inset, right: inset, bottom: inset + 15, left: inset },
    pitch: 60,
    bearing: -50,
    maxZoom: 11.5,
    duration: animate ? 900 : 0,
  });
}

export function TrialFlightMap({ selected, onSelect }: { selected: number; onSelect: (index: number) => void }) {
  const mapElement = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapboxMap | null>(null);
  const markersRef = useRef<MapboxMarker[]>([]);
  const sdkRef = useRef<MapboxSdk | null>(null);
  const selectedRef = useRef(selected);
  const [status, setStatus] = useState<MapStatus>("static");
  const [failureReason, setFailureReason] = useState("");
  const [shouldLoad, setShouldLoad] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const flight = site.trialFlights[selected];
  const route = trialRoutes[selected];

  selectedRef.current = selected;
  const cockpit = useCockpitFlight({
    mapRef, sdkRef, coordinates: route.coordinates, reducedMotion,
    overview: () => { if (mapRef.current) coastOverview(mapRef.current, !reducedMotion); },
    onError: () => {
      if (import.meta.env.DEV) console.warn("Trial-flight map: cockpit-error");
    },
  });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!shouldLoad || !mapElement.current || !token) return;
    let cancelled = false;
    let styleReady = false;
    let map: MapboxMap | null = null;
    let resizeObserver: ResizeObserver | undefined;
    const fail = (reason: string) => {
      if (cancelled || styleReady) return;
      cancelled = true;
      setFailureReason(reason);
      setStatus("unavailable");
      setShouldLoad(false);
      cockpit.reset();
    };
    // Includes module download time. Never leave a pending 3D request indefinitely.
    const loadTimeout = window.setTimeout(() => fail("timeout"), 12000);
    const optional = (step: string, setup: () => void) => {
      try { setup(); }
      catch {
        if (import.meta.env.DEV) console.warn(`Trial-flight map: ${step}-setup-error`);
      }
    };

    async function initialize() {
      try {
        const [mapboxModule] = await Promise.all([
          import("mapbox-gl"),
          import("mapbox-gl/dist/mapbox-gl.css"),
        ]);
        if (cancelled || !mapElement.current) return;
        const mapbox = mapboxModule.default;
        sdkRef.current = mapbox;
        if (!mapbox.supported()) {
          fail("webgl-unavailable");
          return;
        }

        mapbox.accessToken = token;
        map = new mapbox.Map({
          container: mapElement.current,
          style: "mapbox://styles/mapbox/standard-satellite",
          config: {
            basemap: {
              lightPreset: "day",
              showRoadLabels: false,
              showPointOfInterestLabels: false,
              showTransitLabels: false,
              showPlaceLabels: false,
            },
          },
          projection: "mercator",
          center: [-8.81, 37.065],
          zoom: 9,
          pitch: 60,
          bearing: -50,
          maxPitch: 85,
          dragPan: true,
          dragRotate: true,
          touchPitch: true,
          touchZoomRotate: true,
          cooperativeGestures: true,
          attributionControl: true,
          antialias: true,
        });
        mapRef.current = map;
        optional("controls", () => map!.addControl(new mapbox.NavigationControl({ visualizePitch: true }), "top-right"));
        resizeObserver = new ResizeObserver(() => map?.resize());
        resizeObserver.observe(mapElement.current);
        map.resize();
        map.on("error", (event) => {
          const error = event.error as (Error & { status?: number }) | undefined;
          // Store only a category/status, never token-bearing service error text.
          const category = error?.status ? `http-${error.status}`
            : /sky|projection/i.test(error?.message ?? "") ? "projection"
            : /fetch|network/i.test(error?.message ?? "") ? "network"
            : /source|layer|style/i.test(error?.message ?? "") ? "style"
            : "unknown";
          if (styleReady) {
            if (import.meta.env.DEV) console.warn(`Trial-flight map: map-service-${category}`);
            return;
          }
          fail(`map-service-${category}`);
        });
        map.once("style.load", () => {
          if (!map || cancelled) return;
          styleReady = true;
          window.clearTimeout(loadTimeout);
          optional("terrain", () => {
            map!.addSource("mapbox-dem", {
              type: "raster-dem",
              url: "mapbox://mapbox.mapbox-terrain-dem-v1",
              tileSize: 512,
              maxzoom: 14,
            });
            map!.setTerrain({ source: "mapbox-dem", exaggeration: 1.3 });
          });

            trialRoutes.forEach((flightRoute) => {
              optional(`route-${flightRoute.minutes}`, () => {
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
                slot: "middle",
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
                slot: "middle",
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
            });

            routePlaces.forEach((place, index) => {
              optional(`marker-${index}`, () => {
              const isAirport = "kind" in place && place.kind === "aerodrome";
              const element = document.createElement(isAirport ? "a" : "div");
              element.className = `mapbox-place-pin${isAirport ? " mapbox-place-pin-airport" : ""}${index === 3 ? " mapbox-pin-sagres" : index === 4 ? " mapbox-pin-cabo" : ""}`;
              element.setAttribute("aria-label", isAirport ? "Open Lagos Aerodrome in Google Maps" : place.name);
              if (isAirport) {
                const link = element as HTMLAnchorElement;
                link.href = aerodromeMapsUrl;
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                const logo = document.createElement("img");
                logo.src = `${import.meta.env.BASE_URL}images/logo-192.webp`;
                logo.width = 28;
                logo.height = 28;
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
              label.textContent = place.name.replace(" / the grottos", "");
              element.append(label);
              const marker = new mapbox.Marker({ element, anchor: "center" })
                .setLngLat([...place.position])
                .addTo(map!);
              markersRef.current.push(marker);
              });
            });

            optional("overview", () => coastOverview(map!));

            if (cancelled) return;
            mapRef.current = map;
            setStatus("ready");
            requestAnimationFrame(() => { if (!cancelled) map?.resize(); });
        });
      } catch {
        fail("module-or-initialization-error");
      }
    }

    void initialize();
    return () => {
      cancelled = true;
      if (loadTimeout) window.clearTimeout(loadTimeout);
      resizeObserver?.disconnect();
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
      map?.remove();
      mapRef.current = null;
    };
    }, [shouldLoad]);

  useEffect(() => {
    if (status !== "ready" || !mapRef.current) return;
    const map = mapRef.current;

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

    coastOverview(map);
  }, [flight.minutes, route.coordinates, reducedMotion, status]);

  useEffect(() => {
    if (status === "ready") void cockpit.play(true);
  }, [status]);

  return <div className="trial-map-shell" data-testid="map-trial-routes" data-map-status={status} data-map-failure={status === "unavailable" ? failureReason : undefined}>
    <div className="trial-map mapbox-map" aria-label="Interactive 3D satellite map of approximate trial flight routes">
      <StaticRouteImage selected={selected} onSelect={onSelect} interactive={status !== "ready"} />
      <div ref={mapElement} className={`mapbox-canvas-host ${status === "ready" ? "mapbox-visible" : ""}`} aria-hidden={status !== "ready"} inert={status !== "ready"} />
      {status === "ready" && cockpit.active && <CockpitHud routeName={`${flight.minutes} min · ${flight.route}`} progress={cockpit.progress} place={cockpit.place} />}
    </div>
    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Select trial flight duration">
        {site.trialFlights.map((item, index) => <button key={item.minutes} type="button" onClick={() => onSelect(index)} aria-pressed={selected === index} className={`route-select ${selected === index ? "selected" : ""}`} data-testid={`button-flight-${item.minutes}`}>{item.minutes} min</button>)}
      </div>
      {token && status !== "ready" && <button type="button" className="route-select route-play" disabled={status === "loading"} aria-busy={status === "loading"}
        onClick={() => { setStatus("loading"); setShouldLoad(true); }} data-testid="button-open-3d">
        {status === "loading" ? <span className="map-button-progress" aria-hidden="true" /> : <Play size={15} />} Fly this route in 3D
      </button>}
      {status === "ready" && <div className="flex flex-wrap gap-2">
        {cockpit.playback === "playing"
          ? <button type="button" className="route-select" onClick={cockpit.pause} data-testid="button-pause-flyover"><Pause size={15} /> Pause</button>
          : <button type="button" className="route-select route-play" onClick={() => void cockpit.play()} data-testid="button-play-flyover"><Play size={15} /> {cockpit.playback === "finished" ? "Fly this route again" : cockpit.playback === "paused" ? "Resume" : "Fly this route"}</button>}
        {cockpit.active && <>
          <button type="button" className="route-select" onClick={() => void cockpit.play(true)} aria-label="Restart flight from the beginning" data-testid="button-restart-flyover"><RotateCcw size={15} /> Restart</button>
          <button type="button" className="route-select" onClick={cockpit.exit} data-testid="button-exit-flyover">Exit</button>
        </>}
        <button type="button" className="route-select" onClick={() => { cockpit.reset(); setShouldLoad(false); setStatus("static"); }}>Static view</button>
      </div>}
    </div>
    {status === "unavailable" && <div role="status" className="mt-2 text-xs text-[var(--muted-foreground)]">
      <p>3D view unavailable right now</p>
      {import.meta.env.DEV && <p className="mt-1 text-[10px]">{failureReason}</p>}
    </div>}
    <div className="mt-5 flex flex-col gap-4 border-t border-[rgba(11,42,60,.16)] pt-4 sm:flex-row sm:items-center sm:justify-between">
      <div><p className="text-xs uppercase tracking-[.18em] text-[var(--ocean)]">{flight.minutes} minute route</p><p className="mt-1 text-sm text-[var(--muted-foreground)]">{flight.route}</p></div>
      <div className="flex items-center gap-4"><strong className="display-heading text-3xl text-[var(--navy)]">{formatPrice(flight.price)}</strong><Link href="/contact" className="button-ochre px-4 py-3 text-xs font-bold uppercase tracking-wider" data-testid="link-book-selected-flight">Book this flight <ArrowRight className="ml-1 inline" size={14} /></Link></div>
    </div>
    <p className="mt-3 text-[11px] text-[var(--muted-foreground)]">Routes are approximate and depend on weather</p>
    <Link href="/prices#trial" className="motion-link mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--ocean)]">View full price list <ArrowRight size={14} /></Link>
    {route.video?.src && <RouteFlightVideo key={route.video.src} video={route.video} />}
  </div>;
}
