"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Show button after scrolling 500px
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: { 
      opacity: 0, 
      y: 20, 
      scale: 0.9,
      transition: {
        duration: 0.2
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

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="md:hidden fixed bottom-20 right-6 z-50"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={buttonVariants}
        >
          <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
          >
            <Link
              href="https://endorphinshealth.janeapp.com/#/staff_member/42"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-medium px-5 py-3 rounded-full shadow-lg transition-all duration-200"
              aria-label="Book appointment"
            >
              <CalendarDaysIcon className="h-5 w-5" />
              <span>Book Now</span>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 