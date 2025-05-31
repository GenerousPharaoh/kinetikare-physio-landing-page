"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

const HeroSection = React.memo(function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/clinic-pic-may-2025.jpg"
          alt="Physiotherapy clinic"
          fill
          priority
          quality={90}
          className="object-cover"
          style={{ filter: 'brightness(0.5) contrast(1.1)' }}
        />
        
        {/* Gradient Overlays - Refined for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        
        {/* Animated Light Effects */}
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
      </motion.div>
      
      {/* Content Container - Guaranteed Visibility */}
      <div 
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20"
        style={{ minHeight: '100vh' }}
      >
        <div className="w-full max-w-7xl mx-auto">
          
          {/* Logo Section - Enhanced with better tagline emphasis */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center mb-12"
            style={{ minHeight: '200px' }}
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-[#B08D57]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              
              <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
                <Image
                  src="/images/kinetikare-logo.png"
                  alt="KinetiKare logo"
                  width={150}
                  height={150}
                  className="w-36 h-36 sm:w-40 sm:h-40 drop-shadow-2xl"
                  style={{ minWidth: '144px', minHeight: '144px' }}
                />
              </div>
            </motion.div>
            
            {/* Enhanced tagline with better emphasis and subtle gold accent */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-xl sm:text-2xl font-semibold text-white tracking-wide"
              style={{ 
                textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 30%, #D4AF37 50%, #f8f9fa 70%, #ffffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Kareem Hassanein Physiotherapy
            </motion.p>
          </motion.div>
          
          {/* Hero Text with Enhanced Typography and Dynamic Weight */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="mb-10">
              {/* Enhanced typography with different weights for visual rhythm */}
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 tracking-tight"
                style={{ 
                  textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)',
                  fontWeight: '700'
                }}
              >
                The Science of Recovery,
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black"
                style={{
                  background: 'linear-gradient(135deg, #B08D57 0%, #D4AF37 25%, #F4E4BC 50%, #D4AF37 75%, #B08D57 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4))',
                  fontWeight: '900'
                }}
              >
                The Art of Care
              </motion.span>
            </h1>
            
            {/* Ultra-subtle integrated tagline - whispered sophistication */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.7 }}
              className="mt-2"
            >
              <p 
                className="text-xs sm:text-sm font-light tracking-[0.15em] sm:tracking-[0.2em]"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.35)',
                  lineHeight: '1.2',
                  textShadow: '0 1px 3px rgba(0,0,0,0.3)'
                }}
              >
                <span className="inline-block">Genuine Understanding</span>
                <span className="hidden sm:inline-block mx-4 sm:mx-6" style={{ color: 'rgba(255, 255, 255, 0.2)' }}>·</span>
                <span className="block sm:inline-block">Expert Care</span>
                <span className="hidden sm:inline-block mx-4 sm:mx-6" style={{ color: 'rgba(255, 255, 255, 0.2)' }}>·</span>
                <span className="block sm:inline-block">Lasting Recovery</span>
              </p>
            </motion.div>
          </motion.div>
          
          {/* Enhanced CTA Buttons with Improved Hover States and Visual Weight */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-32"
          >
            {/* Primary CTA - Enhanced hover effects */}
            <motion.div 
              whileHover={{ scale: 1.05, y: -3 }} 
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link 
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                className="group relative inline-flex items-center gap-3 px-9 py-4 bg-gradient-to-r from-[#B08D57] to-[#C9A769] text-white font-semibold rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                style={{ 
                  boxShadow: '0 8px 32px rgba(176, 141, 87, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2)' 
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
              whileHover={{ scale: 1.05, y: -3 }} 
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/services" 
                className="group relative inline-flex items-center gap-3 px-9 py-4 bg-white/10 backdrop-blur-xl text-white font-medium rounded-xl border-2 border-white/40 overflow-hidden hover:bg-white/20 hover:border-white/60 transition-all duration-300"
                style={{ 
                  boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1)' 
                }}
              >
                <span className="relative z-10 text-lg group-hover:text-white transition-colors duration-300">Explore Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#B08D57] group-hover:w-full transition-all duration-500" />
              </Link>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Welcome Section - Transformed to organic content flow */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="relative z-20 bg-white"
        style={{ marginTop: '-80px' }}
      >
        <div className="container mx-auto px-4 py-24 sm:py-32">
          <div className="max-w-3xl mx-auto text-center">
            {/* Subtle separator line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="h-px bg-gradient-to-r from-transparent via-[#B08D57]/40 to-transparent mx-auto mb-12"
            />
            
            {/* Welcome title as strong visual anchor */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8"
              style={{
                background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Welcome
            </motion.h2>
            
            {/* Content with optimal typography and spacing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="space-y-6"
            >
              <p 
                className="text-lg sm:text-xl text-slate-700 font-medium mx-auto"
                style={{ 
                  lineHeight: '1.8',
                  maxWidth: '65ch'
                }}
              >
                I'm passionate about helping people move better, feel stronger, and get back to doing what they love.
              </p>
              
              <p 
                className="text-base sm:text-lg text-slate-600 mx-auto"
                style={{ 
                  lineHeight: '1.75',
                  maxWidth: '65ch'
                }}
              >
                Every person's journey is unique, and I'm here to guide you through yours with care, understanding, and evidence-based treatment.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
});

export default HeroSection;
