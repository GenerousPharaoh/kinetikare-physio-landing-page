'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

/**
 * Google Analytics + Google Ads loader.
 *
 * gtag.js loads unconditionally and consent is granted by default for all
 * storage types. The site collects no PII and the CookieBanner is a
 * cosmetic notice only.
 *
 * The explicit `gtag('consent', 'default', {...granted})` call before the
 * config commands is required: without it, gtag can fall back to Consent
 * Mode cookieless pings in browsers with strict policies (Safari ITP,
 * EEA defaults), which prevents the `_gcl_aw` cookie from being written
 * and breaks Google Ads attribution from ad click → site visit →
 * Book Now click.
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
          gtag('consent', 'default', {
            analytics_storage: 'granted',
            ad_storage: 'granted',
            ad_user_data: 'granted',
            ad_personalization: 'granted'
          });
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
