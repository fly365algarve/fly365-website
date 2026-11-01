import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { Seo } from "../components/Seo";
import { PageHero } from "../components/round5/PageHero";
import { SpecCards, Comparison } from "../components/round5/Aircraft";

export function FlexwingPage() {
  return <div className="page-shell page-enter">
    <Seo title="Flexwing microlight aircraft" description="Explore Fly365 Algarve’s flexwing training aircraft: the Quantum 912, Deltajet 500 and Quik R." />
    <PageHero variant="split" fit="contain" kicker="Weight-shift flying" title={["Flexwing"]} sub={<p>Weight-shift controlled microlights — the three-dimensional motorcycles of the sky</p>} image="/images/fly365-flexwing-aircraft.png" alt="Fly365 Algarve flexwing weight-shift microlight aircraft" />
    <section className="section-pad surface-sand"><div className="mx-auto max-w-[1160px]"><span className="section-kicker">At a glance</span><h2 className="mb-8 mt-3 text-5xl text-[var(--navy)]">The flexwing fleet</h2><SpecCards names={["P&M Quantum 912", "Exodus Deltajet 500", "P&M Quik R"]} /></div></section>

    <section className="section-pad bg-[var(--chalk)]">
      <div className="mx-auto max-w-[1160px] space-y-14 text-sm leading-7 text-[var(--ink)] [&_article>div:last-child]:max-w-[68ch]">
        <article className="grid gap-6 border-b border-[rgba(11,42,60,.2)] pb-10 md:grid-cols-[.45fr_1fr]">
          <div><span className="section-kicker">01 · Aircraft</span><h2 className="mt-3 text-3xl text-[var(--navy)]">Pegasus Quantum 912</h2></div>
          <div><p className="mb-4">The Pegasus Quantum is a tandem seat, flexible wing, weightshift controlled microlight. This aircraft has proved itself to be one of the most popular weightshift aircraft in the world today, being used by the majority of schools in the UK.</p>
            <p className="mb-4">It is extremely forgiving, having mild stall characteristics normally associated with lower performance craft, yet still producing fast cruise speeds and very high climb rates.</p>
            <p className="mb-4">The main structure of the rolling chassis (trike) is made from aircraft grade aluminium alloy tube. Rigid composite seats are fitted, which locate onto a tubular seat frame.</p>
            <p>The trike is fitted with a rear mounted Rotax 912, 80 hp engine, reduction drive and pusher propeller. This 4-stroke, 4-cylinder horizontally opposed engine has dual spark ignition, magneto, dry sump lubrication and electric starter system. The cylinder heads are liquid cooled and the barrels are ram-air-cooled. It uses normal unleaded petrol but can operate on aviation gasoline (AVGAS) also.</p>
          </div>
        </article>
        <article className="grid gap-6 border-b border-[rgba(11,42,60,.2)] pb-10 md:grid-cols-[.45fr_1fr]">
          <div><span className="section-kicker">02 · Aircraft</span><h2 className="mt-3 text-3xl text-[var(--navy)]">Exodus Deltajet 500</h2></div>
          <div><p className="mb-4">The Exodus Deltajet 500 is a tandem seat, flex-wing, weightshift controlled microlight designed for both recreational pilots and professional training operations. Assembled in the UK, it has emerging as one of the most refined and capable trike aircraft in its class, combining modern engineering with the simplicity and freedom of open-air flying.</p>
            <p className="mb-4">The Deltajet 500 is remarkably stable and forgiving, with gentle stall characteristics that inspire confidence even in less experienced pilots. At the same time, it delivers impressive performance, offering brisk climb rates and efficient cruise speeds suited to both local flights and cross-country touring.</p>
            <p className="mb-4">The trike&apos;s main structure is constructed from high-grade aluminium alloy tubing for optimal strength-to-weight balance. The wing is a traditional hang-glider style structure, built from aluminium alloy tubing and covered with high-performance polyester sailcloth. Its aerodynamic profile is maintained by precision-formed composite and metal ribs, providing excellent lift and predictable control throughout the flight envelope.</p>
            <p>Power is provided by a rear-mounted BMW Motorcycle Boxer engine, with 115hp, driving a pusher propeller through a centrifugal gearbox. This reliable four-stroke, twin-cylinder engine features fuel injection, electronic ignition, electric start, and oil-cooled cylinder heads with additional air-cooling on the barrels. It runs on standard unleaded petrol or aviation-grade fuel, delivering smooth, efficient, and dependable performance.</p>
            <p className="mt-4 italic text-[var(--muted-foreground)]">The Exodus Deltajet 500 blends comfort, reliability, and pure flying enjoyment into one elegant package — a modern evolution of the classic weightshift microlight, offering pilots an unmatched sense of freedom in the open sky.</p>
          </div>
        </article>
        <article className="grid gap-6 border-b border-[rgba(11,42,60,.2)] pb-10 md:grid-cols-[.45fr_1fr]">
          <div><span className="section-kicker">03 · Aircraft</span><h2 className="mt-3 text-3xl text-[var(--navy)]">P&amp;M Quik R</h2></div>
          <div><p className="mb-4">The P&amp;M Quik R is a tandem seat, flex-wing, weightshift-controlled microlight designed for pilots who demand both speed and precision in an open-air flying experience. Built by P&amp;M Aviation, the Quik R represents the pinnacle of modern trike development — blending advanced aerodynamics, lightweight materials, and outstanding handling characteristics into one exhilarating aircraft.</p>
            <p className="mb-4">Despite its impressive performance, the Quik R is remarkably well-mannered. The aircraft exhibits forgiving stall behaviour and excellent pitch stability, making it both exciting and confidence-inspiring to fly. It&apos;s as comfortable on long touring flights as it is during local recreational sorties, offering a perfect balance between adventure and reliability.</p>
            <p className="mb-4">The main trike chassis is constructed from aircraft-grade aluminium alloy, providing a strong yet lightweight structure. The fuselage features fully enclosed composite bodywork that enhances aerodynamic efficiency while giving the aircraft its distinctive, modern appearance.</p>
            <p className="mb-4">Power comes from the proven Rotax 912ULS engine — a 100 hp, four-cylinder, four-stroke powerplant with dual ignition, electric start, and liquid-cooled cylinder heads. The engine drives a rear-mounted pusher propeller through a reduction gearbox, delivering smooth, reliable thrust and excellent climb performance.</p>
            <p className="italic text-[var(--muted-foreground)]">Combining elegant engineering, high cruise speeds, and the unique sensation of open-cockpit flight, the P&amp;M Quik R stands as one of the most advanced and exciting flex-wing microlights ever built. It embodies the spirit of freedom and performance — a true pilot&apos;s aircraft designed to thrill, inspire, and endure.</p>
          </div>
        </article>
        <div className="flex flex-wrap gap-4"><Link href="/training" className="button-ochre inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider">Explore training <ArrowRight size={15} /></Link><Link href="/training#training-prices" className="inline-flex items-center gap-2 border border-[var(--navy)] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[var(--navy)]">Training prices <ArrowRight size={15} /></Link></div>
      </div>
    </section>
    <Comparison />
    <section className="bg-[var(--chalk)] section-pad"><div className="mx-auto max-w-2xl"><span className="section-kicker">Interested in flexwing?</span><h2 className="mb-8 mt-3 text-5xl text-[var(--navy)]">Let’s talk flying.</h2><ContactForm /></div></section>
  </div>;
}
