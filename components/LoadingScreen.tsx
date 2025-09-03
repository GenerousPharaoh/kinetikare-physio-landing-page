'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Accelerating progress curve for more realistic feel
        const increment = prev < 50 ? 15 : prev < 80 ? 10 : 5;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    // Hide loading screen after completion
    const timer = setTimeout(() => {
      if (loadingProgress >= 100) {
        setIsLoading(false);
      }
    }, 1500);

    // Ensure loading screen shows for at least 1.5 seconds for premium feel
    const minTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
      clearTimeout(minTimer);
    };
  }, [loadingProgress]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
        >
          {/* Premium gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50" />
          
          {/* Subtle animated background pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,0.05) 35px, rgba(0,0,0,0.05) 70px)`,
                animation: 'slide 20s linear infinite'
              }}
            />
          </div>

          {/* Content container */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo container with premium animation */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="mb-12"
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                {/* Logo with premium glow effect */}
                <div className="relative">
                  <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-100 to-slate-100 opacity-50" />
                  <img 
                    src="/images/logo.png" 
                    alt="KinetiKare Physiotherapy"
                    className="relative w-48 h-48 object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Premium text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center mb-8"
            >
              <h1 className="text-2xl font-light text-gray-900 tracking-wider mb-2">
                KINETIKARE PHYSIOTHERAPY
              </h1>
              <p className="text-sm text-gray-500 tracking-widest uppercase">
                Excellence in Movement
              </p>
            </motion.div>

            {/* Premium progress bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="w-64"
            >
              <div className="relative">
                {/* Progress bar background */}
                <div className="h-0.5 bg-gray-200 rounded-full overflow-hidden">
                  {/* Animated progress fill */}
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: `${loadingProgress}%` }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                </div>
                
                {/* Progress percentage - premium style */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mt-4 text-center"
                >
                  <span className="text-xs text-gray-400 tracking-widest">
                    {loadingProgress}%
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Premium loading dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex space-x-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Bottom tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-0 right-0 text-center"
          >
            <p className="text-xs text-gray-400 tracking-widest uppercase">
              Burlington&apos;s Premier Physiotherapy
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Add CSS animation for background pattern
const styles = `
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(70px);
  }
}
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}