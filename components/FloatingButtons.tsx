"use client";

import React, { useState, useEffect } from 'react';
// import { PhoneCall, ArrowUp, Calendar } from 'lucide-react';
import { PhoneIcon, ArrowUpIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'; // Using solid icons
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleBookClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Analytics tracking can be added here if needed
  };

  const handleCallClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Analytics tracking can be added here if needed
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 24
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
    },
    tap: {
      scale: 0.95
    }
  };

  const tooltipVariants = {
    hidden: { opacity: 0, x: 10, scale: 0.9 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      x: 10, 
      scale: 0.9,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  return (
    <motion.div
      className="fixed bottom-5 lg:bottom-5 bottom-20 right-5 z-40 flex flex-col space-y-3"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Book Appointment Button */}
      <motion.a
        href="https://endorphinshealth.janeapp.com/#/staff_member/42"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleBookClick}
        onMouseEnter={() => setShowTooltip('book')}
        onMouseLeave={() => setShowTooltip(null)}
        className="group relative flex items-center justify-center w-14 h-14 bg-primary-600/90 backdrop-blur-md border border-primary-500/50 text-white rounded-full shadow-lg transition-colors duration-300 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
        aria-label="Book an appointment"
        title="Book an appointment"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <CalendarDaysIcon className="h-6 w-6" />
        <AnimatePresence>
          {showTooltip === 'book' && (
            <motion.div 
              className="absolute right-[calc(100%+0.5rem)] top-1/2 transform -translate-y-1/2 w-max"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={tooltipVariants}
            >
              <span className="block px-3 py-1.5 bg-primary-600/90 backdrop-blur-md border border-primary-500/50 text-white text-xs font-medium rounded-md shadow-md whitespace-nowrap">
                Book Now
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.a>
      
      {/* Call Button */}
      <motion.a
        href="tel:+19056346000"
        onClick={handleCallClick}
        onMouseEnter={() => setShowTooltip('call')}
        onMouseLeave={() => setShowTooltip(null)}
        className="group relative flex items-center justify-center w-14 h-14 bg-green-600/90 backdrop-blur-md border border-green-500/50 text-white rounded-full shadow-lg transition-colors duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-background"
        aria-label="Call us"
        title="Call us"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <PhoneIcon className="h-6 w-6" />
        <AnimatePresence>
          {showTooltip === 'call' && (
            <motion.div 
              className="absolute right-[calc(100%+0.5rem)] top-1/2 transform -translate-y-1/2 w-max"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={tooltipVariants}
            >
              <span className="block px-3 py-1.5 bg-green-600/90 backdrop-blur-md border border-green-500/50 text-white text-xs font-medium rounded-md shadow-md whitespace-nowrap">
                Call Us
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.a>
      
      {/* Scroll to Top Button */}
      <AnimatePresence mode="sync">
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            onMouseEnter={() => setShowTooltip('top')}
            onMouseLeave={() => setShowTooltip(null)}
            className="group relative flex items-center justify-center w-14 h-14 bg-accent/90 backdrop-blur-md border border-accent/50 text-white rounded-full shadow-lg transition-colors duration-300 hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            aria-label="Scroll to top"
            title="Scroll to top"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            whileHover="hover"
            whileTap="tap"
          >
            <ArrowUpIcon className="h-6 w-6" />
            <AnimatePresence>
              {showTooltip === 'top' && (
                <motion.div 
                  className="absolute right-[calc(100%+0.5rem)] top-1/2 transform -translate-y-1/2 w-max"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={tooltipVariants}
                >
                  <span className="block px-3 py-1.5 bg-accent/90 backdrop-blur-md border border-accent/50 text-white text-xs font-medium rounded-md shadow-md whitespace-nowrap">
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