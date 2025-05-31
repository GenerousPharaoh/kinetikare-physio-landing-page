"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

const HeroSection = React.memo(function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Animated Background with Fixed Scaling */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        {/* Background Image - Properly Scaled */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundColor: '#2c1810', // Warm dark brown fallback that matches clinic image
          }}
        >
          <Image
            src="/images/clinic-pic-may-2025.jpg"
            alt="Physiotherapy clinic"
            fill
            priority
            quality={90}
            className="object-cover w-full h-full"
            style={{ 
              filter: 'brightness(0.7) contrast(1.1)',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
            sizes="100vw"
          />
        </div>
        
        {/* Much Lighter Gradient Overlays - Let Image Show Through More */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/25 via-black/15 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        {/* Animated Light Effects */}
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/15 to-transparent rounded-full blur-3xl"
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
            <h1 className="mb-12">
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
            
            {/* "Pillar" or "Key Services" Block - Structured Design */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col items-center space-y-6 mb-12"
            >
              {/* Mobile-First Structured Pillars */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 w-full max-w-4xl">
                
                {/* Pillar 1: Genuine Understanding */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="group w-full lg:w-auto"
                >
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-4 hover:bg-white/15 hover:border-white/30 transition-all duration-300">
                    <p className="text-center text-white font-medium text-sm sm:text-base tracking-wider">
                      <span className="font-bold text-[#D4AF37]">Genuine</span> Understanding
                    </p>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>

                {/* Desktop Separator */}
                <div className="hidden lg:flex items-center">
                  <div className="w-2 h-2 bg-[#D4AF37]/60 rounded-full"></div>
                  <div className="w-8 h-px bg-[#D4AF37]/40 mx-2"></div>
                  <div className="w-2 h-2 bg-[#D4AF37]/60 rounded-full"></div>
                </div>
                
                {/* Mobile Separator */}
                <div className="lg:hidden flex justify-center">
                  <div className="flex items-center space-x-1">
                    <div className="w-1 h-1 bg-[#D4AF37]/60 rounded-full"></div>
                    <div className="w-1 h-1 bg-[#D4AF37]/60 rounded-full"></div>
                    <div className="w-1 h-1 bg-[#D4AF37]/60 rounded-full"></div>
                  </div>
                </div>

                {/* Pillar 2: Expert Care */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="group w-full lg:w-auto"
                >
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-4 hover:bg-white/15 hover:border-white/30 transition-all duration-300">
                    <p className="text-center text-white font-medium text-sm sm:text-base tracking-wider">
                      <span className="font-bold text-[#D4AF37]">Expert</span> Care
                    </p>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>

                {/* Desktop Separator */}
                <div className="hidden lg:flex items-center">
                  <div className="w-2 h-2 bg-[#D4AF37]/60 rounded-full"></div>
                  <div className="w-8 h-px bg-[#D4AF37]/40 mx-2"></div>
                  <div className="w-2 h-2 bg-[#D4AF37]/60 rounded-full"></div>
                </div>
                
                {/* Mobile Separator */}
                <div className="lg:hidden flex justify-center">
                  <div className="flex items-center space-x-1">
                    <div className="w-1 h-1 bg-[#D4AF37]/60 rounded-full"></div>
                    <div className="w-1 h-1 bg-[#D4AF37]/60 rounded-full"></div>
                    <div className="w-1 h-1 bg-[#D4AF37]/60 rounded-full"></div>
                  </div>
                </div>

                {/* Pillar 3: Lasting Recovery */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="group w-full lg:w-auto"
                >
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-4 hover:bg-white/15 hover:border-white/30 transition-all duration-300">
                    <p className="text-center text-white font-medium text-sm sm:text-base tracking-wider">
                      <span className="font-bold text-[#D4AF37]">Lasting</span> Recovery
                    </p>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Enhanced CTA Buttons with Improved Hover States and Visual Weight */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-24"
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
          
          {/* "Elevated Welcome Panel" - Premium Featured Design */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full max-w-2xl mx-auto"
            style={{ minHeight: '300px' }}
          >
            <div className="relative">
              {/* Premium Panel with Rich Background */}
              <div 
                className="relative rounded-2xl p-8 sm:p-10 overflow-hidden border border-slate-600/30"
                style={{
                  background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 25px rgba(0, 0, 0, 0.2)'
                }}
              >
                {/* Subtle Internal Gradient Overlay */}
                <div 
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, transparent 50%, rgba(176, 141, 87, 0.05) 100%)'
                  }}
                />
                
                {/* Accent Border */}
                <div className="absolute inset-0 rounded-2xl border border-[#D4AF37]/20"></div>
                
                <div className="relative z-10 text-center">
                  {/* Premium "Welcome" Title with Gold Accent */}
                  <h2 
                    className="text-3xl sm:text-4xl font-bold mb-4"
                    style={{ 
                      color: '#D4AF37',
                      textShadow: '0 2px 8px rgba(212, 175, 55, 0.3)'
                    }}
                  >
                    Welcome
                  </h2>
                  
                  {/* Gold Accent Line */}
                  <div 
                    className="w-24 h-0.5 mx-auto mb-8 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%)'
                    }}
                  />
                  
                  {/* High-Contrast Text with Excellent Line Height */}
                  <p 
                    className="text-lg sm:text-xl mb-6 leading-relaxed font-medium"
                    style={{ 
                      color: '#f1f5f9',
                      lineHeight: '1.7em'
                    }}
                  >
                    I'm passionate about helping people move better, feel stronger, and get back to doing what they love.
                  </p>
                  
                  {/* Elegant Separator */}
                  <div className="flex justify-center items-center my-6">
                    <div className="w-8 h-px bg-gradient-to-r from-transparent to-slate-400"></div>
                    <div className="w-2 h-2 bg-[#D4AF37]/60 rounded-full mx-4"></div>
                    <div className="w-8 h-px bg-gradient-to-l from-transparent to-slate-400"></div>
                  </div>
                  
                  <p 
                    className="text-base sm:text-lg leading-relaxed"
                    style={{ 
                      color: '#cbd5e1',
                      lineHeight: '1.6em'
                    }}
                  >
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
