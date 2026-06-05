'use client';

import { useEffect, useState } from 'react';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { JANE_INTAKE_BOOKING_URL } from '@/lib/booking';

/**
 * Sticky mobile Book/Call bar for the /intake ads landing page.
 *
 * FloatingButtons are disabled on /intake, so after a phone visitor scrolls
 * past the hero CTAs the next call-to-action is mid-page. This keeps Book and
 * Call one tap away for the whole scroll. Mobile/tablet only; the desktop
 * header keeps a persistent Book button. The cookie banner does not render on
 * /intake, so there is no bottom-of-screen conflict.
 *
 * Plain anchors (no data-booking-cta) so the global BookingTracker fires the
 * GA4 + Google Ads conversion and gtag's cross-domain linker decorates the
 * Jane URL for attribution. data-booking-source labels the event.
 */
export default function StickyBookingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      setVisible(window.scrollY > 600);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="flex lg:hidden"
      aria-hidden={!visible}
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        transform: visible ? 'translateY(0)' : 'translateY(130%)',
        transition: 'transform 0.32s cubic-bezier(0.22,1,0.36,1)',
        background: 'rgba(255,255,255,0.94)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderTop: '1px solid #E7E5E4',
        boxShadow: '0 -10px 30px -14px rgba(17,17,17,0.22)',
        padding: '10px 14px calc(10px + env(safe-area-inset-bottom))',
        gap: 10,
        alignItems: 'stretch',
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
          fontSize: 13,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          padding: '15px 16px',
          borderRadius: 12,
          textDecoration: 'none',
          boxShadow: '0 10px 24px -10px rgba(184,150,12,0.55)',
        }}
      >
        Book Assessment <ArrowRightIcon width={15} height={15} aria-hidden="true" />
      </a>
      <a
        href="tel:+19056346000"
        data-booking-source="intake_sticky_bar"
        aria-label="Call (905) 634-6000"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          background: '#FFFFFF',
          border: '1.5px solid #D6D3D1',
          color: '#292524',
          fontWeight: 600,
          fontSize: 14,
          padding: '14px 20px',
          borderRadius: 12,
          textDecoration: 'none',
        }}
      >
        <PhoneIcon width={17} height={17} style={{ color: '#B8960C' }} aria-hidden="true" />
        Call
      </a>
    </div>
  );
}
