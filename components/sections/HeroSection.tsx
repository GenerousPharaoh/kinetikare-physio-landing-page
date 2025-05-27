"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

const HeroSection = React.memo(function HeroSection() {
  return (
    <section 
      className="hero-section relative overflow-hidden min-h-screen flex items-center py-24 lg:pt-36"
    >
      {/* Enhanced backdrop image with subtle animation */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full overflow-hidden relative">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
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
                filter: 'brightness(0.6) contrast(1.2) saturate(1.2)',
                objectFit: 'cover',
                objectPosition: '70% center'
              }}
            />
          </motion.div>
        </div>

        {/* Elegant gradient overlays with smooth entrance */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary-900/70 via-primary-800/60 to-primary-800/65"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary-700/25"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        />
        
        {/* Subtle premium light effects */}
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
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-neutral-50/10 to-transparent z-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[80vh]">
          {/* Left side content - main hero content */}
          <motion.div 
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
            className="lg:col-span-7 text-left space-y-8 lg:space-y-10"
          >
            <div className="max-w-4xl space-y-6 lg:space-y-8">
              {/* Elegant main heading with staggered reveals */}
              <div className="relative mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.05] relative">
                  {/* First line with smooth reveal */}
                  <div className="overflow-hidden">
                    <motion.span 
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="block relative transform-gpu text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black"
                      style={{
                        textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 8px 40px rgba(176, 141, 87, 0.3)',
                        filter: 'contrast(1.1) brightness(1.1)'
                      }}
                    >
                      The Science of Recovery,
                    </motion.span>
                  </div>
                  
                  {/* Second line with elegant entrance */}
                  <div className="overflow-hidden">
                    <motion.span 
                      initial={{ y: 120, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1.0, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
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
                </h1>
              </div>
              
              {/* Beautiful tagline with word-by-word reveals */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="relative mb-10"
              >
                <div className="text-lg md:text-xl text-white leading-[1.6] max-w-2xl font-light relative z-10">
                  <div className="block">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
                      className="font-medium text-white/95 inline-block mr-2"
                    >
                      Genuine Understanding.
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
                      className="font-medium text-white/95 inline-block"
                    >
                      Expert Care.
                    </motion.span>
                  </div>
                  <div className="block">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
                      className="font-medium text-[#D4AF37] inline-block"
                    >
                      Lasting Recovery.
                    </motion.span>
                  </div>
                </div>
                
                {/* Subtle background glow */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#B08D57]/8 via-transparent to-[#D4AF37]/8 rounded-lg blur-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.4, duration: 1.0, ease: "easeOut" }}
                />
              </motion.div>

              <motion.div 
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.6 }}
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
                    href="#services" 
                    className="relative px-7 py-3.5 font-semibold rounded-xl text-white flex items-center justify-center transition-all duration-300 group overflow-hidden focus:outline-none focus:ring-4 focus:ring-white/30 bg-slate-700/90 backdrop-blur-xl border border-slate-600/80 hover:bg-slate-600/90 hover:border-slate-500/80 hover:shadow-lg hover:shadow-slate-900/20"
                    aria-label="Explore services"
                  >
                    <span className="tracking-wide">Explore Services</span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right side - Enhanced Welcome Card */}
          <motion.div 
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
            className="lg:col-span-5 mt-8 lg:mt-0"
          >
            <div className="relative max-w-xl ml-auto">
              
              {/* Personal Welcome Card with enhanced effects */}
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.0, delay: 1.2, ease: [0.25, 0.8, 0.25, 1] }}
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
                <motion.div 
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B08D57] to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.0, delay: 1.6, ease: "easeOut" }}
                ></motion.div>
                
                {/* Floating elements for depth */}
                <motion.div 
                  className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#B08D57]/5 to-[#D4AF37]/5 rounded-full blur-xl"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.8, ease: "easeOut" }}
                ></motion.div>
                <motion.div 
                  className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tr from-[#D4AF37]/5 to-[#B08D57]/5 rounded-full blur-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 2.0, ease: "easeOut" }}
                ></motion.div>

                {/* Welcome Content */}
                <div className="relative z-10 text-center">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                    className="mb-6"
                  >
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 tracking-tight">
                      Welcome
                    </h3>
                    <motion.div 
                      className="w-12 h-px bg-gradient-to-r from-[#B08D57] to-[#D4AF37] mx-auto mb-6"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
                    ></motion.div>
                  </motion.div>

                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.6 }}
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
              
              {/* Subtle outer glow */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-br from-[#B08D57]/10 to-[#D4AF37]/10 rounded-[2.5rem] blur-2xl opacity-60 -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 2.0, delay: 2.2, ease: "easeOut" }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
