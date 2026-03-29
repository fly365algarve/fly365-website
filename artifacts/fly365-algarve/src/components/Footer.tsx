import { Link } from "wouter";
import { Plane, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[hsl(220,15%,6%)] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full gold-gradient flex items-center justify-center shadow-lg">
                <Plane className="w-5 h-5 text-[hsl(220,15%,8%)] -rotate-45" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-gold">FLY365</span>
                <span className="text-lg font-light tracking-wide text-[hsl(35,20%,75%)] ml-1">Algarve</span>
              </div>
            </div>
            <p className="text-[hsl(35,10%,55%)] text-sm leading-relaxed">
              Premium microlight flight training on Portugal's stunning Algarve coast. 320 flying days a year at Lagos Aerodrome.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gold uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Fly365" },
                { href: "/fixed-wing", label: "Fixed Wing (C42)" },
                { href: "/flexwing", label: "Flexwing Aircraft" },
                { href: "/training", label: "Training Packages" },
                { href: "/prices", label: "Prices" },
                { href: "/history", label: "Our History" },
                { href: "/contact", label: "Contact Us" },
                { href: "/terms", label: "Terms & Conditions" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[hsl(35,10%,55%)] hover:text-gold transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gold uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-[hsl(35,10%,55%)]">Aeródromo de Lagos, 8600 Lagos, Portugal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <div>
                  <a href="tel:+351967456156" className="text-sm text-[hsl(35,10%,55%)] hover:text-gold transition-colors block">+351 967 456 156</a>
                  <a href="tel:+351936445501" className="text-sm text-[hsl(35,10%,55%)] hover:text-gold transition-colors block">+351 936 445 501</a>
                  <span className="text-xs text-[hsl(35,10%,45%)]">WhatsApp available</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[hsl(35,10%,45%)] shrink-0" />
                <div>
                  <a href="tel:+447984368253" className="text-sm text-[hsl(35,10%,55%)] hover:text-gold transition-colors block">+44 7984 368 253</a>
                  <span className="text-xs text-[hsl(35,10%,45%)]">UK Mobile — Calls only</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:info@fly365algarve.co.uk" className="text-sm text-[hsl(35,10%,55%)] hover:text-gold transition-colors">
                  info@fly365algarve.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[hsl(35,10%,40%)]">
            © 2025 Fly365 Algarve. All rights reserved.
          </p>
          <Link href="/terms" className="text-xs text-[hsl(35,10%,40%)] hover:text-gold transition-colors">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
