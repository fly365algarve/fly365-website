import { Link } from "wouter";
import { Clock, Mail, Phone } from "lucide-react";

const LOGO = "https://fly365algarve.co.uk/gallery/favicons/favicon-192x192.png";

export function BookingPage() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 flex flex-col">
      {/* Hero */}
      <div className="flex-1 flex items-center justify-center py-24 px-4">
        <div className="text-center max-w-xl mx-auto">
          <img src={LOGO} alt="Fly365 Algarve" className="w-20 h-20 mx-auto mb-8 opacity-90" />

          <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/30 text-sky-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Clock className="w-4 h-4" />
            Coming Soon
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Online Booking<br />
            <span className="text-sky-400">Coming Soon</span>
          </h1>

          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            We're building an online booking system to make reserving your training flights as easy as possible. In the meantime, get in touch directly — we'd love to have you flying with us.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:info@fly365algarve.co.uk"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full sky-gradient text-white font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </a>
            <a
              href="tel:+351282000000"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/15 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </div>

          <Link href="/" className="text-slate-500 hover:text-sky-400 text-sm transition-colors">
            ← Back to home
          </Link>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/10 py-6 text-center text-slate-600 text-sm">
        Fly365 Algarve · Lagos Aerodrome, Portugal
      </div>
    </div>
  );
}
