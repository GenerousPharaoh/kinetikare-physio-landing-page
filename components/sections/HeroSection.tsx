"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

const HeroSection = React.memo(function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Simplified Background - No Animation on Mobile */}
      <div className="absolute inset-0">
        <Image
          src="/images/clinic-pic-may-2025.jpg"
          alt="Physiotherapy clinic"
          fill
          priority
          quality={90}
          className="object-cover"
          style={{ filter: 'brightness(0.5) contrast(1.1)' }}
        />
        
        {/* Single Gradient Overlay - Simplified */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
        
        {/* Light Effect - Hidden on Mobile to Prevent Flickering */}
        <div className="hidden md:block absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-full blur-3xl opacity-40" />
      </div>
      
      {/* Content Container - Optimized for Mobile */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div className="w-full max-w-7xl mx-auto">
          
          {/* Logo Section - Simplified Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center mb-12"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-[#B08D57]/20 rounded-3xl blur-2xl opacity-60" />
              
              <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10">
                <Image
                  src="/images/kinetikare-logo.png"
                  alt="KinetiKare logo"
                  width={150}
                  height={150}
                  className="w-36 h-36 sm:w-40 sm:h-40 drop-shadow-2xl"
                />
              </div>
            </div>
            
            {/* Hero Text - Simplified Animation */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h1 className="mb-8">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 tracking-tight"
                  style={{ textShadow: '0 10px 30px rgba(0,0,0,0.7)' }}
                >
                  The Science of Recovery,
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black"
                  style={{
                    background: 'linear-gradient(135deg, #B08D57 0%, #D4AF37 25%, #F4E4BC 50%, #D4AF37 75%, #B08D57 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                  }}
                >
                  The Art of Care
                </motion.span>
              </h1>
            </motion.div>
            
            {/* Redesigned Elegant Tagline Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col items-center space-y-8"
            >
              {/* Elegant Three-Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
                <div className="text-center group">
                  <div className="relative">
                    <h3 className="text-2xl lg:text-3xl font-light text-white/80 mb-2 tracking-wider">Genuine</h3>
                    <h4 className="text-3xl lg:text-4xl font-bold text-white tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">Understanding</h4>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4 opacity-60"></div>
                  </div>
                </div>
                
                <div className="text-center group">
                  <div className="relative">
                    <h3 className="text-2xl lg:text-3xl font-light text-white/80 mb-2 tracking-wider">Expert</h3>
                    <h4 className="text-3xl lg:text-4xl font-bold text-white tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">Care</h4>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4 opacity-60"></div>
                  </div>
                </div>
                
                <div className="text-center group">
                  <div className="relative">
                    <h3 className="text-2xl lg:text-3xl font-light text-white/80 mb-2 tracking-wider">Lasting</h3>
                    <h4 className="text-3xl lg:text-4xl font-bold text-white tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">Recovery</h4>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4 opacity-60"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* CTA Buttons - Simplified Hover Effects */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link 
              href="https://endorphinshealth.janeapp.com/#/staff_member/42"
              target="_blank"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#B08D57] to-[#C9A769] text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <CalendarDaysIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              <span>Book an Appointment</span>
            </Link>
            
            <Link
              href="/services" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              <span>Explore Services</span>
            </Link>
          </motion.div>
          
          {/* Welcome Card - Simplified */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="w-full max-w-2xl mx-auto"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-[#B08D57]/20 rounded-3xl blur-3xl opacity-50" />
              
              <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/50">
                <div className="text-center">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
                    Welcome
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] mx-auto mb-6 rounded-full" />
                  
                  <p className="text-lg sm:text-xl text-slate-700 mb-4 leading-relaxed font-medium">
                    I'm passionate about helping people move better, feel stronger, and get back to doing what they love.
                  </p>
                  
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto my-4" />
                  
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
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
