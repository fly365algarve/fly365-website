import { useEffect, useState } from "react";

export function IntroOverlay() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    try {
      if (sessionStorage.getItem("fly365-intro-seen")) return;
      sessionStorage.setItem("fly365-intro-seen", "1");
    } catch { return; }
    setVisible(true);
    const timer = window.setTimeout(() => setExiting(true), 1450);
    const remove = window.setTimeout(() => setVisible(false), 1950);
    return () => { window.clearTimeout(timer); window.clearTimeout(remove); };
  }, []);
  if (!visible) return null;
  const skip = () => { setExiting(true); window.setTimeout(() => setVisible(false), 420); };
  return <div className={`intro-overlay ${exiting ? "intro-exit" : ""}`} onClick={skip} role="button" tabIndex={0} aria-label="Skip Fly365 Algarve intro" data-testid="intro-overlay" onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") skip(); }}>
    <img src="/images/logo.png" alt="" className="intro-logo circular-logo" />
    <svg className="intro-track" viewBox="0 0 420 70" aria-hidden="true"><path d="M8 42 C96 8 156 65 230 33 S342 8 412 34" /></svg>
    <p className="intro-title">FLY365 ALGARVE</p><span className="intro-skip">Click to skip</span>
  </div>;
}
