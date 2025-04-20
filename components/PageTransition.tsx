"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  // Allow disabling transitions completely
  disabled?: boolean;
}

export function PageTransition({ children, disabled = false }: PageTransitionProps) {
  const pathname = usePathname();
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [isError, setIsError] = useState(false);

  // Skip animation on first render for better performance
  useEffect(() => {
    try {
      // Mark first render as complete
      setIsFirstRender(false);
      
      // Don't animate if explicitly disabled
      if (disabled) {
        setShouldAnimate(false);
        return;
      }
      
      // Check if user prefers reduced motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Check if device is mobile or low-powered
      const isMobile = window.innerWidth < 768;
      const isLowPoweredDevice = isMobile || (navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 4);
      
      // Only animate on powerful devices and when user doesn't prefer reduced motion
      setShouldAnimate(!prefersReducedMotion && !isLowPoweredDevice);
    } catch (error) {
      console.error('Error setting up page transition:', error);
      setIsError(true);
      setShouldAnimate(false);
    }
  }, [disabled]);

  // Safety fallback: if any errors occur during setup, don't animate
  if (isError || isFirstRender || !shouldAnimate) {
    return <div className="min-h-screen w-full">{children}</div>;
  }

  // Simplified variants with reduced properties
  const variants = {
    hidden: {
      opacity: 0,
      // Only use filter:blur on desktop for better performance
      ...(shouldAnimate ? { filter: "blur(2px)" } : {})
    },
    visible: {
      opacity: 1,
      ...(shouldAnimate ? { filter: "blur(0px)" } : {}),
      transition: {
        duration: 0.25, // Reduced duration
        ease: "easeOut",
      }
    },
    exit: {
      opacity: 0,
      ...(shouldAnimate ? { filter: "blur(1px)" } : {}),
      transition: {
        duration: 0.15, // Further reduced for exit
        ease: "easeOut",
      }
    }
  };

  return (
    <AnimatePresence mode="sync" initial={false}>
      <motion.div
        key={pathname}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        className="min-h-screen w-full"
        style={{ willChange: 'opacity' }}
        aria-live="polite"
        aria-atomic="true"
        onAnimationStart={() => {
          // Announce page change to screen readers
          const announcer = document.getElementById('page-change-announcer') || 
            (() => {
              const div = document.createElement('div');
              div.id = 'page-change-announcer';
              div.setAttribute('aria-live', 'assertive');
              div.setAttribute('aria-atomic', 'true');
              div.className = 'sr-only';
              document.body.appendChild(div);
              return div;
            })();
            
          try {
            // Announce the page change
            const pageTitle = document.title || 'New page';
            announcer.textContent = `Navigated to ${pageTitle}`;
            
            // Clear the announcement after it's read
            setTimeout(() => {
              announcer.textContent = '';
            }, 1000);
          } catch (error) {
            console.warn('Error announcing page change:', error);
          }
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
} 