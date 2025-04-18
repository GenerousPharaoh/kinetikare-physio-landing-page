"use client";

import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

// Updated page transition variants for a more professional effect
const pageVariants = {
  hidden: { 
    opacity: 0, 
    x: -20,
    filter: 'blur(5px)',
    scale: 0.98
  },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: { 
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] // Custom easing for smooth professional feel
    }
  },
  exit: { 
    opacity: 0, 
    x: 20,
    filter: 'blur(5px)',
    scale: 0.98,
    transition: { 
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Improved gradient variants for subtle background effect
const gradientVariants = {
  hidden: { 
    opacity: 0,
    scale: 1.1
  },
  visible: { 
    opacity: 0.3,
    scale: 1,
    transition: { 
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: { 
    opacity: 0,
    scale: 1.1,
    transition: { 
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function PageTransitions({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [key, setKey] = useState('');

  // Generate a key for transitions based on route
  useEffect(() => {
    // Create a unique key for each route change to trigger animations
    const params = new URLSearchParams(searchParams);
    const queryString = params.toString();
    const newKey = queryString ? `${pathname}?${queryString}` : pathname;
    setKey(newKey);
  }, [pathname, searchParams]);

  return (
    <div className="transition-container">
      <AnimatePresence mode="wait">
        {/* Background gradient for depth effect */}
        <motion.div
          key={`gradient-${key}`}
          className="bg-gradient"
          variants={gradientVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        />

        {/* Main content with professional transition */}
        <motion.div
          key={key}
          className="transition-content"
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Noise texture overlay for depth */}
      <div className="bg-noise" />

      <style jsx>{`
        .transition-container {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow-x: hidden;
        }

        .bg-gradient {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 30%, var(--color-accent-lighter), transparent 70%),
                      radial-gradient(circle at 70% 70%, var(--color-primary-light), transparent 70%);
          opacity: 0.15;
          z-index: -2;
          pointer-events: none;
        }

        .transition-content {
          position: relative;
          z-index: 1;
        }

        .bg-noise {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.03;
          z-index: -1;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
} 