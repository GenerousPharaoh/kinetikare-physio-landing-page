'use client';

import React, { useState, useEffect } from 'react';
import { PhoneIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';
import { m as motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { BOOKING_PAGE_PATH, JANE_BOOKING_URL } from '@/lib/booking';

export default function FloatingButtons() {
  const [showMobileCta, setShowMobileCta] = useState(false);
  const pathname = usePathname();

  // The phone pill shows when no inline booking action is on screen, rather
  // than after a fixed scroll distance: the page's own Book buttons are the
  // primary action and the pill only stands in while none is visible. It also
  // hides while a `[data-hide-floating]` zone (the pattern-matcher quiz, whose
  // answers and result sit where the pill would) fills a good part of the
  // screen, and while the menu or search has locked the body scroll.
  // Booking links that mount later (a quiz result, a lazily rendered block)
  // are picked up by a MutationObserver instead of a one-off re-scan.
  useEffect(() => {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return;
    const onScreen = new Set<Element>();
    const zonesOnScreen = new Set<Element>();
    const watched = new WeakSet<Element>();
    let bodyLocked = false;
    const recompute = () =>
      setShowMobileCta(onScreen.size === 0 && zonesOnScreen.size === 0 && !bodyLocked && window.pageYOffset > 80);

    const linkObserver = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) onScreen.add(e.target);
        else onScreen.delete(e.target);
      }
      recompute();
    }, { threshold: 0.2 });

    const zoneObserver = new IntersectionObserver((entries) => {
      for (const e of entries) {
        const covers = e.isIntersecting && e.intersectionRect.height >= window.innerHeight * 0.3;
        if (covers) zonesOnScreen.add(e.target);
        else zonesOnScreen.delete(e.target);
      }
      recompute();
    }, { threshold: Array.from({ length: 21 }, (_, i) => i / 20) });

    const scan = () => {
      Array.from(onScreen).forEach((el) => { if (!el.isConnected) onScreen.delete(el); });
      Array.from(zonesOnScreen).forEach((el) => { if (!el.isConnected) zonesOnScreen.delete(el); });
      document
        .querySelectorAll('a[href*="janeapp.com"]:not([data-booking-source^="floating"])')
        .forEach((el) => {
          if (watched.has(el)) return;
          watched.add(el);
          linkObserver.observe(el);
        });
      document.querySelectorAll('[data-hide-floating]').forEach((el) => {
        if (watched.has(el)) return;
        watched.add(el);
        zoneObserver.observe(el);
      });
      recompute();
    };
    scan();

    let scanTimer: number | undefined;
    const content = new MutationObserver(() => {
      window.clearTimeout(scanTimer);
      scanTimer = window.setTimeout(scan, 150);
    });
    content.observe(document.body, { childList: true, subtree: true });

    const lock = new MutationObserver(() => {
      bodyLocked = document.body.style.overflow === 'hidden';
      recompute();
    });
    lock.observe(document.body, { attributes: true, attributeFilter: ['style', 'class'] });
    const onScroll = () => recompute();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.clearTimeout(scanTimer);
      linkObserver.disconnect();
      zoneObserver.disconnect();
      content.disconnect();
      lock.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [pathname]);

  // The /intake ads landing page has its own sticky Book/Call bar, and
  // /contact is the contact surface itself, so neither gets the pills.
  if (pathname === BOOKING_PAGE_PATH || pathname === '/contact') {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 400, damping: 24 },
    },
    hover: { scale: 1.04 },
    tap: { scale: 0.96 },
  };

  return (
    <>
      {/* Mobile: a compact pair in the corner rather than a full-width bar.
          The old bar was an opaque white slab pinned over every page and it
          duplicated the hero's own Book button on first paint. The pill uses
          the page booking gold (#B08D57, `button-gold`) so it matches the Book
          buttons it stands in for; the brighter #D4AF37 stays on navy
          surfaces (header, menu, footer). Call is a second pill. There is no
          back-to-top button at any width (Kareem, 2026-10-09). */}
      <AnimatePresence>
        {showMobileCta && (
          <motion.div
            className="fixed right-4 z-40 flex items-center gap-2 lg:hidden"
            style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="tel:+19056346000"
              aria-label="Call the clinic at 905-634-6000"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-900 shadow-lg backdrop-blur-md"
            >
              <PhoneIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={JANE_BOOKING_URL}
              data-booking-source="floating_mobile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book an appointment with Kareem Hassanein"
              className="flex h-12 items-center gap-2 rounded-full bg-[#B08D57] pl-4 pr-5 text-sm font-bold tracking-wide text-slate-950 shadow-lg shadow-[#B08D57]/30"
            >
              <CalendarDaysIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
              Book
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    <motion.div
      className={`hidden lg:flex fixed bottom-5 right-5 z-40 flex-col items-end space-y-2.5 md:space-y-3`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Book - primary, gold, always labelled */}
      <motion.a
        href={JANE_BOOKING_URL}
        data-booking-source="floating_desktop"
        target="_blank"
        rel="noopener noreferrer"
        className="button-gold flex items-center gap-2 h-12 md:h-14 pl-4 pr-5 rounded-full shadow-lg shadow-[#B08D57]/30 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#B08D57] focus:ring-offset-2 focus:ring-offset-white"
        aria-label="Book an appointment with Kareem Hassanein"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <CalendarDaysIcon className="h-5 w-5 md:h-6 md:w-6" />
        <span className="text-sm font-bold tracking-wide">Book</span>
      </motion.a>

      {/* Call - secondary, slate, labelled */}
      <motion.a
        href="tel:+19056346000"
        className="flex items-center gap-2 h-12 md:h-14 pl-4 pr-5 bg-slate-900 text-white rounded-full shadow-lg transition-colors duration-300 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2 focus:ring-offset-white"
        aria-label="Call Kareem Hassanein Physiotherapy at 905-634-6000"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <PhoneIcon className="h-5 w-5 md:h-6 md:w-6 text-[#D4AF37]" />
        <span className="text-sm font-semibold tracking-wide">Call</span>
      </motion.a>
    </motion.div>
    </>
  );
}
