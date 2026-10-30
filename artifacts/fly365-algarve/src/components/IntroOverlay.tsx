import { useEffect, useState, useSyncExternalStore } from "react";
import "./intro.css";
import { ResponsiveImage } from "./ResponsiveImage";

const KEY = "fly365-intro-seen";
let decided: boolean | null = null;
let handedOff = false;
const listeners = new Set<() => void>();

function shouldPlay(): boolean {
  if (decided !== null) return decided;
  if (typeof window === "undefined") return (decided = false);
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return (decided = false);
    if (sessionStorage.getItem(KEY)) return (decided = false);
    sessionStorage.setItem(KEY, "1");
    return (decided = true);
  } catch {
    return (decided = false);
  }
}

function handoff() {
  if (handedOff) return;
  handedOff = true;
  listeners.forEach((l) => l());
}

/** Hero hook: true once the hero may run its entrance (immediately when no intro plays). */
export function useHeroReady(): boolean {
  return useSyncExternalStore(
    (cb) => { listeners.add(cb); return () => listeners.delete(cb); },
    () => !shouldPlay() || handedOff,
    () => true,
  );
}

export function IntroOverlay() {
  const [play] = useState(shouldPlay);
  const [wiping, setWiping] = useState(false);
  const [gone, setGone] = useState(!play);

  useEffect(() => {
    if (!play || gone) return;
    const skip = () => { setWiping(true); handoff(); };
    const t1 = window.setTimeout(skip, 1000);
    const t2 = window.setTimeout(() => setGone(true), 1600);
    window.addEventListener("keydown", skip);
    return () => { window.clearTimeout(t1); window.clearTimeout(t2); window.removeEventListener("keydown", skip); };
  }, [play, gone]);

  if (gone) return null;
  const skipNow = () => { setWiping(true); handoff(); window.setTimeout(() => setGone(true), 600); };

  return (
    <div className={`fx-intro${wiping ? " fx-intro--wipe" : ""}`} onPointerDown={skipNow} onAnimationEnd={(e) => { if (e.target === e.currentTarget) setGone(true); }} role="presentation" aria-hidden="true" data-testid="intro-overlay">
      <svg className="fx-intro__sky" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path className="fx-intro__trail" d="M-12 64 L108 40" />
      </svg>
      <svg className="fx-intro__plane" viewBox="0 0 48 48" fill="currentColor">
        <g transform="rotate(90 24 24)">
          <rect x="21.5" y="4" width="5" height="38" rx="2.5" />
          <rect x="3" y="15" width="42" height="6" rx="1.5" />
          <rect x="14" y="37" width="20" height="4" rx="1.2" />
        </g>
      </svg>
      <ResponsiveImage src="/images/logo.png" priority sizes="144px" alt="" className="fx-intro__logo circular-logo" />
    </div>
  );
}
