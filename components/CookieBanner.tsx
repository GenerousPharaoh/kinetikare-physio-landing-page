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
    const consentStatus = localStorage.getItem(COOKIE_CONSENT_KEY);
    const legacyAccepted = localStorage.getItem(LEGACY_COOKIE_KEY) === 'true';

    if (!consentStatus && legacyAccepted) {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
      setIsVisible(false);
      return;
    }

    if (!consentStatus && !isIntakePage) {
      setIsVisible(true);
    }
  }, [isIntakePage]);

  const handleConsent = (status: 'accepted' | 'declined') => {
    localStorage.setItem(COOKIE_CONSENT_KEY, status);

    if (status === 'accepted') {
      localStorage.setItem(LEGACY_COOKIE_KEY, 'true');
    } else {
      localStorage.removeItem(LEGACY_COOKIE_KEY);
    }

    window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: { status } }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed z-[70] bg-slate-900/95 backdrop-blur-md ${
        isIntakePage
          ? 'bottom-3 left-3 right-3 rounded-2xl border border-[#B08D57]/30 shadow-2xl md:left-1/2 md:right-auto md:w-[min(46rem,calc(100%-2rem))] md:-translate-x-1/2'
          : 'bottom-0 left-0 right-0 border-t border-[#B08D57]/30'
      }`}
    >
      <div
        className={`container mx-auto flex flex-col gap-4 px-4 py-4 ${
          isIntakePage ? 'sm:gap-3 sm:px-5 sm:py-3.5 md:px-5' : ''
        } md:flex-row md:items-center md:justify-between`}
      >
        <div
          className={`text-slate-100 ${
            isIntakePage
              ? 'text-[12px] leading-5 sm:text-[13px] sm:leading-5 md:text-sm'
              : 'text-sm'
          }`}
        >
          This site uses essential and analytics cookies to improve website performance.
          <a
            href="/privacy"
            className={`text-[#D4AF37] underline underline-offset-2 ${isIntakePage ? 'ml-1.5' : 'ml-2'}`}
          >
            Privacy Policy
          </a>
        </div>
        <div
          className={`${
            isIntakePage ? 'grid grid-cols-2 gap-2 sm:flex sm:justify-end' : 'flex gap-2'
          } md:justify-end`}
        >
          <button
            onClick={() => handleConsent('declined')}
            className={`rounded-lg border border-slate-500/60 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-300 hover:text-white ${
              isIntakePage ? 'w-full' : ''
            }`}
          >
            Decline
          </button>
          <button
            onClick={() => handleConsent('accepted')}
            className={`rounded-lg bg-[#B08D57] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#9a7747] ${
              isIntakePage ? 'w-full' : ''
            }`}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
