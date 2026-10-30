import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { site } from "../config/site";
import { ContactForm } from "../components/ContactForm";
import { Seo } from "../components/Seo";

const terms = [
  "As microlights, light aircraft require good weather conditions, flights are subject to cancellation at short notice, Fly365 will not be held responsible for the costs of travel, accommodation or any associated costs should your flight be cancelled for any reason, including aircraft non-serviceability or poor weather.",
  "All Trial flights are weather dependent and non-refundable once booked.",
  "Trial flights are available at any time of year by prior arrangement, the minimum age for a trial flight is 14 years old.",
  "You are declaring that you are medically fit and free from any illness or disability that could affect your safety or the safety of others whilst flying a microlight aircraft, are over the age of 14 years old, and within the height (1.50m – 1.93m tall = 4ft 11in & 6ft 4in) and weight (45 kg – 110kg = 7st & 17st) limits.",
  "Fly365 Algarve reserves the right to refuse any trial flight or training at any time if it is felt that the safety of both instructor and student cannot be maintained, without giving reason or refund.",
  "Fly365 reserves the right to alter prices without prior notice.",
  "The instructor must be satisfied with the weather and aircraft condition before any flight takes place.",
  "Fly365 Algarve will not be held responsible for any loss or damage to personal property brought to the airfield.",
  "Smoking is not permitted in or around the aircraft at any time.",
  "The consumption of alcohol or any substance that may impair your ability to fly safely, both before and during your flight, is strictly prohibited.",
  "Photography from the aircraft is permitted at the pilot's discretion, however Fly365 Algarve accepts no responsibility for any loss or damage to photographic or electronic equipment.",
  "By accepting these terms and conditions you agree to be bound by the laws and regulations of Portugal (where applicable) and the Civil Aviation Authority during your flight.",
  `All enquiries, complaints and cancellations must be made in writing via email to ${site.contact.email}`,
  "These terms and conditions are subject to change without prior notice.",
];

export function TermsPage() {
  return <div className="page-shell page-enter">
    <Seo title="Terms and conditions" description="Read Fly365 Algarve’s terms and conditions for microlight trial flights and training bookings." />
    <section className="inner-hero px-5 py-16 text-[var(--chalk)] md:py-20"><div className="mx-auto max-w-[1000px]"><span className="section-kicker !text-[var(--sandstone)]">Before you book</span><h1 className="mt-3 text-6xl md:text-8xl">Terms &amp; Conditions</h1><p className="mt-5 text-sm text-[rgba(247,243,236,.75)]">Please read these carefully before booking</p></div></section>
    <section className="section-pad bg-[var(--chalk)]"><div className="mx-auto max-w-[900px]"><div className="mb-8"><h2 className="text-3xl text-[var(--navy)]">Fly365 Algarve — Terms &amp; Conditions</h2></div><ol className="border-t border-[rgba(11,42,60,.2)]">{terms.map((term, i) => <li key={term} className="grid gap-4 border-b border-[rgba(11,42,60,.2)] py-5 sm:grid-cols-[50px_1fr]"><span className="display-heading text-2xl text-[var(--ochre)]">{String(i + 1).padStart(2, "0")}</span><p className="text-sm leading-6 text-[var(--ink)]">{term}</p></li>)}</ol></div></section>
    <section className="surface-sand section-pad"><div className="mx-auto max-w-2xl"><div className="mb-8"><h2 className="text-4xl text-[var(--navy)]">Questions?</h2><p className="mt-2 text-sm text-[var(--muted-foreground)]">Contact us at any time</p><Link href="/contact" className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--ocean)]">Contact Fly365 <ArrowRight size={15} /></Link></div><ContactForm /></div></section>
  </div>;
}
