import { Link } from "wouter";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "../config/site";
import { Seo } from "../components/Seo";
import { TrialFlightMap } from "../components/TrialFlightMap";
import { PageHero } from "../components/round5/PageHero";

const euro = (amount: number) => `€${amount.toLocaleString("en-IE")}`;

export function PricesPage() {
  const training = site.training;
  const [view, setView] = useState<"trial" | "training">(() => window.location.hash === "#training" ? "training" : "trial");
  const [selected, setSelected] = useState(0);
  const bestRate = Math.min(...training.prepaidHours.map((tier) => tier.rate));
  return <div className="page-shell page-enter">
    <Seo title="Trial flight and training prices" description="Explore Fly365 Algarve’s trial flight routes and current prepaid microlight training prices in Lagos, Portugal." />
    <PageHero kicker="Clear pricing" title={["Prices"]} sub={<p>Choose a short flight along the coast or set aside time for serious progress.</p>} image="/images/fly365-algarve-lagos-operation.png" alt="Fly365 microlight flying from Lagos Aerodrome" position="center 60%" />
    <section id="trial" className="section-pad bg-[var(--chalk)]"><div className="mx-auto max-w-[1160px]">
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Price category">
        <button type="button" role="tab" aria-selected={view === "trial"} onClick={() => setView("trial")} className={`price-tab ${view === "trial" ? "active" : ""}`} data-testid="tab-trial-flights">Trial flights</button>
        <button type="button" role="tab" aria-selected={view === "training"} onClick={() => setView("training")} className={`price-tab ${view === "training" ? "active" : ""}`} data-testid="tab-training">Training</button>
      </div>
      {view === "trial" ? <>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><span className="section-kicker">See the Algarve from above</span><h2 className="mt-3 text-5xl text-[var(--navy)] md:text-6xl">Trial flights</h2></div><Link href="/contact" className="motion-link inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--ocean)]">Book a flight <ArrowRight size={15} /></Link></div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{site.trialFlights.map((flight, index) => <article key={flight.minutes} className={`price-card ${selected === index ? "price-card-selected" : ""}`} data-testid={`card-trial-${flight.minutes}`}><button type="button" onClick={() => setSelected(index)} aria-pressed={selected === index} className="block w-full text-left" data-testid={`button-select-trial-${flight.minutes}`}><span className="section-kicker">{flight.minutes} minutes</span><p className="display-heading mt-4 text-4xl text-[var(--navy)]">{euro(flight.price)}</p><p className="mt-3 min-h-10 text-sm leading-5 text-[var(--muted-foreground)]">{flight.route}</p></button><Link href="/contact" className="motion-link mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--ocean)]" data-testid={`link-book-trial-${flight.minutes}`}>Book this flight <ArrowRight size={14} /></Link></article>)}</div>
        <div className="thin-border mt-9 bg-[#f1e8db] p-4 md:p-7"><TrialFlightMap selected={selected} onSelect={setSelected} /></div>
      </> : <div id="training">
        <span className="section-kicker">Training</span><h2 className="mt-3 text-5xl text-[var(--navy)] md:text-6xl">Prepaid hours</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{training.prepaidHours.map((tier) => <article key={tier.hours} className={`price-card relative ${tier.rate === bestRate ? "best-value" : ""}`} data-testid={`card-prepaid-${tier.hours}`}>{tier.rate === bestRate && <span className="best-value-label">Best value per hour</span>}<span className="section-kicker">{tier.hours} {tier.hours === 1 ? "hour" : "hours"}</span><p className="display-heading mt-3 text-4xl text-[var(--navy)]">{euro(tier.total)}</p><p className="mt-2 text-sm text-[var(--muted-foreground)]">{euro(tier.rate)} / hour</p><Link href="/contact" className="motion-link mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--ocean)]">Enquire <ArrowRight size={14} /></Link></article>)}</div>
      <div className="mt-14 grid gap-10 md:grid-cols-[.65fr_1.35fr]"><div><span className="section-kicker">As needed</span><h3 className="mt-3 text-4xl text-[var(--navy)]">Additional fees</h3></div><div className="overflow-x-auto border border-[rgba(11,42,60,.2)]"><table className="w-full min-w-[420px] text-left text-sm"><thead><tr className="border-b border-[rgba(11,42,60,.2)] bg-[#eee4d4] text-[var(--ocean)]"><th className="px-5 py-4 font-semibold">Additional fee</th><th className="px-5 py-4 text-right font-semibold">Price</th></tr></thead><tbody>{[
        ["Extra flight hours", `${euro(training.extraHourRate)} per hour`],
        ["General Skills Test + aircraft", euro(training.generalSkillsTest)],
        ["Ground examinations", `${euro(training.groundExam)} each`],
        ["Ground school", `${euro(training.groundSchoolHour)} per hour`],
      ].map(([label, amount]) => <tr key={label} className="border-b border-[rgba(11,42,60,.14)] last:border-0"><td className="px-5 py-4">{label}</td><td className="px-5 py-4 text-right font-bold">{amount}</td></tr>)}</tbody></table></div></div>
      </div>}
    </div></section>
    <section className="surface-sand px-5 py-12"><div className="mx-auto flex max-w-[1160px] flex-col gap-5 md:flex-row md:items-center md:justify-between"><div><h2 className="text-4xl text-[var(--navy)]">Let’s find your flight.</h2><p className="mt-2 text-sm text-[var(--muted-foreground)]">Tell us what you’re hoping to do and when.</p></div><Link href="/contact" className="button-ochre inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-wider">Enquire now <ArrowRight size={16} /></Link></div></section>
  </div>;
}
