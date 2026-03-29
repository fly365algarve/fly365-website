import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "../components/ContactForm";

export function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,15%,8%)]/85 to-[hsl(220,15%,8%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="accent-line mx-auto mb-6 block" />
          <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-[hsl(35,20%,75%)]">Get in touch with the Fly365 team</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact details */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">FLY365 Algarve</h2>
            <div className="space-y-6">

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[hsl(35,20%,80%)] mb-1">Address</div>
                    <div className="text-[hsl(35,10%,60%)]">Aeródromo de Lagos, 8600 Lagos, Portugal</div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[hsl(35,20%,80%)] mb-1">FLY365 General Enquiries</div>
                    <div className="text-xs text-[hsl(35,10%,50%)] mb-2">Available for Calls & WhatsApp</div>
                    <a href="tel:+351967456156" className="text-[hsl(35,10%,65%)] hover:text-gold transition-colors block">
                      +351 967 456 156
                    </a>
                    <a href="tel:+351936445501" className="text-[hsl(35,10%,65%)] hover:text-gold transition-colors block">
                      +351 936 445 501
                    </a>
                    <div className="flex items-center gap-1.5 mt-2">
                      <MessageCircle className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-xs text-green-400">WhatsApp available on these numbers</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[hsl(35,10%,55%)]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[hsl(35,20%,80%)] mb-1">Fly365 UK Mobile</div>
                    <div className="text-xs text-[hsl(35,10%,50%)] mb-2">Calls Only</div>
                    <a href="tel:+447984368253" className="text-[hsl(35,10%,65%)] hover:text-gold transition-colors block">
                      +44 7984 368 253
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[hsl(35,20%,80%)] mb-1">Email</div>
                    <a href="mailto:info@fly365algarve.co.uk" className="text-[hsl(35,10%,65%)] hover:text-gold transition-colors">
                      info@fly365algarve.co.uk
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Send a Message</h2>
            <ContactForm />
          </div>

        </div>
      </section>
    </div>
  );
}
