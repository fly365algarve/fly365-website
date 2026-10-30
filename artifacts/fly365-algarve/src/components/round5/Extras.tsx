import { useState, type ReactNode } from "react";
import { ArrowUpRight, ChevronDown, Quote } from "lucide-react";
import { site } from "../../config/site";
import { ResponsiveImage, publicImageExists } from "../ResponsiveImage";
import "./round5.css";

export const press = [
  { name: "BWPA", url: "https://bwpa.co.uk/?p=29899" },
  { name: "Tomorrow Algarve", url: "https://tomorrowalgarve.com/?p=12860" },
];

export function PressStrip() {
  return <section className="r5-press border-y border-[rgba(11,42,60,.15)] bg-[var(--chalk)] px-5 py-8"><div className="mx-auto flex max-w-[1160px] flex-col gap-4 md:flex-row md:items-center md:gap-12">
    <span className="section-kicker shrink-0">As featured in</span>
    <ul className="flex flex-wrap items-center gap-x-10 gap-y-3">{press.map((p) => <li key={p.name}><a href={p.url} target="_blank" rel="noopener noreferrer" className="display-heading inline-flex items-center gap-1 text-2xl text-[var(--navy)]">{p.name}<ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a></li>)}</ul>
  </div></section>;
}

export function Reviews() {
  const reviews = site.reviews.filter((r) => r.quote?.trim() && r.author?.trim());
  const links = Object.entries(site.reviewLinks).filter(([label, url]) => label.trim() && url.trim());
  if (!reviews.length && !links.length) return null;
  return <section className="section-pad surface-sand"><div className="mx-auto max-w-[1160px]">
    <span className="section-kicker">In their words</span><h2 className="mt-3 text-5xl text-[var(--navy)]">Reviews</h2>
    {reviews.length > 0 && <div className="mt-9 grid gap-5 md:grid-cols-2">{reviews.map((r) => <figure key={r.quote} className="border-t-2 border-[var(--ochre)] bg-[var(--chalk)] p-7"><Quote size={22} className="text-[var(--ochre)]" aria-hidden="true" /><blockquote className="mt-4 text-base leading-7 text-[var(--ink)]">{r.quote}</blockquote><figcaption className="mt-5 text-sm font-semibold text-[var(--navy)]">{r.author}{r.source && (r.url ? <> · <a href={r.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{r.source}</a></> : <span className="font-normal text-[var(--muted-foreground)]"> · {r.source}</span>)}</figcaption></figure>)}</div>}
    {links.length > 0 && <div className="mt-8 flex flex-wrap gap-3">{links.map(([label, url]) => <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[var(--navy)] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[var(--navy)]">{label} <ArrowUpRight size={14} /></a>)}</div>}
  </div></section>;
}

export function Accordion({ items, numbered = true }: { items: { title: string; body: ReactNode }[]; numbered?: boolean }) {
  return <div className="divide-y divide-[rgba(11,42,60,.18)] border-y border-[rgba(11,42,60,.18)]">{items.map((item, i) => <details key={i} className="r5-acc group py-4">
    <summary className="flex cursor-pointer list-none items-start gap-4 text-left"><span className="display-heading w-8 shrink-0 text-lg text-[var(--ochre)]">{numbered ? String(i + 1).padStart(2, "0") : ""}</span><span className="flex-1 text-sm font-semibold leading-6 text-[var(--navy)]">{item.title}</span><ChevronDown size={18} className="mt-1 shrink-0 text-[var(--ocean)] transition-transform group-open:rotate-180" /></summary>
    <div className="r5-measure pb-2 pl-12 pt-3 text-sm leading-6 text-[var(--muted-foreground)]">{item.body}</div>
  </details>)}</div>;
}

export function TeamCard({ member, tone = "light" }: { member: (typeof site.team)[number]; tone?: "light" | "dark" }) {
  const [failed, setFailed] = useState(false);
  const hasPhoto = publicImageExists(member.photo) && !failed;
  const dark = tone === "dark";
  return <article className={`grid grid-cols-[96px_1fr] items-center gap-5 border-t pt-5 ${dark ? "border-[rgba(247,243,236,.25)]" : "border-[rgba(11,42,60,.2)]"}`}>
    {hasPhoto ? <ResponsiveImage src={member.photo} alt={`${member.name}, ${member.role}`} sizes="96px" className="aspect-square w-24 object-cover" onError={() => setFailed(true)} />
      : <div className={`r5-avatar aspect-square w-24 text-3xl ${dark ? "r5-avatar--light" : ""}`} role="img" aria-label={`${member.name} initials`}>{member.initials}</div>}
    <div><h3 className={`text-3xl leading-none ${dark ? "" : "text-[var(--navy)]"}`}>{member.name}</h3><p className={`mt-2 text-sm ${dark ? "text-[rgba(247,243,236,.75)]" : "text-[var(--ocean)]"}`}>{member.role}</p><p className={`mt-1 text-xs font-bold uppercase tracking-[.16em] ${dark ? "text-[var(--sandstone)]" : "text-[var(--ochre)]"}`}>{member.experience}</p></div>
  </article>;
}
