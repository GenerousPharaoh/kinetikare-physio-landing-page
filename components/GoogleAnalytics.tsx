'use client';

import Script from 'next/script';

/**
 * Google Analytics + Google Ads loader.
 *
 * gtag.js loads unconditionally. This site does not collect PII — no forms,
 * no stored user data. Booking happens entirely on Jane's domain. Gating
 * tracking behind the cookie banner was dropping 99% of Google Ads
 * conversions from cold ad traffic (first-time visitors who hadn't
 * interacted with the banner yet). Without PII collection there is no
 * meaningful privacy benefit to the gate, so it's removed.
 *
 * The CookieBanner component remains for the rest of the site as a
 * cosmetic notice about cookies; it no longer controls whether gtag
 * loads.
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
