import { Cog, Gauge, MessageCircle, Plane, Users } from "lucide-react";
import { site } from "../../config/site";
import { Reveal } from "../Reveal";
import "./round5.css";

export const aircraftSpecs = [
  { name: "Ikarus C42", control: "3-axis", wing: "High wing", seats: "Two seats, side-by-side", engine: "Rotax 912S", hp: 100 },
  { name: "P&M Quantum 912", control: "Weight-shift (flexwing)", seats: "Two seats, tandem", engine: "Rotax 912", hp: 80 },
  { name: "P&M Quik R", control: "Weight-shift", seats: "Two seats, tandem", engine: "Rotax 912ULS", hp: 100 },
] as const;

export function SpecCards({ names }: { names: string[] }) {
  const list = aircraftSpecs.filter((a) => names.includes(a.name));
  return <div className={`grid gap-4 ${list.length === 2 ? "md:grid-cols-2" : list.length > 2 ? "md:grid-cols-3" : ""}`}>{list.map((a) => <article key={a.name} className="r5-spec p-6">
    <h3 className="text-3xl text-[var(--navy)]">{a.name}</h3>
    <div className="mt-5 flex items-end gap-2"><strong className="display-heading text-6xl leading-none text-[var(--ochre)]">{a.hp}</strong><span className="pb-1 text-sm font-bold uppercase tracking-widest text-[var(--ocean)]">hp</span></div>
    <dl className={`mt-6 grid ${list.length === 1 ? "sm:grid-cols-2 sm:gap-x-8" : ""}`}>
      {[[Plane, "Control", a.control + ("wing" in a ? `, ${a.wing.toLowerCase()}` : "")], [Users, "Seats", a.seats], [Cog, "Engine", a.engine], [Gauge, "Power", `${a.hp} hp`]].map(([Icon, label, value]) => { const I = Icon as typeof Plane; return <div key={label as string} className="flex items-start gap-3 py-3"><I size={17} className="mt-0.5 shrink-0 text-[var(--ocean)]" aria-hidden="true" /><div><dt className="text-[10px] font-bold uppercase tracking-[.18em] text-[var(--muted-foreground)]">{label as string}</dt><dd className="text-sm font-semibold text-[var(--ink)]">{value as string}</dd></div></div>; })}
    </dl>
  </article>)}</div>;
}

export function Comparison() {
  return <Reveal><section className="section-pad surface-sand"><div className="mx-auto max-w-[1160px]">
    <span className="section-kicker">Two ways to fly</span>
    <h2 className="mt-3 max-w-3xl text-5xl leading-[.92] text-[var(--navy)]">Flexwing or 3-axis — which suits me?</h2>
    <div className="mt-10 grid gap-px bg-[rgba(11,42,60,.2)] md:grid-cols-2">
      <div className="bg-[var(--navy)] p-7 text-[var(--chalk)] md:p-9"><span className="section-kicker !text-[var(--sandstone)]">Weight-shift</span><h3 className="mt-2 text-4xl">Flexwing</h3>
        <ul className="mt-6 space-y-4 text-sm leading-6 text-[rgba(247,243,236,.82)]"><li>Open-air flying — a “three-dimensional motorbike”.</li><li>Exhilarating and immense fun to fly.</li><li>Demands a higher degree of skill and physical strength.</li></ul></div>
      <div className="bg-[var(--chalk)] p-7 md:p-9"><span className="section-kicker">3-axis</span><h3 className="mt-2 text-4xl text-[var(--navy)]">{site.fixedWing.name}</h3>
        <ul className="mt-6 space-y-4 text-sm leading-6 text-[var(--ink)]"><li>Forgiving, with side-by-side seating.</li><li>Rudder pedals and light controls make later conversion easier.</li><li>Older people (70+) and those of small stature often progress more quickly on it.</li></ul></div>
    </div>
    <a href={site.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="motion-link mt-7 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--ocean)]"><MessageCircle size={17} />Not sure? Ask us on WhatsApp</a>
  </div></section></Reveal>;
}
