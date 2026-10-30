import { useEffect, useState } from "react";
import { site } from "../config/site";
import { trialRoutes } from "../config/routes";
import { aerodromeMapsUrl, staticRouteMap } from "../lib/staticRouteMap";

const preloaded = new Set<string>();
const token = import.meta.env.VITE_MAPBOX_TOKEN;

export function StaticRouteImage({ selected, onSelect, interactive }: {
  selected: number;
  onSelect: (index: number) => void;
  interactive: boolean;
}) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [selected]);
  const desktop = token ? staticRouteMap(trialRoutes[selected].coordinates, "desktop", token) : null;
  const mobile = token ? staticRouteMap(trialRoutes[selected].coordinates, "mobile", token) : null;
  const preload = () => {
    const size = window.matchMedia("(max-width: 639px)").matches ? "mobile" : "desktop";
    if (preloaded.has(size)) return;
    preloaded.add(size);
    trialRoutes.forEach(route => {
      const image = new Image();
      image.src = staticRouteMap(route.coordinates, size, token).url;
    });
  };
  return <div className="static-route-image" aria-hidden={!interactive}>
    <img className="static-route-backdrop" src="/images/fly365-algarve-lagos-operation.png" width={1000} height={600} alt="" />
    {desktop && mobile && !failed ? <>
      <picture>
        <source media="(max-width: 639px)" srcSet={mobile.url} width={480} height={420} />
        <img key={selected} src={desktop.url} width={1000} height={600}
          alt={`Satellite view of the approximate ${trialRoutes[selected].minutes}-minute trial flight route, with pins for Lagos Aerodrome, Ponta da Piedade, Salema, Sagres and Cabo de São Vicente`}
          onLoad={preload} onError={() => setFailed(true)} />
      </picture>
      <a href={aerodromeMapsUrl} target="_blank" rel="noopener noreferrer"
        className="static-airport-hotspot static-airport-desktop" style={desktop.airport}
        aria-label="Open Lagos Aerodrome in Google Maps" title="Lagos Aerodrome · Open Google Maps" tabIndex={interactive ? 0 : -1} />
      <a href={aerodromeMapsUrl} target="_blank" rel="noopener noreferrer"
        className="static-airport-hotspot static-airport-mobile" style={mobile.airport}
        aria-label="Open Lagos Aerodrome in Google Maps" title="Lagos Aerodrome · Open Google Maps" tabIndex={interactive ? 0 : -1} />
      <span className="static-map-key">A Lagos Aerodrome · P Ponta da Piedade · L Salema · S Sagres · C Cabo de São Vicente</span>
    </> : <div className="map-fallback">
      <div className="map-fallback-photo"><span className="map-fallback-caption">Explore the flight options below</span></div>
      <div className="map-fallback-routes">{site.trialFlights.map((flight, index) =>
        <button key={flight.minutes} type="button" className={`map-fallback-route ${selected === index ? "selected" : ""}`}
          onClick={() => onSelect(index)} aria-pressed={selected === index} tabIndex={interactive ? 0 : -1}>
          <span>{flight.minutes} min</span><strong>€{flight.price}</strong><small>{flight.route}</small>
        </button>)}</div>
    </div>}
  </div>;
}
