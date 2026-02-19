"use client";

import React, { useState, useEffect } from 'react';

const COOKIE_CONSENT_KEY = 'cookieConsentStatus';
const LEGACY_COOKIE_KEY = 'cookiesAccepted';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consentStatus = localStorage.getItem(COOKIE_CONSENT_KEY);
    const legacyAccepted = localStorage.getItem(LEGACY_COOKIE_KEY) === 'true';

    if (!consentStatus && legacyAccepted) {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
      setIsVisible(false);
      return;
    }

    if (!consentStatus) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (status: 'accepted' | 'declined') => {
    localStorage.setItem(COOKIE_CONSENT_KEY, status);

    if (status === 'accepted') {
      localStorage.setItem(LEGACY_COOKIE_KEY, 'true');
    } else {
      localStorage.removeItem(LEGACY_COOKIE_KEY);
    }

    window.dispatchEvent(
      new CustomEvent('cookie-consent-updated', { detail: { status } })
    );
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[70] border-t border-[#B08D57]/30 bg-slate-900/95 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-slate-100">
          This site uses essential and analytics cookies to improve website performance.
          <a href="/privacy" className="ml-2 text-[#D4AF37] underline underline-offset-2">Privacy Policy</a>
        </div>
        <div className="flex gap-2 md:justify-end">
          <button
            onClick={() => handleConsent('declined')}
            className="rounded-lg border border-slate-500/60 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-300 hover:text-white"
          >
            Decline
          </button>
          <button
            onClick={() => handleConsent('accepted')}
            className="rounded-lg bg-[#B08D57] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#9a7747]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner; 
