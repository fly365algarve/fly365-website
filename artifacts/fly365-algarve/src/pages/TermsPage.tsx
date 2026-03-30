import { ContactForm } from "../components/ContactForm";

const terms = [
  "As microlights, light aircraft require good weather conditions, flights are subject to cancellation at short notice, Fly365 will not be held responsible for the costs of travel, accommodation or any associated costs should your flight be cancelled for any reason, including aircraft non-serviceability or poor weather.",
  "All Trial flights are weather dependent and non-refundable once booked.",
  "Trial flights are available at any time of year by prior arrangement, the minimum age for a trial flight is 14 years old.",
  "You are declaring that you are medically fit and free from any illness or disability that could affect your safety or the safety of others whilst flying a microlight aircraft, are over the age of 14 years old, and within the height (1.50m – 1.93m tall = 4ft 11in & 6ft 4in) and weight (45 kg – 110kg = 7st & 17st) limits.",
  "Fly365 Algarve reserves the right to refuse any trial flight or training at any time if it is felt that the safety of both instructor and student cannot be maintained, without giving reason or refund.",
  "Fly365 reserves the right to alter prices without prior notice.",
  "The instructor must be satisfied with the weather and aircraft condition before any flight takes place.",
  "Fly365 Algarve will not be held responsible for any loss or damage to personal property brought to the airfield.",
  "Smoking is not permitted in or around the aircraft at any time.",
  "The consumption of alcohol or any substance that may impair your ability to fly safely, both before and during your flight, is strictly prohibited.",
  "Photography from the aircraft is permitted at the pilot's discretion, however Fly365 Algarve accepts no responsibility for any loss or damage to photographic or electronic equipment.",
  "By accepting these terms and conditions you agree to be bound by the laws and regulations of Portugal (where applicable) and the Civil Aviation Authority during your flight.",
  "All enquiries, complaints and cancellations must be made in writing via email to info@fly365algarve.co.uk",
  "These terms and conditions are subject to change without prior notice.",
];

export function TermsPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover" style={{ backgroundImage: `url('https://fly365algarve.co.uk/gallery/bannerheardalgarve-ts1664289439.jpg?ts=1762817991')`, backgroundPosition: 'center bottom', filter: 'saturate(0) brightness(0.3) blur(6px)' }} />
        <div className="absolute inset-0 inner-hero-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="accent-line mx-auto mb-6 block" />
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Terms &amp; Conditions</h1>
          <p className="text-xl text-sky-200">Please read these carefully before booking</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100">
          <h2 className="text-xl font-bold text-navy mb-8">Fly365 Algarve — Terms &amp; Conditions</h2>
          <ol className="space-y-6">
            {terms.map((term, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-7 h-7 rounded-full bg-sky-100 text-sky text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-sky-200">
                  {i + 1}
                </span>
                <p className="text-slate-600 text-sm leading-relaxed">{term}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 section-alt">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-3">Questions?</h2>
            <p className="text-slate-500">Contact us at any time</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
