import { Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { useState } from "react";
import { site } from "../config/site";
import { ContactForm } from "../components/ContactForm";
import { Seo } from "../components/Seo";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { PageHero } from "../components/round5/PageHero";
import { aerodromeMapsUrl } from "../lib/staticRouteMap";

const token = import.meta.env.VITE_MAPBOX_TOKEN as string | undefined;
const location = `${site.aerodrome.lng},${site.aerodrome.lat}`;
const mapSrc = token ? `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/pin-l+c8692f(${location})/${location},13.5,0/720x420@2x?access_token=${token}` : null;
const mapSrcSet = token ? [
  `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/pin-l+c8692f(${location})/${location},13.5,0/360x210?access_token=${token} 360w`,
  `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/pin-l+c8692f(${location})/${location},13.5,0/720x420?access_token=${token} 720w`,
  `${mapSrc} 1440w`,
].join(", ") : undefined;
const directions = aerodromeMapsUrl;

export function ContactPage() {
  const [mapFailed, setMapFailed] = useState(false);
  return <div className="page-shell page-enter">
    <Seo title="Contact Fly365 Algarve" description="Contact Fly365 Algarve to plan a trial flight, intensive microlight training course or conversion at Lagos Aerodrome." />
    <PageHero kicker="Talk flying" title={["Contact Us"]} sub={<p>Get in touch — we&apos;d love to hear from you</p>} image="/images/fly365-algarve-lagos-operation.png" alt="Fly365 Algarve at Lagos Aerodrome" position="center 70%" />
    <section className="section-pad bg-[var(--chalk)]"><div className="mx-auto grid max-w-[1160px] gap-12 lg:grid-cols-2">
      <div className="space-y-6">
        <div className="bg-[var(--navy)] p-6 text-[var(--chalk)] md:p-8">
          <span className="section-kicker !text-[var(--sandstone)]">Start with WhatsApp</span>
          <h2 className="mt-2 text-4xl">Message us on WhatsApp</h2>
          <p className="r5-measure mt-3 text-sm leading-6 text-[rgba(247,243,236,.75)]">Please note we operate primarily through email and WhatsApp. We aim to respond within 24 hours.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{site.contact.portugalPhones.map((phone) => <a key={phone.tel} href={phone.whatsappUrl} target="_blank" rel="noopener noreferrer" className="button-ochre inline-flex min-h-12 items-center justify-center gap-2 px-5 py-3 text-sm font-bold uppercase tracking-wider"><MessageCircle size={17} />{phone.label}</a>)}</div>
        </div>
        <div>
          <div className="flex items-start gap-4 border-t border-[rgba(11,42,60,.2)] py-5"><Phone className="mt-1 shrink-0 text-[var(--ocean)]" size={20} /><div><div className="section-kicker mb-1">Portugal Mobile · Calls and WhatsApp</div><div className="grid gap-2">{site.contact.portugalPhones.map((phone) => <a key={phone.tel} href={`tel:${phone.tel}`} className="text-sm text-[var(--ink)] hover:text-[var(--ocean)]">{phone.label}</a>)}</div></div></div>
          <div className="flex items-start gap-4 border-t border-[rgba(11,42,60,.2)] py-5"><Phone className="mt-1 shrink-0 text-[var(--ocean)]" size={20} /><div><div className="section-kicker mb-1">UK Mobile — Calls Only</div><a href={`tel:${site.contact.ukPhone.tel}`} className="text-sm text-[var(--ink)] hover:text-[var(--ocean)]">{site.contact.ukPhone.label}</a></div></div>
          <div className="flex items-start gap-4 border-y border-[rgba(11,42,60,.2)] py-5"><Mail className="mt-1 shrink-0 text-[var(--ocean)]" size={20} /><div><div className="section-kicker mb-1">Email</div><a href={`mailto:${site.contact.email}`} className="text-sm text-[var(--ink)] hover:text-[var(--ocean)]">{site.contact.email}</a></div></div>
        </div>
        <figure className="overflow-hidden border border-[rgba(11,42,60,.2)] bg-[#eee4d4]">
          {mapSrc && !mapFailed ? <ResponsiveImage src={mapSrc} srcSet={mapSrcSet} sizes="(max-width: 1024px) 100vw, 560px" width={720} height={420} onError={() => setMapFailed(true)} alt="Satellite view of Lagos Aerodrome with a pin on the airfield" className="aspect-[12/7] w-full object-cover" />
            : <div className="grid aspect-[12/7] place-items-center bg-[var(--navy)] text-[var(--sandstone)]"><MapPin size={40} aria-hidden="true" /></div>}
          <figcaption className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-start gap-3"><MapPin className="mt-0.5 shrink-0 text-[var(--ochre)]" size={19} /><p className="text-sm leading-6 text-[var(--ink)]">{site.contact.address}</p></div><a href={directions} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 border border-[var(--navy)] px-4 text-xs font-bold uppercase tracking-wider text-[var(--navy)] hover:bg-[var(--navy)] hover:text-[var(--chalk)]"><Navigation size={14} />Get directions</a></figcaption>
        </figure>
      </div>
      <div className="bg-[#eee4d4] p-5 md:p-8 lg:self-start"><h2 className="mb-6 text-3xl text-[var(--navy)]">Send a Message</h2><ContactForm /></div>
    </div></section>
  </div>;
}
