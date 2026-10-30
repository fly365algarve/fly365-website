import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { site } from "../config/site";
import { Seo } from "../components/Seo";

const euro = (amount: number) => `€${amount.toLocaleString("en-IE")}`;

export function PricesPage() {
  const training = site.training;
  return <div className="page-shell page-enter">
    <Seo title="Trial flight and training prices" description="Explore Fly365 Algarve’s trial flight routes and current prepaid microlight training prices in Lagos, Portugal." />
    <section className="inner-hero px-5 py-16 text-center text-[var(--chalk)] md:py-24"><div className="mx-auto max-w-4xl"><span className="section-kicker !text-[var(--sandstone)]">Clear pricing</span><h1 className="mt-3 text-6xl md:text-8xl">Prices</h1><p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[rgba(247,243,236,.75)]">Choose a short flight along the coast or set aside time for serious progress.</p></div></section>
    <section id="trial" className="section-pad bg-[var(--chalk)]"><div className="mx-auto max-w-[1160px]">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><span className="section-kicker">See the Algarve from above</span><h2 className="mt-3 text-5xl text-[var(--navy)] md:text-6xl">Trial flights</h2></div><Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--ocean)]">Book a flight <ArrowRight size={15} /></Link></div>
      <div className="mt-8 grid gap-px border border-[rgba(11,42,60,.18)] bg-[rgba(11,42,60,.18)] sm:grid-cols-2 lg:grid-cols-4">{site.trialFlights.map((flight) => <div key={flight.minutes} className="bg-[#eee4d4] p-6"><span className="section-kicker">{flight.minutes} minutes</span><p className="display-heading mt-4 text-4xl text-[var(--navy)]">{euro(flight.price)}</p><p className="mt-3 min-h-10 text-sm leading-5 text-[var(--muted-foreground)]">{flight.route}</p><Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--ocean)]">Book this flight <ArrowRight size={14} /></Link></div>)}</div>
    </div></section>
    <section className="surface-ocean section-pad"><div className="mx-auto max-w-[1160px]">
      <span className="section-kicker !text-[var(--sandstone)]">Training</span><h2 className="mt-3 text-5xl md:text-6xl">Prepaid hours</h2>
      <div className="mt-8 overflow-x-auto border border-[rgba(247,243,236,.25)]"><table className="w-full min-w-[520px] text-left text-sm"><thead><tr className="border-b border-[rgba(247,243,236,.25)] text-[var(--sandstone)]"><th className="px-5 py-4 font-semibold">Prepaid flight time</th><th className="px-5 py-4 font-semibold">Rate per hour</th><th className="px-5 py-4 text-right font-semibold">Package total</th></tr></thead><tbody>{training.prepaidHours.map((tier) => <tr key={tier.hours} className="border-b border-[rgba(247,243,236,.16)] last:border-0"><td className="px-5 py-4">{tier.hours} {tier.hours === 1 ? "hour" : "hours"}</td><td className="px-5 py-4">{euro(tier.rate)} / hour</td><td className="px-5 py-4 text-right font-bold">{euro(tier.total)}</td></tr>)}</tbody></table></div>
      <div className="mt-14 grid gap-10 md:grid-cols-[.65fr_1.35fr]"><div><span className="section-kicker !text-[var(--sandstone)]">As needed</span><h3 className="mt-3 text-4xl">Additional fees</h3></div><div className="border-t border-[rgba(247,243,236,.25)]">{[
        ["Extra flight hours", `${euro(training.extraHourRate)} per hour`],
        ["General Skills Test + aircraft", euro(training.generalSkillsTest)],
        ["Ground examinations", `${euro(training.groundExam)} each`],
        ["Ground school", `${euro(training.groundSchoolHour)} per hour`],
      ].map(([label, amount]) => <div key={label} className="flex justify-between gap-4 border-b border-[rgba(247,243,236,.2)] py-4 text-sm"><span>{label}</span><strong>{amount}</strong></div>)}</div></div>
    </div></section>
    <section className="surface-sand px-5 py-12"><div className="mx-auto flex max-w-[1160px] flex-col gap-5 md:flex-row md:items-center md:justify-between"><div><h2 className="text-4xl text-[var(--navy)]">Let’s find your flight.</h2><p className="mt-2 text-sm text-[var(--muted-foreground)]">Tell us what you’re hoping to do and when.</p></div><Link href="/contact" className="button-ochre inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-wider">Enquire now <ArrowRight size={16} /></Link></div></section>
  </div>;
}
