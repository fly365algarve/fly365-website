import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "../components/ContactForm";

export function ContactPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 inner-page-hero" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="accent-line mx-auto mb-6 block" />
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Contact Us</h1>
          <p className="text-xl text-sky-200">Get in touch — we'd love to hear from you</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">Fly365 Algarve</h2>
              <p className="text-slate-600 leading-relaxed">
                Please note we operate primarily through email and WhatsApp. The best way to reach us is via email and we aim to respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-sky-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-sky" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">Address</div>
                  <div className="text-slate-700 text-sm leading-relaxed">
                    Aeródromo de Lagos<br />
                    8600 Lagos<br />
                    Algarve, Portugal
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm border border-sky-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-sky" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">Portugal Mobile (WhatsApp)</div>
                  <a href="tel:+351967456156" className="text-slate-700 text-sm hover:text-sky transition-colors block">+351 967 456 156</a>
                  <a href="tel:+351936445501" className="text-slate-700 text-sm hover:text-sky transition-colors block">+351 936 445 501</a>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm border border-sky-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-sky" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">UK Mobile — Calls Only</div>
                  <a href="tel:+447984368253" className="text-slate-700 text-sm hover:text-sky transition-colors block">+44 7984 368 253</a>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm border border-sky-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-sky" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">Email</div>
                  <a href="mailto:info@fly365algarve.co.uk" className="text-slate-700 text-sm hover:text-sky transition-colors">
                    info@fly365algarve.co.uk
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">Send a Message</h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
