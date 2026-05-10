'use client';

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
 */
const GoogleAnalytics = () => {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;
  const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

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
          });
          ${GOOGLE_ADS_ID ? `gtag('config', '${GOOGLE_ADS_ID}');` : ''}
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
