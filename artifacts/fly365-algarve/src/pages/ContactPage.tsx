import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "../config/site";
import { ContactForm } from "../components/ContactForm";
import { Seo } from "../components/Seo";

export function ContactPage() {
  return <div className="page-shell page-enter">
    <Seo title="Contact Fly365 Algarve" description="Contact Fly365 Algarve to plan a trial flight, intensive microlight training course or conversion at Lagos Aerodrome." />
    <section className="inner-hero px-5 py-16 text-[var(--chalk)] md:py-20"><div className="mx-auto max-w-[1160px]"><span className="section-kicker !text-[var(--sandstone)]">Talk flying</span><h1 className="mt-3 text-6xl md:text-8xl">Contact Us</h1><p className="mt-5 max-w-lg text-lg leading-7 text-[rgba(247,243,236,.75)]">Get in touch — we&apos;d love to hear from you</p></div></section>
    <section className="section-pad bg-[var(--chalk)]"><div className="mx-auto grid max-w-[1160px] gap-12 lg:grid-cols-2">
      <div className="space-y-6">
        <div><h2 className="mb-5 text-3xl text-[var(--navy)]">Fly365 Algarve</h2><p className="max-w-xl text-sm leading-7 text-[var(--muted-foreground)]">Please note we operate primarily through email and WhatsApp. The best way to reach us is via email and we aim to respond within 24 hours.</p></div>
        <div className="space-y-4">
          <div className="flex items-start gap-4 border-t border-[rgba(11,42,60,.2)] py-5"><MapPin className="mt-1 shrink-0 text-[var(--ocean)]" size={20} /><div><div className="section-kicker mb-1">Address</div><p className="text-sm leading-6 text-[var(--ink)]">{site.contact.address}</p></div></div>
          <div className="flex items-start gap-4 border-t border-[rgba(11,42,60,.2)] py-5"><Phone className="mt-1 shrink-0 text-[var(--ocean)]" size={20} /><div><div className="section-kicker mb-1">Portugal Mobile · Calls and WhatsApp</div><div className="grid gap-2">{site.contact.portugalPhones.map((phone) => <div key={phone.tel} className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm"><a href={`tel:${phone.tel}`} className="text-[var(--ink)] hover:text-[var(--ocean)]">{phone.label}</a><a href={phone.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--ocean)] underline underline-offset-4">WhatsApp</a></div>)}</div></div></div>
          <div className="flex items-start gap-4 border-t border-[rgba(11,42,60,.2)] py-5"><MessageCircle className="mt-1 shrink-0 text-[var(--ocean)]" size={20} /><div><div className="section-kicker mb-1">UK Mobile — Calls Only</div><a href={`tel:${site.contact.ukPhone.tel}`} className="text-sm text-[var(--ink)] hover:text-[var(--ocean)]">{site.contact.ukPhone.label}</a></div></div>
          <div className="flex items-start gap-4 border-t border-[rgba(11,42,60,.2)] py-5"><Mail className="mt-1 shrink-0 text-[var(--ocean)]" size={20} /><div><div className="section-kicker mb-1">Email</div><a href={`mailto:${site.contact.email}`} className="text-sm text-[var(--ink)] hover:text-[var(--ocean)]">{site.contact.email}</a></div></div>
        </div>
      </div>
      <div className="bg-[#eee4d4] p-5 md:p-8"><h2 className="mb-6 text-3xl text-[var(--navy)]">Send a Message</h2><ContactForm /></div>
    </div></section>
  </div>;
}
