"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

const HeroSection = React.memo(function HeroSection() {
  return (
    <section 
      className="hero-section relative overflow-hidden min-h-screen flex items-center pt-16 pb-16 lg:pt-24 lg:pb-20"
      style={{ willChange: 'transform' }}
    >
      {/* Enhanced backdrop image - simplified animation */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full overflow-hidden relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full relative"
            style={{ willChange: 'opacity' }}
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

        {/* Gradient overlays - static, no animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 via-primary-800/60 to-primary-800/65" />
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary-700/25 hidden lg:block" />
        
        {/* Light effects - simplified, desktop only */}
        <div className="absolute inset-0 overflow-hidden hidden lg:block pointer-events-none">
          <div 
            className="absolute top-1/4 right-1/4 w-96 h-96 blur-3xl bg-gradient-to-br from-[#D4AF37]/20 via-transparent to-transparent rounded-full opacity-60" 
          />
          <div 
            className="absolute bottom-1/3 left-1/4 w-64 h-64 blur-2xl bg-gradient-to-br from-[#B08D57]/15 via-transparent to-transparent rounded-full opacity-40" 
          />
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-neutral-50/10 to-transparent z-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Logo Container - staggered animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center mb-8 lg:mb-12"
          style={{ willChange: 'opacity, transform' }}
        >
          <div className="relative">
            {/* Simplified outer glow - no animation */}
            <div className="absolute -inset-4 lg:-inset-6 bg-gradient-to-br from-[#D4AF37]/15 to-[#B08D57]/10 rounded-2xl blur-xl opacity-100"></div>

            {/* Main container */}
            <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90 backdrop-blur-xl rounded-2xl p-4 sm:p-6 lg:p-10 shadow-xl border border-white/10 overflow-hidden">
              {/* Simple background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-[#B08D57]/3 rounded-2xl"></div>
              
              {/* Logo - simple fade in */}
              <div className="relative z-10 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative transform-gpu"
                  style={{ willChange: 'opacity' }}
                >
                  <Image
                    src="/images/kinetikare-logo.png"
                    alt="KinetiKare physiotherapy logo Burlington Waterdown"
                    width={160}
                    height={160}
                    className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 object-contain"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            className="mt-4 lg:mt-6"
            style={{ willChange: 'opacity' }}
          >
            <div className="text-white/90 text-sm sm:text-base lg:text-lg font-medium tracking-wide text-center">
              Kareem Hassanein Physiotherapy
            </div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-start lg:items-center">
          {/* Left side content - PRIMARY FOCUS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-8 text-left space-y-6 lg:space-y-8"
            style={{ willChange: 'opacity, transform' }}
          >
            <div className="max-w-5xl space-y-6 lg:space-y-8">
              {/* Main heading */}
              <div className="relative mb-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 tracking-tight leading-[1.02] relative">
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    className="block relative text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3"
                    style={{
                      textShadow: '0 6px 24px rgba(0, 0, 0, 0.9), 0 12px 48px rgba(176, 141, 87, 0.4)',
                      filter: 'contrast(1.2) brightness(1.15)',
                      willChange: 'opacity, transform'
                    }}
                  >
                    The Science of Recovery,
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    className="block relative text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black"
                    style={{
                      background: 'linear-gradient(135deg, #B08D57 0%, #D4AF37 15%, #F4E4BC 35%, #D4AF37 55%, #B08D57 75%, #A17D47 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: '900',
                      letterSpacing: '0.005em',
                      willChange: 'opacity, transform'
                    }}
                  >
                    The Art of Care
                  </motion.span>
                </h1>
              </div>
              
              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                className="relative mb-8"
                style={{ willChange: 'opacity' }}
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
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                className="flex flex-wrap gap-6 mt-10"
                style={{ willChange: 'opacity' }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="transform-gpu"
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
                  className="transform-gpu"
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
          
          {/* Right side - Welcome Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="hidden sm:block lg:col-span-4 mt-8 lg:mt-0"
            style={{ willChange: 'opacity, transform' }}
          >
            <div className="relative max-w-md ml-auto">
              
              {/* Personal Welcome Card - simplified animation */}
              <motion.div 
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
                
                {/* Corner accent elements */}
                <div className="absolute top-3 left-3 w-2 h-2 bg-gradient-to-br from-[#B08D57]/15 to-[#D4AF37]/15 rounded-full"></div>
                <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-gradient-to-br from-[#D4AF37]/15 to-[#B08D57]/15 rounded-full"></div>

                {/* Welcome Content */}
                <div className="relative z-10 text-center">
                  <div className="mb-6">
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-5 tracking-tight leading-tight">
                      Welcome
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-[#B08D57] via-[#D4AF37] to-[#B08D57] mx-auto mb-6 rounded-full"></div>
                  </div>

                  <div className="space-y-5">
                    <p className="text-slate-700 leading-relaxed text-base lg:text-lg font-medium tracking-wide">
                      I'm passionate about helping people move better, feel stronger, and get back to doing what they love.
                    </p>
                    
                    <div className="w-6 h-px bg-gradient-to-r from-transparent via-[#B08D57]/25 to-transparent mx-auto my-5"></div>
                    
                    <p className="text-slate-600 leading-relaxed text-sm lg:text-base font-normal tracking-wide">
                      Every person's journey is unique, and I'm here to guide you through yours with care, understanding, and evidence-based treatment.
                    </p>
                  </div>
                </div>
                
                {/* Premium inner glow - hidden on mobile */}
                <div className="absolute inset-2 bg-gradient-to-br from-white/15 via-transparent to-[#B08D57]/3 rounded-[1.5rem] pointer-events-none hidden lg:block"></div>
              </motion.div>
              
              {/* Subtle outer glow - static, hidden on mobile */}
              <div className="absolute -inset-3 bg-gradient-to-br from-[#B08D57]/8 to-[#D4AF37]/8 rounded-[2rem] blur-xl opacity-40 -z-10 hidden lg:block"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
