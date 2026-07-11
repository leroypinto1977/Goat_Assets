'use client';

import { useEffect, useRef } from 'react';

/**
 * The 5-step approach flow with a gold progress line that draws itself across
 * as the user scrolls, lighting up each step as it passes. Falls back to the
 * fully-drawn state when prefers-reduced-motion is set.
 */
export default function ProcessTimeline({ steps }) {
  const flowRef = useRef(null);

  useEffect(() => {
    const flow = flowRef.current;
    if (!flow) return;

    const stepEls = flow.querySelectorAll('.approach-step');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      flow.style.setProperty('--flow-progress', 1);
      stepEls.forEach((el) => el.classList.add('step-active'));
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = flow.getBoundingClientRect();
      const viewH = window.innerHeight;
      // 0 as the flow enters the viewport → 1 once it clears ~45% of the screen
      const progress = Math.min(
        Math.max((viewH - rect.top) / (viewH * 0.55 + rect.height), 0),
        1
      );
      flow.style.setProperty('--flow-progress', progress.toFixed(4));
      stepEls.forEach((el, i) => {
        el.classList.toggle('step-active', progress >= (i + 0.6) / stepEls.length);
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="approach-flow" ref={flowRef}>
      <span className="flow-line" aria-hidden="true"></span>
      {steps.map((step, index) => (
        <div key={index} className={`approach-step reveal reveal-delay-${index}`}>
          <div className="step-number">{step.num}</div>
          <h3 className="step-title">{step.title}</h3>
          <p className="step-desc">{step.desc}</p>
        </div>
      ))}
    </div>
  );
}
