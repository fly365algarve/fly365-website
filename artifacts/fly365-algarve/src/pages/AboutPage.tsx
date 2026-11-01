import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import { site } from "../config/site";
import { ContactForm } from "../components/ContactForm";
import { Seo } from "../components/Seo";
import { PageHero } from "../components/round5/PageHero";
import { TeamCard } from "../components/round5/Extras";

const card = "border-t border-[rgba(11,42,60,.2)] py-8";

export function AboutPage() {
  return <div className="page-shell page-enter">
    <Seo title="About and team" description="Learn about the Fly365 Algarve operation, aircraft, instructors and training at Lagos Aerodrome." />
    <PageHero kicker="Fly365 Algarve" title={["About", "& Team"]} sub={<p>FLY365 Full Time Operation on Portugal&apos;s Algarve</p>} image="/images/lagos-aerodrome-runway-aerial.webp" alt="Aerial view of the runway and hangars at Aeródromo Municipal de Lagos, Algarve" position="center 55%" />
    <section className="section-pad surface-sand"><div className="mx-auto max-w-[1160px]"><span className="section-kicker">Meet the team</span><h2 className="mt-3 text-5xl text-[var(--navy)]">Your instructors</h2><div className="mt-8 grid gap-6 md:grid-cols-2">{site.team.map((member) => <TeamCard key={member.name} member={member} />)}</div></div></section>

    <section className="section-pad bg-[var(--chalk)]">
      <div className="mx-auto max-w-[1160px] space-y-14 text-sm leading-7 text-[var(--ink)] md:space-y-20">
        <div>
          <div className="max-w-[68ch]">
            <h2 className="mb-4 text-3xl text-[var(--navy)]">The Operation</h2>
            <p className="mb-4">Lagos Aerodrome is {site.facts.townDistanceKm}km from the centre of Lagos in Portugal, has a {site.facts.runway.toLowerCase()} and {site.facts.flyingDays} flying days per year. We offer intensive training packages of up to {site.courses[1].hours} hours in {site.courses[1].title.toLowerCase()} blocks throughout the year.</p>
            <p className="mb-4">Training is available on either a P&amp;M Quantum 912 or P&amp;M Quik R (both weightshift) or the C42 3-axis.</p>
            <p>The C42 is a high wing side-by-side seat, Single Side Stick controlled monoplane. This popular aircraft has been designed with the beginner in mind, being very forgiving yet giving lively performance especially when it comes to operating from short unprepared fields. Experience has shown that students who learn on this aircraft find conversion to other more sophisticated aircraft much easier. This is due firstly to the requirement to use the rudder pedals in order to fly the aircraft more precisely, and secondly, the extremely light control forces normally only found in very advanced more aerobatic type of aircraft. This makes for a more relaxed and less strenuous flight even in very turbulent conditions. Whilst some schools use faster and more sophisticated aircraft in the training role, experience has shown that this generally slows down a student&apos;s progress and increases the training time required to reach that seemingly elusive goal of first solo or the licence!</p>
          </div>
        </div>
        <div>
          <div className="md:order-1">          <div className="max-w-[68ch]">
            <h2 className="mb-4 text-3xl text-[var(--navy)]">Our Fleet</h2>
            <p className="mb-4">For our flexwing training, we have a choice of P&amp;M Quantum 912 and P&amp;M Quik R. For the 3 axis microlight training we have {site.fixedWing.aircraftCount} {site.fixedWing.name} aircraft and offer intensive training packages of up to {site.courses[1].hours} hours in {site.courses[1].title.toLowerCase()} blocks throughout the year, in both control types.</p>
            <p>The flexwing, weight-shift controlled microlights are like three dimensional motorcycles and all have slightly different characteristics - The Quantum 912 design from the 1980s is a highly proven machine and is extremely forgiving, with mild stall characteristics and produces good cruise speeds, combined with pleasant handling and very fast climb rates. The Quik R is the sportsbike of the flexwing world with the highest speeds, lightest control and best resilience to turbulent conditions due to the smaller wing and therefore higher wing loading.</p>
          </div></div>
        </div>
      </div>
    </section>
    <section className="section-pad bg-[var(--chalk)] !pt-0">
      <div className="mx-auto grid max-w-[1160px] gap-10 lg:grid-cols-[1fr_.72fr]">
        <div className="r5-measure space-y-1 text-sm leading-7 text-[var(--ink)]">

          <article className={card}>
            <h2 className="mb-4 text-3xl text-[var(--navy)]">Personal Service</h2>
            <p className="mb-4">In order to offer a personal service courses are strictly limited in numbers to {site.facts.maxStudentsPerWeek} students per week and, therefore, it is important to book early to avoid disappointment. Courses normally run from Monday to Friday, with beginner training taking place mainly in the mornings and the late afternoons. Lessons last approximately 1½ - 2 hours including a minimum of 1 hour&apos;s flying training (taken from engine start to engine stop). Courses can be completed in several stages but remember, if you come back, a certain amount of revision will be required before you can pick up where you left off. The longer you leave it between courses, the more revision will be required.</p>
            <p>You can complete your training from start to finish with us – we can even arrange tests or examinations by CAA Examiner. You can also start your training here, which will be &apos;signed off&apos; in your logbook by our UK, CAA Approved Flying Instructors when you leave. You can then complete your training when you go home to your local school. Alternatively, courses can be structured to take into account any previous training that you have completed.</p>
          </article>

          <article className={card}>
            <h2 className="mb-6 text-3xl text-[var(--navy)]">All Practical Courses Include</h2>
            <ul className="space-y-3">{["Instruction Fees", "Pre & Post Flight Briefings", "Landing Fees", "Use of Aircraft and Equipment: Flying Suits, Helmets, etc all provided"].map((item) => <li key={item} className="flex items-start gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-[var(--ocean)]" /><span>{item}</span></li>)}</ul>
            <h3 className="mb-4 mt-8 text-2xl text-[var(--navy)]">Other Training Material Available to Purchase on Site</h3>
            <ul className="space-y-2 text-[var(--muted-foreground)]"><li>Pilot&apos;s Logbook</li><li>NPPL (M) Practical or Theoretical Syllabus</li><li>NPPL (M) Microlight Pilots Handbook edition 8</li></ul>
          </article>

          <article className={card}>
            <h2 className="mb-4 text-3xl text-[var(--navy)]">Physical Requirements</h2>
            <p className="mb-4">Potential pilots can start training at the age of 14 but those aiming to fly solo must be at least 16 years old and to hold a licence they need to be at least 17 years of age. Student pilots on our courses must be reasonably fit and in good health.</p>
            <p className="mb-4">In order to handle the aircraft safely they must be between 1.50m – 1.93m tall and weigh between 45kg – 110kg when dressed ready to fly. Furthermore although weight-shift aircraft are exhilarating and immense fun to fly they demand a higher degree of skill and physical strength compared to three axis aircraft, therefore older people (70+) and those of small stature often find they make more rapid progress on the three axis microlight.</p>
            <p>Assuming you want to go ahead and learn to fly, you can do this at your own pace - from one hour per month to a full intensive course. Good accommodation is available locally, if required. All training is completed on two-seat, dual-control aircraft, with an instructor, using radio intercom and training to the appropriate official syllabus. Training in your own aircraft, if suitable, is a possibility.</p>
          </article>

          <article className={card}>
            <h2 className="mb-4 text-3xl text-[var(--navy)]">The Climate &amp; Location</h2>
            <p>If you are thinking of becoming a pilot, don&apos;t be put off by the thought of winter. FLY365 Algarve is situated in the Azores high-pressure region, it affords a perfect climate for most outdoor activities. Very mild winters and tempered summers due to the cooling sea breezes have made this one of the best flying environments in the world.</p>
          </article>

          <article className={`${card} border-b border-[rgba(11,42,60,.2)]`}>
            <h2 className="mb-4 text-3xl text-[var(--navy)]">What You Will Need to Get Your Licence</h2>
            <p className="mb-4 text-sm font-semibold text-[var(--ocean)]">NPPL Microlight (National (Issued) Private Pilots Licence for a two seat single Piston Engine aircraft with a MTOW (Max Take off Weight) of 600Kg)</p>
            <p className="mb-4">After approximately 12-18 hours training, depending on commitment and aptitude, you will be flying solo (any flying experience will shorten this rule). A good rule of thumb is that it will take around half your age in hours to reach the solo point. Before flying solo, you must be in possession of a current EASA medical certificate, Class 1, 2 or LAPL. However, a medical is not required to fly when under dual instruction. The new UK self-declaration medical certificate (without any medical professional involvement) acceptable in UK airspace is NOT valid in Portuguese Airspace.</p>
            <p className="mb-4">To obtain your full unrestricted licence you are required to fly a minimum total of 25 hours under training, of which 10 must be solo.</p>
            <p>Ground exams in Air Law, Aeroplanes Technical, Navigation, Meteorology, and Human Performance and Limitations. All exams are of the multiple choice type - exams can be taken at the Fly365 Algarve flying school. We also run a ground school in these subjects, to help those of you who have problems finding study time at home.</p>
            <p className="mt-4 font-semibold text-[var(--ocean)]">When complete you are then free to fly anywhere in the British Isles and Europe subject to normal air rules.</p>
          </article>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div>
            <p className="r5-pull">Strictly limited to {site.facts.maxStudentsPerWeek} students per week.</p>
            <Link href="/history" className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--ocean)]">Our history <ArrowRight size={15} /></Link>
          </div>
        </aside>
      </div>
    </section>

    <section className="surface-sand section-pad">
      <div className="mx-auto max-w-[700px]"><h2 className="mb-3 text-4xl text-[var(--navy)]">Get in Touch</h2><ContactForm /></div>
    </section>
  </div>;
}
