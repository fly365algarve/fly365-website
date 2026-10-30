import { Seo } from "../components/Seo";

const history = `Born into a world of aviation, Malcolm Howland, the founder of Fly365, spent his life around aircraft through his father's RAF postings in Cyprus, the UK and Germany. He joined the RAF himself at 17, taking on many adventurous opportunities, including the early days of hang-gliding, and served in the Falklands before leaving after 11 years as a Corporal with an 'exemplary' assessment of his career.
After training with Graham Slater and progressing to microlight flying instructor, he taught with GS Aviation before creating Fly365 at Wickenby Airfield.
When Gerry Breen retired from instructing at Aeródromo de Lagos around 2013, Malcolm saw the opportunity to extend the flying year and began offering courses in Portugal alongside the operation in Lincolnshire. He grew to love the Portuguese weather and lifestyle, and became a huge part of the continuing success of Aeroclube de Lagos, offering guidance, engineering assistance and his wealth of experience to the club established in 1965.
Sadly, on 30 September 2025, Malcolm died following complications during heart surgery.
Fly365's future success was always his goal. He nurtured Zeth Devenish, then the youngest BMAA flying instructor, to a full FI rating under his own demanding standards. Zeth, who now has more than 2,000 hours, continues Fly365's training on the fixed-wing side with the Ikarus C42. Colin Gordon is the principal flexwing instructor, flying the Quantum, Quik R and Deltajet, having started instructing in Perth, Scotland in 2003.
A huge loss to both the UK and Portuguese microlighting communities, Malcolm's legacy continues through Fly365 and the demanding standards that remain the foundation of its training.`;

export function HistoryPage() {
  return <div className="page-shell page-enter min-h-[70vh] bg-[var(--chalk)] px-5 py-12">
    <Seo title="Our history" description="The history of Fly365 Algarve and its founder Malcolm Howland." />
    <h1 className="sr-only">Our history</h1>
    <article className="mx-auto max-w-[820px] space-y-6 text-base leading-8 text-[var(--ink)]">
      {history.split("\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </article>
  </div>;
}
