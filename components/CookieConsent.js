'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'goat-cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Read consent only after mount so server and first client render match
    // (avoids a hydration mismatch); localStorage isn't available during SSR.
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setVisible(true);
      }
    } catch {
      /* localStorage unavailable — fail closed (don't show) */
    }
  }, []);

  const choose = (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent" aria-live="polite">
      <p className="cookie-text">
        We use cookies to enhance your experience and understand how the site is used. Read our{' '}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
      <div className="cookie-actions">
        <button type="button" className="btn btn-outline cookie-btn" onClick={() => choose('declined')}>
          Decline
        </button>
        <button type="button" className="btn btn-primary cookie-btn" onClick={() => choose('accepted')}>
          Accept
        </button>
      </div>
    </div>
  );
}
