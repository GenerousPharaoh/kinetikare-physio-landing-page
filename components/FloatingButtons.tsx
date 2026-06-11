'use client';

import React, { useState, useEffect } from 'react';
import { PhoneIcon, ArrowUpIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { BOOKING_PAGE_PATH, JANE_BOOKING_URL } from '@/lib/booking';

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const update = () => {
      // Only the scroll-to-top utility is gated by scroll depth; the Book and
      // Call pills stay visible at all times so the booking path is always one
      // tap away (they no longer tuck away on scroll-down).
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

  // The /intake ads landing page has its own sticky Book/Call bar.
  if (pathname === BOOKING_PAGE_PATH) {
    return null;
  }

  // Condition detail pages carry a Book action in their mobile bottom bar, so
  // the floating stack is hidden there on mobile (it would collide) but kept on
  // desktop, where there is no bottom bar. Hubs / compare / pain-guides have no
  // bottom bar, so the stack stays everywhere on those.
  const path = pathname || '';
  const isConditionDetailPage =
    path.startsWith('/conditions/') &&
    !path.startsWith('/conditions/compare') &&
    !path.startsWith('/conditions/pain-guides') &&
    !['/conditions/knee-pain', '/conditions/hip-pain', '/conditions/shoulder-pain', '/conditions/elbow-pain'].includes(path);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <motion.div
      className={`${isConditionDetailPage ? 'hidden lg:flex' : 'flex'} fixed bottom-24 right-4 md:bottom-5 md:right-5 z-40 flex-col items-end space-y-2.5 md:space-y-3`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Book - primary, gold, always labelled */}
      <motion.a
        href={JANE_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 h-12 md:h-14 pl-4 pr-5 bg-[#D4AF37] text-slate-900 rounded-full shadow-lg shadow-[#D4AF37]/30 transition-colors duration-300 hover:bg-[#c9a227] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-white"
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
  );
}
