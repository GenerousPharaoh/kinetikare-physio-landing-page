'use client';

import { useEffect, useState } from 'react';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { JANE_INTAKE_BOOKING_URL } from '@/lib/booking';

/**
 * Slim, self-hiding mobile Book/Call control for the /intake ads landing page.
 *
 * FloatingButtons are disabled on /intake, so the page has CTA "dead zones"
 * between the hero and mid-page CTAs. This floats two compact pills (Book +
 * Call) that appear only in those gaps: it watches the inline Book CTAs
 * (data-booking-cta) and hides itself whenever one is on screen, so it never
 * stacks under a visible "Book Assessment" button. Mobile/tablet only; the
 * desktop header keeps a persistent Book button.
 *
 * Plain anchors (no data-booking-cta) so the global BookingTracker fires the
 * GA4 + Google Ads conversion and gtag's cross-domain linker decorates the
 * Jane URL. data-booking-source labels the event.
 */
export default function StickyBookingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const inlineCtas = Array.from(document.querySelectorAll('[data-booking-cta]'));
    const onScreen = new Map<Element, boolean>();
    inlineCtas.forEach((el) => onScreen.set(el, false));
    let scrolledPastHero = window.scrollY > 600;

    const recompute = () => {
      const aCtaIsOnScreen = Array.from(onScreen.values()).some(Boolean);
      // Show only in the gaps: past the hero, and no inline Book CTA visible.
      setVisible(scrolledPastHero && !aCtaIsOnScreen);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => onScreen.set(e.target, e.isIntersecting));
        recompute();
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0 }
    );
    inlineCtas.forEach((el) => io.observe(el));

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        scrolledPastHero = window.scrollY > 600;
        recompute();
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    recompute();

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div
      className="flex lg:hidden"
      aria-hidden={!visible}
      style={{
        position: 'fixed',
        left: 12,
        right: 12,
        bottom: 'calc(12px + env(safe-area-inset-bottom))',
        zIndex: 50,
        gap: 10,
        alignItems: 'stretch',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(18px)',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.26s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      <a
        href={JANE_INTAKE_BOOKING_URL}
        data-booking-source="intake_sticky_bar"
        style={{
          flex: 1,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          background: '#D4AF37',
          color: '#1C1917',
          fontWeight: 700,
          fontSize: 12.5,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '12px 16px',
          borderRadius: 999,
          textDecoration: 'none',
          boxShadow: '0 8px 26px -8px rgba(184,150,12,0.6)',
        }}
      >
        Book Assessment <ArrowRightIcon width={14} height={14} aria-hidden="true" />
      </a>
      <a
        href="tel:+19056346000"
        data-booking-source="intake_sticky_bar"
        aria-label="Call (905) 634-6000"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 7,
          background: 'rgba(255,255,255,0.96)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid #D6D3D1',
          color: '#292524',
          fontWeight: 600,
          fontSize: 13,
          padding: '12px 18px',
          borderRadius: 999,
          textDecoration: 'none',
          boxShadow: '0 8px 26px -10px rgba(17,17,17,0.25)',
        }}
      >
        <PhoneIcon width={16} height={16} style={{ color: '#B8960C' }} aria-hidden="true" />
        Call
      </a>
    </div>
  );
}
