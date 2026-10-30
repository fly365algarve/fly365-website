import { useEffect, useState } from "react";
import { Cloud, CloudFog, CloudLightning, CloudRain, CloudSnow, Sun, Wind } from "lucide-react";
import "./round5.css";

const icons = { sun: Sun, cloud: Cloud, rain: CloudRain, snow: CloudSnow, fog: CloudFog, thunder: CloudLightning } as const;
type Icon = keyof typeof icons;
type City = { name: "Lagos" | "London"; temperatureC: number; windKnots: number; condition: string; icon: Icon };

function valid(data: unknown): City[] | null {
  if (!data || typeof data !== "object") return null;
  const cities = (data as { cities?: unknown }).cities;
  if (!Array.isArray(cities)) return null;
  const pick = (name: string) => cities.find((c) => c && typeof c === "object" && (c as City).name === name) as City | undefined;
  const out = [pick("Lagos"), pick("London")];
  for (const c of out) {
    if (!c || !Number.isFinite(c.temperatureC) || !Number.isFinite(c.windKnots) || c.windKnots < 0 || typeof c.condition !== "string" || !c.condition.trim() || !Object.hasOwn(icons, c.icon)) return null;
  }
  return out as City[];
}

const oneWord = (s: string) => { const w = s.trim().split(/\s+/)[0]; return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase(); };

export function WeatherWidget({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [cities, setCities] = useState<City[] | null>(null);
  useEffect(() => {
    let mounted = true;
    let controller: AbortController;
    let timer: number;
    function load() {
      controller?.abort();
      controller = new AbortController();
      const request = controller;
      let active = true;
      const timeout = window.setTimeout(() => {
        active = false;
        if (mounted) setCities(null);
        request.abort();
      }, 3000);
      timer = timeout;
      fetch(`${import.meta.env.BASE_URL}.netlify/functions/weather`, { signal: request.signal, headers: { Accept: "application/json" } })
        .then((r) => (r.ok ? r.json() : null))
        .then((data) => { if (mounted && active) setCities(valid(data)); })
        .catch(() => { if (mounted) setCities(null); })
        .finally(() => window.clearTimeout(timeout));
    }
    load();
    const refresh = window.setInterval(load, 30 * 60 * 1000);
    return () => { mounted = false; window.clearInterval(refresh); window.clearTimeout(timer); controller.abort(); };
  }, []);
  if (!cities) return null;
  const dark = tone === "dark";
  return <aside className={`r5-weather mt-10 border p-4 md:p-5 ${dark ? "border-[rgba(247,243,236,.22)] text-[var(--chalk)]" : "border-[rgba(11,42,60,.2)] bg-[var(--chalk)] text-[var(--navy)]"}`} aria-label="Current weather in Lagos and London">
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
      <span className={`section-kicker shrink-0 ${dark ? "!text-[var(--sandstone)]" : ""}`}>Right now</span>
      <div className="grid flex-1 gap-4 sm:grid-cols-2">
        {cities.map((c) => { const I = icons[c.icon]; return <div key={c.name} className="flex items-center gap-4">
          <I size={30} strokeWidth={1.5} className={c.name === "Lagos" ? "text-[var(--ochre)]" : dark ? "text-[rgba(247,243,236,.6)]" : "text-[var(--ocean)]"} aria-hidden="true" />
          <div><div className="flex items-baseline gap-2"><span className="text-xs font-bold uppercase tracking-[.18em]">{c.name}</span><strong className="display-heading text-3xl leading-none">{Math.round(c.temperatureC)}°C</strong></div>
            <p className={`mt-1 flex items-center gap-2 text-xs ${dark ? "text-[rgba(247,243,236,.7)]" : "text-[var(--muted-foreground)]"}`}>{oneWord(c.condition)} <span aria-hidden="true">·</span> <Wind size={12} aria-hidden="true" /> {Math.round(c.windKnots)} kn</p></div>
        </div>; })}
      </div>
    </div>
    <p className={`mt-3 text-[11px] ${dark ? "text-[rgba(247,243,236,.55)]" : "text-[var(--muted-foreground)]"}`}><a href="https://www.met.no/en" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Weather data: MET Norway</a></p>
  </aside>;
}
