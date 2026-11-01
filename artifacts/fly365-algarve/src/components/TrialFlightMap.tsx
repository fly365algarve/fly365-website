import { Link, useLocation } from "wouter";
import { ArrowRight } from "lucide-react";
import { site } from "../config/site";
import { trialRoutes } from "../config/routes";
import { StaticRouteImage } from "./StaticRouteImage";
import { RouteFlightVideo } from "./RouteFlightVideo";

const formatPrice = (amount: number) => `€${amount.toLocaleString("en-IE")}`;

export function TrialFlightMap({ selected, onSelect }: { selected: number; onSelect: (index: number) => void }) {
  const [location] = useLocation();
  const flight = site.trialFlights[selected];
  const route = trialRoutes[selected];

  return <div className="trial-map-shell" data-testid="map-trial-routes" data-map-status="static">
    <div className="trial-map" aria-label="Satellite map of approximate trial flight routes">
      <StaticRouteImage selected={selected} onSelect={onSelect} interactive />
    </div>
    <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Select trial flight duration">
      {site.trialFlights.map((item, index) => <button key={item.minutes} type="button" onClick={() => onSelect(index)} aria-pressed={selected === index} className={`route-select ${selected === index ? "selected" : ""}`} data-testid={`button-flight-${item.minutes}`}>{item.minutes} min</button>)}
    </div>
    <div className="mt-5 flex flex-col gap-4 border-t border-[rgba(11,42,60,.16)] pt-4 sm:flex-row sm:items-center sm:justify-between">
      <div><p className="text-xs uppercase tracking-[.18em] text-[var(--ocean)]">{flight.minutes} minute route</p><p className="mt-1 text-sm text-[var(--muted-foreground)]">{flight.route}</p></div>
      <div className="flex items-center gap-4"><strong className="display-heading text-3xl text-[var(--navy)]">{formatPrice(flight.price)}</strong><Link href={`/contact?interest=trial&flight=${flight.minutes}`} className="button-ochre px-4 py-3 text-xs font-bold uppercase tracking-wider" data-testid="link-book-selected-flight">Book this flight <ArrowRight className="ml-1 inline" size={14} /></Link></div>
    </div>
    <p className="mt-3 text-[11px] text-[var(--muted-foreground)]">Routes are approximate and depend on weather</p>
    {location !== "/trial-flights" && <Link href="/trial-flights" className="motion-link mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--ocean)]">All trial flights &amp; prices <ArrowRight size={14} /></Link>}
    {route.video?.src && <RouteFlightVideo key={route.video.src} video={route.video} />}
  </div>;
}
