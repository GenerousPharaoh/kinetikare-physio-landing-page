'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { BOOKING_PAGE_PATH } from '@/lib/booking';
import styles from './CookieBanner.module.css';

const COOKIE_CONSENT_KEY = 'cookieConsentStatus';
const LEGACY_COOKIE_KEY = 'cookiesAccepted';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [height, setHeight] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isIntakePage = pathname === BOOKING_PAGE_PATH;

  useEffect(() => {
    try {
      const consentStatus = localStorage.getItem(COOKIE_CONSENT_KEY);
      const legacyAccepted = localStorage.getItem(LEGACY_COOKIE_KEY) === 'true';
      if (!consentStatus && legacyAccepted) localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
      setIsVisible(!consentStatus && !legacyAccepted && !isIntakePage);
    } catch {
      setIsVisible(!isIntakePage);
    }
  }, [isIntakePage]);

  // The card's height, so the phone Book and Call pills can sit above it.
  useEffect(() => {
    const card = cardRef.current;
    if (!isVisible || !card || typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(() => setHeight(Math.ceil(card.getBoundingClientRect().height)));
    observer.observe(card);
    return () => observer.disconnect();
  }, [isVisible]);

  // The card never rests on a booking button: when the page comes to rest
  // (and on load and resize) it checks the Book links under its corner and,
  // if one is there, rises to sit just above it. The condition pages' panel
  // keeps its Book button in the same bottom-left corner on laptops, and on
  // most pages the opening's Book button can sit there on first load.
  const [lift, setLift] = useState(0);
  const pathKey = pathname;
  useEffect(() => {
    const card = cardRef.current;
    if (!isVisible || !card) return;
    let timer: number | undefined;
    const check = () => {
      const vh = window.innerHeight;
      const header = document.querySelector('header[data-site-chrome]')?.getBoundingClientRect().bottom ?? 0;
      const rest = card.getBoundingClientRect();
      const offset = parseFloat(getComputedStyle(card).bottom) || 0;
      const h = rest.height;
      const restBottom = vh - offset;
      const controls = Array.from(
        document.querySelectorAll<HTMLElement>('a[data-booking-source], a[href*="janeapp.com"]'),
      )
        .filter((el) => !card.contains(el) && !el.closest('[data-floating-pills], header[data-site-chrome]'))
        .map((el) => el.getBoundingClientRect())
        .filter((r) => r.width > 0 && r.height > 0 && r.bottom > header && r.top < vh);
      let next = 0;
      // Rise above whatever booking control sits under the card, then check
      // again at the new height (a few rounds at most).
      for (let round = 0; round < 4; round += 1) {
        const top = restBottom - next - h;
        const bottom = restBottom - next;
        const hit = controls.filter(
          (r) => r.left < rest.right + 8 && r.right > rest.left - 8 && r.top < bottom + 8 && r.bottom > top - 8,
        );
        if (!hit.length) break;
        next = restBottom - (Math.min(...hit.map((r) => r.top)) - 12);
      }
      // No room above it (the card would reach the header): stay put.
      if (restBottom - next - h < header + 12) next = 0;
      setLift(Math.max(0, Math.round(next)));
    };
    const schedule = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(check, 160);
    };
    check();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [isVisible, height, pathKey]);

  const handleConsent = (status: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, status);

      if (status === 'accepted') {
        localStorage.setItem(LEGACY_COOKIE_KEY, 'true');
      } else {
        localStorage.removeItem(LEGACY_COOKIE_KEY);
      }

    } catch { /* Consent still applies to this page when storage is blocked. */ }

    window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: { status } }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* On phones the card spans the width; the Book and Call pills
          (FloatingButtons, bottom right) move up above it while it is open. */}
      {height > 0 && (
        <style>{`@media (max-width: 639px) { [data-floating-pills] { translate: 0 -${lift + height + 8}px; } }`}</style>
      )}
      <div
        ref={cardRef}
        role="region"
        aria-label="Cookie consent"
        className={styles.banner}
        style={lift ? ({ translate: `0 -${lift}px` } as React.CSSProperties) : undefined}
      >
        <p className={styles.text}>
          This site uses essential and analytics cookies to improve website performance.
          <a href="/privacy">
            Privacy Policy
          </a>
        </p>
        <div className={styles.choices}>
          <button
            type="button"
            onClick={() => handleConsent('declined')}
            className={styles.choice}
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => handleConsent('accepted')}
            className={`${styles.choice} ${styles.accept}`}
          >
            Accept
          </button>
        </div>
      </div>
    </>
  );
};

export default CookieBanner;
