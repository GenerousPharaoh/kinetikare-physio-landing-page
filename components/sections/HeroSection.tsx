"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

const HeroSection = React.memo(function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Simplified animations for mobile to prevent flickering
  const mobileAnimationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const desktopAnimationProps = {
    initial: { scale: 1.1, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section 
      className="hero-section relative overflow-hidden min-h-screen flex items-center py-24 lg:pt-36"
      style={{ willChange: 'transform' }}
    >
      {/* Enhanced backdrop image with mobile-optimized animation */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full overflow-hidden relative">
          <motion.div
            {...(isMobile ? mobileAnimationProps : desktopAnimationProps)}
            className="w-full h-full"
            style={{ willChange: 'transform, opacity' }}
          >
            <Image
              src="/images/clinic-pic-may-2025.jpg"
              alt="Physiotherapy treatment room"
              fill
              className="object-cover object-center"
              priority={true}
              quality={isMobile ? 75 : 90}
              sizes="100vw"
              style={{ 
                filter: 'brightness(0.6) contrast(1.2) saturate(1.2)',
                objectFit: 'cover',
                objectPosition: '70% center',
                willChange: 'transform'
              }}
            />
          </motion.div>
        </div>

        {/* Simplified gradient overlays for mobile */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary-900/70 via-primary-800/60 to-primary-800/65"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: isMobile ? 0.6 : 1.0, ease: "easeOut" }}
        />
        {!isMobile && (
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary-700/25"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          />
        )}
        
        {/* Simplified light effects - reduced on mobile */}
        {!isMobile && (
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute top-1/4 right-1/4 w-96 h-96 blur-3xl bg-gradient-to-br from-[#D4AF37]/20 via-transparent to-transparent rounded-full" 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{ duration: 2.0, delay: 0.8, ease: "easeOut" }}
            />
            <motion.div 
              className="absolute bottom-1/3 left-1/4 w-64 h-64 blur-2xl bg-gradient-to-br from-[#B08D57]/15 via-transparent to-transparent rounded-full" 
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.4 }}
              transition={{ duration: 2.5, delay: 1.2, ease: "easeOut" }}
            />
          </div>
        )}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-neutral-50/10 to-transparent z-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[80vh]">
          {/* Left side content - simplified animations for mobile */}
          <motion.div 
            initial={{ y: isMobile ? 20 : 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: isMobile ? 0.6 : 1.0, delay: isMobile ? 0.1 : 0.3, ease: [0.25, 0.8, 0.25, 1] }}
            className="lg:col-span-7 text-left space-y-8 lg:space-y-10"
          >
            <div className="max-w-4xl space-y-6 lg:space-y-8">
              {/* Elegant main heading with mobile-optimized reveals */}
              <div className="relative mb-8">
                {/* Professional identifier - simplified for mobile */}
                <motion.div
                  initial={{ y: isMobile ? 10 : 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: isMobile ? 0.4 : 0.6, delay: isMobile ? 0.2 : 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-6"
                >
                  <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${
                    isMobile 
                      ? 'bg-white/15 border border-white/30' 
                      : 'bg-white/10 backdrop-blur-xl border border-white/20'
                  }`}>
                    <div className="w-2 h-2 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full animate-pulse"></div>
                    <span className="text-white/90 text-sm md:text-base font-medium tracking-wide">
                      Kareem Hassanein Physiotherapy
                    </span>
                  </div>
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.05] relative">
                  {/* Simplified text animations for mobile */}
                  <div className="overflow-hidden">
                    <motion.span 
                      initial={{ y: isMobile ? 30 : 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: isMobile ? 0.5 : 0.8, delay: isMobile ? 0.3 : 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="block relative transform-gpu text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black"
                      style={{
                        textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 8px 40px rgba(176, 141, 87, 0.3)',
                        filter: 'contrast(1.1) brightness(1.1)',
                        willChange: 'transform'
                      }}
                    >
                      The Science of Recovery,
                    </motion.span>
                  </div>
                  
                  <div className="overflow-hidden">
                    <motion.span 
                      initial={{ y: isMobile ? 40 : 120, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: isMobile ? 0.6 : 1.0, delay: isMobile ? 0.5 : 1.0, ease: [0.16, 1, 0.3, 1] }}
                      className="block relative text-4xl md:text-5xl lg:text-6xl xl:text-7xl transform-gpu font-black"
                      style={{
                        background: 'linear-gradient(135deg, #B08D57 0%, #D4AF37 15%, #F4E4BC 35%, #D4AF37 55%, #B08D57 75%, #A17D47 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontWeight: '900',
                        letterSpacing: '0.01em',
                        willChange: 'transform'
                      }}
                    >
                      The Art of Care
                    </motion.span>
                  </div>
                </h1>
              </div>
              
              {/* Simplified tagline for mobile */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: isMobile ? 0.5 : 0.8, delay: isMobile ? 0.7 : 1.6 }}
                className="relative mb-10"
              >
                <div className="text-lg md:text-xl text-white leading-[1.6] max-w-2xl font-light relative z-10">
                  <div className="block">
                    <motion.span
                      initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: isMobile ? 0.4 : 0.6, delay: isMobile ? 0.8 : 1.8, ease: [0.16, 1, 0.3, 1] }}
                      className="font-medium text-white/95 inline-block mr-2"
                    >
                      Genuine Understanding.
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: isMobile ? 0.4 : 0.6, delay: isMobile ? 0.9 : 2.0, ease: [0.16, 1, 0.3, 1] }}
                      className="font-medium text-white/95 inline-block"
                    >
                      Expert Care.
                    </motion.span>
                  </div>
                  <div className="block">
                    <motion.span
                      initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: isMobile ? 0.4 : 0.6, delay: isMobile ? 1.0 : 2.2, ease: [0.16, 1, 0.3, 1] }}
                      className="font-medium text-[#D4AF37] inline-block"
                    >
                      Lasting Recovery.
                    </motion.span>
                  </div>
                </div>
                
                {/* Simplified background glow - removed on mobile */}
                {!isMobile && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#B08D57]/8 via-transparent to-[#D4AF37]/8 rounded-lg blur-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.4, duration: 1.0, ease: "easeOut" }}
                  />
                )}
              </motion.div>

              <motion.div 
                initial={{ y: isMobile ? 15 : 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: isMobile ? 0.5 : 0.8, delay: isMobile ? 1.1 : 2.6 }}
                className="flex flex-wrap gap-5 mt-10"
              >
                <motion.div
                  whileHover={isMobile ? {} : { scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                    target="_blank"
                    className="group relative px-7 py-3.5 font-semibold rounded-xl text-white flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent/30 bg-gradient-to-r from-[#B08D57] to-[#C9A769] hover:shadow-lg hover:shadow-[#B08D57]/30"
                    aria-label="Book an appointment online"
                  >
                    <CalendarDaysIcon className="h-5 w-5 transition-transform group-hover:scale-110" aria-hidden="true" />
                    <span className="tracking-wide">Book an Appointment</span>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={isMobile ? {} : { scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="/services" 
                    className={`relative px-7 py-3.5 font-semibold rounded-xl text-white flex items-center justify-center transition-all duration-300 group overflow-hidden focus:outline-none focus:ring-4 focus:ring-white/30 hover:shadow-lg hover:shadow-slate-900/20 ${
                      isMobile 
                        ? 'bg-slate-700/95 border border-slate-600/90 hover:bg-slate-600/95' 
                        : 'bg-slate-700/90 backdrop-blur-xl border border-slate-600/80 hover:bg-slate-600/90 hover:border-slate-500/80'
                    }`}
                    aria-label="Explore services"
                  >
                    <span className="tracking-wide">Explore Services</span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right side - Mobile-optimized Welcome Card */}
          <motion.div 
            initial={{ y: isMobile ? 20 : 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: isMobile ? 0.6 : 1.0, delay: isMobile ? 0.4 : 0.8, ease: [0.25, 0.8, 0.25, 1] }}
            className="lg:col-span-5 mt-8 lg:mt-0"
          >
            <div className="relative max-w-xl ml-auto">
              
              {/* Personal Welcome Card with mobile optimizations */}
              <motion.div 
                initial={{ scale: isMobile ? 0.98 : 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: isMobile ? 0.6 : 1.0, delay: isMobile ? 0.6 : 1.2, ease: [0.25, 0.8, 0.25, 1] }}
                className={`relative rounded-[2.5rem] p-8 lg:p-10 shadow-[0_32px_80px_-12px_rgba(0,0,0,0.35)] border border-white/60 overflow-hidden ${
                  isMobile 
                    ? 'bg-white/95' 
                    : 'bg-gradient-to-br from-white/98 via-white/95 to-slate-50/90 backdrop-blur-3xl'
                }`}
                style={{
                  background: isMobile 
                    ? 'rgba(255,255,255,0.95)' 
                    : 'linear-gradient(145deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 50%, rgba(248,250,252,0.92) 100%)',
                  boxShadow: '0 32px 80px -12px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 0 20px rgba(176, 141, 87, 0.03)',
                  willChange: 'transform'
                }}
              >
                {/* Simplified background pattern for mobile */}
                {!isMobile && (
                  <div className="absolute inset-0 opacity-[0.015]" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(176,141,87,0.4) 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                  }}></div>
                )}
                
                {/* Elegant top accent */}
                <motion.div 
                  className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#B08D57] to-transparent opacity-80"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: isMobile ? 0.6 : 1.2, delay: isMobile ? 0.8 : 1.6, ease: "easeOut" }}
                ></motion.div>
                
                {/* Simplified floating elements - removed on mobile */}
                {!isMobile && (
                  <>
                    <motion.div 
                      className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-[#B08D57]/8 via-[#D4AF37]/6 to-transparent rounded-full blur-2xl"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 2.0, delay: 1.8, ease: "easeOut" }}
                    ></motion.div>
                    <motion.div 
                      className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-tr from-[#D4AF37]/6 via-[#B08D57]/8 to-transparent rounded-full blur-xl"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 2.0, delay: 2.0, ease: "easeOut" }}
                    ></motion.div>
                  </>
                )}
                
                {/* Corner accent elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-gradient-to-br from-[#B08D57]/20 to-[#D4AF37]/20 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-gradient-to-br from-[#D4AF37]/20 to-[#B08D57]/20 rounded-full"></div>

                {/* Welcome Content */}
                <div className="relative z-10 text-center">
                  <motion.div 
                    initial={{ y: isMobile ? 10 : 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: isMobile ? 0.7 : 1.4, duration: isMobile ? 0.5 : 0.8 }}
                    className="mb-8"
                  >
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6 tracking-tight leading-tight">
                      Welcome
                    </h3>
                    <motion.div 
                      className="w-16 h-0.5 bg-gradient-to-r from-[#B08D57] via-[#D4AF37] to-[#B08D57] mx-auto mb-8 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: isMobile ? 0.6 : 1.0, delay: isMobile ? 0.8 : 1.6, ease: "easeOut" }}
                    ></motion.div>
                  </motion.div>

                  <motion.div 
                    initial={{ y: isMobile ? 10 : 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: isMobile ? 0.9 : 1.8, duration: isMobile ? 0.5 : 0.8 }}
                    className="space-y-6"
                  >
                    <p className="text-slate-700 leading-relaxed text-lg lg:text-xl font-medium tracking-wide">
                      I'm passionate about helping people move better, feel stronger, and get back to doing what they love.
                    </p>
                    
                    <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#B08D57]/30 to-transparent mx-auto my-6"></div>
                    
                    <p className="text-slate-600 leading-relaxed text-base lg:text-lg font-normal tracking-wide">
                      Every person's journey is unique, and I'm here to guide you through yours with care, understanding, and evidence-based treatment.
                    </p>
                  </motion.div>
                </div>
                
                {/* Premium inner glow - simplified for mobile */}
                {!isMobile && (
                  <div className="absolute inset-2 bg-gradient-to-br from-white/20 via-transparent to-[#B08D57]/5 rounded-[2rem] pointer-events-none"></div>
                )}
              </motion.div>
              
              {/* Subtle outer glow - removed on mobile */}
              {!isMobile && (
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-br from-[#B08D57]/10 to-[#D4AF37]/10 rounded-[2.5rem] blur-2xl opacity-60 -z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.6, scale: 1 }}
                  transition={{ duration: 2.0, delay: 2.2, ease: "easeOut" }}
                ></motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
