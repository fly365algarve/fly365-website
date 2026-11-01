import { useState } from "react";
import { Check, ChevronDown, CircleAlert, Coffee, Moon, Sunrise, Sunset } from "lucide-react";
import { site } from "../config/site";
import { ContactForm } from "../components/ContactForm";
import { Seo } from "../components/Seo";
import { Reveal } from "../components/Reveal";
import { PageHero } from "../components/round5/PageHero";
import { WeatherWidget } from "../components/round5/WeatherWidget";
import { Accordion } from "../components/round5/Extras";
import { TrainingPrices } from "../components/TrainingPrices";

const path = [
  ["Trial flight", "Your first taste, with an instructor beside you."],
  ["Dual training", "Lessons with your instructor, building the core skills."],
  ["First solo", "Rule of thumb: about half your age in hours."],
  ["Solo tasks", "10 hrs for a full licence, 7 hrs restricted."],
  ["Final polish", "Around 4–5 hrs of preparation."],
  ["General Skills Test", "Your practical test."],
  ["NPPL Microlight licence", "Minimum 25 hrs total, of which 10 solo, for the full licence."],
];

function LicencePath() {
  return <Reveal><section className="section-pad bg-[var(--chalk)]"><div className="mx-auto max-w-[1160px]">
    <span className="section-kicker">Step by step</span><h2 className="mt-3 text-5xl leading-[.92] text-[var(--navy)] md:text-6xl">Your path to a licence</h2>
    <ol className="r5-steps r5-steps--h mt-12">{path.map(([title, body], i) => <li key={title} className={`r5-step ${i === path.length - 1 ? "r5-step--final" : ""}`} style={{ ["--i" as string]: i }}><span className="r5-step__dot" aria-hidden="true">{i + 1}</span><h3 className="text-xl leading-tight text-[var(--navy)]">{title}</h3><p className="mt-2 text-xs leading-5 text-[var(--muted-foreground)]">{body}</p></li>)}</ol>
  </div></section></Reveal>;
}

function SoloEstimator() {
  const [age, setAge] = useState(40);
  const [ageInput, setAgeInput] = useState("40");
  const commitAge = (value: number) => {
    const next = Math.min(80, Math.max(14, Math.round(value)));
    setAge(next);
    setAgeInput(String(next));
  };
  const hours = Math.round(age / 2);
  return <section className="surface-ocean section-pad"><div className="mx-auto grid max-w-[1160px] gap-10 md:grid-cols-[.9fr_1.1fr] md:items-center">
    <div><span className="section-kicker !text-[var(--sandstone)]">Solo estimator</span><h2 className="mt-3 text-5xl leading-[.92]">How far to first solo?</h2><p className="mt-5 max-w-md text-sm leading-6 text-[rgba(247,243,236,.75)]">Based on our instructors&apos; rule of thumb. Previous flying experience shortens this; everyone is different.</p></div>
    <div className="border border-[rgba(247,243,236,.22)] p-6 md:p-8">
      <label htmlFor="solo-age-number" className="flex items-baseline justify-between text-xs font-bold uppercase tracking-[.18em] text-[var(--sandstone)]">Your age<input id="solo-age-number" type="number" min={14} max={80} step={1} value={ageInput}
        onChange={(e) => {
          const raw = e.target.value;
          setAgeInput(raw);
          const value = Number(raw);
          if (raw && Number.isInteger(value) && value >= 14 && value <= 80) setAge(value);
        }}
        onBlur={() => commitAge(ageInput.trim() && Number.isFinite(Number(ageInput)) ? Number(ageInput) : age)}
        className="w-20 border-b border-[rgba(247,243,236,.4)] bg-transparent text-right text-2xl font-bold text-[var(--chalk)] outline-none focus:border-[var(--ochre)]" aria-label="Age in years" /></label>
      <input id="solo-age" aria-label="Age in years slider" type="range" min={14} max={80} step={1} value={age} onChange={(e) => commitAge(Number(e.target.value))} className="r5-range mt-6" />
      <div className="mt-2 flex justify-between text-[10px] text-[rgba(247,243,236,.5)]"><span>14</span><span>80</span></div>
      <p className="mt-8 text-lg leading-7" aria-live="polite">Rule of thumb: around <strong className="display-heading text-5xl text-[var(--ochre)]">{hours}</strong> hours to first solo</p>
    </div>
  </div></section>;
}

const day = [
  { icon: Sunrise, time: "From 07:00", title: "Early-morning flight", body: "As early as 07:00 for the smoothest air, especially on the flexwing." },
  { icon: Coffee, time: "Early afternoon", title: "Theory class", body: "Theory classes are usually held in the early afternoon." },
  { icon: Sunset, time: "Late afternoon", title: "Flying again", body: "A second flight lesson as the day cools." },
];

function TypicalDay() {
  return <Reveal><section className="section-pad surface-sand"><div className="mx-auto max-w-[1160px]">
    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><span className="section-kicker">On course</span><h2 className="mt-3 text-5xl text-[var(--navy)]">A typical day</h2></div><p className="r5-measure max-w-sm text-sm leading-6 text-[var(--muted-foreground)]">Lessons are around one hour, logged engine start to engine stop. We aim for two flight lessons per day.</p></div>
    <ol className="r5-day mt-9">{day.map((d) => <li key={d.title} className="bg-[var(--chalk)] p-6"><d.icon size={24} className="text-[var(--ochre)]" aria-hidden="true" /><p className="mt-5 text-xs font-bold uppercase tracking-[.18em] text-[var(--ocean)]">{d.time}</p><h3 className="mt-1 text-3xl text-[var(--navy)]">{d.title}</h3><p className="mt-2 text-sm leading-6 text-[var(--ink)]">{d.body}</p></li>)}</ol>
    <p className="mt-4 flex items-center gap-2 text-xs text-[var(--muted-foreground)]"><Moon size={13} aria-hidden="true" />Evenings are your own.</p>
  </div></section></Reveal>;
}

const booking = site.training;
const bookingTerms = [
  "You are declaring that you are medically fit and free from any illness or disability that could affect my safety or the safety of others whilst flying a microlight aircraft, over the age of 14 years old, and within the height (1.50m – 1.93m tall = 4ft 11in & 6ft 4in) and weight (45 kg – 110kg = 7st & 17st) limits.",
  "I understand and accept that it is my responsibility to obtain an LAPL Medical or Class 2 Medical if I want to fly solo or obtain a licence. NO Solo flying will be possible if you do not have a Class 2 or LAPL medical physically with you. (The UK CAA Medical declaration is NOT acceptable in Portuguese Airspace.)",
  "I can read, write and understand English.",
  `I agree to pay a ${booking.bookingDepositPercent}% non-refundable deposit at the time of booking and the balance of all fees to be made to Fly365 at least ${booking.balanceDueWeeksBefore} weeks before the start of the course. I understand and accept that deposits are not refundable & that lessons are not transferable.`,
  "I understand and accept that cancellations must be in writing. I understand and accept that in the event of a cancellation, 75% of the total course fee will be refunded.",
  "I understand and accept that non-payment of the balance prior to the start of the course will be deemed a course cancellation.",
  "I understand and accept that if any lessons are unable to be completed due to circumstances beyond the control of the school during my course attendance then I will accept as recompense a 90% refund of outstanding lessons (not accommodation) fees.",
  "I will arrive at the course enrolment time. I understand and accept that late, intoxicated arrival or non-arrival may result in the forfeit of the scheduled lessons. You are considered late if you have not arrived within 15 minutes of your reservation start time. After this 15 minute period, your reservation may be cancelled and the aircraft dispatched to another customer wishing to rent the aircraft. You may still be able to fly but airtime may be cut short so not to impact following customers, but as your aircraft and pilot was ready you will be charged at the full flight time cost.",
  "I will ensure that any prerequisite documentation will be made available at the time of course enrolment.",
  "I understand and accept that my eventual level of competence is mainly dependent on my learning ability and no guarantee is implied that I will attain a particular level of flying skill upon completion of any of the courses. I agree to operate the equipment and act under the instructions given to me during the course by the instructor(s).",
  "I accept that if a lesson is scheduled and is unable to go ahead due to drug or alcohol impairment, the lesson will be charged.",
  "I agree to abide by the Club Rules & both UK and Portuguese Civil Aviation Regulations and I will conduct myself in a responsible and safety conscious manner at all times during the course.",
  "I understand that whilst every conceivable effort is made by Fly365 to reduce all risks to an acceptable level, the flying of microlight aircraft can be a dangerous activity even when practised by experienced pilots in perfect weather conditions.",
  "I understand and accept that failure to comply with the terms and conditions may be grounds for termination of a course without refund.",
  "I understand any unused hours not covered in these T's & C's can be held in credit for subsequent visit to the Algarve or refunded at the appropriate hour rate used. Example: if 20 hours purchased but only 9 hours used, the 9 hours would be charged at the 10 hours prepurchase rate and remaining balance refunded.",
];

const howToBook = [
  "Read the Booking Conditions below.",
  "Choose how many flight hours or the training Package to suit your experience, time and availability.",
  "Let us know when you would like to be in the Algarve — we will match instructor and timings to suit you as best as possible. Aiming to be ready for a course start on a Monday morning.",
  "Decide whether you would like us to arrange accommodation and what type you like, self catering apartment or 2, 3, or 4* Hotel. (There is no charge for organising accommodation)",
  "Make a provisional email, telephone booking. See contact information in the menu tab above.",
  "We will send you a booking form to complete.",
  "Sign and send the booking form by e-mail.",
  `Upon receipt of your booking confirmation we will send an invoice for a ${booking.bookingDepositPercent}% deposit. The balance is due ${booking.balanceDueWeeksBefore} weeks before your arrival date.`,
];

export function TrainingPage() {
  return <div className="page-shell page-enter">
    <Seo title="Microlight training courses" description="Plan an intensive fixed-wing or flexwing training course, conversion or hour-building visit with Fly365 Algarve in Lagos." />
    <PageHero kicker="Learn in Lagos" title={["Training", "Packages"]} sub={<p>Courses and Flight Training available</p>} image="/images/ikarus-c42-microlight-in-flight.webp" alt="Ikarus C42 microlight in flight — illustrative aircraft photograph" position="center 48%" />
    <LicencePath />
    <SoloEstimator />
    <TypicalDay />
    <TrainingPrices />

    <section className="section-pad bg-[var(--chalk)]"><div className="mx-auto max-w-[900px] space-y-10 text-sm leading-7 text-[var(--ink)]">
      <article className="border-b border-[rgba(11,42,60,.2)] pb-9"><p className="r5-measure mb-4">Fly365 operate in Lagos Portugal from October through to end April (during the British Winter). The aircraft permanently based in the Algarve are the Flexwing Quantum 912, Deltajet500, Quik R and the Ikarus C42 side by side 3 Axis aircraft.</p>
        <h2 className="mb-6 text-3xl text-[var(--navy)]">Flight Training including Exams on Fixed or Flexwing Microlight</h2>
        <div className="grid gap-px border border-[rgba(11,42,60,.2)] bg-[rgba(11,42,60,.2)] md:grid-cols-2">
          {site.courses.slice(0, 2).map((course, i) => <div key={course.title} className="bg-[#eee4d4] p-6"><h3 className="text-2xl text-[var(--navy)]">{course.title} — {course.hours} Hours</h3><p className="mb-3 mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--ocean)]">Practical Flight Training</p><p>{i === 0 ? 'Designed for the student who wants a "Kick Start" or Hour Build.' : 'Designed for the student who wants to "Really Crack On" or "Complete their Licence".'}</p></div>)}
        </div>
      </article>

      <WeatherWidget tone="light" />
      <p className="r5-pull">A maximum of {site.facts.maxStudentsPerWeek} students per week.</p>
      <aside className="border-l-2 border-[var(--ochre)] bg-[#eee4d4] p-6">
        <div className="flex items-start gap-3"><CircleAlert className="mt-1 shrink-0 text-[var(--ochre)]" size={19} /><h2 className="text-2xl text-[var(--navy)]">Prerequisites of all flying in Portugal</h2></div>
        <ul className="mt-4 space-y-3 pl-8"><li>MUST hold and bring with you valid EASA Aviation Class 1 or 2 Medical or LAPL Medical.</li><li>Read and speak English in order to achieve a satisfactory pass mark in the NPPL (M) Ground Examinations — a minimum amount of tutoring is required.</li></ul>
      </aside>

      <article className="border-b border-[rgba(11,42,60,.2)] pb-8"><h2 className="mb-4 text-3xl text-[var(--navy)]">Lesson Structure</h2><p className="mb-4">Each practical flight lesson lasts around one hour and is logged from engine start to engine stop, and we would aim to complete two separate flight lessons per day. Flight lessons include preflight briefing and study material handouts as required. If you wish to have the best of the smooth air for circuit flying be prepared to be ready to fly in the early morning with arrival time as early as 7:00 especially for the flexwing.</p><p className="mb-4">Theory lessons last around one hour with &apos;mock&apos; exams and CAA examination.</p><p>Theory classes are usually held in the early afternoon.</p></article>

      <article className="border-b border-[rgba(11,42,60,.2)] pb-8"><h2 className="mb-4 text-3xl text-[var(--navy)]">Conversion Training from Flexwing to 3-Axis or vice versa</h2><p className="mb-4 text-sm font-semibold text-[var(--ocean)]">Prerequisites: Minimum — NPPL (M) Restricted Licence</p><p>The Conversion course is available to qualified pilots who want to convert from weight-shift to 3 axis and vice versa, or from light aircraft to microlights. Conversion from weight-shift to 3 axis is generally quicker than 3 axis to weight-shift but either conversion normally requires between {site.courses[2].hours} hours training. Providing the pilot holds a licence then differences training signed off by the instructor is all that is required to be legally entitled to fly a microlight aircraft with an alternate control systems.</p></article>

      <article className="border-b border-[rgba(11,42,60,.2)] pb-8"><h2 className="mb-4 text-3xl text-[var(--navy)]">When can I come?</h2><p>Start dates for training can be found below and as stated above, ideally would be in two week blocks of up {site.courses[1].hours} hours although course length can be tailored to your needs. Our aim is to provide you with all the conditions to promote learning and you achieving your goals in the shortest time possible, good weather, good aircraft and personal service. A maximum of {site.facts.maxStudentsPerWeek} students per week ensures good instructor/student interaction and one to one training is maintained.</p></article>

      <article className="border-b border-[rgba(11,42,60,.2)] pb-8"><h2 className="mb-4 text-3xl text-[var(--navy)]">How Long will it take me?</h2><p className="mb-6">The "rule of Thumb" has shown itself to be true in the majority of cases for ab-initio students.</p><ol className="space-y-4">{["Half your age in hours will take you to the point of solo flight.", 'You have 10 or 7 hours of solo flight tasks to do, depending on "Full" or "Restricted" licence.', "This is followed by 4/5 hours of final polish and preparation for General Skills Test."].map((item, i) => <li key={i} className="flex gap-4"><span className="display-heading text-xl text-[var(--ochre)]">0{i + 1}</span><span>{item}</span></li>)}</ol><p className="mt-6">Any previous flying experience will shorten the time required.</p><p className="mt-4">The syllabus can only gives the minimum hours required to satisfy the training requirements and these have been set by the CAA, generally for the 18 year old who has a brain like a sponge and very good mechanical coordination. The minimum 25 hours guys or girls are only come across once or twice in an instructional career. Don&apos;t be disappointed when you calculate the hours probably needed, everyone has been there. However having said that, the intensive training environment we offer will give you the best chance to progress at the shortest time possible.</p><p className="mt-4">If a full flying course from ab-initio to Licence was your aim, experience has shown that {site.courses[1].hours} hours training over two weeks followed by a break and then a second session later has worked better than 3 - 4 weeks of intensive training. Mechanical skills once learnt are not forgotten, even if the gap between training was a year, it does not take long to regain the skills that you left with!</p></article>

      <article className="border-b border-[rgba(11,42,60,.2)] pb-8"><h2 className="mb-6 text-3xl text-[var(--navy)]">How To Book</h2><div className="divide-y divide-[rgba(11,42,60,.18)] border-y border-[rgba(11,42,60,.18)]">{howToBook.map((item, i) => <details key={i} className="r5-acc group py-4"><summary className="flex cursor-pointer list-none items-start gap-4"><span className="display-heading w-8 shrink-0 text-lg text-[var(--ochre)]">{String(i + 1).padStart(2, "0")}</span><span className="flex-1 text-sm font-semibold leading-6 text-[var(--navy)]">Step {i + 1}</span><ChevronDown size={18} className="mt-1 shrink-0 text-[var(--ocean)] transition-transform group-open:rotate-180" aria-hidden="true" /></summary><p className="r5-measure flex items-start gap-3 pb-2 pl-12 pt-3"><Check className="mt-1 shrink-0 text-[var(--ocean)]" size={17} aria-hidden="true" /><span>{item}</span></p></details>)}</div><p className="mt-6 italic text-[var(--muted-foreground)]">We look forward to hearing from you....... Zeth and Colin - the Fly365 team.</p></article>

      <article><h2 className="mb-6 text-3xl text-[var(--navy)]">Terms &amp; Conditions for Training Bookings</h2><p className="mb-5 text-sm text-[var(--muted-foreground)]">Tap a condition to read it in full.</p><Accordion items={bookingTerms.map((item) => ({ title: item.length > 92 ? `${item.slice(0, item.lastIndexOf(" ", 88))}…` : item, body: item }))} /></article>
    </div></section>

    <section className="surface-sand section-pad"><div className="mx-auto max-w-2xl"><div className="mb-8"><span className="section-kicker">Ready to book?</span><h2 className="mt-3 text-5xl text-[var(--navy)]">Let us know your dates.</h2></div><ContactForm /></div></section>
  </div>;
}
