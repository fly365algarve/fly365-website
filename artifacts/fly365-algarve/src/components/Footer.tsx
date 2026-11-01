import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "../config/site";
import { ResponsiveImage } from "./ResponsiveImage";
import { photoCredits } from "../config/photoCredits";

export function Footer() {
  return (
    <footer className="bg-[var(--navy)] px-5 py-14 text-[var(--chalk)]">
      <div className="mx-auto grid max-w-[1160px] gap-10 md:grid-cols-[1.2fr_.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <ResponsiveImage src="/images/logo.png" sizes="64px" alt="Fly365 Algarve logo" className="h-16 w-16 object-cover circular-logo" />
            <span className="display-heading text-2xl">Fly365 Algarve</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[rgba(247,243,236,.72)]">Microlight trial flights and intensive training from Lagos Aerodrome.</p>
        </div>
        <div>
          <h2 className="section-kicker !text-[var(--sandstone)]">Explore</h2>
          <div className="mt-4 grid gap-3 text-sm text-[rgba(247,243,236,.82)]">
            <Link href="/trial-flights">Trial flights</Link><Link href="/fixed-wing">Fixed wing</Link><Link href="/flexwing">Flexwing</Link><Link href="/training">Learn to fly</Link><Link href="/prices">Prices</Link><Link href="/about">About &amp; team</Link><Link href="/history">Our history</Link><Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h2 className="section-kicker !text-[var(--sandstone)]">Find us</h2>
          <p className="mt-4 flex gap-3 text-sm leading-6 text-[rgba(247,243,236,.82)]"><MapPin size={17} className="mt-1 shrink-0" />{site.contact.address}</p>
          <a href={`mailto:${site.contact.email}`} className="mt-3 flex items-center gap-3 text-sm text-[rgba(247,243,236,.82)]"><Mail size={17} />{site.contact.email}</a>
          <div className="mt-3 grid gap-2">{site.contact.portugalPhones.map((phone) => <div key={phone.tel} className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[rgba(247,243,236,.82)]"><a href={`tel:${phone.tel}`} className="flex items-center gap-3 hover:text-[var(--sandstone)]"><Phone size={16} />{phone.label}</a><a href={phone.whatsappUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-[var(--sandstone)]">WhatsApp</a></div>)}</div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1160px] flex-col gap-4 border-t border-[rgba(247,243,236,.2)] pt-6 text-xs text-[rgba(247,243,236,.65)] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Fly365 Algarve.</p>
        <div className="flex gap-5"><Link href="/privacy">Privacy notice</Link><Link href="/terms">T&amp;Cs</Link></div>
      </div>
      <div className="mx-auto mt-4 max-w-[1160px] text-[10px] leading-5 text-[rgba(247,243,236,.55)]">
        <p>Photo credits · All content photos are licensed for commercial use. Aircraft photographs marked illustrative are not photographs of Fly365&apos;s own aircraft or team.</p>
        <ul className="mt-1 flex flex-wrap gap-x-5 gap-y-1">{photoCredits.map(credit => <li key={credit.url}>
          {credit.subject}: <a href={credit.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{credit.photographer} / {credit.source}</a>
          {"authorUrl" in credit && <> / <a href={credit.authorUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{credit.authorLabel}</a></>}
          {"license" in credit && <> · <a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{credit.license}</a> ({credit.changes})</>}
        </li>)}</ul>
      </div>
    </footer>
  );
}
