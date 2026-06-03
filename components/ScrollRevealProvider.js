'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRevealProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // Run observer setup after page render
    const timer = setTimeout(() => {
      const reveals = document.querySelectorAll('.reveal');
      if (reveals.length === 0) return;

      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the element is visible
      };

      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      reveals.forEach((el) => {
        // Reset state for items on path change so they animate cleanly
        el.classList.remove('active');
        revealObserver.observe(el);
      });

      return () => {
        revealObserver.disconnect();
      };
    }, 100); // Small delay to ensure route DOM is fully loaded

    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}
