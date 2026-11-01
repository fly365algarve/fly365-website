import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, Menu, X } from "lucide-react";
import { ResponsiveImage } from "./ResponsiveImage";

const aircraftLinks = [
  { href: "/fixed-wing", label: "Fixed wing" },
  { href: "/flexwing", label: "Flexwing" },
];
const aboutLinks = [
  { href: "/about", label: "About & team" },
  { href: "/history", label: "Our history" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  useEffect(() => { setIsOpen(false); }, [location]);
  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setIsOpen(false); };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[var(--chalk)] border-b border-[rgba(11,42,60,.16)]">
      <nav aria-label="Main navigation" className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-3" aria-label="Fly365 Algarve home">
          <ResponsiveImage src="/images/logo.png" priority sizes="56px" alt="Fly365 Algarve logo" className="h-14 w-14 object-cover circular-logo" />
          <span className="display-heading text-[1.45rem] leading-none text-[var(--navy)]">Fly365 <span className="text-[var(--ocean)]">Algarve</span></span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          <Link href="/trial-flights" className="nav-link">Trial flights</Link>
          <Link href="/training" className="nav-link">Learn to fly</Link>
          <div className="nav-group">
            <button type="button" className="nav-link inline-flex items-center gap-1" aria-haspopup="true">Aircraft <ChevronDown size={14} /></button>
            <div className="nav-dropdown">{aircraftLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
          </div>
          <div className="nav-group">
            <button type="button" className="nav-link inline-flex items-center gap-1" aria-haspopup="true">About <ChevronDown size={14} /></button>
            <div className="nav-dropdown">{aboutLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
          </div>
          <Link href="/contact" className="button-ochre ml-3 px-5 py-3 text-xs font-bold uppercase tracking-[.14em]">Book</Link>
        </div>
        <button className="grid h-11 w-11 place-items-center text-[var(--navy)] lg:hidden" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen(!isOpen)} data-testid="button-menu">
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>
      {isOpen && <div id="mobile-navigation" onClick={event => { if (event.target instanceof Element && event.target.closest("a")) setIsOpen(false); }} className="fixed inset-0 top-[76px] z-50 flex min-h-[calc(100dvh-76px)] flex-col overflow-y-auto bg-[var(--navy)] px-7 py-8 text-[var(--chalk)] lg:hidden">
        <p className="section-kicker !text-[var(--sandstone)]">Fly365 Algarve</p>
        <div className="mt-6 flex flex-col">
          <Link href="/trial-flights" className="mobile-nav-link">Trial flights</Link>
          <Link href="/training" className="mobile-nav-link">Learn to fly</Link>
          <details className="group"><summary className="mobile-nav-link flex cursor-pointer list-none items-center justify-between">Aircraft <ChevronDown size={20} className="transition-transform group-open:rotate-180" /></summary>
            <div className="flex flex-col pl-4">{aircraftLinks.map((item) => <Link key={item.href} href={item.href} className="mobile-nav-link !py-3 !text-xl">{item.label}</Link>)}</div>
          </details>
          <details className="group"><summary className="mobile-nav-link flex cursor-pointer list-none items-center justify-between">About <ChevronDown size={20} className="transition-transform group-open:rotate-180" /></summary>
            <div className="flex flex-col pl-4">{aboutLinks.map((item) => <Link key={item.href} href={item.href} className="mobile-nav-link !py-3 !text-xl">{item.label}</Link>)}</div>
          </details>
        </div>
        <Link href="/contact" className="button-ochre mt-auto px-6 py-4 text-center font-bold uppercase tracking-widest">Book</Link>
      </div>}
      <style>{`.nav-link{display:inline-flex;align-items:center;padding:.7rem .72rem;font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--navy);transition:color .2s}.nav-link:hover{color:var(--ochre)}.nav-group{position:relative}.nav-dropdown{display:none;position:absolute;top:100%;left:0;min-width:180px;background:var(--chalk);border:1px solid rgba(11,42,60,.18);padding:.35rem;box-shadow:0 8px 18px rgba(11,42,60,.1)}.nav-group:focus-within .nav-dropdown,.nav-group:hover .nav-dropdown{display:grid}.nav-dropdown a{padding:.7rem;color:var(--navy);font-size:.78rem}.nav-dropdown a:hover{background:#eee4d4}.mobile-nav-link{border-bottom:1px solid rgba(247,243,236,.18);padding:1rem 0;font-family:var(--app-font-display);font-size:1.7rem;font-weight:700;letter-spacing:.025em;text-transform:uppercase}`}</style>
    </header>
  );
}
