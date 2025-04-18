"use client";

import React, { useState, useEffect } from 'react';
// import { PhoneCall, ArrowUp, Calendar } from 'lucide-react';
import { PhoneIcon, ArrowUpIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'; // Using solid icons
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

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
    // Potentially add analytics tracking here
    console.log("Booking button clicked");
  };

  const handleCallClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Potentially add analytics tracking here
    console.log("Call button clicked");
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
      scale: 1.1,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
    },
    tap: {
      scale: 0.95
    }
  };

  const tooltipVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      className="fixed bottom-5 right-5 z-40 flex flex-col space-y-3"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Book Appointment Button */}
      <motion.a
        href="https://endorphinshealth.janeapp.com/#/staff_member/6"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleBookClick}
        className="group flex items-center justify-center w-14 h-14 bg-primary/90 backdrop-blur-md border border-primary-600/30 text-white rounded-full shadow-lg transition-colors duration-300 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
        aria-label="Book an appointment"
        title="Book an appointment"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <CalendarDaysIcon className="h-6 w-6" />
        <motion.span 
          className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 px-3 py-1.5 bg-primary/90 backdrop-blur-md border border-primary-600/30 text-white text-xs font-medium rounded-md shadow-md whitespace-nowrap pointer-events-none"
          initial="hidden"
          whileHover="visible"
          variants={tooltipVariants}
          animate="hidden"
        >
          Book Now
        </motion.span>
      </motion.a>
      
      {/* Call Button */}
      <motion.a
        href="tel:+19056346000"
        onClick={handleCallClick}
        className="group flex items-center justify-center w-14 h-14 bg-green-600/90 backdrop-blur-md border border-green-500/30 text-white rounded-full shadow-lg transition-colors duration-300 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-background"
        aria-label="Call us"
        title="Call us"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <PhoneIcon className="h-6 w-6" />
        <motion.span 
          className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 px-3 py-1.5 bg-green-600/90 backdrop-blur-md border border-green-500/30 text-white text-xs font-medium rounded-md shadow-md whitespace-nowrap pointer-events-none"
          initial="hidden"
          whileHover="visible"
          variants={tooltipVariants}
          animate="hidden"
        >
          Call Us
        </motion.span>
      </motion.a>
      
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            className="group flex items-center justify-center w-14 h-14 bg-accent/90 backdrop-blur-md border border-accent/30 text-white rounded-full shadow-lg transition-colors duration-300 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
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
            <motion.span 
              className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 px-3 py-1.5 bg-accent/90 backdrop-blur-md border border-accent/30 text-white text-xs font-medium rounded-md shadow-md whitespace-nowrap pointer-events-none"
              initial="hidden"
              whileHover="visible"
              variants={tooltipVariants}
              animate="hidden"
            >
              Back to Top
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 