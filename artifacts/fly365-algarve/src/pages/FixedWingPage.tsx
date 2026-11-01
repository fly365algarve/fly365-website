import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { site } from "../config/site";
import { Seo } from "../components/Seo";
import { PageHero } from "../components/round5/PageHero";
import { SpecCards, Comparison } from "../components/round5/Aircraft";

export function FixedWingPage() {
  const fixedWing = site.fixedWing;
  return <div className="page-shell page-enter">
    <Seo title="Fixed-wing microlight training" description="Fly365 Algarve’s Ikarus C42: a high-wing, side-by-side, two-seat, 3-axis microlight with a single centre stick." />
    <PageHero variant="split" kicker="Fixed wing · three axis" title={[fixedWing.name]} sub={<p className="text-sm">{fixedWing.description}</p>} image="/images/ikarus-c42-fly365.jpg" alt="Ikarus C42 fixed-wing microlight operated by Fly365 Algarve" />
    <section className="section-pad surface-sand"><div className="mx-auto max-w-[1160px]"><span className="section-kicker">At a glance</span><h2 className="mb-8 mt-3 text-5xl text-[var(--navy)]">Specifications</h2><SpecCards names={["Ikarus C42"]} /></div></section>
    <section className="section-pad bg-[var(--chalk)]"><div className="mx-auto grid max-w-[1160px] gap-12 md:grid-cols-[.65fr_1.35fr]">
      <div><span className="section-kicker">The aircraft</span><h2 className="mt-3 text-5xl leading-[.92] text-[var(--navy)]">A clear place<br />to begin</h2><Link href="/contact?interest=course" className="button-ochre mt-7 inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider">Ask about training <ArrowRight size={15} /></Link></div>
      <div className="border-t border-[rgba(11,42,60,.2)]">{[
        ["Layout", "High-wing, side-by-side two-seat, 3-axis microlight with a single centre stick."],
        ["For new pilots", "Designed for beginners, forgiving yet lively."],
        ["Handling", "Light control forces and rudder pedals help later conversion."],
        ["Power", fixedWing.engine],
        ["Fly365 fleet", `Fly365 operates ${fixedWing.aircraftCount} C42s.`],
      ].map(([label, value]) => <div key={label} className="grid gap-2 border-b border-[rgba(11,42,60,.2)] py-5 sm:grid-cols-[.45fr_1fr]"><span className="text-xs font-bold uppercase tracking-[.16em] text-[var(--ocean)]">{label}</span><p className="text-sm leading-6 text-[var(--ink)]">{value}</p></div>)}</div>
    </div></section>
    <Comparison />
    <section className="bg-[var(--chalk)] px-5 py-12"><div className="mx-auto flex max-w-[1160px] flex-col gap-5 md:flex-row md:items-center md:justify-between"><h2 className="text-4xl text-[var(--navy)]">Ready to learn in the C42?</h2><Link href="/contact?interest=course" className="button-ochre inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-wider">Make an enquiry <ArrowRight size={16} /></Link></div></section>
  </div>;
}
