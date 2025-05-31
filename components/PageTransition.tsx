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
      // Error setting up page transition - handle silently in production
      setIsError(true);
    }
  }, [disabled]);

  // Safety fallback: if any errors occur during setup, don't animate
  if (isError || isFirstRender || !shouldAnimate) {
    return <div className="min-h-screen w-full">{children}</div>;
  }

  // Ultra-subtle variants for much smoother transitions
  const variants = {
    hidden: {
      opacity: 0.95, // Start at 95% opacity for ultra-subtle fade
      y: 0, // No vertical movement
      // Only use minimal filter:blur effect
      ...(shouldAnimate ? { filter: "blur(0.5px)" } : {})
    },
    visible: {
      opacity: 1,
      y: 0,
      ...(shouldAnimate ? { filter: "blur(0px)" } : {}),
      transition: {
        duration: 0.15, // Reduced duration for snappier feel
        ease: [0.16, 1, 0.3, 1], // Use a custom easing curve (CSS cubic-bezier)
      }
    },
    exit: {
      opacity: 0.98, // Almost full opacity for subtler exit
      y: 0,
      ...(shouldAnimate ? { filter: "blur(0.25px)" } : {}),
      transition: {
        duration: 0.08, // Further reduced for exit
        ease: [0.16, 1, 0.3, 1], // Same custom easing
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
        style={{ 
          willChange: 'opacity, filter',
          // Force GPU rendering for smoother transitions
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          // Preserve 3D for better GPU acceleration
          transformStyle: 'preserve-3d',
        }}
        aria-live="polite"
        aria-atomic="true"
        onAnimationStart={() => {
          try {
            // Announce page change to screen readers
            const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'polite');
            announcement.setAttribute('aria-atomic', 'true');
            announcement.className = 'sr-only';
            announcement.textContent = `Page changed to ${pathname}`;
            document.body.appendChild(announcement);
            
            // Clean up after announcement
            setTimeout(() => {
              if (document.body.contains(announcement)) {
                document.body.removeChild(announcement);
              }
            }, 1000);
          } catch (error) {
            // Error announcing page change - handle silently in production
          }
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
} 