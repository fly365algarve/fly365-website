import { Link } from "wouter";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "../config/site";
import { Seo } from "../components/Seo";
import { TrialFlightMap } from "../components/TrialFlightMap";
import { PageHero } from "../components/round5/PageHero";

const euro = (amount: number) => `€${amount.toLocaleString("en-IE")}`;

export function TrialFlightsPage() {
  const [selected, setSelected] = useState(0);
  return <div className="page-shell page-enter">
    <Seo title="Trial flights" description="Microlight trial flights from Lagos aerodrome along the Algarve coast: 20, 30, 45 and 60 minute routes." />
    <PageHero kicker="See the Algarve from above" title={["Trial flights"]} sub={<p>A short flight along the coast from Lagos aerodrome.</p>} image="/images/ponta-da-piedade-coast-flight-aerial.webp" alt="Aerial view of the grottos and coastline at Ponta da Piedade, Lagos" position="center 55%" />
    <section className="section-pad bg-[var(--chalk)]"><div className="mx-auto max-w-[1160px]">
      <span className="section-kicker">Choose your route</span><h2 className="mt-3 text-5xl text-[var(--navy)] md:text-6xl">Flights and prices</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{site.trialFlights.map((flight, index) => <article key={flight.minutes} className={`price-card ${selected === index ? "price-card-selected" : ""}`} data-testid={`card-trial-${flight.minutes}`}><button type="button" onClick={() => setSelected(index)} aria-pressed={selected === index} className="block w-full text-left" data-testid={`button-select-trial-${flight.minutes}`}><span className="section-kicker">{flight.minutes} minutes</span><p className="display-heading mt-4 text-4xl text-[var(--navy)]">{euro(flight.price)}</p><p className="mt-3 min-h-10 text-sm leading-5 text-[var(--muted-foreground)]">{flight.route}</p></button><Link href={`/contact?interest=trial&flight=${flight.minutes}`} className="motion-link mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--ocean)]" data-testid={`link-book-trial-${flight.minutes}`}>Book this flight <ArrowRight size={14} /></Link></article>)}</div>
      <div className="thin-border mt-9 bg-[#f1e8db] p-4 md:p-7"><TrialFlightMap selected={selected} onSelect={setSelected} /></div>
      <div className="mt-14 grid gap-10 md:grid-cols-[.65fr_1.35fr]"><div><span className="section-kicker">Before you fly</span><h3 className="mt-3 text-4xl text-[var(--navy)]">What to expect</h3></div><ul className="space-y-4 text-base leading-7 text-[var(--muted-foreground)]">
        <li className="border-b border-[rgba(11,42,60,.14)] pb-4">You can take the controls if you wish.</li>
        <li>Flights are weather-dependent, and routes are approximate.</li>
      </ul></div>
    </div></section>
    <section className="surface-sand px-5 py-12"><div className="mx-auto flex max-w-[1160px] flex-col gap-5 md:flex-row md:items-center md:justify-between"><div><h2 className="text-4xl text-[var(--navy)]">Let’s find your flight.</h2><p className="mt-2 text-sm text-[var(--muted-foreground)]">Tell us which flight you’d like and when.</p></div><Link href="/contact?interest=trial" className="button-ochre inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-wider" data-testid="link-enquire-trial">Enquire now <ArrowRight size={16} /></Link></div></section>
  </div>;
}
