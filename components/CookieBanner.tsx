'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { BOOKING_PAGE_PATH } from '@/lib/booking';

const COOKIE_CONSENT_KEY = 'cookieConsentStatus';
const LEGACY_COOKIE_KEY = 'cookiesAccepted';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const isIntakePage = pathname === BOOKING_PAGE_PATH;

  useEffect(() => {
    try {
      const consentStatus = localStorage.getItem(COOKIE_CONSENT_KEY);
      const legacyAccepted = localStorage.getItem(LEGACY_COOKIE_KEY) === 'true';
      if (!consentStatus && legacyAccepted) localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
      setIsVisible(!consentStatus && !legacyAccepted && !isIntakePage);
    } catch {
      setIsVisible(!isIntakePage);
    }
  }, [isIntakePage]);

  const handleConsent = (status: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, status);

      if (status === 'accepted') {
        localStorage.setItem(LEGACY_COOKIE_KEY, 'true');
      } else {
        localStorage.removeItem(LEGACY_COOKIE_KEY);
      }

    } catch { /* Consent still applies to this page when storage is blocked. */ }

    window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: { status } }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="cookie-banner fixed z-[70] bottom-3 left-3 right-3 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:w-[min(34rem,calc(100%-2rem))] bg-slate-900/95 backdrop-blur-md rounded-2xl border border-[#B08D57]/30 shadow-2xl"
    >
      <div className="flex flex-col items-stretch gap-3 px-4 py-3 sm:flex-row sm:items-center sm:gap-3 sm:px-4 sm:py-2.5">
        <p className="flex-1 text-[13px] leading-relaxed text-slate-200 mb-0 sm:text-[13px]">
          This site uses essential and analytics cookies to improve website performance.
          <a
            href="/privacy"
            className="ml-1 text-[#D4AF37] underline underline-offset-2 hover:text-[#E0C158]"
          >
            Privacy Policy
          </a>
        </p>
        <div className="flex shrink-0 justify-end gap-2">
          <button
            onClick={() => handleConsent('declined')}
            className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-slate-500/60 px-3 py-1 text-[11px] font-medium text-slate-200 transition hover:border-slate-300 hover:text-white sm:px-4 sm:py-1.5 sm:text-[12px]"
          >
            Decline
          </button>
          <button
            onClick={() => handleConsent('accepted')}
            className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-[#B08D57] px-3 py-1 text-[11px] font-medium text-slate-950 transition hover:bg-[#9a7747] sm:px-4 sm:py-1.5 sm:text-[12px]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
