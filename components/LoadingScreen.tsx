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
    }, 2400); // Shorter total loading time
    
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
        duration: 0.8,
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
      scale: [0.8, 1.2, 0.8],
      opacity: [0.3, 0.7, 0.3],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2
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
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[10%] right-[20%] w-48 h-48 rounded-full bg-primary-600/10 blur-xl" />
            <div className="absolute bottom-[20%] left-[15%] w-64 h-64 rounded-full bg-accent/10 blur-xl" />
          </div>
          
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Logo with Pulse Effect */}
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-accent/20 rounded-full blur-xl"
                variants={pulseVariants}
                initial="hidden"
                animate="visible"
              />
              
              <motion.div
                className="relative z-10 bg-primary-800 p-5 rounded-full shadow-lg"
                variants={logoVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="flex items-center justify-center w-24 h-24 text-5xl font-bold text-white">
                  KH
                </div>
              </motion.div>
            </div>
            
            {/* Animated Lines */}
            <div className="mt-10 relative flex gap-3">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-6 h-1 rounded-full bg-accent"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scaleX: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
            
            {/* Tagline */}
            <motion.div
              className="mt-8 text-center"
              variants={textVariants}
            >
              <p className="text-white font-medium text-lg tracking-wide">
                Physiotherapy Excellence
              </p>
            </motion.div>
          </div>
          
          {/* Noise texture */}
          <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        </motion.div>
      )}
      <style jsx global>{`
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}</style>
    </AnimatePresence>
  );
} 