import { ContactForm } from "../components/ContactForm";

const C42_FULL = "https://fly365algarve.co.uk/gallery_gen/492d19a6957027a0cc41d4a5986c4ce1_702x468_fit.jpg?ts=1762817991";

const REPORT_IMAGES = [
  "https://fly365algarve.co.uk/gallery/report1-ts1664397036.jpg?ts=1762817991",
  "https://fly365algarve.co.uk/gallery/report2-ts1664397002.jpg?ts=1762817991",
  "https://fly365algarve.co.uk/gallery/report3-ts1664396193.jpg?ts=1762817991",
  "https://fly365algarve.co.uk/gallery/report4-ts1664396219.jpg?ts=1762817991",
  "https://fly365algarve.co.uk/gallery/report5-ts1664396153.jpg?ts=1762817991",
  "https://fly365algarve.co.uk/gallery/report6-ts1664396092.jpg?ts=1762817991",
];

export function FixedWingPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover" style={{ backgroundImage: `url('https://fly365algarve.co.uk/gallery/bannerheardalgarve-ts1664289439.jpg?ts=1762817991')`, backgroundPosition: 'center bottom', filter: 'saturate(0) brightness(0.3) blur(6px)' }} />
        <div className="absolute inset-0 inner-hero-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="accent-line mx-auto mb-6 block" />
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Fixed Wing</h1>
          <p className="text-xl text-sky-200">C42 Ikarus 3-axis Microlight</p>
        </div>
      </section>

      {/* Full aircraft feature image */}
      <section className="bg-white py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-sky-100">
            <img
              src={C42_FULL}
              alt="C42 Ikarus G-CISG fixed wing microlight in flight"
              className="w-full object-cover"
            />
          </div>
          <p className="text-center text-sm text-slate-400 mt-3">C42 Ikarus — 3-axis side-by-side microlight in flight</p>
        </div>
      </section>

      {/* Photo gallery grid */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 rounded-2xl overflow-hidden">
            {REPORT_IMAGES.map((src, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden">
                <img src={src} alt={`C42 microlight photo ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8 text-slate-600 leading-relaxed text-base">

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100">
            <h2 className="text-2xl font-bold text-navy mb-6">C42 Ikarus 3-axis</h2>
            <p className="mb-4">
              Approaching the C42, it looks deceptively small. It sits fairly close to the ground on a tri-gear undercarriage and it's only when you open up the clamshell doors, hinged at the top, and slide inside, that you realise the cockpit is more spacious than many Group A aircraft. It's much bigger than a cosy Cessna 152, for instance, where most adults are rubbing shoulders, and much more modern. The seats look as though they're from a Caterham sports car, reclined and shaped, although the padding is a bit thin.
            </p>
            <p className="mb-4">
              The legroom is plentiful, even for tall people, though there is no adjustment for either the seats or the rudder bars-sturdy aluminium tubes. If you're short, presumably you have to bring a cushion to stuff behind your back. Elasticated netting side pockets in the doors are big enough for charts etc, and there's storage space under the seats, but there's not much space anywhere else in the cockpit. Between the seats is a high central structure, covering the main fuselage spar, on which the stick is mounted. It makes a handy armrest too.
            </p>
            <p>
              The panel, while not stuffed full of instruments, looks more familiar than many microlights, with a recognisable vertical speed indicator, altimeter, turn ball and compass. UK distributor, Simon Du Boulay of Aerosport uk, says this is deliberate to make Group A pilots feel at home. The test aircraft didn't have an attitude indicator but the VLA version of the C42, with a 23 kg heavier weight limit, will. That extra 23 kg won't add much in terms of usable load but will allow a fuller panel. The Microair 760 radio and Mode C transponder are typically small (and light) microlight avionics but worked well enough.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100">
            <h2 className="text-2xl font-bold text-navy mb-4">Engine & Instruments</h2>
            <p className="mb-4">
              Other instruments include three engine-monitoring gauges: oil pressure, oil temperature and cylinder head temperature, and a fuel computer. A choke knob for cold starts and cockpit heater knob complete the controls. There's no magneto switch because the sparks are by modern dual electronic ignition, and no carb heat because the twin carbs are heated by the engine's liquid cooling system.
            </p>
            <p>
              Start-up was on the button, with the 100 hp four-cylinder liquid-cooled 1,352 cc Rotax 912S mounted in the conventional nose position, giving the typical Rotax shudder as it fired. It idled at 1,800 rpm, which was a bit fast, according to Paul. From the left seat, you can make a final visual fuel level check by opening a flap in the back 'wall' material to the translucent plastic fuel tank located behind the passenger.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100">
            <h2 className="text-2xl font-bold text-navy mb-4">Ground Handling & Taxi</h2>
            <p>
              Taxying across the grass was straightforward enough. Visibility from the two-seat, side-by-side cockpit is excellent, the nosewheel steers directly from the rudder bars, and the hydraulic disc brakes on the main wheels are simply operated by a single hand-lever on the central stick. No differential braking, but it isn't necessary when the aircraft can turn on a sixpence just by steering it. The throttle took a little getting used to; it's a slim aluminium tube between your legs, hinged to fold out of the way for getting in and out, and for positioning. There's one for both seats so the aircraft can be flown from either side.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100">
            <h2 className="text-2xl font-bold text-navy mb-4">Take-off & Flight Performance</h2>
            <p className="mb-4">
              The take-off was anything but conventional, at least by the standards of a C152. Paul instructed me to pull the stick back, apply full power... and after just a few seconds and about eighty metres, we were airborne. It's not surprising that the performance is so sprightly, with 100 hp pulling a max of 450 kg. The climbout was at seventy knots, with 900 fpm showing initially, picking up to 1,050 fpm. The electric trim is operated by buttons on the stop of the stick, and with the stick forces trimmed out we could continue hands-off. Paul was very keen on showing the hands-off capability.
            </p>
            <p className="mb-4">
              Once we'd reached the circuit height of 500 feet, we lowered the nose until a cruise speed of 83 knots was indicated and brought the power back to 4,500 rpm, and trimmed out again to fly crosswind hands-off, touching the stick only when rolling into a 90° turn for the downwind leg.
            </p>
            <p>
              The turn was indeed just 'rolling in', with hardly a touch of the very powerful rudder required, just a gentle back pressure on the stick halfway through the turn, to keep the nose up. The stick forces, which had been quite stiff on the ground, were very light in the air with just a gentle two-finger touch required. This was slightly at odds with the feel of the short, stubby stick, which suggested, rather like a German car's manual gear lever, that forceful movements would be the norm. But then the C42 was proving quite a surprisingly little aircraft in many ways.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100">
            <h2 className="text-2xl font-bold text-navy mb-4">Handling Qualities</h2>
            <p className="mb-4">
              Thermal activity had us bumping around a fair bit but, once again, Paul persuaded me to leave the controls alone and let the aircraft return to straight-and-level by itself, which it did. It seems that once trimmed, the C42 runs on rails.
            </p>
            <p className="mb-4">
              And so it proved as the downwind leg brought us over the airfield and we turned onto base. With the power pulled back, the speed came back to the flap-limiting speed of 62 knots and we deployed the first stage of flap, 15º. The handle for operating the manual flaps is located in the roof and I found it too easy to go past stage one and straight to two. The trick, according to Paul, is to let go of the ratchet release lever as soon as the handle has cleared the gate-it will then slot into the first stage of flap and won't accidentally carry on. Once one stage of flap was deployed, we set power at 3,000 rpm and the speed settled at 58 knots, then, trim reset, it was time to go hands-off again.
            </p>
            <p>
              Turning onto final, the second stage of flap, 40º, was deployed, speed reduced to 53 knots, retrim and... no, not hands-off this time because not even the C42 will land itself, but it was a bit of a non-event, even given the gusting crosswind from the right. Wing-down proved the simplest approach and with the pilot's seat being so low to the ground, judging the flare was easy.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100">
            <h2 className="text-2xl font-bold text-navy mb-4">Construction & Design</h2>
            <p className="mb-4">
              The C42 has one big advantage as a training aircraft over some other fixed-wing microlights, namely the nosewheel mounting. Unlike some, it's not mounted to the engine frame or firewall, but directly to the main fuselage frame, a large diameter aluminium alloy tube running the length of the aircraft with triangulated alloy tube substructures bolted on-the bodywork hangs off these. This means that if the aircraft has a nose-heavy landing, not an uncommon occurrence for training and group aircraft, it's just the nosewheel assembly that needs checking, not the whole engine mount.
            </p>
            <p className="mb-4">
              The wings can be removed, taking about twenty minutes per wing, to occupy less hangar space or to put on a trailer. The biggest job is removing the top canopy fairing, while disconnecting the metal struts and spars is a simple job of removing cotter pins and locking clips.
            </p>
            <p className="mb-4">
              Looking closely reveals many nice touches. The fabric covering the wings, tailplane and rudder is a lattice cloth called GT-foil, claimed to be resistant to ultraviolet light, and it fits tightly over aluminium tube frames. Upswept composite wingtips are an option and are said to give better low-speed control and reduce drag. The same composite of glass fibre and Kevlar honeycomb is used for the fuselage bodywork and engine cowlings, all immaculately finished.
            </p>
            <p>
              Exposed tubing such as the struts and undercarriage frame has a streamlined section to reduce drag, and all the joints in the control push-rods are nicely machined from alloy. Streamlined struts are used for the main struts of the undercarriage too, with round tubes for the trailing-links going forward to a point on the main fuselage spar. The undercarriage alone, while looking a bit narrow, is far more substantial than on any other microlight I've seen and it certainly absorbed the bumps of Chiltern Parks grass runway.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100">
            <h2 className="text-2xl font-bold text-navy mb-4">Cruise, Fuel & Stalls</h2>
            <p className="mb-4">
              Paul explained that the 83-knot cruise is where the C42 feels most comfortable, as well being fairly economical-it's burning around 13 litres an hour. Importer Du Boulay says that with the more efficient Warp Drive propeller that comes down to 11 lph.
            </p>
            <p className="mb-4">
              Upping the cruise to 90 kt, which the C42 handles easily, gives around 16 lph fuel burn, or you can go the opposite way and slow to 70 kt for 8 to 9 lph, or even 62 kt for 6 to 7 lph, though Paul says, "It starts to feel more like a microlight below 75 knots."
            </p>
            <p>
              Stalls are another non-event. Both the clean stall and with full flap produced a gentle nodding of the nose with no tendency to drop a wing. Paul demonstrated flying through the stall with full flap and holding the stick right back, producing nothing more a loss of height and occasional dip of the nose. Recovery is immediate as you release the stick back pressure and add power. Maximum permitted angle of bank is 60º but, without an attitude indicator, that's a matter of judgement. Steep turns are straightforward, needing little rudder to roll into, just back pressure and power.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-sky-200">
            <h2 className="text-2xl font-bold text-navy mb-4">Verdict & Costs</h2>
            <p className="mb-4">
              So, what to make of the Ikarus C42? Would a Group A pilot feel it was a 'real' aircraft? It's much more Group A than any other fixed-wing microlight, with the possible exception of the Dyn'Aéro BanBi, but that's a high-performing hot ship. The C42's closest microlight rival is the Rans S-6, an alloy tube and fabric aircraft with an excellent reputation for flying qualities and ruggedness, but with less performance and more of a kitplane appearance.
            </p>
            <p className="mb-6">
              The clinching argument is the economic one. You can't buy a new Group A two-seater for the C42's built price of just over £55k, and you'd never match its operating costs with new or used. Add in the advantages of having an NPPL rather than a JAR PPL and it's no wonder that 100 C42s will have been sold in the UK by the end of 2014.
            </p>
            <h3 className="text-xl font-bold text-sky mb-4">What'll it cost?</h3>
            <p className="mb-4">
              The IKARUS C42 FB costs £55000.00 + VAT and delivery to anywhere on the UK mainland. That's ready to fly with a BMAA Permit to Fly. It will have been flight tested at the UK importers' HQ at Wolverhampton Airport.
            </p>
            <p className="mb-4">
              The BMAA Permit system allows the owner to do maintenance himself, which in the C42's case includes an oil change every 100 hours (and filter), spark plugs every 200 hours, and replacing the engine coolant every four years or 200 hours. The Rotax 912 series of engines has proved trouble free and had its TBO raised from 1,200 to 1,500 hours in June 2003. Du Boulay says a C42 used for training at Barton has clocked up 700 hours at an average maintenance cost of 60p per hour.
            </p>
            <p className="mb-4">
              An annual Permit to Fly, costs between £250 & £300 inc VAT, although if work is required to pass the inspection that'll be extra.
            </p>
            <p className="mb-4">
              Fuel consumption is in the region of 11 to 13 litres per hour at a cruise speed of 83 kt, depending on the prop fitted. That's 2.9 to 3.4 usg per hour, or about £13 to £20 per hour using mogas (recommended for the Rotax engine; 100LL avgas can be used but prolonged use is to be avoided).
            </p>
            <p>
              Insurance will come as a shock to microlight pilots, but not to Group A pilots. Broker Flemings has insured many of the C42s in the UK and quotes an average cost of £2,000 pa. That's for the full hull value, plus passenger cover and £1m liability. David Bacon of Flemings says the premium is high because many of the pilots are low-hours and have come from flex-wing microlights. The premium will be lower for more experienced pilots and they prefer pilots from a Group A background.
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
