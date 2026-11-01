import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { site } from "../config/site";
import { Price, PriceNote } from "./Price";

const euro = (amount: number) => <Price amount={amount} />;

export function TrainingPrices() {
  const training = site.training;
  const bestRate = Math.min(...training.prepaidHours.map((tier) => tier.rate));
  return <section id="training-prices" className="section-pad scroll-mt-24 bg-[var(--chalk)]"><div className="mx-auto max-w-[1160px]">
    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><span className="section-kicker">Training prices</span><h2 className="mt-3 text-5xl text-[var(--navy)] md:text-6xl">Prepaid hours</h2></div><Link href="/contact?interest=course" className="motion-link inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--ocean)]" data-testid="link-enquire-course">Enquire about a course <ArrowRight size={15} /></Link></div>
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{training.prepaidHours.map((tier) => <article key={tier.hours} className={`price-card relative ${tier.rate === bestRate ? "best-value" : ""}`} data-testid={`card-prepaid-${tier.hours}`}>{tier.rate === bestRate && <span className="best-value-label">Best value per hour</span>}<span className="section-kicker">{tier.hours} {tier.hours === 1 ? "hour" : "hours"}</span><p className="display-heading mt-3 text-4xl text-[var(--navy)]">{euro(tier.total)}</p><p className="mt-2 text-sm text-[var(--muted-foreground)]">{euro(tier.rate)} / hour</p><Link href="/contact?interest=course" className="motion-link mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--ocean)]" data-testid={`link-enquire-prepaid-${tier.hours}`}>Enquire <ArrowRight size={14} /></Link></article>)}</div>
    <div className="mt-14 grid gap-10 md:grid-cols-[.65fr_1.35fr]"><div><span className="section-kicker">As needed</span><h3 className="mt-3 text-4xl text-[var(--navy)]">Additional fees</h3></div><div className="overflow-x-auto border border-[rgba(11,42,60,.2)]"><table className="w-full min-w-[420px] text-left text-sm"><thead><tr className="border-b border-[rgba(11,42,60,.2)] bg-[#eee4d4] text-[var(--ocean)]"><th className="px-5 py-4 font-semibold">Additional fee</th><th className="px-5 py-4 text-right font-semibold">Price</th></tr></thead><tbody>{[
      ["Extra flight hours", <>{euro(training.extraHourRate)} per hour</>],
      ["General Skills Test + aircraft", euro(training.generalSkillsTest)],
      ["Ground examinations", <>{euro(training.groundExam)} each</>],
      ["Ground school", <>{euro(training.groundSchoolHour)} per hour</>],
    ].map(([label, amount]) => <tr key={String(label)} className="border-b border-[rgba(11,42,60,.14)] last:border-0"><td className="px-5 py-4">{label}</td><td className="px-5 py-4 text-right font-bold">{amount}</td></tr>)}</tbody></table></div></div>
    <PriceNote />
  </div></section>;
}
