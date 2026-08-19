import { useEffect, useRef, useState } from "react";

const PREFERS_REDUCED =
  typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

/**
 * Counts up from 0 to `target` once the element scrolls into view.
 * ReactBits "CountUp" reinterpreted as a plain hook (see design-decisions
 * doc) — no animation dependency, just requestAnimationFrame.
 */
export function useCountUp(target, { suffix = "", duration = 1400 } = {}) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(PREFERS_REDUCED ? `${target}${suffix}` : `0${suffix}`);
  const firedRef = useRef(false);

  useEffect(() => {
    if (PREFERS_REDUCED) {
      setDisplay(`${target}${suffix}`);
      return;
    }
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setDisplay(`${target}${suffix}`);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !firedRef.current) {
            firedRef.current = true;
            io.unobserve(entry.target);
            const start = performance.now();
            function step(now) {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(`${Math.round(eased * target)}${suffix}`);
              if (p < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, suffix, duration]);

  return { ref, display };
}
