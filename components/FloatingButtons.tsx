'use client';

import { getScrollBehavior } from '@/lib/scroll';
import React, { useState, useEffect } from 'react';
import { PhoneIcon, ArrowUpIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { BOOKING_PAGE_PATH, JANE_BOOKING_URL } from '@/lib/booking';
import { HUB_PATHS } from '@/lib/condition-hubs';

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [showMobileCta, setShowMobileCta] = useState(false);
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const update = () => {
      // Only the scroll-to-top utility is gated by scroll depth.
      setIsVisible(window.pageYOffset > 500);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // The phone pill shows when no inline booking action is on screen, rather
  // than after a fixed scroll distance: the page's own Book buttons are the
  // primary action and the pill only stands in while none is visible. It also
  // stays hidden while the menu or search has locked the body scroll.
  useEffect(() => {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return;
    const onScreen = new Set<Element>();
    let bodyLocked = false;
    let observer: IntersectionObserver | null = null;
    const recompute = () => setShowMobileCta(onScreen.size === 0 && !bodyLocked && window.pageYOffset > 80);
    const observeAll = () => {
      observer?.disconnect();
      onScreen.clear();
      observer = new IntersectionObserver((entries) => {
        for (const e of entries) {
          if (e.isIntersecting) onScreen.add(e.target);
          else onScreen.delete(e.target);
        }
        recompute();
      }, { threshold: 0.2 });
      document
        .querySelectorAll('a[href*="janeapp.com"]:not([data-booking-source^="floating"])')
        .forEach((el) => observer!.observe(el));
      recompute();
    };
    // Content mounts after navigation; observe once now and again shortly after.
    observeAll();
    const t = window.setTimeout(observeAll, 1200);
    const lock = new MutationObserver(() => {
      bodyLocked = document.body.style.overflow === 'hidden';
      recompute();
    });
    lock.observe(document.body, { attributes: true, attributeFilter: ['style', 'class'] });
    const onScroll = () => recompute();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.clearTimeout(t);
      observer?.disconnect();
      lock.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [pathname]);

  // The /intake ads landing page has its own sticky Book/Call bar, and
  // /contact is the contact surface itself, so neither gets the pills.
  if (pathname === BOOKING_PAGE_PATH || pathname === '/contact') {
    return null;
  }

  // Condition detail pages own the bottom of the screen with their tab bar and
  // sub-section chips, so the pill stays off them rather than stacking on top.
  // Those pages carry their own booking links in content, including a Book
  // Assessment band at the end. Hubs, compare and pain-guides have no bottom
  // bar, so the pill stays on those.
  const path = pathname || '';
  const isConditionDetailPage =
    path.startsWith('/conditions/') &&
    !path.startsWith('/conditions/compare') &&
    !path.startsWith('/conditions/pain-guides') &&
    !HUB_PATHS.has(path);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: getScrollBehavior() });
  };

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

  const tooltipVariants = {
    hidden: { opacity: 0, x: 10, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
    exit: { opacity: 0, x: 10, scale: 0.9, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  return (
    <>
      {/* Mobile: a compact pair in the corner rather than a full-width bar.
          The old bar was an opaque white slab pinned over every page, it
          duplicated the hero's own Book button on first paint, and its
          `button-gold` (#B08D57) sat directly under the hero's #D4AF37, so two
          different golds were on screen at once. This keeps one booking action
          in the hero's gold, demotes Call to an icon, and drops the back-to-top
          (the desktop stack still carries it). */}
      <AnimatePresence>
        {showMobileCta && !isConditionDetailPage && (
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
              className="flex h-12 items-center gap-2 rounded-full bg-[#D4AF37] pl-4 pr-5 text-sm font-bold tracking-wide text-slate-900 shadow-lg shadow-[#D4AF37]/25"
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
        className="button-gold flex items-center gap-2 h-12 md:h-14 pl-4 pr-5 bg-[#D4AF37] text-slate-900 rounded-full shadow-lg shadow-[#D4AF37]/30 transition-colors duration-300 hover:bg-[#E6C66A] hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-white"
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

      {/* Scroll to top - utility, appears after scrolling */}
      <AnimatePresence mode="sync">
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            onMouseEnter={() => setShowTooltip('top')}
            onMouseLeave={() => setShowTooltip(null)}
            onFocus={() => setShowTooltip('top')}
            onBlur={() => setShowTooltip(null)}
            className="group relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 rounded-full shadow-lg transition-colors duration-300 hover:text-[#B08D57] focus:outline-none focus:ring-2 focus:ring-[#B08D57] focus:ring-offset-2 focus:ring-offset-white"
            aria-label="Scroll to top"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            whileHover="hover"
            whileTap="tap"
          >
            <ArrowUpIcon className="h-4 w-4 md:h-5 md:w-5" />
            <AnimatePresence>
              {showTooltip === 'top' && (
                <motion.div
                  className="absolute right-[calc(100%+0.5rem)] top-1/2 transform -translate-y-1/2 w-max"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={tooltipVariants}
                >
                  <span className="block px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-md shadow-md whitespace-nowrap">
                    Back to Top
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
    </>
  );
}
