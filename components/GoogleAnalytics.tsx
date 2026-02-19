'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

const COOKIE_CONSENT_KEY = 'cookieConsentStatus';
const LEGACY_COOKIE_KEY = 'cookiesAccepted';

const GoogleAnalytics = () => {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const readConsent = () => {
      const consentStatus = localStorage.getItem(COOKIE_CONSENT_KEY);
      const legacyAccepted = localStorage.getItem(LEGACY_COOKIE_KEY) === 'true';
      return consentStatus === 'accepted' || legacyAccepted;
    };

    setHasConsent(readConsent());

    const handleConsentUpdate = () => {
      setHasConsent(readConsent());
    };

    window.addEventListener('cookie-consent-updated', handleConsentUpdate);
    window.addEventListener('storage', handleConsentUpdate);
    return () => {
      window.removeEventListener('cookie-consent-updated', handleConsentUpdate);
      window.removeEventListener('storage', handleConsentUpdate);
    };
  }, []);

  if (!GA_MEASUREMENT_ID) {
    console.warn('Google Analytics ID not found');
    return null;
  }

  if (!hasConsent) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
