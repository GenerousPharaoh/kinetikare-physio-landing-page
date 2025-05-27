"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { 
  CheckBadgeIcon, 
  AcademicCapIcon, 
  ShieldCheckIcon,
  StarIcon,
  UserGroupIcon,
  ClockIcon
} from '@heroicons/react/24/solid';

const HeroSection = React.memo(function HeroSection() {
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  return (
    <section 
      className="hero-section relative overflow-hidden min-h-screen flex items-center py-24 lg:pt-36"
    >
      {/* Enhanced backdrop image with dynamic effects */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full overflow-hidden relative">
          <motion.div
            initial={{ scale: prefersReducedMotion ? 1.2 : 1.3, opacity: 0 }}
            animate={{ 
              scale: 1.2,
              opacity: 1
            }}
            transition={{
              scale: { duration: prefersReducedMotion ? 1.0 : 2.5, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: prefersReducedMotion ? 0.5 : 1.5, ease: [0.16, 1, 0.3, 1] }
            }}
            className="w-full h-full"
          >
          <Image
              src="/images/clinic-pic-may-2025.jpg"
            alt="Physiotherapy treatment room"
            fill
            className="object-cover object-center"
            priority={true}
            quality={90}
            sizes="100vw"
            style={{ 
                filter: 'brightness(0.6) contrast(1.2) saturate(1.2) hue-rotate(8deg)',
              objectFit: 'cover',
                objectPosition: '70% center',
              opacity: 1
              }}
            />
          </motion.div>
          
          {/* Subtle vignette effect for premium look */}
          <motion.div 
            className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 3.0, 
              ease: [0.16, 1, 0.3, 1],
              delay: 1.0
            }}
          />
        </div>

        {/* Enhanced gradient overlays with elegant entrance */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary-900/70 via-primary-800/60 to-primary-800/65"
          initial={{ opacity: prefersReducedMotion ? 0.85 : 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ 
            duration: prefersReducedMotion ? 0.3 : 2.0, 
            ease: [0.16, 1, 0.3, 1]
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary-700/25"
          initial={{ opacity: prefersReducedMotion ? 0.7 : 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ 
            duration: prefersReducedMotion ? 0.3 : 2.5, 
            ease: [0.16, 1, 0.3, 1],
            delay: prefersReducedMotion ? 0 : 0.3
          }}
        />
        
        {/* Premium texture overlay with fade-in */}
        <motion.div 
          className="absolute inset-0" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ 
            duration: 3.0, 
            ease: [0.16, 1, 0.3, 1],
            delay: 0.8
          }}
          style={{
            backgroundImage: "url('/images/patterns/noise-pattern.png')",
            backgroundSize: "200px"
          }}
        />
        
        {/* Sophisticated light beam effects with staggered entrance */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -inset-[25%] blur-3xl bg-gradient-to-br from-accent-light/25 via-transparent to-transparent" 
            initial={{ rotate: 12, opacity: 0, scale: 0.8 }}
            animate={{ 
              rotate: 15,
              opacity: 0.06,
              scale: 1
            }}
            transition={{ 
              duration: 4.0, 
              ease: [0.16, 1, 0.3, 1],
              delay: 1.2
            }}
          />
          <motion.div 
            className="absolute top-1/4 right-1/4 w-96 h-96 blur-3xl bg-gradient-to-br from-[#D4AF37]/15 via-transparent to-transparent rounded-full" 
            initial={{ scale: 0.5, opacity: 0, x: 50, y: 50 }}
            animate={{ 
              scale: 1,
              opacity: 0.7,
              x: 0,
              y: 0
            }}
            transition={{ 
              duration: 3.5, 
              ease: [0.16, 1, 0.3, 1],
              delay: 1.8
            }}
          />
          
          {/* Enhanced premium light effects */}
          <motion.div 
            className="absolute top-1/3 left-1/4 w-64 h-64 blur-2xl bg-gradient-to-br from-white/8 via-[#B08D57]/12 to-transparent rounded-full" 
            initial={{ scale: 0, opacity: 0, rotate: -45 }}
            animate={{ 
              scale: 1,
              opacity: 0.4,
              rotate: 0
            }}
            transition={{ 
              duration: 5.0, 
              ease: [0.16, 1, 0.3, 1],
              delay: 2.5
            }}
          />
          
          {/* Add floating particles for more dynamism */}
          <motion.div 
            className="absolute top-1/2 left-1/3 w-32 h-32 blur-xl bg-gradient-to-br from-[#D4AF37]/20 via-transparent to-transparent rounded-full" 
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              y: [0, -10, 0]
            }}
            transition={{ 
              duration: 6.0, 
              ease: "easeInOut",
              delay: 3.0,
              repeat: Infinity
            }}
          />
          
          {/* Additional dynamic light orb */}
          <motion.div 
            className="absolute bottom-1/3 right-1/3 w-48 h-48 blur-2xl bg-gradient-to-br from-[#B08D57]/15 via-[#D4AF37]/10 to-transparent rounded-full" 
            initial={{ scale: 0.8, opacity: 0, rotate: 45 }}
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.7, 0.4],
              rotate: [45, 60, 45]
            }}
            transition={{ 
              duration: 8.0, 
              ease: "easeInOut",
              delay: 4.0,
              repeat: Infinity
            }}
          />
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-neutral-50/10 to-transparent z-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[80vh]">
          {/* Left side content - main hero content */}
          <motion.div 
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
            className="lg:col-span-7 text-left space-y-8 lg:space-y-10"
          >
            <div className="max-w-4xl space-y-6 lg:space-y-8">
              {/* More Impactful main heading with enhanced styling */}
              <div className="relative mb-8">
                <motion.h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.05] relative">
                  {/* First line with enhanced impact */}
                  <div className="overflow-hidden">
                    <motion.span 
                      initial={{ y: 120, opacity: 0, scale: 0.8 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 1.2, 
                        delay: 0.8, 
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="block relative transform-gpu text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black"
                      style={{
                        textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 8px 40px rgba(176, 141, 87, 0.3)',
                        filter: 'contrast(1.1) brightness(1.1)'
                      }}
                    >
                      The Science of Recovery,
                    </motion.span>
                  </div>
                  
                  {/* Second line with maximum impact - clean and simple */}
                  <div className="overflow-hidden">
                    <motion.span 
                      initial={{ y: 140, opacity: 0, scale: 0.7, rotateX: 20 }}
                      animate={{ y: 0, opacity: 1, scale: 1, rotateX: 0 }}
                      transition={{ 
                        duration: 1.4, 
                        delay: 1.4, 
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="block relative text-4xl md:text-5xl lg:text-6xl xl:text-7xl transform-gpu font-black"
                      style={{
                        background: 'linear-gradient(135deg, #B08D57 0%, #D4AF37 15%, #F4E4BC 35%, #D4AF37 55%, #B08D57 75%, #A17D47 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontWeight: '900',
                        letterSpacing: '0.01em'
                      }}
                    >
                      The Art of Care
                    </motion.span>
                  </div>
                </motion.h1>
              </div>
              
              {/* Sophisticated tagline with staggered word reveals */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.2 }}
                className="relative mb-10"
              >
                <div className="text-lg md:text-xl text-white leading-[1.6] max-w-2xl font-light relative z-10">
                  {/* First line */}
                  <div className="block">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
                      className="font-medium text-white/95 inline-block mr-2"
                    >
                      Genuine Understanding.
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2.7, ease: [0.16, 1, 0.3, 1] }}
                      className="font-medium text-white/95 inline-block"
                    >
                      Expert Care.
                    </motion.span>
                  </div>
                  {/* Second line */}
                  <div className="block">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 3.0, ease: [0.16, 1, 0.3, 1] }}
                      className="font-medium text-[#D4AF37] inline-block"
                    >
                      Lasting Recovery.
                    </motion.span>
                  </div>
                </div>
                
                {/* Enhanced background glow */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#B08D57]/8 via-transparent to-[#D4AF37]/8 rounded-lg blur-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.2, duration: 1.0, ease: "easeOut" }}
                />
              </motion.div>

              <motion.div 
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex flex-wrap gap-5 mt-10"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                <Link 
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                    className="group relative px-7 py-3.5 font-semibold rounded-xl text-white flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent/30 bg-[#B08D57]"
                  aria-label="Book an appointment online"
                    style={{ position: 'relative', zIndex: 10 }}
                >
                  <div 
                      className="absolute inset-0 bg-gradient-to-r from-[#B08D57] to-[#C9A769] transition-all duration-300 shadow-lg shadow-[#B08D57]/20 group-hover:shadow-[#B08D57]/30"
                    style={{ inset: 0, zIndex: 0 }}
                  ></div>
                    <CalendarDaysIcon className="h-5 w-5 relative z-10 transition-transform group-hover:scale-110" aria-hidden="true" />
                    <span className="relative z-10 tracking-wide">Book an Appointment</span>
                </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                <Link
                  href="#services" 
                  className="relative px-7 py-3.5 font-medium rounded-xl text-white flex items-center justify-center transition-all duration-300 group overflow-hidden focus:outline-none focus:ring-4 focus:ring-white/30"
                  aria-label="Explore services"
                  style={{ position: 'relative', zIndex: 10 }}
                >
                  <div 
                      className="absolute inset-0 bg-white/15 backdrop-blur-xl border border-white/20 rounded-xl transition-all duration-300 shadow-lg shadow-black/5 group-hover:bg-white/25 group-hover:border-white/30"
                    style={{ inset: 0, zIndex: 0 }}
                  ></div>
                    <span className="relative z-10 tracking-wide">Explore Services</span>
                </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right side - Professional Credentials & Key Benefits */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.8, 0.25, 1], delay: 2.0 }}
            className="lg:col-span-5 mt-8 lg:mt-0"
          >
            <div className="relative max-w-xl ml-auto space-y-6">
              
              {/* Personal Welcome Card */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.0, ease: [0.25, 0.8, 0.25, 1], delay: 2.2 }}
                className="relative bg-white/95 backdrop-blur-3xl rounded-[2rem] p-6 shadow-[0_20px_70px_-10px_rgba(0,0,0,0.3)] border border-white/40 overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.9) 100%)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
                  backgroundSize: '20px 20px'
                }}></div>
                
                {/* Elegant top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B08D57] to-transparent"></div>
                
                {/* Floating elements for depth */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#B08D57]/5 to-[#D4AF37]/5 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tr from-[#D4AF37]/5 to-[#B08D57]/5 rounded-full blur-lg"></div>

                {/* Welcome Content */}
                <div className="relative z-10 text-center">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2.4, duration: 0.6 }}
                    className="mb-6"
                  >
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 tracking-tight">
                      Welcome
                    </h3>
                    <div className="w-12 h-px bg-gradient-to-r from-[#B08D57] to-[#D4AF37] mx-auto mb-6"></div>
                  </motion.div>

                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2.6, duration: 0.6 }}
                    className="space-y-4"
                  >
                    <p className="text-slate-700 leading-relaxed text-base">
                      I'm passionate about helping people move better, feel stronger, and get back to doing what they love.
                    </p>
                    
                    <p className="text-slate-600 leading-relaxed text-sm">
                      Every person's journey is unique, and I'm here to guide you through yours with care, understanding, and evidence-based treatment.
                    </p>
                  </motion.div>
                  </div>
              </motion.div>

              {/* Key Benefits Card */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.0, ease: [0.25, 0.8, 0.25, 1], delay: 2.6 }}
                className="relative bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-[2rem] p-6 text-white shadow-[0_20px_70px_-10px_rgba(0,0,0,0.3)] overflow-hidden"
              >
                {/* Premium background pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)`,
                  backgroundSize: '32px 32px'
                }}></div>
                
                {/* Floating orbs */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-lg"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <UserGroupIcon className="w-10 h-10 mb-3 mx-auto opacity-90" />
                    <h3 className="text-lg font-semibold mb-2 tracking-tight">Why Choose My Practice?</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <motion.div 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 2.8, duration: 0.5 }}
                      className="flex items-center space-x-3"
                    >
                      <StarIcon className="w-4 h-4 text-white/90 flex-shrink-0" />
                      <span className="text-sm font-medium">Hands-on treatment that gets results</span>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 3.0, duration: 0.5 }}
                      className="flex items-center space-x-3"
                    >
                      <StarIcon className="w-4 h-4 text-white/90 flex-shrink-0" />
                      <span className="text-sm font-medium">You'll understand your injury & recovery plan</span>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 3.2, duration: 0.5 }}
                      className="flex items-center space-x-3"
                    >
                      <StarIcon className="w-4 h-4 text-white/90 flex-shrink-0" />
                      <span className="text-sm font-medium">Advanced manual therapy techniques</span>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 3.4, duration: 0.5 }}
                      className="flex items-center space-x-3"
                    >
                      <StarIcon className="w-4 h-4 text-white/90 flex-shrink-0" />
                      <span className="text-sm font-medium">No insurance? Flexible payment options</span>
                    </motion.div>
                  </div>
                  </div>
              </motion.div>
              
              {/* Subtle outer glow for both cards */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#B08D57]/10 to-[#D4AF37]/10 rounded-[2.5rem] blur-2xl opacity-60 -z-10"></div>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
