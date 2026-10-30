import { useState } from "react";
import { Link } from "wouter";
import { ArrowDownRight, ArrowRight, ChevronDown, MapPin, Plane, Sun, Wind } from "lucide-react";
import { site } from "../config/site";
import { Seo } from "../components/Seo";
import { ContactForm } from "../components/ContactForm";
import { TrialFlightMap } from "../components/TrialFlightMap";
import { CountUp } from "../components/Reveal";

const faqs = [
  ["Do I need a medical to take a trial flight?", "Before flying solo, you must be in possession of a current EASA medical certificate, Class 1, 2 or LAPL. However, a medical is not required to fly when under dual instruction. The new UK self-declaration medical certificate (without any medical professional involvement) acceptable in UK airspace is NOT valid in Portuguese Airspace."],
  ["How old do I need to be?", "You can start training from age 14. Solo flight requires a minimum age of 16 and a licence requires you to be at least 17."],
  ["Are there height or weight limits?", "To safely handle the aircraft, pilots should be 1.50m–1.93m tall and weigh 45–110kg dressed ready to fly."],
  ["Do I need to speak English?", "Read and speak English in order to achieve a satisfactory pass mark in the NPPL (M) Ground Examinations — a minimum amount of tutoring is required."],
  ["Can I take the exams in Lagos?", "All exams are of the multiple choice type — exams can be taken at the Fly365 Algarve flying school."],
  ["Can you help arrange accommodation?", "Good accommodation is available locally, if required."],
];

export function HomePage() {
  const [selected, setSelected] = useState(0);
  const flight = site.trialFlights[selected];
  return <div className="page-enter">
    <Seo title="Microlight flights and training in Lagos" description="Book a microlight trial flight or learn to fly with intensive training from Lagos Aerodrome on Portugal’s Algarve coast." />
    <section className="hero-photo relative flex min-h-[min(790px,100svh)] items-end overflow-hidden px-5 pb-16 pt-32 text-[var(--chalk)] md:items-center md:pb-20">
      <div className="relative mx-auto w-full max-w-[1160px]">
        <div className="mb-7 flex items-center gap-4"><img src="/images/logo.png" alt="Fly365 Algarve" className="hero-logo circular-logo" /><p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.22em] text-[var(--sandstone)]"><MapPin size={15} />Lagos · Algarve · Portugal</p></div>
        <h1 className="display-heading max-w-[800px] text-[clamp(3.7rem,10vw,8.2rem)] leading-[.83]">Learn to fly<br /><span className="text-[var(--sandstone)]">over the Algarve</span></h1>
        <p className="mt-7 max-w-[580px] text-base leading-7 text-[rgba(247,243,236,.9)] md:text-lg">Microlight trial flights and intensive training from Lagos Aerodrome, with UK CAA-approved instructors.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="button-ochre inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest">Book a trial flight <ArrowRight size={16} /></Link>
          <Link href="/training" className="button-outline-light inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest">Learn to fly <ArrowDownRight size={16} /></Link>
        </div>
        <div className="mt-16 flex items-center gap-4 text-[10px] uppercase tracking-[.2em] text-[rgba(247,243,236,.65)]"><span className="h-px w-12 bg-[var(--sandstone)]" />A different view of the coast</div>
      </div>
    </section>

    <section className="section-pad bg-[var(--chalk)]">
      <div className="mx-auto max-w-[1160px]">
        <div className="grid gap-9 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <div><span className="section-kicker">Choose your coast</span><h2 className="mt-3 text-5xl leading-[.95] text-[var(--navy)] md:text-6xl">From grottos<br />to the west</h2><p className="mt-5 max-w-md text-sm leading-6 text-[var(--muted-foreground)]">Experience the thrill of microlight flying with a one-off trial lesson over the stunning Algarve coastline. Trace the route from Lagos Aerodrome past Ponta da Piedade, onward to Salema and Sagres.</p></div>
          <div className="thin-border bg-[#f1e8db] p-4 md:p-7"><TrialFlightMap selected={selected} onSelect={setSelected} /></div>
        </div>
      </div>
    </section>

    <section className="surface-ocean section-pad">
      <div className="mx-auto max-w-[1160px]">
        <div className="max-w-xl"><span className="section-kicker !text-[var(--sandstone)]">Why Lagos</span><h2 className="mt-3 text-5xl leading-[.9] md:text-6xl">More sky.<br />More days.</h2></div>
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-9 md:grid-cols-4">
          {[
            { icon: Sun, value: <CountUp value={site.facts.flyingDays} label="flying days each year" />, label: "flying days each year" },
            { icon: Plane, value: site.facts.runway, label: "at Lagos Aerodrome" },
            { icon: MapPin, value: <><CountUp value={site.facts.townDistanceKm} label="km from Lagos town" /> km</>, label: "from Lagos town" },
            { icon: Wind, value: site.facts.winterWeather, label: "in the Azores high-pressure region" },
          ].map((fact) => <div key={fact.label} className="border-t border-[rgba(247,243,236,.25)] pt-5"><fact.icon size={20} className="text-[var(--sandstone)]" /><strong className="display-heading mt-5 block text-3xl leading-none md:text-4xl">{fact.value}</strong><span className="mt-2 block text-xs text-[rgba(247,243,236,.7)]">{fact.label}</span></div>)}
        </div>
        <div className="mt-10 grid gap-4 border-t border-[rgba(247,243,236,.25)] pt-6 text-sm leading-6 text-[rgba(247,243,236,.78)] md:grid-cols-2">
          <p>Lagos Aerodrome is {site.facts.townDistanceKm}km from the centre of Lagos in Portugal, with a {site.facts.runway.toLowerCase()} and {site.facts.flyingDays} flying days per year. We offer intensive training packages of up to {site.courses[1].hours} hours in {site.courses[1].title.toLowerCase()} blocks throughout the year.</p>
          <p>Training is available on either a Quantum 912, Deltajet BMW, Quik R (all weightshift) or the {site.fixedWing.name} 3-axis. Fly365 operates in Lagos Portugal from October through to end April.</p>
        </div>
      </div>
    </section>
    <svg className="flight-divider" viewBox="0 0 420 34" aria-hidden="true"><path d="M3 25 C68 3 120 8 173 22 S274 32 321 13 S375 7 417 18" /></svg>

    <section className="section-pad surface-sand">
      <div className="mx-auto max-w-[1160px]">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><span className="section-kicker">Make a week of it</span><h2 className="mt-3 text-5xl text-[var(--navy)] md:text-6xl">Courses with focus</h2></div><p className="max-w-sm text-sm leading-6 text-[var(--muted-foreground)]">Small weekly groups, big blocks of time in the air. A maximum of {site.facts.maxStudentsPerWeek} students each week.</p></div>
        <div className="mt-9 grid gap-7 lg:grid-cols-[.82fr_1.18fr] lg:items-stretch">
          <img src="/images/fly365-flexwing-aircraft.png" alt="Fly365 flexwing microlight above the Algarve" className="h-full min-h-[300px] w-full object-cover" />
          <div className="grid gap-3 sm:grid-cols-2">{site.courses.map((course, index) => <div key={course.title} className="price-card bg-[var(--chalk)] p-6 md:p-8"><span className="section-kicker">0{index + 1}</span><h3 className="mt-5 text-3xl text-[var(--navy)]">{course.title}</h3><p className="display-heading mt-1 text-2xl text-[var(--ocean)]">{course.hours === 20 ? <CountUp value={20} label="hours" /> : course.hours} hours</p><Link href="/training" className="motion-link mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--ocean)]">Course details <ArrowRight size={15} /></Link></div>)}</div>
        </div>
      </div>
    </section>

    <section className="section-pad bg-[var(--chalk)]">
      <div className="mx-auto max-w-[1160px]">
        <div className="mb-8">
          <span className="section-kicker">Our Fleet</span>
          <h2 className="mt-3 text-5xl text-[var(--navy)] md:text-6xl">Choose your aircraft</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted-foreground)]">Choose from fixed-wing 3-axis microlights or weightshift flexwings — all expertly maintained and ready to fly.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <Link href="/fixed-wing" className="group grid min-h-[420px] grid-rows-[1fr_auto] bg-[var(--navy)] text-[var(--chalk)]">
            <img src="/images/ikarus-c42-fly365.jpg" alt="Ikarus C42 fixed-wing microlight operated by Fly365 Algarve" className="h-full max-h-[310px] w-full object-cover" />
            <div className="flex items-end justify-between p-6"><div><span className="section-kicker !text-[var(--sandstone)]">Three-axis</span><h3 className="mt-2 text-3xl">Fixed wing · C42</h3><p className="mt-2 max-w-sm text-sm leading-6 text-[rgba(247,243,236,.72)]">{site.fixedWing.description}</p></div><ArrowRight className="shrink-0 transition-transform group-hover:translate-x-1" /></div>
          </Link>
          <Link href="/flexwing" className="group grid min-h-[420px] grid-rows-[1fr_auto] bg-[#e9dfd0] text-[var(--navy)]">
            <div className="flex h-full max-h-[310px] items-center justify-center overflow-hidden"><img src="/images/fly365-flexwing-aircraft.png" alt="Fly365 Algarve weight-shift flexwing microlight aircraft" className="h-full w-full object-contain p-5" /></div>
            <div className="flex items-end justify-between p-6"><div><span className="section-kicker">Weight-shift</span><h3 className="mt-2 text-3xl">Flexwing</h3><p className="mt-2 max-w-sm text-sm leading-6 text-[var(--muted-foreground)]">Three-dimensional motorcycles of the sky. Quantum 912, Deltajet 500 BMW, and Quik R in our flexwing fleet.</p></div><ArrowRight className="shrink-0 transition-transform group-hover:translate-x-1" /></div>
          </Link>
        </div>
      </div>
    </section>

    <section className="surface-ocean section-pad">
      <div className="mx-auto max-w-[1160px]">
        <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr]">
          <div><span className="section-kicker !text-[var(--sandstone)]">People who teach</span><h2 className="mt-3 text-5xl leading-[.9]">Good hands.<br />Clear standards.</h2><Link href="/history" className="mt-7 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--sandstone)]">The story behind Fly365 <ArrowRight size={16} /></Link></div>
          <div className="grid gap-5 sm:grid-cols-2">{site.team.map((member) => <div key={member.name} className="border-t border-[rgba(247,243,236,.25)] pt-5"><h3 className="text-3xl">{member.name}</h3><p className="mt-2 text-sm text-[rgba(247,243,236,.7)]">{member.role}</p></div>)}</div>
        </div>
      </div>
    </section>

    <section className="section-pad surface-sand">
      <div className="mx-auto max-w-[1160px]">
        <div className="grid gap-12 md:grid-cols-[.75fr_1.25fr]">
          <div><span className="section-kicker">A straightforward plan</span><h2 className="mt-3 text-5xl leading-[.9] text-[var(--navy)]">Your way<br />to the sky</h2></div>
          <ol className="divide-y divide-[rgba(11,42,60,.2)]">{["Enquire and tell us what you want to fly", "Complete your booking form", `Pay a ${site.training.bookingDepositPercent}% deposit to secure your place`, `Pay the balance ${site.training.balanceDueWeeksBefore} weeks before your course`].map((step, i) => <li key={step} className="flex gap-5 py-4"><span className="display-heading text-2xl text-[var(--ochre)]">0{i + 1}</span><span className="pt-1 text-sm font-medium">{step}</span></li>)}</ol>
        </div>
      </div>
    </section>
    <div className="aircraft-band" role="img" aria-label="View from a Fly365 microlight above the Algarve coast" />

    <section className="section-pad bg-[var(--chalk)]">
      <div className="mx-auto max-w-[880px]">
        <span className="section-kicker">A few useful answers</span><h2 className="mt-3 text-5xl text-[var(--navy)]">Before you book</h2>
        <div className="mt-8 divide-y divide-[rgba(11,42,60,.18)] border-y border-[rgba(11,42,60,.18)]">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-[var(--navy)]"><span>{question}</span><ChevronDown size={20} className="shrink-0 transition-transform group-open:rotate-180" /></summary><p className="max-w-3xl pt-4 text-sm leading-6 text-[var(--muted-foreground)]">{answer}</p></details>)}</div>
      </div>
    </section>

    <section className="surface-ocean px-5 py-12">
      <div className="mx-auto grid max-w-[1160px] gap-8 lg:grid-cols-[.85fr_1.15fr]">
        <div className="self-center">
          <span className="section-kicker !text-[var(--sandstone)]">Ready when you are</span>
          <h2 className="mt-2 text-4xl">Get in touch</h2>
          <p className="mt-2 text-sm">Ready to take to the skies? We&apos;d love to hear from you.</p>
          <p className="mt-5 text-sm">{site.contact.address}</p>
          <a href={`mailto:${site.contact.email}`} className="mt-1 inline-block text-sm underline underline-offset-4">{site.contact.email}</a>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            {site.contact.portugalPhones.map((phone) => (
              <a key={phone.tel} href={`tel:${phone.tel}`} className="text-sm underline underline-offset-4">{phone.label}</a>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={site.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="button-ochre inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest">WhatsApp Fly365 <ArrowRight size={16} /></a>
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 border border-[var(--chalk)] px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-[var(--chalk)] hover:text-[var(--navy)]">Get in touch <ArrowRight size={16} /></Link>
          </div>
        </div>
        <div className="bg-[var(--chalk)] p-5 text-[var(--ink)] md:p-8"><ContactForm /></div>
      </div>
    </section>
  </div>;
}
