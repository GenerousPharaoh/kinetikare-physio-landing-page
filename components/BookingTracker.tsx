'use client';

import { useEffect } from 'react';

const JANE_DOMAIN = 'janeapp.com';
const GA_ID = 'G-65FN5BN480';
const ADS_CONVERSION_ID = 'AW-18069490191/eeANCJi7n5ccEI-UmqhD';
const AD_LANDING_PATH = '/intake';

/**
 * Global click interceptor for Jane App booking links and phone-number links.
 *
 * GA4 events fire sitewide (engagement analytics). The Google Ads conversion
 * only fires when the click happens on the ad landing page (/intake). Firing
 * it sitewide would credit existing patients using the homepage as a shortcut
 * to JaneApp — those clicks are not ad-driven and inflate the conversion
 * count.
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

      const isAdLanding = window.location.pathname === AD_LANDING_PATH;
      if (!isAdLanding) return;

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
