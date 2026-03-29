import { ContactForm } from "../components/ContactForm";

const BANNER = "https://fly365algarve.co.uk/gallery/bannerheardalgarve-ts1664289439.jpg?ts=1762817991";

export function PricesPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${BANNER}')` }} />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="accent-line mx-auto mb-6 block" />
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Prices</h1>
          <p className="text-xl text-sky-200">Fly365 Algarve Training Fees</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-10">

          <div>
            <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-4">
              <span className="accent-line" />
              Trial Lessons — Euros (No Vat)
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { duration: "20 Mins", price: "€60", desc: "Flight to Grottos and return" },
                { duration: "30 Mins", price: "€85", desc: "Grottos & coastal flight to Salema Area" },
                { duration: "45 Mins", price: "€140", desc: "Grottos, west coast & Sagres Area" },
                { duration: "60 Mins", price: "€185", desc: "Grottos, west coast & Sagres Area+" },
              ].map((item) => (
                <div key={item.duration} className="bg-white rounded-xl p-5 text-center shadow-sm border border-sky-100 hover:border-sky-300 hover:shadow-md transition-all">
                  <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">{item.duration}</div>
                  <div className="text-3xl font-bold text-sky mb-3">{item.price}</div>
                  <div className="text-xs text-slate-500 leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-4">
              <span className="accent-line" />
              Training Packages — Euros (No Vat)
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-sky-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="sky-gradient">
                    <th className="px-6 py-4 text-left font-semibold text-white">Package</th>
                    <th className="px-6 py-4 text-right font-semibold text-white">Flexwing</th>
                    <th className="px-6 py-4 text-right font-semibold text-white">Fixed Wing</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "One Week — 10 Hours Training", flex: "€1,500", fixed: "€1,700" },
                    { label: "Two Weeks — 20 Hours Training", flex: "€2,500", fixed: "€2,900" },
                    { label: "Single Lesson (1 hour)", flex: "€155", fixed: "€175" },
                    { label: "Hour Building (Pre-Solo, Solo Tasks or PPL Conversion)", flex: "€155/hr", fixed: "€175/hr" },
                    { label: "Theory Ground School (per hour)", flex: "€30", fixed: "€30" },
                    { label: "Conversion (1 control type to another) — 5 hrs", flex: "€775", fixed: "€875" },
                    { label: "Conversion (1 control type to another) — 10 hrs", flex: "€1,500", fixed: "€1,700" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-sky-50/60"}>
                      <td className="px-6 py-4 text-slate-700">{row.label}</td>
                      <td className="px-6 py-4 text-right font-semibold text-sky">{row.flex}</td>
                      <td className="px-6 py-4 text-right font-semibold text-sky">{row.fixed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-4">
              <span className="accent-line" />
              Additional Training Fees — Euros (No Vat)
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-sky-100 overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    { label: "CAA Multiple choice examinations (per subject x5)", value: "€30 per subject" },
                    { label: "CAA General Skills Test", value: "€200" },
                    { label: "Licence Issue", value: "€75" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-sky-50/60"}>
                      <td className="px-6 py-4 text-slate-700">{row.label}</td>
                      <td className="px-6 py-4 text-right font-semibold text-sky">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-sky-50 rounded-2xl p-6 border border-sky-200 text-sm text-slate-600 space-y-2">
            <p>All prices are in Euros. No VAT is applicable.</p>
            <p>Prices include: Instruction fees, pre &amp; post flight briefings, landing fees, use of aircraft and all equipment (flying suits, helmets, etc.).</p>
          </div>

        </div>
      </section>

      <section className="py-20 section-alt">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-3">Book Your Training</h2>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
