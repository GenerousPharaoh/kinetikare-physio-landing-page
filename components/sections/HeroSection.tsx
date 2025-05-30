"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

const HeroSection = React.memo(function HeroSection() {
  return (
    <section 
      className="hero-section relative overflow-hidden min-h-screen flex items-center py-16 lg:py-20"
    >
      {/* Enhanced backdrop image */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full overflow-hidden relative">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full relative"
          >
            <Image
              src="/images/clinic-pic-may-2025.jpg"
              alt="Kareem Hassanein physiotherapy clinic treatment room in Burlington serving Waterdown, Oakville, Hamilton"
              fill
              className="object-cover object-center"
              priority={true}
              quality={90}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
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
        <div className="absolute inset-0 overflow-hidden hidden lg:block pointer-events-none">
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
          className="hidden lg:flex flex-col items-center mb-12"
        >
          <div className="relative">
            {/* Simplified outer glow */}
            <motion.div 
              className="absolute -inset-6 bg-gradient-to-br from-[#D4AF37]/15 to-[#B08D57]/10 rounded-2xl blur-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            ></motion.div>

            {/* Main container - much cleaner */}
            <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90 backdrop-blur-xl rounded-2xl p-10 shadow-xl border border-white/10 overflow-hidden">
              {/* Simple background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-[#B08D57]/3 rounded-2xl"></div>
              
              {/* Logo */}
              <div className="relative z-10 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <Image
                    src="/images/kinetikare-logo.png"
                    alt="KinetiKare physiotherapy logo Burlington Waterdown"
                    width={160}
                    height={160}
                    className="w-40 h-40 object-contain"
                    style={{
                      filter: 'contrast(1.2) saturate(1.2) brightness(1.15) drop-shadow(0 4px 20px rgba(212, 175, 55, 0.3))',
                      imageRendering: 'crisp-edges'
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Professional subtitle under logo */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6"
          >
            <div className="text-white/90 text-lg font-medium tracking-wide text-center">
              Kareem Hassanein Physiotherapy
            </div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-start lg:items-center">
          {/* Left side content - PRIMARY FOCUS */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
            className="lg:col-span-8 text-left space-y-6 lg:space-y-8"
          >
            <div className="max-w-5xl space-y-6 lg:space-y-8">
              {/* Main heading */}
              <div className="relative mb-6">
                {/* Main heading - animate as one cohesive unit */}
                <motion.h1 
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 tracking-tight leading-[1.02] relative"
                >
                  <span 
                    className="block relative text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3"
                    style={{
                      textShadow: '0 6px 24px rgba(0, 0, 0, 0.9), 0 12px 48px rgba(176, 141, 87, 0.4)',
                      filter: 'contrast(1.2) brightness(1.15)'
                    }}
                  >
                    The Science of Recovery,
                  </span>
                  <span 
                    className="block relative text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black"
                    style={{
                      background: 'linear-gradient(135deg, #B08D57 0%, #D4AF37 15%, #F4E4BC 35%, #D4AF37 55%, #B08D57 75%, #A17D47 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: '900',
                      letterSpacing: '0.005em'
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
                <div className="text-xl md:text-2xl text-white leading-[1.6] max-w-3xl font-light relative z-10">
                  <div className="block mb-3">
                    <span className="font-medium text-white/95 inline-block mr-3">
                      Genuine Understanding.
                    </span>
                    <span className="font-medium text-white/95 inline-block">
                      Expert Care.
                    </span>
                  </div>
                  <div className="block">
                    <span className="font-medium text-[#D4AF37] inline-block text-2xl md:text-3xl">
                      Lasting Recovery.
                    </span>
                  </div>
                </div>
                
                {/* Background glow - hidden on mobile */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#B08D57]/10 via-transparent to-[#D4AF37]/10 rounded-lg blur-xl hidden lg:block"
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
                className="flex flex-wrap gap-6 mt-10"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                    target="_blank"
                    className="group relative px-8 py-4 font-semibold rounded-xl text-white flex items-center justify-center gap-3 overflow-hidden transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent/30 bg-gradient-to-r from-[#B08D57] to-[#C9A769] hover:shadow-xl hover:shadow-[#B08D57]/40 text-lg"
                    aria-label="Book an appointment online"
                  >
                    <CalendarDaysIcon className="h-6 w-6 transition-transform group-hover:scale-110" aria-hidden="true" />
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
                    className="relative px-8 py-4 font-semibold rounded-xl text-white flex items-center justify-center transition-all duration-300 group overflow-hidden focus:outline-none focus:ring-4 focus:ring-white/30 hover:shadow-xl hover:shadow-slate-900/30 bg-slate-700/90 backdrop-blur-xl border border-slate-600/80 hover:bg-slate-600/90 hover:border-slate-500/80 text-lg"
                    aria-label="Explore services"
                  >
                    <span className="tracking-wide">Explore Services</span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right side - Welcome Card - SECONDARY */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
            className="lg:col-span-4 mt-8 lg:mt-0"
          >
            <div className="relative max-w-md ml-auto">
              
              {/* Personal Welcome Card */}
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
                className="relative rounded-[2rem] p-6 lg:p-8 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.25)] border border-white/50 overflow-hidden bg-gradient-to-br from-white/96 via-white/93 to-slate-50/88 backdrop-blur-2xl"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.93) 50%, rgba(248,250,252,0.88) 100%)',
                  boxShadow: '0 24px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 0 20px rgba(176, 141, 87, 0.02)'
                }}
              >
                {/* Background pattern - hidden on mobile */}
                <div className="absolute inset-0 opacity-[0.012] hidden lg:block" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(176,141,87,0.3) 1px, transparent 0)`,
                    backgroundSize: '28px 28px'
                  }}></div>
                
                {/* Floating elements - hidden on mobile */}
                <motion.div 
                  className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tr from-[#D4AF37]/4 via-[#B08D57]/6 to-transparent rounded-full blur-lg hidden lg:block"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                ></motion.div>
                
                {/* Corner accent elements */}
                <div className="absolute top-3 left-3 w-2 h-2 bg-gradient-to-br from-[#B08D57]/15 to-[#D4AF37]/15 rounded-full"></div>
                <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-gradient-to-br from-[#D4AF37]/15 to-[#B08D57]/15 rounded-full"></div>

                {/* Welcome Content */}
                <div className="relative z-10 text-center">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.0, duration: 0.6 }}
                    className="mb-6"
                  >
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-5 tracking-tight leading-tight">
                      Welcome
                    </h3>
                    <motion.div 
                      className="w-12 h-0.5 bg-gradient-to-r from-[#B08D57] via-[#D4AF37] to-[#B08D57] mx-auto mb-6 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                    ></motion.div>
                  </motion.div>

                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="space-y-5"
                  >
                    <p className="text-slate-700 leading-relaxed text-base lg:text-lg font-medium tracking-wide">
                      I'm passionate about helping people move better, feel stronger, and get back to doing what they love.
                    </p>
                    
                    <div className="w-6 h-px bg-gradient-to-r from-transparent via-[#B08D57]/25 to-transparent mx-auto my-5"></div>
                    
                    <p className="text-slate-600 leading-relaxed text-sm lg:text-base font-normal tracking-wide">
                      Every person's journey is unique, and I'm here to guide you through yours with care, understanding, and evidence-based treatment.
                    </p>
                  </motion.div>
                </div>
                
                {/* Premium inner glow - hidden on mobile */}
                <div className="absolute inset-2 bg-gradient-to-br from-white/15 via-transparent to-[#B08D57]/3 rounded-[1.5rem] pointer-events-none hidden lg:block"></div>
              </motion.div>
              
              {/* Subtle outer glow - hidden on mobile */}
              <motion.div 
                className="absolute -inset-3 bg-gradient-to-br from-[#B08D57]/8 to-[#D4AF37]/8 rounded-[2rem] blur-xl opacity-40 -z-10 hidden lg:block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 1.5, delay: 1.3, ease: "easeOut" }}
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Logo - Only show on mobile */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:hidden mt-12 mb-6"
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
