"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isComplete, setIsComplete] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  
  // Simulate loading with a cleaner approach
  useEffect(() => {
    // Set a timeout to complete the loading animation
    const loadingTimer = setTimeout(() => {
      setIsComplete(true);
      
      // Set another timeout to completely remove the component from the DOM
      setTimeout(() => {
        setShouldRender(false);
      }, 800);
    }, 2000); // Shorter total loading time
    
    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);

  // Don't render anything once completely done
  if (!shouldRender) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.1,
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  const pulseVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: [0.8, 1.1, 0.8],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3
      }
    }
  };

  return (
    <AnimatePresence mode="sync">
      {!isComplete && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-primary-900 z-50"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-radial from-primary-800/40 to-primary-900/90" />
          
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Logo with Pulse Effect */}
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-accent/10 rounded-full blur-xl"
                variants={pulseVariants}
                initial="hidden"
                animate="visible"
              />
              
              <motion.div
                className="relative z-10 bg-gradient-to-br from-primary-800 to-primary-700 p-5 rounded-full shadow-lg border border-primary-700/50"
                variants={logoVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 text-4xl md:text-5xl font-bold text-white">
                  KH
                </div>
              </motion.div>
            </div>
            
            {/* Progress line */}
            <div className="mt-10 w-48 h-[2px] bg-gray-700/50 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-accent/80 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ 
                  scaleX: [0, 0.5, 0.8, 1],
                  transition: { 
                    times: [0, 0.4, 0.8, 1], 
                    duration: 2,
                    ease: "easeInOut"
                  }
                }}
              />
            </div>
            
            {/* Minimalist tagline */}
            <motion.div
              className="mt-6 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p className="text-white/80 font-light tracking-widest text-sm uppercase">
                Restore · Strengthen · Move
              </p>
            </motion.div>
          </div>
          
          {/* Subtle noise texture */}
          <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
        </motion.div>
      )}
      <style jsx global>{`
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        .bg-gradient-radial {
          background-image: radial-gradient(var(--tw-gradient-stops));
        }
      `}</style>
    </AnimatePresence>
  );
} 