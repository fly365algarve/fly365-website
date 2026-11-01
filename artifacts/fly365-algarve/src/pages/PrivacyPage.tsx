import { site } from "../config/site";
import { Seo } from "../components/Seo";
import { PageHero } from "../components/round5/PageHero";

export function PrivacyPage() {
  const sections: [string, React.ReactNode][] = [
    ["Who we are", <>This website is run by Fly365, operating as Fly365 Algarve at {site.contact.address}.</>],
    ["What we collect", <>When you send an enquiry we receive what you choose to give us: through the contact form (name, email, phone if given, what you are interested in, preferred dates and your message, handled by Netlify), and through WhatsApp, email or phone enquiries (your name, number or address and the content of your message).</>],
    ["Why we use it", <>To respond to your enquiries and to arrange and manage bookings.</>],
    ["How long we keep it", <>For information about retention of enquiry and booking records, email <a href={`mailto:${site.contact.email}`} className="underline underline-offset-4">{site.contact.email}</a>.</>],
    ["Who processes it", <>Netlify, for form submissions and website hosting. Mapbox, for map images and maps on this site. Weather information comes from MET Norway; weather data contains no personal data. WhatsApp and email providers handle messages you send us that way.</>],
    ["Your rights", <>Under UK GDPR and EU GDPR you may ask to access, correct or delete your personal data, object to or restrict its use, and, where applicable, receive it in a portable format. Where processing relies on your consent, you may withdraw it. These rights depend on the circumstances. You may also complain to a data protection authority.</>],
    ["Contact", <>For any privacy question, email <a href={`mailto:${site.contact.email}`} className="underline underline-offset-4">{site.contact.email}</a>.</>],
  ];
  return <div className="page-shell page-enter">
    <Seo title="Privacy notice" description="Privacy notice for Fly365 Algarve: enquiries, bookings and your personal information." />
    <PageHero variant="plain" kicker="Fly365" title={["Privacy", "notice"]} />
    <section className="section-pad bg-[var(--chalk)]"><div className="mx-auto max-w-[760px]">
      <div className="space-y-10">{sections.map(([title, body], i) => <section key={title} className="grid gap-3 border-t border-[rgba(11,42,60,.2)] pt-6 sm:grid-cols-[48px_1fr]"><span className="display-heading text-2xl text-[var(--ochre)]">{String(i + 1).padStart(2, "0")}</span><div><h2 className="text-3xl text-[var(--navy)]">{title}</h2><p className="r5-measure mt-3 text-sm leading-7 text-[var(--ink)]">{body}</p></div></section>)}</div>
    </div></section>
  </div>;
}
