"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

const HeroSection = React.memo(function HeroSection() {
  return (
    <section 
      className="hero-section relative overflow-hidden min-h-screen flex items-center py-24 lg:pt-32"
    >
      {/* Enhanced backdrop image */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full overflow-hidden relative">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <Image
              src="/images/clinic-pic-may-2025.jpg"
              alt="Kareem Hassanein physiotherapy clinic treatment room in Burlington serving Waterdown, Oakville, Hamilton"
              fill
              className="object-cover object-center"
              priority={true}
              quality={90}
              sizes="100vw"
              style={{ 
                filter: 'brightness(0.6) contrast(1.2) saturate(1.2)',
                objectFit: 'cover',
                objectPosition: '70% center'
              }}
            />
          </motion.div>
        </div>

        {/* Gradient overlays */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary-900/70 via-primary-800/60 to-primary-800/65"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary-700/25 hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.1, ease: "easeOut" }}
        />
        
        {/* Light effects - hidden on mobile via CSS */}
        <div className="absolute inset-0 overflow-hidden hidden lg:block">
          <motion.div 
            className="absolute top-1/4 right-1/4 w-96 h-96 blur-3xl bg-gradient-to-br from-[#D4AF37]/20 via-transparent to-transparent rounded-full" 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          />
          <motion.div 
            className="absolute bottom-1/3 left-1/4 w-64 h-64 blur-2xl bg-gradient-to-br from-[#B08D57]/15 via-transparent to-transparent rounded-full" 
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.8, delay: 0.7, ease: "easeOut" }}
          />
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-neutral-50/10 to-transparent z-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Logo Container - Above main content */}
        <motion.div 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex justify-center mb-12"
        >
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-900/95 via-blue-950/95 to-slate-800/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 relative overflow-hidden">
              {/* Premium background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-[#B08D57]/5 rounded-3xl"></div>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent"></div>
              
              {/* Logo */}
              <div className="relative z-10 flex items-center justify-center">
                <Image
                  src="/images/kinetikare-logo.png"
                  alt="KinetiKare physiotherapy logo Burlington Waterdown"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                  style={{
                    filter: 'contrast(1.2) saturate(1.2) brightness(1.1) drop-shadow(0 4px 20px rgba(212, 175, 55, 0.3))',
                    imageRendering: 'crisp-edges'
                  }}
                />
              </div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-[#B08D57]/10 rounded-3xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-start lg:items-center min-h-[75vh] lg:min-h-[70vh]">
          {/* Left side content - moved up */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
            className="lg:col-span-7 text-left space-y-6 lg:space-y-8 lg:-mt-8"
          >
            <div className="max-w-4xl space-y-6 lg:space-y-8">
              {/* Main heading */}
              <div className="relative mb-6">
                {/* Main heading - animate as one cohesive unit */}
                <motion.h1 
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.05] relative"
                >
                  <span 
                    className="block relative text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-2"
                    style={{
                      textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 8px 40px rgba(176, 141, 87, 0.3)',
                      filter: 'contrast(1.1) brightness(1.1)'
                    }}
                  >
                    The Science of Recovery,
                  </span>
                  <span 
                    className="block relative text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black"
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
                  </span>
                </motion.h1>
              </div>
              
              {/* Tagline - animate as one group */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative mb-8"
              >
                <div className="text-lg md:text-xl text-white leading-[1.6] max-w-2xl font-light relative z-10">
                  <div className="block mb-2">
                    <span className="font-medium text-white/95 inline-block mr-2">
                      Genuine Understanding.
                    </span>
                    <span className="font-medium text-white/95 inline-block">
                      Expert Care.
                    </span>
                  </div>
                  <div className="block">
                    <span className="font-medium text-[#D4AF37] inline-block">
                      Lasting Recovery.
                    </span>
                  </div>
                </div>
                
                {/* Background glow - hidden on mobile */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#B08D57]/8 via-transparent to-[#D4AF37]/8 rounded-lg blur-xl hidden lg:block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
                />
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap gap-5 mt-8"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
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
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="/services" 
                    className="relative px-7 py-3.5 font-semibold rounded-xl text-white flex items-center justify-center transition-all duration-300 group overflow-hidden focus:outline-none focus:ring-4 focus:ring-white/30 hover:shadow-lg hover:shadow-slate-900/20 bg-slate-700/90 backdrop-blur-xl border border-slate-600/80 hover:bg-slate-600/90 hover:border-slate-500/80"
                    aria-label="Explore services"
                  >
                    <span className="tracking-wide">Explore Services</span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right side - Welcome Card - moved down */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
            className="lg:col-span-5 mt-8 lg:mt-12"
          >
            <div className="relative max-w-xl ml-auto">
              
              {/* Personal Welcome Card */}
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
                className="relative rounded-[2.5rem] p-8 lg:p-10 shadow-[0_32px_80px_-12px_rgba(0,0,0,0.35)] border border-white/60 overflow-hidden bg-gradient-to-br from-white/98 via-white/95 to-slate-50/90 backdrop-blur-3xl"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 50%, rgba(248,250,252,0.92) 100%)',
                  boxShadow: '0 32px 80px -12px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 0 20px rgba(176, 141, 87, 0.03)'
                }}
              >
                {/* Background pattern - hidden on mobile */}
                <div className="absolute inset-0 opacity-[0.015] hidden lg:block" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(176,141,87,0.4) 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                  }}></div>
                
                {/* Elegant top accent */}
                <motion.div 
                  className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#B08D57] to-transparent opacity-80"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.0, delay: 0.9, ease: "easeOut" }}
                ></motion.div>
                
                {/* Floating elements - hidden on mobile */}
                <motion.div 
                  className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-tr from-[#D4AF37]/6 via-[#B08D57]/8 to-transparent rounded-full blur-xl hidden lg:block"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.1, ease: "easeOut" }}
                ></motion.div>
                
                {/* Corner accent elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-gradient-to-br from-[#B08D57]/20 to-[#D4AF37]/20 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-gradient-to-br from-[#D4AF37]/20 to-[#B08D57]/20 rounded-full"></div>

                {/* Welcome Content */}
                <div className="relative z-10 text-center">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    className="mb-8"
                  >
                    {/* Professional subtitle */}
                    <div className="text-[#B08D57] text-sm font-medium uppercase tracking-wider mb-3">
                      Kareem Hassanein Physiotherapy
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6 tracking-tight leading-tight">
                      Welcome
                    </h3>
                    <motion.div 
                      className="w-16 h-0.5 bg-gradient-to-r from-[#B08D57] via-[#D4AF37] to-[#B08D57] mx-auto mb-8 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                    ></motion.div>
                  </motion.div>

                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
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
                
                {/* Premium inner glow - hidden on mobile */}
                <div className="absolute inset-2 bg-gradient-to-br from-white/20 via-transparent to-[#B08D57]/5 rounded-[2rem] pointer-events-none hidden lg:block"></div>
              </motion.div>
              
              {/* Subtle outer glow - hidden on mobile */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-br from-[#B08D57]/10 to-[#D4AF37]/10 rounded-[2.5rem] blur-2xl opacity-60 -z-10 hidden lg:block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Logo - Only show on mobile */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:hidden mb-6"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20">
            <div className="w-2 h-2 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full animate-pulse"></div>
            <span className="text-white/90 text-sm md:text-base font-medium tracking-wide">
              Kareem Hassanein Physiotherapy
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default HeroSection;
