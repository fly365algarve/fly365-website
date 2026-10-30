import { useEffect, useRef, useState } from "react";

export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !ref.current) { setShown(true); return; }
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setShown(true); observer.disconnect(); } }, { threshold: 0.08 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`${className} section-reveal ${shown ? "is-visible" : ""}`}>{children}</div>;
}

export function CountUp({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setCount(value); return; }
    if (!ref.current) return;
    let started = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return;
      started = true;
      const start = performance.now();
      const duration = 900;
      const frame = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setCount(Math.round(value * (1 - (1 - progress) ** 3)));
        if (progress < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
      observer.disconnect();
    }, { threshold: 0.5 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);
  return <span ref={ref} aria-label={`${value}${suffix} ${label}`} data-testid={`count-${label.replaceAll(" ", "-")}`}>{count}{suffix}</span>;
}
