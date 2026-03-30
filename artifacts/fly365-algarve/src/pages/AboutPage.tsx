import { ContactForm } from "../components/ContactForm";
import { CheckCircle } from "lucide-react";

const ABOUT_1 = "https://fly365algarve.co.uk/gallery_gen/9bc69dc33b079fd563607ed5a717dfbc_838x464_fit.png?ts=1762817991";
const ABOUT_2 = "https://fly365algarve.co.uk/gallery_gen/492d19a6957027a0cc41d4a5986c4ce1_702x468_fit.jpg?ts=1762817991";

export function AboutPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 sky-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="accent-line mx-auto mb-6 block" />
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">About FLY365 Algarve</h1>
          <p className="text-xl text-sky-200">FLY365 Full Time Operation on Portugal's Algarve</p>
        </div>
      </section>

      {/* About images */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img src={ABOUT_1} alt="Fly365 Algarve operation" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img src={ABOUT_2} alt="Flying at Lagos Aerodrome" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8 text-slate-600 leading-relaxed text-base">

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100">
            <h2 className="text-2xl font-bold text-navy mb-4">The Operation</h2>
            <p className="mb-4">
              Lagos Aerodrome is 2km from the centre of Lagos in Portugal, has a tarmac runway and 320 flying days per year. We offer intensive training packages of up to 20 hours in two week blocks throughout the year.
            </p>
            <p className="mb-4">
              Training is available on either a Quantum 912, Deltajet BMW, Quik R (all weightshift) or the C42 3-axis.
            </p>
            <p>
              The C42 is a high wing side-by-side seat, Single Side Stick controlled monoplane. This popular aircraft has been designed with the beginner in mind, being very forgiving yet giving lively performance especially when it comes to operating from short unprepared fields. Experience has shown that students who learn on this aircraft find conversion to other more sophisticated aircraft much easier. This is due firstly to the requirement to use the rudder pedals in order to fly the aircraft more precisely, and secondly, the extremely light control forces normally only found in very advanced more aerobatic type of aircraft. This makes for a more relaxed and less strenuous flight even in very turbulent conditions. Whilst some schools use faster and more sophisticated aircraft in the training role, experience has shown that this generally slows down a student's progress and increases the training time required to reach that seemingly elusive goal of first solo or the licence!
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100">
            <h2 className="text-2xl font-bold text-navy mb-4">Our Fleet</h2>
            <p className="mb-4">
              For our flexwing training, we have a choice of P&M Quantum 912, P&M Quik R 912S and an Exodus Deltajet 500 BMW. For the 3 axis microlight training we have three C42 Ikarus aircraft and offer intensive training packages of up to 20 hours in two week blocks throughout the year, in both control types.
            </p>
            <p>
              The flexwing, weight-shift controlled microlights are like three dimensional motorcycles and all have slightly different characteristics - The Quantum 912 design from the 1980s is a highly proven machine and is extremely forgiving, with mild stall characteristics and produces good cruise speeds, combined with pleasant handling and very fast climb rates. The brand new Deltajet is a very recent introduction and has a topless wing, similar characteristics to the Quantum but is very comfortable and handles more testing weather conditions than the Quantum. The Quik R is the sportsbike of the flexwing world with the highest speeds, lightest control and best resilience to turbulent conditions due to the smaller wing and therefore higher wing loading.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100">
            <h2 className="text-2xl font-bold text-navy mb-4">Personal Service</h2>
            <p className="mb-4">
              In order to offer a personal service courses are strictly limited in numbers and, therefore, it is important to book early to avoid disappointment. Courses normally run from Monday to Friday, with beginner training taking place mainly in the mornings and the late afternoons. Lessons last approximately 1½ - 2 hours including a minimum of 1 hour's flying training (taken from engine start to engine stop). Courses can be completed in several stages but remember, if you come back, a certain amount of revision will be required before you can pick up where you left off. The longer you leave it between courses, the more revision will be required.
            </p>
            <p>
              You can complete your training from start to finish with us – we can even arrange tests or examinations by CAA Examiner. You can also start your training here, which will be 'signed off' in your logbook by our UK, CAA Approved Flying Instructors when you leave. You can then complete your training when you go home to your local school. Alternatively, courses can be structured to take into account any previous training that you have completed.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100">
            <h2 className="text-2xl font-bold text-navy mb-6">All Practical Courses Include</h2>
            <ul className="space-y-3">
              {[
                "Instruction Fees",
                "Pre & Post Flight Briefings",
                "Landing Fees",
                "Use of Aircraft and Equipment: Flying Suits, Helmets, etc all provided",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sky shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold text-navy mt-8 mb-4">Other Training Material Available to Purchase on Site</h3>
            <ul className="space-y-2 text-slate-500">
              <li>• Pilot's Logbook</li>
              <li>• NPPL (M) Practical or Theoretical Syllabus</li>
              <li>• NPPL (M) Microlight Pilots Handbook edition 8</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100">
            <h2 className="text-2xl font-bold text-navy mb-4">Physical Requirements</h2>
            <p className="mb-4">
              Potential pilots can start training at the age of 14 but those aiming to fly solo must be at least 16 years old and to hold a licence they need to be at least 17 years of age. Student pilots on our courses must be reasonably fit and in good health.
            </p>
            <p className="mb-4">
              In order to handle the aircraft safely they must be between 1.50m – 1.93m tall and weigh between 45kg – 110kg when dressed ready to fly. Furthermore although weight-shift aircraft are exhilarating and immense fun to fly they demand a higher degree of skill and physical strength compared to three axis aircraft, therefore older people (70+) and those of small stature often find they make more rapid progress on the three axis microlight.
            </p>
            <p>
              Assuming you want to go ahead and learn to fly, you can do this at your own pace - from one hour per month to a full intensive course. Good accommodation is available locally, if required. All training is completed on two-seat, dual-control aircraft, with an instructor, using radio intercom and training to the appropriate official syllabus. Training in your own aircraft, if suitable, is a possibility.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100">
            <h2 className="text-2xl font-bold text-navy mb-4">The Climate & Location</h2>
            <p>
              If you are thinking of becoming a pilot, don't be put off by the thought of winter. FLY365 Algarve is situated in the Azores high-pressure region, it affords a perfect climate for most outdoor activities. Very mild winters and tempered summers due to the cooling sea breezes have made this one of the best flying environments in the world.
            </p>
          </div>

          <div className="bg-sky-50 rounded-2xl p-8 border border-sky-200">
            <h2 className="text-2xl font-bold text-navy mb-4">What You Will Need to Get Your Licence</h2>
            <p className="text-sm font-semibold text-sky mb-4">
              NPPL Microlight (National (Issued) Private Pilots Licence for a two seat single Piston Engine aircraft with a MTOW (Max Take off Weight) of 600Kg)
            </p>
            <p className="mb-4">
              After approximately 12-18 hours training, depending on commitment and aptitude, you will be flying solo (any flying experience will shorten this rule). A good rule of thumb is that it will take around half your age in hours to reach the solo point. Before flying solo, you must be in possession of a current EASA medical certificate, Class 1, 2 or LAPL. However, a medical is not required to fly when under dual instruction. The new UK self-declaration medical certificate (without any medical professional involvement) acceptable in UK airspace is NOT valid in Portuguese Airspace.
            </p>
            <p className="mb-4">
              To obtain your full unrestricted licence you are required to fly a minimum total of 25 hours under training, of which 10 must be solo.
            </p>
            <p>
              Ground exams in Air Law, Aeroplanes Technical, Navigation, Meteorology, and Human Performance and Limitations. All exams are of the multiple choice type - exams can be taken at the Fly365 Algarve flying school. We also run a ground school in these subjects, to help those of you who have problems finding study time at home.
            </p>
            <p className="mt-4 text-sky font-semibold">
              When complete you are then free to fly anywhere in the British Isles and Europe subject to normal air rules.
            </p>
          </div>

        </div>
      </section>

      <section className="py-20 section-alt">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-3">Get in Touch</h2>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
