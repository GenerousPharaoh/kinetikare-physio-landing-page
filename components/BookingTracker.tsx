'use client';

import { useEffect } from 'react';

const JANE_DOMAIN = 'janeapp.com';
const GA_ID = 'G-65FN5BN480';
const ADS_CONVERSION_ID = 'AW-18069490191/eeANCJi7n5ccEI-UmqhD';

/**
 * Global click interceptor for Jane App booking links and phone-number links.
 * Fires GA4 events and the Google Ads conversion sitewide.
 *
 * Conversion attribution is handled by Google Ads via the `_gcl_aw` GCLID
 * cookie. Clicks from users without a GCLID (no recent ad interaction) fire
 * the event but are not credited to any campaign and do not push spend.
 * Scoping conversion firing to the ad landing page would drop legitimate
 * multi-page ad-driven journeys (ad → /intake → another page → Book Now)
 * where the GCLID is still present but the final click is off /intake.
 *
 * BookingCTA on the intake page has its own handler and is skipped here via
 * the data-booking-cta attribute to avoid double-firing.
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

      if (anchor.closest('[data-booking-cta]')) return;

      if (typeof window.gtag !== 'function') return;

      window.gtag('event', isPhoneCall ? 'phone_click' : 'booking_click', {
        event_category: 'conversion',
        event_label: anchor.closest('[data-booking-source]')?.getAttribute('data-booking-source') || 'site_link',
        send_to: GA_ID,
      });

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
