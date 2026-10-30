import { useState } from "react";

export function RouteFlightVideo({ video }: { video: { src: string; poster?: string } }) {
  const [unavailable, setUnavailable] = useState(false);
  if (unavailable) return null;
  return <section className="mt-6 border-t border-[rgba(11,42,60,.16)] pt-5" aria-label="Real flight video">
    <h3 className="mb-3 text-xl text-[var(--navy)]">Watch the real flight</h3>
    <video className="w-full" controls playsInline preload="metadata" src={video.src} poster={video.poster}
      onError={() => setUnavailable(true)} aria-label="Watch the real flight" />
  </section>;
}
