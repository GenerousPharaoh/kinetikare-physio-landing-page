"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

const HeroSection = React.memo(function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Simplified animations for mobile to reduce flickering
  const mobileAnimations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3, ease: "easeOut" }
  };

  const desktopAnimations = {
    background: {
      initial: { scale: 1.1 },
      animate: { scale: 1 },
      transition: { duration: 1.5, ease: "easeOut" }
    },
    logo: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeOut" }
    },
    text: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    }
  };


  return (
    <section 
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        // Ensure dark fallback background to prevent body gradient from showing
        background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #1a202c 100%)'
      }}
    >
      {/* Animated Background - Simplified on mobile */}
      <motion.div 
        initial={isMobile ? mobileAnimations.initial : desktopAnimations.background.initial}
        animate={isMobile ? mobileAnimations.animate : desktopAnimations.background.animate}
        transition={isMobile ? mobileAnimations.transition : desktopAnimations.background.transition}
        className="absolute inset-0 w-full h-full"
        style={{ 
          transform: 'translateZ(0)',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          perspective: 1000,
          // Ensure this container takes full space
          minHeight: '100vh',
          minWidth: '100vw'
        }}
      >
        {/* Background Image with improved sizing */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            // Fallback background in case image doesn't load
            background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #1a202c 100%)',
            minHeight: '100vh',
            minWidth: '100vw'
          }}
      >
        <Image
          src="/images/clinic-pic-may-2025.jpg"
          alt="Physiotherapy clinic"
          fill
          priority
            quality={isMobile ? 75 : 95}
            className="object-cover w-full h-full"
            style={{ 
              filter: 'brightness(0.5) contrast(1.1)',
              // Ensure image covers entire container at all sizes
              objectFit: 'cover',
              minHeight: '100vh',
              minWidth: '100vw'
            }}
            sizes="100vw"
        />
        </div>
        
        {/* Gradient Overlays - Lighter to show more atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* Animated Light Effects - Disabled on mobile to prevent flickering */}
        {!isMobile && (
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-full blur-3xl"
        />
        )}
      </motion.div>
      
      {/* Content Container - Guaranteed Visibility */}
      <div 
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20"
        style={{ minHeight: '100vh' }}
      >
        <div className="w-full max-w-7xl mx-auto">
          
          {/* Name and Credentials - Simplified */}
          <motion.div
            initial={isMobile ? mobileAnimations.initial : { opacity: 0, y: -20 }}
            animate={isMobile ? mobileAnimations.animate : { opacity: 1, y: 0 }}
            transition={isMobile ? mobileAnimations.transition : { duration: 0.6, delay: 0.2 }}
            className="text-center mb-8"
          >
            <p className="text-sm sm:text-base text-[#D4AF37] font-medium tracking-[0.2em] uppercase mb-2">
              Kareem Hassanein, Registered Physiotherapist
            </p>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto"></div>
          </motion.div>

          
          {/* Hero Text with Enhanced Typography and Dynamic Weight */}
          <motion.div 
            initial={isMobile ? mobileAnimations.initial : { opacity: 0 }}
            animate={isMobile ? mobileAnimations.animate : { opacity: 1 }}
            transition={isMobile ? { ...mobileAnimations.transition, delay: 0.1 } : { duration: 0.8, delay: 0.2 }}
            className="text-center mb-6"
          >
            <h1 className="mb-8">
              {/* Enhanced typography with different weights for visual rhythm */}
              <motion.span 
                initial={isMobile ? mobileAnimations.initial : desktopAnimations.text.initial}
                animate={isMobile ? mobileAnimations.animate : desktopAnimations.text.animate}
                transition={isMobile ? { ...mobileAnimations.transition, delay: 0.2 } : { ...desktopAnimations.text.transition, delay: 0.3 }}
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-3 tracking-tight leading-[0.9]"
                style={{ 
                  textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)',
                  transform: isMobile ? 'translateZ(0)' : undefined
                }}
              >
                Expert Care for
              </motion.span>
              <motion.span 
                initial={isMobile ? mobileAnimations.initial : desktopAnimations.text.initial}
                animate={isMobile ? mobileAnimations.animate : desktopAnimations.text.animate}
                transition={isMobile ? { ...mobileAnimations.transition, delay: 0.3 } : { ...desktopAnimations.text.transition, delay: 0.4 }}
                className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F4E4BC 50%, #D4AF37 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4))',
                  transform: isMobile ? 'translateZ(0)' : undefined
                }}
              >
                Lasting Recovery
              </motion.span>
            
              {/* Subtitle */}
              <motion.div
                initial={isMobile ? mobileAnimations.initial : { opacity: 0, y: 10 }}
                animate={isMobile ? mobileAnimations.animate : { opacity: 1, y: 0 }}
                transition={isMobile ? { ...mobileAnimations.transition, delay: 0.4 } : { duration: 0.6, delay: 0.5 }}
                className="text-center px-4 mb-12"
              >
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
                  Advanced physiotherapy combining manual therapy, movement science, and personalized rehabilitation
                </p>
              </motion.div>
            </h1>
          </motion.div>
          
          {/* CTA Buttons - Cleaner Design */}
          <motion.div 
            initial={isMobile ? mobileAnimations.initial : { opacity: 0, y: 20 }}
            animate={isMobile ? mobileAnimations.animate : { opacity: 1, y: 0 }}
            transition={isMobile ? { ...mobileAnimations.transition, delay: 0.6 } : { duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary CTA - Enhanced hover effects */}
            <motion.div 
              whileHover={isMobile ? undefined : { scale: 1.05, y: -3 }} 
              whileTap={{ scale: 0.98 }}
              transition={isMobile ? undefined : { type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link 
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37] hover:bg-[#C9A050] text-slate-900 font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <CalendarDaysIcon className="relative z-10 h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10 text-lg">Book an Appointment</span>
              </Link>
            </motion.div>
            
            {/* Secondary CTA - Refined visual weight and enhanced hover */}
            <motion.div 
              whileHover={isMobile ? undefined : { scale: 1.05, y: -3 }} 
              whileTap={{ scale: 0.98 }}
              transition={isMobile ? undefined : { type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/services" 
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white font-medium rounded-xl border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                <span className="relative z-10 text-lg">Explore Services</span>
              </Link>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
