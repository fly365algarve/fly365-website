import { Link } from "wouter";
import { ArrowRight, Check, CircleAlert } from "lucide-react";
import { site } from "../config/site";
import { ContactForm } from "../components/ContactForm";
import { Seo } from "../components/Seo";

const booking = site.training;
const bookingTerms = [
  "You are declaring that you are medically fit and free from any illness or disability that could affect my safety or the safety of others whilst flying a microlight aircraft, over the age of 14 years old, and within the height (1.50m – 1.93m tall = 4ft 11in & 6ft 4in) and weight (45 kg – 110kg = 7st & 17st) limits.",
  "I understand and accept that it is my responsibility to obtain an LAPL Medical or Class 2 Medical if I want to fly solo or obtain a licence. NO Solo flying will be possible if you do not have a Class 2 or LAPL medical physically with you. (The UK CAA Medical declaration is NOT acceptable in Portuguese Airspace.)",
  "I can read, write and understand English.",
  `I agree to pay a ${booking.bookingDepositPercent}% non-refundable deposit at the time of booking and the balance of all fees to be made to Fly365 Limited at least ${booking.balanceDueWeeksBefore} weeks before the start of the course. I understand and accept that deposits are not refundable & that lessons are not transferable.`,
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
    <section className="inner-hero px-5 py-16 text-[var(--chalk)] md:py-24"><div className="mx-auto max-w-[1160px]"><span className="section-kicker !text-[var(--sandstone)]">Learn in Lagos</span><h1 className="mt-3 max-w-4xl text-6xl leading-[.85] md:text-8xl">Training Packages</h1><p className="mt-6 max-w-xl text-lg leading-7 text-[rgba(247,243,236,.75)]">Courses and Flight Training available</p></div></section>

    <section className="section-pad bg-[var(--chalk)]"><div className="mx-auto max-w-[1040px] space-y-10 text-sm leading-7 text-[var(--ink)]">
      <article className="border-b border-[rgba(11,42,60,.2)] pb-9"><p className="mb-4">Fly365 operate in Lagos Portugal from October through to end April (during the British Winter). The aircraft permanently based in the Algarve are the Flexwing Quantum 912, Deltajet500, Quik R and the Ikarus C42 side by side 3 Axis aircraft.</p>
        <h2 className="mb-6 text-3xl text-[var(--navy)]">Flight Training including Exams on Fixed or Flexwing Microlight</h2>
        <div className="grid gap-px border border-[rgba(11,42,60,.2)] bg-[rgba(11,42,60,.2)] md:grid-cols-2">
          {site.courses.slice(0, 2).map((course, i) => <div key={course.title} className="bg-[#eee4d4] p-6"><h3 className="text-2xl text-[var(--navy)]">{course.title} — {course.hours} Hours</h3><p className="mb-3 mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--ocean)]">Practical Flight Training</p><p>{i === 0 ? 'Designed for the student who wants a "Kick Start" or Hour Build.' : 'Designed for the student who wants to "Really Crack On" or "Complete their Licence".'}</p></div>)}
        </div>
      </article>

      <aside className="border-l-2 border-[var(--ochre)] bg-[#eee4d4] p-6">
        <div className="flex items-start gap-3"><CircleAlert className="mt-1 shrink-0 text-[var(--ochre)]" size={19} /><h2 className="text-2xl text-[var(--navy)]">Prerequisites of all flying in Portugal</h2></div>
        <ul className="mt-4 space-y-3 pl-8"><li>MUST hold and bring with you valid EASA Aviation Class 1 or 2 Medical or LAPL Medical.</li><li>Read and speak English in order to achieve a satisfactory pass mark in the NPPL (M) Ground Examinations — a minimum amount of tutoring is required.</li></ul>
      </aside>

      <article className="border-b border-[rgba(11,42,60,.2)] pb-8"><h2 className="mb-4 text-3xl text-[var(--navy)]">Lesson Structure</h2><p className="mb-4">Each practical flight lesson lasts around one hour and is logged from engine start to engine stop, and we would aim to complete two separate flight lessons per day. Flight lessons include preflight briefing and study material handouts as required. If you wish to have the best of the smooth air for circuit flying be prepared to be ready to fly in the early morning with arrival time as early as 7:00 especially for the flexwing.</p><p className="mb-4">Theory lessons last around one hour with &apos;mock&apos; exams and CAA examination.</p><p>Theory classes are usually held in the early afternoon.</p></article>

      <article className="border-b border-[rgba(11,42,60,.2)] pb-8"><h2 className="mb-4 text-3xl text-[var(--navy)]">Conversion Training from Flexwing to 3-Axis or vice versa</h2><p className="mb-4 text-sm font-semibold text-[var(--ocean)]">Prerequisites: Minimum — NPPL (M) Restricted Licence</p><p>The Conversion course is available to qualified pilots who want to convert from weight-shift to 3 axis and vice versa, or from light aircraft to microlights. Conversion from weight-shift to 3 axis is generally quicker than 3 axis to weight-shift but either conversion normally requires between {site.courses[2].hours} hours training. Providing the pilot holds a licence then differences training signed off by the instructor is all that is required to be legally entitled to fly a microlight aircraft with an alternate control systems.</p></article>

      <article className="border-b border-[rgba(11,42,60,.2)] pb-8"><h2 className="mb-4 text-3xl text-[var(--navy)]">When can I come?</h2><p>Start dates for training can be found below and as stated above, ideally would be in two week blocks of up {site.courses[1].hours} hours although course length can be tailored to your needs. Our aim is to provide you with all the conditions to promote learning and you achieving your goals in the shortest time possible, good weather, good aircraft and personal service. A maximum of {site.facts.maxStudentsPerWeek} students per week ensures good instructor/student interaction and one to one training is maintained.</p></article>

      <article className="border-b border-[rgba(11,42,60,.2)] pb-8"><h2 className="mb-4 text-3xl text-[var(--navy)]">How Long will it take me?</h2><p className="mb-6">The "rule of Thumb" has shown itself to be true in the majority of cases for ab-initio students.</p><ol className="space-y-4">{["Half your age in hours will take you to the point of solo flight.", 'You have 10 or 7 hours of solo flight tasks to do, depending on "Full" or "Restricted" licence.', "This is followed by 4/5 hours of final polish and preparation for General Skills Test."].map((item, i) => <li key={i} className="flex gap-4"><span className="display-heading text-xl text-[var(--ochre)]">0{i + 1}</span><span>{item}</span></li>)}</ol><p className="mt-6">Any previous flying experience will shorten the time required.</p><p className="mt-4">The syllabus can only gives the minimum hours required to satisfy the training requirements and these have been set by the CAA, generally for the 18 year old who has a brain like a sponge and very good mechanical coordination. The minimum 25 hours guys or girls are only come across once or twice in an instructional career. Don&apos;t be disappointed when you calculate the hours probably needed, everyone has been there. However having said that, the intensive training environment we offer will give you the best chance to progress at the shortest time possible.</p><p className="mt-4">If a full flying course from ab-initio to Licence was your aim, experience has shown that {site.courses[1].hours} hours training over two weeks followed by a break and then a second session later has worked better than 3 - 4 weeks of intensive training. Mechanical skills once learnt are not forgotten, even if the gap between training was a year, it does not take long to regain the skills that you left with!</p></article>

      <article className="border-b border-[rgba(11,42,60,.2)] pb-8"><h2 className="mb-6 text-3xl text-[var(--navy)]">How To Book</h2><ol className="space-y-4">{howToBook.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="mt-1 shrink-0 text-[var(--ocean)]" size={17} /><span>{item}</span></li>)}</ol><p className="mt-6 italic text-[var(--muted-foreground)]">We look forward to hearing from you....... Zeth and Colin - the Fly365 team.</p></article>

      <article><h2 className="mb-6 text-3xl text-[var(--navy)]">Terms &amp; Conditions for Training Bookings</h2><ol className="space-y-4">{bookingTerms.map((item, i) => <li key={i} className="grid gap-3 border-t border-[rgba(11,42,60,.16)] py-4 sm:grid-cols-[40px_1fr]"><span className="display-heading text-xl text-[var(--ochre)]">{String(i + 1).padStart(2, "0")}</span><span className="text-sm leading-6 text-[var(--muted-foreground)]">{item}</span></li>)}</ol></article>
    </div></section>

    <section className="surface-sand section-pad"><div className="mx-auto max-w-2xl"><div className="mb-8"><span className="section-kicker">Ready to book?</span><h2 className="mt-3 text-5xl text-[var(--navy)]">Let us know your dates.</h2></div><ContactForm /></div></section>
  </div>;
}
