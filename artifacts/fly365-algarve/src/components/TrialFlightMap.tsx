import { useEffect } from "react";
import { Link } from "wouter";
import { MapContainer, Marker, Polyline, TileLayer, Tooltip, useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";
import { ArrowRight } from "lucide-react";
import { site } from "../config/site";
import "leaflet/dist/leaflet.css";

const places = [
  { name: "Lagos Aerodrome", position: [37.1206, -8.6447] as [number, number] },
  { name: "Ponta da Piedade / the grottos", position: [37.0816, -8.6697] as [number, number] },
  { name: "Salema", position: [37.0647, -8.8247] as [number, number] },
  { name: "Sagres", position: [37.0086, -8.9403] as [number, number] },
  { name: "Cabo de São Vicente", position: [37.023, -8.9965] as [number, number] },
];
const paths: [number, number][][] = [
  [places[0].position, places[1].position, places[0].position],
  [places[0].position, places[1].position, places[2].position, places[0].position],
  [places[0].position, places[1].position, places[2].position, places[3].position, places[0].position],
  [places[0].position, places[1].position, places[2].position, places[3].position, places[4].position, [37.05, -9.005], places[0].position],
];

const pin = L.divIcon({
  className: "fly365-map-marker",
  html: '<span class="map-pin-dot"></span>',
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

function RouteBounds({ route }: { route: [number, number][] }) {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(route, { padding: [34, 34], maxZoom: 11, animate: true });
  }, [map, route]);
  return null;
}

function EnableWheelZoom() {
  const map = useMap();
  useMapEvents({ click: () => map.scrollWheelZoom.enable() });
  return null;
}

export function TrialFlightMap({ selected, onSelect }: { selected: number; onSelect: (index: number) => void }) {
  const flight = site.trialFlights[selected];
  return <div className="trial-map-shell" data-testid="map-trial-routes">
    <div className="trial-map">
      <MapContainer center={[37.075, -8.82]} zoom={10} scrollWheelZoom={false} touchZoom dragging className="h-full w-full" aria-label="Interactive map of approximate trial flight routes">
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>' url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
        <EnableWheelZoom />
        <RouteBounds route={paths[selected]} />
        {paths.map((path, index) => <Polyline key={index} positions={path} pathOptions={{ color: index === selected ? "#C8692F" : "#145E7A", weight: index === selected ? 5 : 3, opacity: index === selected ? 1 : 0.48, dashArray: "8 9" }} />)}
        {places.map((place) => <Marker key={place.name} position={place.position} icon={pin} title={place.name}><Tooltip permanent direction="right" offset={[8, 0]}>{place.name}</Tooltip></Marker>)}
      </MapContainer>
    </div>
    <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Select trial flight duration">
      {site.trialFlights.map((item, index) => <button key={item.minutes} type="button" onClick={() => onSelect(index)} aria-pressed={selected === index} className={`route-select ${selected === index ? "selected" : ""}`} data-testid={`button-flight-${item.minutes}`}>{item.minutes} min</button>)}
    </div>
    <div className="mt-5 flex flex-col gap-4 border-t border-[rgba(11,42,60,.16)] pt-4 sm:flex-row sm:items-center sm:justify-between">
      <div><p className="text-xs uppercase tracking-[.18em] text-[var(--ocean)]">{flight.minutes} minute route</p><p className="mt-1 text-sm text-[var(--muted-foreground)]">{flight.route}</p></div>
      <div className="flex items-center gap-4"><strong className="display-heading text-3xl text-[var(--navy)]">€{flight.price}</strong><Link href="/contact" className="button-ochre px-4 py-3 text-xs font-bold uppercase tracking-wider" data-testid="link-book-selected-flight">Book this flight</Link></div>
    </div>
    <p className="mt-3 text-[11px] text-[var(--muted-foreground)]">Routes are approximate and depend on weather</p>
    <Link href="/prices#trial" className="motion-link mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--ocean)]">View full price list <ArrowRight size={14} /></Link>
  </div>;
}
