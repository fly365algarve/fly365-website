import { useEffect, useState } from "react";

export function CockpitHud({ routeName, progress, place }: { routeName: string; progress: number; place: string }) {
  const [lastPlace, setLastPlace] = useState(place);
  useEffect(() => { if (place) setLastPlace(place); }, [place]);
  return <div className="cockpit-hud" data-testid="cockpit-hud">
    <p>{routeName}</p>
    <div className="cockpit-progress" role="progressbar" aria-label="Flight progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)}>
      <span style={{ transform: `scaleX(${progress / 100})` }} />
    </div>
    <p className={`cockpit-place ${place ? "cockpit-place-visible" : ""}`} aria-hidden="true">{lastPlace || "\u00a0"}</p>
    <span className="sr-only" aria-live="polite">{place}</span>
  </div>;
}
