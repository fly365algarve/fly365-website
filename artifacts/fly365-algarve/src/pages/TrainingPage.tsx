import { ContactForm } from "../components/ContactForm";
import { CheckCircle, AlertCircle } from "lucide-react";

export function TrainingPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,15%,8%)]/85 to-[hsl(220,15%,8%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="accent-line mx-auto mb-6 block" />
          <h1 className="text-5xl font-bold text-white mb-4">Training Packages</h1>
          <p className="text-xl text-[hsl(35,20%,75%)]">Courses and Flight Training available</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8 text-[hsl(35,10%,70%)] leading-relaxed text-base">

          <div className="glass-card rounded-2xl p-8">
            <p className="mb-4">
              Fly365 operate in Lagos Portugal from October through to end April (during the British Winter). The aircraft permanently based in the Algarve are the Flexwing Quantum 912, Deltajet500, Quik R and the Ikarus C42 side by side 3 Axis aircraft.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-6">Flight Training including Exams on Fixed or Flexwing Microlight</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-gold/20">
                <h3 className="text-xl font-bold text-gold mb-2">One Week — 10 Hours</h3>
                <p className="text-sm text-[hsl(35,10%,60%)]">Practical Flight Training</p>
                <p className="mt-3 text-[hsl(35,10%,70%)]">
                  Designed for the student who wants a "Kick Start" or Hour Build.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-gold/20">
                <h3 className="text-xl font-bold text-gold mb-2">Two Week — 20 Hours</h3>
                <p className="text-sm text-[hsl(35,10%,60%)]">Practical Flight Training</p>
                <p className="mt-3 text-[hsl(35,10%,70%)]">
                  Designed for the student who wants to "Really Crack On" or "Complete their License".
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-amber-500/20">
            <div className="flex items-start gap-3 mb-4">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <h2 className="text-xl font-bold text-white">Prerequisites of all flying in Portugal</h2>
            </div>
            <ul className="space-y-2 ml-8">
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">•</span>
                MUST hold and bring with you valid EASA Aviation Class 1 or 2 Medical or LAPL Medical.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">•</span>
                Read and speak English in order to achieve a satisfactory pass mark in the NPPL (M) Ground Examinations — a minimum amount of tutoring is required.
              </li>
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Lesson Structure</h2>
            <p className="mb-4">
              Each practical flight lesson lasts around one hour and is logged from engine start to engine stop, and we would aim to complete two separate flight lessons per day. Flight lessons include preflight briefing and study material handouts as required. If you wish to have the best of the smooth air for circuit flying be prepared to be ready to fly in the early morning with arrival time as early as 7:00 especially for the flexwing.
            </p>
            <p className="mb-4">
              Theory lessons last around one hour with 'mock' exams and CAA examination.
            </p>
            <p>
              Theory classes are usually held in the early afternoon.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Conversion Training from Flexwing to 3-Axis or vice versa</h2>
            <p className="text-sm font-medium text-gold mb-4">Prerequisites: Minimum — NPPL (M) Restricted Licence</p>
            <p>
              The Conversion course is available to qualified pilots who want to convert from weight-shift to 3 axis and vice versa, or from light aircraft to microlights. Conversion from weight-shift to 3 axis is generally quicker than 3 axis to weight-shift but either conversion normally requires between 5 and 10 hours training. Providing the pilot holds a licence then differences training signed off by the instructor is all that is required to be legally entitled to fly a microlight aircraft with an alternate control systems.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">When can I come?</h2>
            <p className="mb-4">
              Start dates for training can be found below and as stated above, ideally would be in two week blocks of up 20 hours although course length can be tailored to your needs. Our aim is to provide you with all the conditions to promote learning and you achieving your goals in the shortest time possible, good weather, good aircraft and personal service. A maximum of two students per week ensures good instructor/student interaction and one to one training is maintained.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">How Long will it take me?</h2>
            <p className="mb-6">
              The "rule of Thumb" has shown itself to be true in the majority of cases for ab-initio students.
            </p>
            <ol className="space-y-4">
              {[
                "Half your age in hours will take you to the point of solo flight.",
                "You have 10 or 7 hours of solo flight tasks to do, depending on \"Full\" or \"Restricted\" license.",
                "This is followed by 4/5 hours of final polish and preparation for General Skills Test.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full gold-gradient text-[hsl(220,15%,8%)] text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6">
              Any previous flying experience will shortened the time required.
            </p>
            <p className="mt-4">
              The syllabus can only gives the minimum hours required to satisfy the training requirements and these have been set by the CAA, generally for the 18 year old who has a brain like a sponge and very good mechanical coordination. The minimum 25 hours guys or girls are only come across once or twice in an instructional career. Don't be disappointed when you calculate the hours probably needed, everyone has been there. However having said that, the intensive training environment we offer will give you the best chance to progress at the shortest time possible.
            </p>
            <p className="mt-4">
              If a full flying course from ab-initio to Licence was your aim, experience has shown that 20 hours training over two weeks followed by a break and then a second session later has worked better than 3 - 4 weeks of intensive training. Mechanical skills once learnt are not forgotten, even if the gap between training was a year, it does not take long to regain the skills that you left with!
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">How To Book</h2>
            <ul className="space-y-3">
              {[
                "Read the Booking Conditions below.",
                "Choose how many flight hours or the training Package to suit your experience, time and availability.",
                "Let us know when you would like to be in the Algarve — we will match instructor and timings to suit you as best as possible. Aiming to be ready for a course start on a Monday morning.",
                "Decide whether you would like us to arrange accommodation and what type you like, self catering apartment or 2, 3, or 4* Hotel. (There is no charge for organising accommodation)",
                "Make a provisional email, telephone booking. See contact information in the menu tab above.",
                "We will send you a booking form to complete.",
                "Sign and send the booking form by e-mail.",
                "Upon receipt of your booking confirmation we will send an invoice for either a 10% deposit (if more than 4 weeks to your arrive date, or the full amount if less than 2 weeks to your arrival date.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[hsl(35,20%,80%)] italic">
              We look forward to hearing from you....... Zeth and Colin - the Fly365 team.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Terms & Conditions for Training Bookings</h2>
            <ol className="space-y-4 list-none">
              {[
                "You are declaring that you are medically fit and free from any illness or disability that could affect my safety or the safety of others whilst flying a microlight aircraft, over the age of 14 years old), and within the height (1.50m – 1.93m tall = 4ft 11in & 6ft 4in) and weight (45 kg – 110kg = 7st & 17st) limits.",
                "I understand and accept that it is my responsibility to obtain an LAPL Medical or Class 2 Medical if I want to fly solo or obtain a licence. NO Solo flying will be possible if you do not have a Class 2 or LAPL medical physically with you. (The UK CAA Medical declaration is NOT acceptable in Portuguese Airspace.)",
                "I can read, write and understand English.",
                "I agree to pay a 10% non-refundable deposit at the time of booking and the balance of all fees to be made to Fly365 Limited at least Two (2) weeks before the start of the course. I understand and accept that deposits are not refundable & that lessons are not transferable.",
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
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-white/8 text-[hsl(35,20%,75%)] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-white/10">
                    {i + 1}
                  </span>
                  <span className="text-sm text-[hsl(35,10%,60%)]">{item}</span>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-[hsl(220,14%,10%)]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Get in Touch</h2>
            <p className="text-[hsl(35,10%,55%)]">Ready to book? Let us know your dates and we'll get you set up.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
