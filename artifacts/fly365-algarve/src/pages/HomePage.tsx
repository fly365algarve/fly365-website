import { Link } from "wouter";
import { ArrowRight, Wind, MapPin, Calendar, Shield, Plane } from "lucide-react";
import { ContactForm } from "../components/ContactForm";

const HERO = "/sky-hero.webp";
const C42_1 = "https://fly365algarve.co.uk/gallery_gen/492d19a6957027a0cc41d4a5986c4ce1_702x468_fit.jpg?ts=1762817991";
const FLEXWING = "https://fly365algarve.co.uk/gallery/Picture4.png?ts=1762817991";

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{ backgroundImage: `url('${HERO}')`, backgroundSize: 'cover', backgroundPosition: 'center top' }}
        />
        <div className="absolute inset-0 hero-gradient" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-300/50 bg-sky-400/20 text-sky-100 text-xs font-semibold tracking-widest uppercase mb-8">
            <MapPin className="w-3 h-3" />
            Lagos, Algarve, Portugal
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-5 leading-[1.05] drop-shadow-lg">
            Fly365 Algarve
          </h1>
          <p className="text-2xl sm:text-3xl font-light tracking-widest text-sky-200 uppercase mb-6 drop-shadow">
            Action & Adventure
          </p>
          <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow">
            Premium microlight flight training on Portugal's stunning Algarve coast. 320 flying days a year at Lagos Aerodrome — where the sky is always open.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/training"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full sky-gradient text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-xl"
            >
              View Training Packages
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/40 bg-white/15 text-white font-semibold text-sm hover:bg-white/25 hover:border-white/60 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-y border-sky-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Calendar, value: "320", label: "Flying days per year" },
              { icon: Plane, value: "4+", label: "Aircraft in fleet" },
              { icon: Wind, value: "2km", label: "From Lagos centre" },
              { icon: Shield, value: "CAA", label: "Approved instructors" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                <stat.icon className="w-6 h-6 text-sky" />
                <div className="text-2xl font-bold text-navy">{stat.value}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="accent-line mb-6 inline-block" />
            <h2 className="text-4xl font-bold text-navy mb-6 leading-tight">
              Full Time Operation on Portugal's Algarve
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              Lagos Aerodrome is 2km from the centre of Lagos in Portugal, with a tarmac runway and 320 flying days per year. We offer intensive training packages of up to 20 hours in two week blocks throughout the year.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Training is available on either a Quantum 912, Deltajet BMW, Quik R (all weightshift) or the C42 3-axis. Fly365 operates in Lagos Portugal from October through to end April.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/about" className="inline-flex items-center gap-2 text-sky font-semibold text-sm hover:gap-3 transition-all">
                About Fly365 <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/training" className="inline-flex items-center gap-2 text-sky font-semibold text-sm hover:gap-3 transition-all">
                Training Packages <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={C42_1}
                alt="C42 Ikarus microlight at Lagos"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-xl p-5 shadow-xl border border-sky-100 hidden md:block">
              <div className="text-sky text-3xl font-bold">25hrs</div>
              <div className="text-xs text-slate-500 mt-1">To full unrestricted licence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Aircraft cards */}
      <section className="py-24 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="accent-line mx-auto mb-6 block" />
            <h2 className="text-4xl font-bold text-navy mb-4">Our Fleet</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Choose from fixed-wing 3-axis microlights or weightshift flexwings — all expertly maintained and ready to fly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/fixed-wing" className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-sky-100 hover:border-sky-300 transition-all duration-300">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={C42_1}
                  alt="Fixed Wing C42 Ikarus"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-sky transition-colors">Fixed Wing — C42 Ikarus</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  3-axis side-by-side microlight. Spacious cockpit, familiar controls, excellent for training. 100hp Rotax 912S engine.
                </p>
                <span className="inline-flex items-center gap-1 text-sky text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
            <Link href="/flexwing" className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-sky-100 hover:border-sky-300 transition-all duration-300">
              <div className="aspect-[16/9] overflow-hidden bg-sky-50 flex items-center justify-center">
                <img
                  src={FLEXWING}
                  alt="Flexwing microlight"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-sky transition-colors">Flexwing — Weight-Shift</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  Three-dimensional motorcycles of the sky. Quantum 912, Deltajet 500 BMW, and Quik R in our flexwing fleet.
                </p>
                <span className="inline-flex items-center gap-1 text-sky text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Prices preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="accent-line mx-auto mb-6 block" />
          <h2 className="text-4xl font-bold text-navy mb-4">Trial Lessons</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Experience the thrill of microlight flying with a one-off trial lesson over the stunning Algarve coastline.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { duration: "20 Mins", price: "€60", route: "Flight to Grottos and return" },
            { duration: "30 Mins", price: "€85", route: "Grottos & coastal flight to Salema Area" },
            { duration: "45 Mins", price: "€140", route: "Grottos, west coast & Sagres Area" },
            { duration: "60 Mins", price: "€185", route: "Grottos, west coast & Sagres Area+" },
          ].map((item) => (
            <div key={item.duration} className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md border border-sky-100 hover:border-sky-300 transition-all">
              <div className="text-xs text-slate-400 uppercase tracking-widest mb-2">{item.duration}</div>
              <div className="text-3xl font-bold text-sky mb-2">{item.price}</div>
              <div className="text-xs text-slate-500 leading-relaxed">{item.route}</div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/prices" className="inline-flex items-center gap-2 text-sky font-semibold text-sm hover:gap-3 transition-all">
            View full price list <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-24 section-alt">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="accent-line mx-auto mb-6 block" />
            <h2 className="text-4xl font-bold text-navy mb-4">Get in Touch</h2>
            <p className="text-slate-500">Ready to take to the skies? We'd love to hear from you.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-md border border-sky-100">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
