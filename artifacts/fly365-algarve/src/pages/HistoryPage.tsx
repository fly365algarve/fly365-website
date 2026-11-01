import { Seo } from "../components/Seo";
import { Reveal } from "../components/Reveal";
import { ResponsiveImage, publicImageExists } from "../components/ResponsiveImage";
import { PageHero } from "../components/round5/PageHero";

const history = `Born into a world of aviation, Malcolm Howland, the founder of Fly365, spent his life around aircraft through his father's RAF postings in Cyprus, the UK and Germany. He joined the RAF himself at 17, taking on many adventurous opportunities, including the early days of hang-gliding, and served in the Falklands before leaving after 11 years as a Corporal with an 'exemplary' assessment of his career.
After training with Graham Slater and progressing to microlight flying instructor, he taught with GS Aviation.
He created Fly365 at Wickenby Airfield.
When Gerry Breen retired from instructing at Aeródromo de Lagos around 2013, Malcolm saw the opportunity to extend the flying year and began offering courses in Portugal alongside the operation in Lincolnshire. He grew to love the Portuguese weather and lifestyle, and became a huge part of the continuing success of Aeroclube de Lagos, offering guidance, engineering assistance and his wealth of experience to the club established in 1965.
Sadly, on 30 September 2025, Malcolm died following complications during heart surgery.
Fly365's future success was always his goal. He nurtured Zeth Devenish, then the youngest BMAA flying instructor, to a full FI rating under his own demanding standards. Zeth, who now has more than 2,000 hours, continues Fly365's training on the fixed-wing side with the Ikarus C42. Colin Gordon is the principal flexwing instructor, flying the Quantum, Quik R and Deltajet, having started instructing in Perth, Scotland in 2003.
A huge loss to both the UK and Portuguese microlighting communities, Malcolm's legacy continues through Fly365 and the demanding standards that remain the foundation of its training.`;

const labels = ["RAF career", "Instructing", "Founding Fly365", "Lagos, around 2013", "30 September 2025", "Today", "Legacy"];

export function HistoryPage() {
  const steps = history.split("\n");
  const showMalcolm = publicImageExists("/images/malcolm.jpg");
  return <div className="page-shell page-enter">
    <Seo title="Our history" description="The history of Fly365 Algarve and its founder Malcolm Howland." />
    <PageHero variant="split" kicker="Fly365 Algarve" title={["Our history"]} sub={<p>Malcolm Howland, founder of Fly365.</p>} image="/images/weight-shift-microlight-aviation-history.webp" alt="Weight-shift microlight at the 2009 Southport Air Show — illustrative aviation photograph, not a Fly365 archive image" position="center 55%" />
    <section className="section-pad bg-[var(--chalk)]"><div className={`mx-auto grid gap-12 ${showMalcolm ? "max-w-[1000px] md:grid-cols-[1fr_260px]" : "max-w-[820px]"}`}>
      <Reveal className="r5-history"><ol className="r5-steps">{steps.map((text, i) => <li key={text} className={`r5-step ${i === 4 ? "r5-step--quiet" : ""}`} style={{ ["--i" as string]: i }}><span className="r5-step__dot" aria-hidden="true">{i + 1}</span><h2 className="text-xs font-bold uppercase tracking-[.18em] text-[var(--ocean)]">{labels[i]}</h2><p className="r5-measure mt-2 text-base leading-8 text-[var(--ink)]">{text}</p></li>)}</ol></Reveal>
      {showMalcolm && <figure className="md:sticky md:top-28 md:self-start"><ResponsiveImage src="/images/malcolm.jpg" alt="Malcolm Howland, founder of Fly365" sizes="260px" className="aspect-[4/5] w-full object-cover grayscale-[20%]" /><figcaption className="mt-3 text-xs text-[var(--muted-foreground)]">Malcolm Howland, founder of Fly365</figcaption></figure>}
    </div></section>
  </div>;
}
