'use client';

import { useEffect } from 'react';

const JANE_DOMAIN = 'janeapp.com';
const GA_ID = 'G-65FN5BN480';
const ADS_CONVERSION_ID = 'AW-18069490191/eeANCJi7n5ccEI-UmqhD';

/**
 * Global click interceptor that fires Google Ads conversion + GA4 event
 * on any link click to Jane App booking or phone number, across the entire site.
 * Mounts once in the root layout.
 */
export default function BookingTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      const isBooking = href.includes(JANE_DOMAIN);
      const isPhoneCall = href.startsWith('tel:');

      if (!isBooking && !isPhoneCall) return;

      // Don't double-fire if BookingCTA already handles this link
      if (anchor.closest('[data-booking-cta]')) return;

      if (typeof window.gtag !== 'function') return;

      // Fire GA4 event
      window.gtag('event', isPhoneCall ? 'phone_click' : 'booking_click', {
        event_category: 'conversion',
        event_label: anchor.closest('[data-booking-source]')?.getAttribute('data-booking-source') || 'site_link',
        send_to: GA_ID,
      });

      // Fire Google Ads conversion (beacon transport so it survives navigation)
      window.gtag('event', 'conversion', {
        send_to: ADS_CONVERSION_ID,
        value: isPhoneCall ? 110 : 130,
        currency: 'CAD',
        transport_type: 'beacon',
      });
    }

    document.addEventListener('click', handleClick, { capture: true });
    return () => document.removeEventListener('click', handleClick, { capture: true });
  }, []);

  return null;
}
