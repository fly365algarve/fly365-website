import { ContactForm } from "../components/ContactForm";

export function HistoryPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,15%,8%)]/85 to-[hsl(220,15%,8%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="accent-line mx-auto mb-6 block" />
          <h1 className="text-5xl font-bold text-white mb-4">Our History</h1>
          <p className="text-xl text-[hsl(35,20%,75%)]">The History of FLY365 Algarve</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8 text-[hsl(35,10%,70%)] leading-relaxed text-base">

          <div className="glass-card rounded-2xl p-8">
            <p className="mb-4">
              Born into a world of aviation, Malcolm Howland, the founder of Fly 365, spent his life with aircraft through his father's RAF postings in Cyprus, UK and Germany.
            </p>
            <p className="mb-4">
              He himself joined the RAF at 17, taking on many adventurous opportunities, including involvement in the early days of hang-gliding and served in the Falklands before requesting to be discharged after 11 years as Corporal with an 'exemplary' assessment of his career.
            </p>
            <p>
              Following training with Graham Slater and progression to microlight flying instructor, he taught with GS Aviation before creating Fly365 at Wickenby Airfield.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <p className="mb-4">
              With Gerry Breen retiring from the instructional side at Aerodromo de Lagos in Portugal around 2013, Malcolm saw the opportunity to extend the flyable year and started to offer courses in Portugal as well as the operation in Lincolnshire. He grew to love the Portuguese weather and lifestyle more and more and became a huge part of the continuing success and progress of Aeroclube de Lagos, offering guidance, engineering assistance and his wealth of experience to the club established in 1965.
            </p>
            <p>
              His vision was to permanently relocate to Lagos although with a little flame still flickering for Wickenby when it gets very hot and thermic in the middle part of day in July/August in Lagos, there remains an annual pilgrimage where students can experience international flights from the base in Lagos, back to Wickenby (or vice versa) and some training can still be done in the UK – if the weather is suitable.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-amber-500/20">
            <p className="mb-4 text-[hsl(35,20%,80%)]">
              Sadly, on September 30th 2025, with complications during what initially was considered minor heart surgery, he failed to recover.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <p>
              Fly365's future success was always his goal and he nurtured (until recently) the youngest BMAA flying instructor to a full FI rating following his own demanding standards in the form of Zeth Devenish, who has now amassed more than 2000 hours. Zeth continues the Fly 365 training excellence on the fixed-wing side with Ikarus C42 aircraft and Colin Gordon is the principle flexwing instructor with Quantum, QuikR and Deltajet aircraft in the fleet, having cut his instructional teeth in Perth, Scotland back in 2003.
            </p>
            <p className="mt-4 text-[hsl(35,20%,80%)] italic">
              A huge loss to both the UK and Portuguese microlighting communities but his legacy continues through the Fly 365 brand and the demanding standards he ensured were the foundation of Fly 365 training, in a location wonderfully suited to offer real progress through regular flying.
            </p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-[hsl(220,14%,10%)]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Get in Touch</h2>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
