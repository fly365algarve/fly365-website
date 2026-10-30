import type { ReactNode } from "react";
import { ResponsiveImage } from "../ResponsiveImage";
import "./round5.css";
import { useHeroReady } from "../IntroOverlay";

type Props = { kicker: string; title: string[]; sub?: ReactNode; image: string; alt: string; variant?: "photo" | "split"; fit?: "cover" | "contain"; position?: string };

function FlightPath() {
  return <svg className="r5-hero__path" viewBox="0 0 720 160" aria-hidden="true"><path d="M4 142 C120 120 170 40 300 60 S500 150 600 70 S690 18 716 22" /><circle cx="716" cy="22" r="4" /></svg>;
}

export function PageHero({ kicker, title, sub, image, alt, variant = "photo", fit = "cover", position = "center" }: Props) {
  const ready = useHeroReady();
  const heading = <><span className="section-kicker r5-hero__line !text-[var(--sandstone)]">{kicker}</span>
    <h1 className="mt-3 text-[clamp(3rem,8vw,6.4rem)] leading-[.86]">{title.map((line, i) => <span key={line} className="r5-hero__line" style={{ ["--i" as string]: i + 1 }}>{line}</span>)}</h1>
    {sub && <div className="r5-hero__sub mt-5 max-w-[56ch] text-base leading-7 text-[rgba(247,243,236,.8)]">{sub}</div>}</>;
  if (variant === "split") return <section className={`r5-hero r5-split ${ready ? "" : "r5-hero--hold"}`}>
    <div className="relative px-5 pb-14 pt-16 md:py-24 md:pl-[max(1.25rem,calc((100vw-1160px)/2))] md:pr-10"><FlightPath />{heading}</div>
    <div className="r5-split__media"><ResponsiveImage src={image} alt={alt} priority sizes="(max-width: 768px) 100vw, 45vw" className={fit === "contain" ? "object-contain p-6" : "object-cover"} style={{ objectPosition: position }} /></div>
  </section>;
  return <section className={`r5-hero px-5 pb-14 pt-20 md:pb-20 md:pt-28 ${ready ? "" : "r5-hero--hold"}`}>
    <ResponsiveImage src={image} alt={alt} priority sizes="100vw" className="r5-hero__img" style={{ objectPosition: position }} />
    <div className="r5-hero__shade" aria-hidden="true" /><FlightPath />
    <div className="mx-auto max-w-[1160px]">{heading}</div>
  </section>;
}
