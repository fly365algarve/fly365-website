import { ContactForm } from "../components/ContactForm";

export function TermsPage() {
  const terms = [
    "As microlights, light aircraft require good weather conditions, flights are subject to cancellation at short notice, Fly365 will not be held responsible for the costs of travel, accommodation or any associated costs should your flight be cancelled for any reason, including aircraft non-serviceability or poor weather.",
    "Due to the volatility of fuel prices, this voucher may carry a fuel surcharge to cover the differences in fuel cost at purchase against that at the redemption of voucher.",
    "A minimum age of 14 years is required for all flights with a maximum passenger weight of 110kg. (Under 18's must be accompanied by a parent or guardian who may be required to sign a disclaimer).",
    "We are unable to refund the cost of the flight voucher under any circumstances, vouchers are however, transferable providing we are notified in writing at least 24 hours before the flight. This will carry a surcharge.",
    "For obvious reasons, passengers should ensure that they are in good health and if in doubt should seek the medical advice of their GP. The Pilot, as Captain of the aircraft can, at his/her discretion refuse any person on board the aircraft if he suspects them to be under the influence of alcohol or drugs.",
    "It should be noted that any passengers failing to take their confirmed flight booking render the voucher invalid, unless a minimum of 24 hours' notice of cancellation has been given. In the event of the flight being cancelled by us, then your Flight Voucher remains valid until the expiry date shown, and will be rebooked for a mutually convenient date.",
    "Whilst every precaution is taken for the safety of passengers Fly365 cannot be held liable for the loss, damage or injury to persons, property or belongings which does not result from its negligence.",
    "Passengers wishing to take cameras and other photographic equipment on the flight do so entirely at their own risk and only with the permission of the Captain.",
    "All vouchers are valid for 12 months from date of purchase.",
    "Online payments are kept safe and secure with Sumup.",
    "On receipt of your voucher contact us to book your flight and discuss plane preference.",
    "The flights available are conducted as Introductory flights and are not required to operate to the same safety standards as a flight operated by the holder of an air operator certificate (AOC).",
    "In the event that any flight is cancelled by the operator, the flight voucher shall remain valid until the original expiry date shown and the flight will be re-booked for a mutually convenient date.",
    "Late Arrivals: You are considered late if you have not arrived within 15 minutes of your flight start time, your flight voucher may be cancelled.",
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,15%,6%)] to-[hsl(220,15%,8%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="accent-line mx-auto mb-6 block" />
          <h1 className="text-5xl font-bold text-white mb-4">Terms & Conditions</h1>
          <p className="text-xl text-[hsl(35,20%,75%)]">Please read these conditions carefully before booking</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="glass-card rounded-2xl p-8 md:p-12">
          <ol className="space-y-6">
            {terms.map((term, i) => (
              <li key={i} className="flex items-start gap-5">
                <span className="w-8 h-8 rounded-full gold-gradient text-[hsl(220,15%,8%)] text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-[hsl(35,10%,65%)] leading-relaxed text-sm pt-1">{term}</p>
              </li>
            ))}
          </ol>
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
