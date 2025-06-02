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

  // Cycling Tagline Component
  const CyclingTagline = ({ isMobile }: { isMobile: boolean }) => {
    const taglines = [
      "Comprehensive Assessment",
      "Hands-on Treatment", 
      "Personalized Physio Care"
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % taglines.length);
      }, 3000); // Change every 3 seconds
      
      return () => clearInterval(interval);
    }, [taglines.length]);
    
    return (
      <div className="min-h-[2.5rem] flex items-center justify-center">
        <motion.span 
          key={currentIndex}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-sm sm:text-base md:text-lg font-light inline-block text-center"
          style={{ 
            color: 'rgba(212, 175, 55, 0.7)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300',
            transform: isMobile ? 'translateZ(0)' : undefined
          }}
        >
          {taglines[currentIndex]}
        </motion.span>
      </div>
    );
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
        
        {/* Gradient Overlays - Slightly reduced intensity to let more image show */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
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
          
          {/* Kareem Hassanein Physiotherapy - Now at the top */}
          <motion.div
            initial={isMobile ? mobileAnimations.initial : { opacity: 0 }}
            animate={isMobile ? mobileAnimations.animate : { opacity: 1 }}
            transition={isMobile ? mobileAnimations.transition : { duration: 0.8, delay: 0.2 }}
            className="text-center mb-10"
          >
            <p 
              className="text-2xl sm:text-3xl md:text-4xl font-light"
              style={{ 
                background: 'linear-gradient(90deg, #E5E7EB 0%, #D4AF37 50%, #E5E7EB 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% auto',
                animation: 'shine 8s linear infinite',
                textShadow: '0 0 30px rgba(212, 175, 55, 0.3)',
                fontFamily: 'Playfair Display, serif',
                fontWeight: '400',
                fontStyle: 'italic',
                letterSpacing: '0.02em'
              }}
            >
              Kareem Hassanein
            </p>
            <p 
              className="text-sm sm:text-base mt-2 font-light tracking-[0.3em] uppercase text-center"
              style={{ 
                color: 'rgba(229, 231, 235, 0.7)',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '300'
              }}
            >
              Physiotherapy
            </p>
          </motion.div>

          {/* Premium Logo with Badge - More prominent */}
          <motion.div 
            initial={isMobile ? mobileAnimations.initial : desktopAnimations.logo.initial}
            animate={isMobile ? mobileAnimations.animate : desktopAnimations.logo.animate}
            transition={isMobile ? mobileAnimations.transition : desktopAnimations.logo.transition}
            className="flex justify-center mb-10 mt-6"
          >
            <motion.div 
              whileHover={isMobile ? undefined : { scale: 1.03 }}
              transition={isMobile ? undefined : { type: "spring", stiffness: 400, damping: 30 }}
              className="relative group"
            >
              {/* Clean, premium presentation */}
              <div className="relative" style={{ transform: 'translateZ(0)' }}>
                <Image
                  src="/images/kinetikare-logo.png"
                  alt="KinetiKare logo"
                  width={180}
                  height={180}
                  className="w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48"
                  style={{ 
                    filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.5)) drop-shadow(0 10px 20px rgba(212,175,55,0.1))',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
                  }}
                />
              </div>
            </motion.div>
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
                transition={isMobile ? { ...mobileAnimations.transition, delay: 0.2 } : { ...desktopAnimations.text.transition, delay: 0.4 }}
                className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 tracking-tight"
                style={{ 
                  textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)',
                  fontWeight: '700',
                  transform: isMobile ? 'translateZ(0)' : undefined
                }}
              >
                The Science of Recovery,
              </motion.span>
              <motion.span 
                initial={isMobile ? mobileAnimations.initial : desktopAnimations.text.initial}
                animate={isMobile ? mobileAnimations.animate : desktopAnimations.text.animate}
                transition={isMobile ? { ...mobileAnimations.transition, delay: 0.3 } : { ...desktopAnimations.text.transition, delay: 0.5 }}
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6"
                style={{
                  background: 'linear-gradient(135deg, #B08D57 0%, #D4AF37 25%, #F4E4BC 50%, #D4AF37 75%, #B08D57 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4))',
                  fontWeight: '900',
                  transform: isMobile ? 'translateZ(0)' : undefined
                }}
              >
                The Art of Care
              </motion.span>
            
              {/* Elegant Decorative Line Separator */}
            <motion.div
                initial={isMobile ? mobileAnimations.initial : { opacity: 0, scaleX: 0 }}
                animate={isMobile ? mobileAnimations.animate : { opacity: 1, scaleX: 1 }}
                transition={isMobile ? { ...mobileAnimations.transition, delay: 0.4 } : { duration: 0.8, delay: 0.6 }}
                className="w-full max-w-md mx-auto mb-4"
                >
                <div 
                  className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"
                      style={{ 
                    boxShadow: '0 0 8px rgba(212, 175, 55, 0.3)'
                      }}
                />
                </motion.div>
                
              {/* Integrated Subtitle Tagline */}
                <motion.div
                initial={isMobile ? mobileAnimations.initial : { opacity: 0, y: 10 }}
                animate={isMobile ? mobileAnimations.animate : { opacity: 1, y: 0 }}
                transition={isMobile ? { ...mobileAnimations.transition, delay: 0.5 } : { duration: 0.6, delay: 0.7 }}
                className="text-center px-4"
                >
                <CyclingTagline isMobile={isMobile} />
                </motion.div>
            </h1>
          </motion.div>
          
          {/* Enhanced CTA Buttons with Improved Hover States and Visual Weight */}
          <motion.div 
            initial={isMobile ? mobileAnimations.initial : { opacity: 0, y: 20 }}
            animate={isMobile ? mobileAnimations.animate : { opacity: 1, y: 0 }}
            transition={isMobile ? { ...mobileAnimations.transition, delay: 1.0 } : { duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
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
                className="group relative inline-flex items-center gap-3 px-9 py-4 bg-gradient-to-r from-[#B08D57] to-[#C9A769] text-white font-semibold rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                style={{ 
                  boxShadow: '0 8px 32px rgba(176, 141, 87, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2)',
                  transform: isMobile ? 'translateZ(0)' : undefined
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#C9A769] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
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
                className="group relative inline-flex items-center gap-3 px-9 py-4 bg-white/10 backdrop-blur-xl text-white font-medium rounded-xl border-2 border-white/40 overflow-hidden hover:bg-white/20 hover:border-white/60 transition-all duration-300"
                style={{ 
                  boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1)',
                  transform: isMobile ? 'translateZ(0)' : undefined
                }}
              >
                <span className="relative z-10 text-lg group-hover:text-white transition-colors duration-300">Explore Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#B08D57] group-hover:w-full transition-all duration-500" />
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Premium Dark Welcome Card - Fully Integrated Design */}
          <motion.div 
            initial={isMobile ? mobileAnimations.initial : { opacity: 0, y: 30 }}
            animate={isMobile ? mobileAnimations.animate : { opacity: 1, y: 0 }}
            transition={isMobile ? { ...mobileAnimations.transition, delay: 1.1 } : { duration: 0.8, delay: 0.8 }}
            className="w-full max-w-2xl mx-auto"
          >
            <div className="relative group">
              {/* Subtle glow effect that matches the overall theme */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/15 to-[#B08D57]/15 rounded-2xl blur-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Premium dark card that integrates with the overall design */}
              <div 
                className="relative backdrop-blur-2xl rounded-2xl p-8 sm:p-10 shadow-2xl border overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(30,41,59,0.95) 0%, rgba(15,23,42,0.92) 50%, rgba(30,41,59,0.95) 100%)',
                  borderColor: 'rgba(212, 175, 55, 0.3)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(212, 175, 55, 0.1)',
                  transform: isMobile ? 'translateZ(0)' : undefined
                }}
              >
                {/* Subtle decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#B08D57]/10 to-transparent rounded-full translate-y-12 -translate-x-12" />
                
                <div className="relative z-10 text-center">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    Welcome
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] mx-auto mb-6 rounded-full shadow-sm" />
                  
                  <p className="text-lg sm:text-xl text-white/95 mb-5 leading-relaxed font-medium">
                    I'm passionate about helping people move better, feel stronger, and get back to doing what they love.
                  </p>
                  
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto my-5" />
                  
                  <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                    Every person's journey is unique, and I'm here to guide you through yours with care, understanding, and evidence-based treatment.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
