import { ContactForm } from "../components/ContactForm";

const FLEXWING_IMG = "https://fly365algarve.co.uk/gallery/Picture4.png?ts=1762817991";

export function FlexwingPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 inner-page-hero" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="accent-line mx-auto mb-6 block" />
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Flexwing</h1>
          <p className="text-xl text-sky-200">Weight-shift controlled microlights — the three-dimensional motorcycles of the sky</p>
        </div>
      </section>

      {/* Flexwing image */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-md border border-sky-100 bg-white flex items-center justify-center p-6">
            <img src={FLEXWING_IMG} alt="Flexwing microlight" className="max-h-72 object-contain" />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8 text-slate-600 leading-relaxed text-base">

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100">
            <h2 className="text-2xl font-bold text-navy mb-6">Pegasus Quantum 912</h2>
            <p className="mb-4">
              The Pegasus Quantum is a tandem seat, flexible wing, weightshift controlled microlight. This aircraft has proved itself to be one of the most popular weightshift aircraft in the world today, being used by the majority of schools in the UK.
            </p>
            <p className="mb-4">
              It is extremely forgiving, having mild stall characteristics normally associated with lower performance craft, yet still producing fast cruise speeds and very high climb rates.
            </p>
            <p className="mb-4">
              The main structure of the rolling chassis (trike) is made from aircraft grade aluminium alloy tube. Rigid composite seats are fitted, which locate onto a tubular seat frame.
            </p>
            <p>
              The trike is fitted with a rear mounted Rotax 912, 80 hp engine, reduction drive and pusher propeller. This 4-stroke, 4-cylinder horizontally opposed engine has dual spark ignition, magneto, dry sump lubrication and electric starter system. The cylinder heads are liquid cooled and the barrels are ram-air-cooled. It uses normal unleaded petrol but can operate on aviation gasoline (AVGAS) also.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100">
            <h2 className="text-2xl font-bold text-navy mb-6">Exodus Deltajet 500</h2>
            <p className="mb-4">
              The Exodus Deltajet 500 is a tandem seat, flex-wing, weightshift controlled microlight designed for both recreational pilots and professional training operations. Assembled in the UK, it has emerging as one of the most refined and capable trike aircraft in its class, combining modern engineering with the simplicity and freedom of open-air flying.
            </p>
            <p className="mb-4">
              The Deltajet 500 is remarkably stable and forgiving, with gentle stall characteristics that inspire confidence even in less experienced pilots. At the same time, it delivers impressive performance, offering brisk climb rates and efficient cruise speeds suited to both local flights and cross-country touring.
            </p>
            <p className="mb-4">
              The trike's main structure is constructed from high-grade aluminium alloy tubing for optimal strength-to-weight balance. The wing is a traditional hang-glider style structure, built from aluminium alloy tubing and covered with high-performance polyester sailcloth. Its aerodynamic profile is maintained by precision-formed composite and metal ribs, providing excellent lift and predictable control throughout the flight envelope.
            </p>
            <p>
              Power is provided by a rear-mounted BMW Motorcycle Boxer engine, with 115hp, driving a pusher propeller through a centrifugal gearbox. This reliable four-stroke, twin-cylinder engine features fuel injection, electronic ignition, electric start, and oil-cooled cylinder heads with additional air-cooling on the barrels. It runs on standard unleaded petrol or aviation-grade fuel, delivering smooth, efficient, and dependable performance.
            </p>
            <p className="mt-4 text-slate-500 italic">
              The Exodus Deltajet 500 blends comfort, reliability, and pure flying enjoyment into one elegant package — a modern evolution of the classic weightshift microlight, offering pilots an unmatched sense of freedom in the open sky.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100">
            <h2 className="text-2xl font-bold text-navy mb-6">P&M Quik R</h2>
            <p className="mb-4">
              The P&M Quik R is a tandem seat, flex-wing, weightshift-controlled microlight designed for pilots who demand both speed and precision in an open-air flying experience. Built by P&M Aviation, the Quik R represents the pinnacle of modern trike development — blending advanced aerodynamics, lightweight materials, and outstanding handling characteristics into one exhilarating aircraft.
            </p>
            <p className="mb-4">
              Despite its impressive performance, the Quik R is remarkably well-mannered. The aircraft exhibits forgiving stall behaviour and excellent pitch stability, making it both exciting and confidence-inspiring to fly. It's as comfortable on long touring flights as it is during local recreational sorties, offering a perfect balance between adventure and reliability.
            </p>
            <p className="mb-4">
              The main trike chassis is constructed from aircraft-grade aluminium alloy, providing a strong yet lightweight structure. The fuselage features fully enclosed composite bodywork that enhances aerodynamic efficiency while giving the aircraft its distinctive, modern appearance.
            </p>
            <p className="mb-4">
              Power comes from the proven Rotax 912ULS engine — a 100 hp, four-cylinder, four-stroke powerplant with dual ignition, electric start, and liquid-cooled cylinder heads. The engine drives a rear-mounted pusher propeller through a reduction gearbox, delivering smooth, reliable thrust and excellent climb performance.
            </p>
            <p className="text-slate-500 italic">
              Combining elegant engineering, high cruise speeds, and the unique sensation of open-cockpit flight, the P&M Quik R stands as one of the most advanced and exciting flex-wing microlights ever built. It embodies the spirit of freedom and performance — a true pilot's aircraft designed to thrill, inspire, and endure.
            </p>
          </div>

        </div>
      </section>

      <section className="py-20 section-alt">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy mb-3">Get in Touch</h2>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
