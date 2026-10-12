'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

/**
 * Google Analytics + Google Ads loader.
 *
 * The existing opt-out loading model is preserved. A recorded decline denies
 * optional storage, both immediately and on future visits. Accepted consent
 * allows Jane's cross-domain linker to preserve booking attribution.
 *
 * Cross-domain linker is configured for endorphinshealth.janeapp.com.
 * gtag intercepts native `<a>` clicks targeting that domain and decorates
 * the href with `?_gl=<encoded ga cookie>` so JaneApp's gtag inherits the
 * same client_id and Google Ads can attribute the booking back to the
 * originating ad click. BookingCTA must not call e.preventDefault() —
 * doing so suppresses the linker's click hook.
 *
 * Initial `gtag('config', ...)` only fires the first pageview. Next.js App
 * Router client-side navigation does not retrigger it, so we manually fire
 * `page_view` on pathname/search changes to capture deeper-in-site views.
 */
const GoogleAnalytics = () => {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;
  const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    window.gtag('event', 'page_view', {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
      send_to: GA_MEASUREMENT_ID,
    });
  }, [pathname, GA_MEASUREMENT_ID]);

  useEffect(() => {
    const updateConsent = (event: Event) => {
      const status = (event as CustomEvent<{ status: string }>).detail?.status;
      if (status !== 'accepted' && status !== 'declined') return;
      const consent = status === 'accepted' ? 'granted' : 'denied';
      // ad_personalization stays denied even on Accept: see the config below.
      window.gtag?.('consent', 'update', {
        analytics_storage: consent,
        ad_storage: consent,
        ad_user_data: consent,
        ad_personalization: 'denied',
      });
    };
    window.addEventListener('cookie-consent-updated', updateConsent);
    return () => window.removeEventListener('cookie-consent-updated', updateConsent);
  }, []);

  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          if (!/(^|\\.)kinetikarephysio\\.com$/.test(location.hostname) || navigator.webdriver) {
            window['ga-disable-${GA_MEASUREMENT_ID}'] = true;
            ${GOOGLE_ADS_ID ? `window['ga-disable-${GOOGLE_ADS_ID}'] = true;` : ''}
          }
          var storedConsent = 'granted';
          try {
            if (localStorage.getItem('cookieConsentStatus') === 'declined') storedConsent = 'denied';
          } catch {}
          // Condition pages reveal health interests, and Google does not allow
          // remarketing audiences built from them, so ad personalisation is
          // off for every visitor and every consent state (2026-10-11).
          // Conversion measurement (bookings, calls, call-backs) is unaffected.
          gtag('consent', 'default', {
            analytics_storage: storedConsent,
            ad_storage: storedConsent,
            ad_user_data: storedConsent,
            ad_personalization: 'denied'
          });
          gtag('set', 'allow_ad_personalization_signals', false);
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            send_page_view: false,
            linker: {
              domains: ['endorphinshealth.janeapp.com'],
              decorate_forms: true,
            },
          });
          ${GOOGLE_ADS_ID ? `gtag('config', '${GOOGLE_ADS_ID}', { linker: { domains: ['endorphinshealth.janeapp.com'], decorate_forms: true } });` : ''}
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
