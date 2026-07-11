'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SmoothScroll() {
  const pathname = usePathname();
  
  useEffect(() => {
    // Only run on desktop viewports for performance & native physics compatibility
    if (window.innerWidth < 1024) return;

    // Disable CSS smooth scroll to prevent conflict with JS scroll animation
    const originalScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';

    let targetY = window.scrollY;
    let currentY = window.scrollY;
    const ease = 0.08; // Smoothness factor (lower = smoother)
    let isWheeling = false;
    let wheelTimeout;
    let parallaxItems = [];

    // Measure and cache layout values without CSS transform influence
    const updateCache = () => {
      const elements = document.querySelectorAll('.parallax-img');
      const originalTransforms = [];
      
      // Clear transform to get actual layout bounding box
      elements.forEach((el) => {
        originalTransforms.push(el.style.transform);
        el.style.transform = '';
      });

      parallaxItems = Array.from(elements).map((el, index) => {
        const rect = el.getBoundingClientRect();
        const pageTop = rect.top + window.scrollY;
        return {
          el,
          pageTop,
          height: rect.height,
          speed: parseFloat(el.getAttribute('data-speed')) || -0.1
        };
      });

      // Restore original transforms
      elements.forEach((el, index) => {
        el.style.transform = originalTransforms[index];
      });
    };

    const onWheel = (e) => {
      e.preventDefault();
      isWheeling = true;
      clearTimeout(wheelTimeout);
      
      targetY += e.deltaY;
      
      // Clamp target scroll coordinate between 0 and maximum page scroll height
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetY = Math.max(0, Math.min(targetY, maxScroll));

      // Reset wheeling flag shortly after wheeling stops
      wheelTimeout = setTimeout(() => {
        isWheeling = false;
      }, 150);
    };

    // Synchronize target with window scroll on page jump or drag
    const onScroll = () => {
      // Only sync if not currently wheeling, to prevent dragging scrollbar conflicts
      if (!isWheeling && Math.abs(window.scrollY - currentY) > 10) {
        targetY = window.scrollY;
        currentY = window.scrollY;
      }
    };

    let animationFrame;

    const update = () => {
      if (Math.abs(targetY - currentY) > 0.1) {
        currentY += (targetY - currentY) * ease;
        window.scrollTo(0, currentY);
      } else {
        currentY = targetY;
      }

      // Parallax calculations using cached layout positions
      parallaxItems.forEach((item) => {
        const elementViewportTop = item.pageTop - currentY;
        const elementCenter = elementViewportTop + item.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const offset = (viewportCenter - elementCenter) * item.speed;
        
        // Apply transform scale and translate — scale gives bleed so the frame never shows blank edges
        item.el.style.transform = `scale(1.22) translateY(${offset}px)`;
      });

      animationFrame = requestAnimationFrame(update);
    };

    // Initial cache build and event handlers
    updateCache();
    window.addEventListener('resize', updateCache);
    window.addEventListener('load', updateCache);
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll);

    // Staggered cache updates to handle late-loading images or DOM reflows
    const t1 = setTimeout(updateCache, 500);
    const t2 = setTimeout(updateCache, 1500);
    const t3 = setTimeout(updateCache, 3000);

    animationFrame = requestAnimationFrame(update);

    return () => {
      document.documentElement.style.scrollBehavior = originalScrollBehavior;
      window.removeEventListener('resize', updateCache);
      window.removeEventListener('load', updateCache);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrame);
      clearTimeout(wheelTimeout);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  return null;
}
