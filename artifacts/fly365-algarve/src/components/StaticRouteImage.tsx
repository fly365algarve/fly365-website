import { useEffect, useState } from "react";
import { site } from "../config/site";
import { trialRoutes } from "../config/routes";
import { aerodromeMapsUrl, staticRouteMap } from "../lib/staticRouteMap";
const token = import.meta.env.VITE_MAPBOX_TOKEN;
const routeImages = trialRoutes.map(route => token ? {
  desktop: staticRouteMap(route.coordinates, "desktop", token),
  mobile: staticRouteMap(route.coordinates, "mobile", token),
} : null);

export function StaticRouteImage({ selected, onSelect, interactive }: {
  selected: number;
  onSelect: (index: number) => void;
  interactive: boolean;
}) {
  const [loaded, setLoaded] = useState<boolean[]>(() => trialRoutes.map(() => false));
  const [failed, setFailed] = useState<boolean[]>(() => trialRoutes.map(() => false));
  const [visible, setVisible] = useState<number | null>(null);
  useEffect(() => {
    if (loaded[selected]) setVisible(selected);
  }, [selected, loaded]);
  const desktop = routeImages[visible ?? selected]?.desktop;
  const mobile = routeImages[visible ?? selected]?.mobile;
  const showFallback = !token || (visible === null && failed[selected]);
  return <div className="static-route-image" aria-hidden={!interactive}>
    {routeImages.map((images, index) => images && <picture key={trialRoutes[index].minutes}
      style={{ opacity: visible === index ? 1 : 0 }} aria-hidden={visible !== index}>
      <source media="(max-width: 639px)" srcSet={images.mobile.url} width={480} height={420} />
      <img src={images.desktop.url} width={1000} height={600} loading="eager" decoding="async"
        alt={`Satellite view of the approximate ${trialRoutes[index].minutes}-minute trial flight route, with pins for Lagos Aerodrome, Ponta da Piedade, Salema, Sagres and Cabo de São Vicente`}
        onLoad={() => setLoaded(previous => previous.map((value, i) => i === index || value))}
        onError={() => setFailed(previous => previous.map((value, i) => i === index || value))} />
    </picture>)}
    {desktop && mobile && !showFallback ? <>
      <a href={aerodromeMapsUrl} target="_blank" rel="noopener noreferrer"
        className="static-airport-hotspot static-airport-desktop" style={desktop.airport}
        aria-label="Open Lagos Aerodrome in Google Maps" title="Lagos Aerodrome · Open Google Maps" tabIndex={interactive ? 0 : -1} />
      <a href={aerodromeMapsUrl} target="_blank" rel="noopener noreferrer"
        className="static-airport-hotspot static-airport-mobile" style={mobile.airport}
        aria-label="Open Lagos Aerodrome in Google Maps" title="Lagos Aerodrome · Open Google Maps" tabIndex={interactive ? 0 : -1} />
      <span className="static-map-key">A Lagos Aerodrome · P Ponta da Piedade · L Salema · S Sagres · C Cabo de São Vicente</span>
    </> : null}
    {showFallback && <div className="map-fallback">
      <div className="map-fallback-photo"><span className="map-fallback-caption">Explore the flight options below</span></div>
      <div className="map-fallback-routes">{site.trialFlights.map((flight, index) =>
        <button key={flight.minutes} type="button" className={`map-fallback-route ${selected === index ? "selected" : ""}`}
          onClick={() => onSelect(index)} aria-pressed={selected === index} tabIndex={interactive ? 0 : -1}>
          <span>{flight.minutes} min</span><strong>€{flight.price}</strong><small>{flight.route}</small>
        </button>)}</div>
    </div>}
  </div>;
}
