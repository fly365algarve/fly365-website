import { ContactForm } from "../components/ContactForm";

export function PricesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1483193722442-5422d99849bc?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,15%,8%)]/85 to-[hsl(220,15%,8%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="accent-line mx-auto mb-6 block" />
          <h1 className="text-5xl font-bold text-white mb-4">Prices</h1>
          <p className="text-xl text-[hsl(35,20%,75%)]">Transparent pricing for all courses and experiences</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">

          {/* Trial Lessons */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Trial Lesson</h2>
            <p className="text-[hsl(35,10%,55%)] mb-6">A One off Have a Go at the controls or just enjoy the view. Either aircraft C42 or the Flexwing subject to weather conditions.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  duration: "20 Mins",
                  price: "€60",
                  route: "Flight to Grottos and return",
                },
                {
                  duration: "30 Mins",
                  price: "€85",
                  route: "Flight to the Grottos and coastal flight to Salema Area",
                },
                {
                  duration: "45 Mins",
                  price: "€140",
                  route: "Flight to the Grottos and the west coast and Sargres Area",
                },
                {
                  duration: "60 Mins",
                  price: "€185",
                  route: "Flight to the Grottos and the west coast and Sargres Area+",
                },
              ].map((item) => (
                <div key={item.duration} className="glass-card rounded-xl p-6 text-center hover:border-gold/30 transition-all">
                  <div className="text-xs text-[hsl(35,10%,50%)] uppercase tracking-widest mb-3">{item.duration}</div>
                  <div className="text-4xl font-bold text-gold mb-3">{item.price}</div>
                  <div className="text-xs text-[hsl(35,10%,55%)] leading-relaxed">{item.route}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Training Rates */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Training Rates towards NPPL(M)</h2>
            <p className="text-[hsl(35,10%,55%)] mb-6">Flight Time is measured Engine Hour Meter</p>
            <div className="glass-card rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gold uppercase tracking-widest">Package</th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-gold uppercase tracking-widest">Per Hour (GBP)</th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-gold uppercase tracking-widest">Per Hour (EUR)</th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-gold uppercase tracking-widest">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { package: "1 Hour Flight Training", gbp: "£145/Hr", eur: "€175/Hr", total: "" },
                    { package: "5 Hours Pre-Paid", gbp: "£140/Hr", eur: "€170/Hr", total: "£700 / €840" },
                    { package: "10 Hours Pre-Paid", gbp: "£135/Hr", eur: "€160/Hr", total: "£1,350 / €1,600" },
                    { package: "20 Hours Pre-Paid", gbp: "£125/Hr", eur: "€150/Hr", total: "£2,500 / €3,000" },
                    { package: "Extra Hours over booked amount", gbp: "£145/Hr", eur: "€175/Hr", total: "" },
                  ].map((row) => (
                    <tr key={row.package} className="hover:bg-white/3 transition-colors">
                      <td className="px-6 py-4 text-sm text-[hsl(35,20%,80%)]">{row.package}</td>
                      <td className="px-6 py-4 text-sm text-right text-[hsl(35,10%,65%)]">{row.gbp}</td>
                      <td className="px-6 py-4 text-sm text-right text-[hsl(35,10%,65%)]">{row.eur}</td>
                      <td className="px-6 py-4 text-sm text-right font-semibold text-gold">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Other fees */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Additional Fees</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "General Skills Test", note: "Plus A/C", gbp: "£160", eur: "€170" },
                { label: "Ground Exams", note: "", gbp: "£40", eur: "€50" },
                { label: "Ground School", note: "Per hour", gbp: "£40", eur: "€50" },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded-xl p-6 text-center hover:border-gold/30 transition-all">
                  <div className="text-sm font-medium text-[hsl(35,20%,80%)] mb-1">{item.label}</div>
                  {item.note && <div className="text-xs text-[hsl(35,10%,50%)] mb-3">{item.note}</div>}
                  <div className="text-2xl font-bold text-gold">{item.gbp}</div>
                  <div className="text-sm text-[hsl(35,10%,55%)]">{item.eur}</div>
                </div>
              ))}
            </div>
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
