'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Animates the numeric part of a stat (e.g. "₹ 10,000+ Cr", "100+") counting up
 * when the element scrolls into view. Non-numeric values render unchanged.
 * Respects prefers-reduced-motion; server-renders the final value for SEO/no-JS.
 */
export default function StatCounter({ value, duration = 1800 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const match = String(value).match(/^([^0-9]*)([\d,]+)(.*)$/);
    const el = ref.current;
    if (!match || !el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const target = parseInt(match[2].replace(/,/g, ''), 10);
    const grouped = match[2].includes(',');
    const format = (n) =>
      match[1] + (grouped ? n.toLocaleString('en-IN') : String(n)) + match[3];

    let frame;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(format(Math.round(target * eased)));
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        setDisplay(format(0));
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}
