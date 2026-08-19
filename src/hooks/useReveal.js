import { useEffect, useRef, useState } from "react";

const PREFERS_REDUCED =
  typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

/**
 * Fade/slide an element in once it scrolls into view.
 * Mirrors the original vanilla-JS IntersectionObserver behavior:
 * observes once, unobserves after it fires, and shows content
 * immediately (no animation) when the visitor prefers reduced motion.
 */
export function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(PREFERS_REDUCED);

  useEffect(() => {
    if (PREFERS_REDUCED) return;
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, className: `reveal${visible ? " is-visible" : ""}` };
}
