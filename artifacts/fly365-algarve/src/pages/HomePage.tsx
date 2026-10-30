import { useState } from "react";
import { Link } from "wouter";
import { ArrowDownRight, ArrowRight, ChevronDown, MapPin, Plane, Sun, Wind } from "lucide-react";
import { site } from "../config/site";
import { Seo } from "../components/Seo";
import { ContactForm } from "../components/ContactForm";

const routeLines = [
  "M 90 216 C 175 172, 200 132, 285 143 C 365 153, 395 91, 492 94",
  "M 90 216 C 175 172, 200 132, 285 143 C 365 153, 395 91, 492 94 C 563 92, 596 144, 673 150",
  "M 90 216 C 175 172, 200 132, 285 143 C 365 153, 395 91, 492 94 C 563 92, 596 144, 673 150 C 738 158, 785 103, 855 86",
  "M 90 216 C 175 172, 200 132, 285 143 C 365 153, 395 91, 492 94 C 563 92, 596 144, 673 150 C 738 158, 785 103, 855 86 C 908 73, 945 92, 1000 44",
];
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
        <p className="mb-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.22em] text-[var(--sandstone)]"><MapPin size={15} />Lagos · Algarve · Portugal</p>
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
          <div className="thin-border bg-[#f1e8db] p-4 md:p-7">
            <svg className="coast-svg" viewBox="0 0 1050 270" role="img" aria-label="Illustrative route map from Lagos Aerodrome along the Algarve coast to Sagres">
              <path d="M20 238 C 160 198, 190 220, 287 176 S 430 119, 499 132 S 632 105, 686 167 S 810 126, 870 110 S 981 66, 1035 31" fill="none" stroke="#d5bea0" strokeWidth="34" strokeLinecap="round" />
              {routeLines.map((d, i) => <path key={d} d={d} className={`coast-route ${selected === i ? "active" : ""}`} />)}
              <circle className="coast-node" cx="90" cy="216" r="8" /><circle className="coast-node" cx="285" cy="143" r="7" /><circle className="coast-node" cx="673" cy="150" r="7" /><circle className="coast-node" cx="855" cy="86" r="7" />
              <text className="coast-label" x="36" y="255">Lagos Aerodrome</text><text className="coast-label" x="235" y="118">Ponta da Piedade</text><text className="coast-label" x="647" y="183">Salema</text><text className="coast-label" x="835" y="62">Sagres</text>
              <text className="coast-label" x="256" y="159" fontSize="11">the grottos</text>
            </svg>
            <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Select trial flight duration">
              {site.trialFlights.map((item, index) => <button key={item.minutes} type="button" onClick={() => setSelected(index)} aria-pressed={selected === index} className={`border px-3 py-2 text-xs font-bold uppercase tracking-wider ${selected === index ? "border-[var(--navy)] bg-[var(--navy)] text-[var(--chalk)]" : "border-[rgba(11,42,60,.25)] text-[var(--navy)] hover:bg-[rgba(11,42,60,.06)]"}`} data-testid={`button-flight-${item.minutes}`}>{item.minutes} min</button>)}
            </div>
            <div className="mt-5 flex flex-col gap-4 border-t border-[rgba(11,42,60,.16)] pt-4 sm:flex-row sm:items-center sm:justify-between">
              <div><p className="text-xs uppercase tracking-[.18em] text-[var(--ocean)]">{flight.minutes} minute route</p><p className="mt-1 text-sm text-[var(--muted-foreground)]">{flight.route}</p></div>
              <div className="flex items-center gap-4"><strong className="display-heading text-3xl text-[var(--navy)]">€{flight.price}</strong><Link href="/contact" className="button-ochre px-4 py-3 text-xs font-bold uppercase tracking-wider">Book this flight</Link></div>
            </div>
            <p className="mt-3 text-[11px] text-[var(--muted-foreground)]">Map is illustrative.</p>
            <Link href="/prices" className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--ocean)]">View full price list <ArrowRight size={14} /></Link>
          </div>
        </div>
      </div>
    </section>

    <section className="surface-ocean section-pad">
      <div className="mx-auto max-w-[1160px]">
        <div className="max-w-xl"><span className="section-kicker !text-[var(--sandstone)]">Why Lagos</span><h2 className="mt-3 text-5xl leading-[.9] md:text-6xl">More sky.<br />More days.</h2></div>
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-9 md:grid-cols-4">
          {[
            { icon: Sun, value: site.facts.flyingDays, label: "flying days each year" },
            { icon: Plane, value: site.facts.runway, label: "at Lagos Aerodrome" },
            { icon: MapPin, value: `${site.facts.townDistanceKm} km`, label: "from Lagos town" },
            { icon: Wind, value: site.facts.winterWeather, label: "for year-round flying" },
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
        <div className="mt-9 grid gap-px border border-[rgba(11,42,60,.18)] bg-[rgba(11,42,60,.18)] md:grid-cols-3">
          {site.courses.map((course, index) => <div key={course.title} className="bg-[var(--chalk)] p-6 md:p-8"><span className="section-kicker">0{index + 1}</span><h3 className="mt-5 text-3xl text-[var(--navy)]">{course.title}</h3><p className="display-heading mt-1 text-2xl text-[var(--ocean)]">{course.hours} hours</p><Link href="/training" className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--ocean)]">Course details <ArrowRight size={15} /></Link></div>)}
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
