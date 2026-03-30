import { ContactForm } from "../components/ContactForm";

export function HistoryPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover" style={{ backgroundImage: `url('https://fly365algarve.co.uk/gallery_gen/9bc69dc33b079fd563607ed5a717dfbc_838x464_fit.png?ts=1762817991')`, backgroundPosition: 'center center' }} />
        <div className="absolute inset-0 inner-hero-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="accent-line mx-auto mb-6 block" />
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Our History</h1>
          <p className="text-xl text-sky-200">The story of Fly365 Algarve</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8 text-slate-600 leading-relaxed text-base">

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100">
            <h2 className="text-2xl font-bold text-navy mb-4">How it all began</h2>
            <p className="mb-4">
              It all started in the early 1990s with a flight in a Cessna 172 over Lagos in the Algarve, an experience that was to change the future course of my life.
            </p>
            <p className="mb-4">
              I immediately became hooked on flying and enrolled on a "Group A" PPL course with Eastern Airways at Gloucestershire Airport. However, upon seeing a flexwing microlight for the first time, I soon diverted to Kemble Microlight Centre (now Cotswold Airport) to train for a microlight licence. Trained by the late Frank Evans, my instructor at that time, and a true Aviation Legend, I soloed within 2 weeks of starting lessons and obtained my Microlight Pilots Licence.
            </p>
            <p className="mb-4">
              After qualifying I continued flying in Spain over the next few years, using all my holiday time to build up my experience as a pilot. By now I had many hundreds of flying hours and was flying with experienced Spanish microlight pilots, and was "Chief Pilot" for a Spanish holiday company based in Murcia where we took people for pleasure flights around the area. During this time I became familiar with various types of microlight and became very involved with organising Flying Rallys in Spain. There were some very memorable trips!
            </p>
            <p>
              One of the highlights during this period was assisting in a Round Europe trip in the Late 90s spanning some 6000 km, going through Spain, France, Switzerland, Germany, Austria and Italy. Although we experienced various problems on route, all the team members had a wonderful experience and returned home safely.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100">
            <h2 className="text-2xl font-bold text-navy mb-4">Founding the School</h2>
            <p className="mb-4">
              In 2001, following our marriage and after much deliberation, my wife and I took the big leap and emigrated to the Algarve with the intention of setting up a microlight school. Having been awarded a British Microlight Instructors Rating (BMAA Class Rating Instructor and an UK CAA Microlight flying Instructor) in Gloucestershire and meeting my key partner and chief engineer Zeth, the Algarve Microlight School, as it was then called, was born in September 2001.
            </p>
            <p className="mb-4">
              Since then we have trained and qualified many students, from complete beginners to experienced pilots. Students have come from all parts of the world including, Australia, Spain, Germany, America, France and of course Great Britain.
            </p>
            <p>
              The business has expanded since the early days to include more modern and better aircraft, and improved facilities at Lagos Aerodrome. We pride ourselves in offering a very personal service, which we believe is the key to running a successful microlight school. Our greatest satisfaction comes from seeing a student who arrived as a complete novice achieve their microlight pilots licence.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100">
            <h2 className="text-2xl font-bold text-navy mb-4">In Memory</h2>
            <div className="border-l-4 border-sky-300 pl-6 py-2">
              <p className="mb-4">
                Our beloved Director, Malcolm Howland, sadly passed away after a long illness in November 2021. Malcolm was instrumental in the founding and continued success of Fly365 Algarve, and his passion for aviation and dedication to his students inspired everyone who flew with him.
              </p>
              <p>
                The school continues in his memory, with the same values, the same passion for flying, and the same commitment to giving every student the very best chance to achieve their wings — just as Malcolm always intended.
              </p>
            </div>
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
