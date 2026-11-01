import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { site } from "../config/site";
import { Seo } from "../components/Seo";
import { PageHero } from "../components/round5/PageHero";

const euro = (amount: number) => `€${amount.toLocaleString("en-IE")}`;

export function PricesPage() {
  const trialFrom = Math.min(...site.trialFlights.map((f) => f.price));
  const trainingFrom = Math.min(...site.training.prepaidHours.map((t) => t.rate));
  const items = [
    { key: "trial", kicker: "Trial flights", title: "Fly the coast", price: trialFrom, unit: "", href: "/trial-flights", cta: "See trial flights" },
    { key: "training", kicker: "Training", title: "Learn to fly", price: trainingFrom, unit: " / hour", href: "/training#training-prices", cta: "See training prices" },
  ];
  return <div className="page-shell page-enter">
    <Seo title="Trial flight and training prices" description="Fly365 Algarve trial flight and microlight training prices in Lagos, Portugal." />
    <PageHero kicker="Clear pricing" title={["Prices"]} sub={<p>Choose a short flight along the coast or set aside time for serious progress.</p>} image="/images/lagos-balanca-beach-aerial.webp" alt="Aerial view of Praia da Balança and the Lagos coastline" position="center 60%" />
    <section className="section-pad bg-[var(--chalk)]"><div className="mx-auto grid max-w-[1160px] gap-4 md:grid-cols-2">
      {items.map((item) => <article key={item.key} className="price-card" data-testid={`card-summary-${item.key}`}>
        <span className="section-kicker">{item.kicker}</span>
        <h2 className="mt-3 text-4xl text-[var(--navy)]">{item.title}</h2>
        <p className="mt-6 text-sm text-[var(--muted-foreground)]">From</p>
        <p className="display-heading text-5xl text-[var(--navy)]" data-testid={`text-from-${item.key}`}>{euro(item.price)}<span className="text-xl">{item.unit}</span></p>
        <Link href={item.href} className="motion-link mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--ocean)]" data-testid={`link-summary-${item.key}`}>{item.cta} <ArrowRight size={14} /></Link>
      </article>)}
    </div></section>
    <section className="surface-sand px-5 py-12"><div className="mx-auto flex max-w-[1160px] flex-col gap-5 md:flex-row md:items-center md:justify-between"><div><h2 className="text-4xl text-[var(--navy)]">Let’s find your flight.</h2><p className="mt-2 text-sm text-[var(--muted-foreground)]">Tell us what you’re hoping to do and when.</p></div><Link href="/contact" className="button-ochre inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-wider">Enquire now <ArrowRight size={16} /></Link></div></section>
  </div>;
}
