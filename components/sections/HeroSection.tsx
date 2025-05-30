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
        
        {/* Gradient Overlays - Changed from navy to neutral */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
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
          
          {/* Logo Section - Always Visible with Animation */}
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
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-lg sm:text-xl font-medium text-white/90 tracking-wide"
            >
              Kareem Hassanein Physiotherapy
            </motion.p>
          </motion.div>
          
          {/* Hero Text with Dynamic Animations */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="mb-8">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 tracking-tight"
                style={{ textShadow: '0 10px 30px rgba(0,0,0,0.7)' }}
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
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                }}
              >
                The Art of Care
              </motion.span>
            </h1>
            
            {/* Redesigned tagline section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col items-center space-y-6"
            >
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-[#B08D57]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/10">
                    <p className="text-xl sm:text-2xl text-white/95 font-light tracking-wide">
                      Genuine <span className="font-semibold bg-gradient-to-r from-[#D4AF37] to-[#B08D57] bg-clip-text text-transparent">Understanding</span>
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="hidden lg:block w-2 h-2 bg-gradient-to-br from-[#D4AF37] to-[#B08D57] rounded-full"
                />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-[#B08D57]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/10">
                    <p className="text-xl sm:text-2xl text-white/95 font-light tracking-wide">
                      Expert <span className="font-semibold bg-gradient-to-r from-[#D4AF37] to-[#B08D57] bg-clip-text text-transparent">Care</span>
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                  className="hidden lg:block w-2 h-2 bg-gradient-to-br from-[#D4AF37] to-[#B08D57] rounded-full"
                />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-[#B08D57]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/10">
                    <p className="text-xl sm:text-2xl text-white/95 font-light tracking-wide">
                      Lasting <span className="font-semibold bg-gradient-to-r from-[#D4AF37] to-[#B08D57] bg-clip-text text-transparent">Recovery</span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* CTA Buttons with Hover Effects */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link 
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#B08D57] to-[#C9A769] text-white font-semibold rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#C9A769] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CalendarDaysIcon className="relative z-10 h-5 w-5 sm:h-6 sm:w-6" />
                <span className="relative z-10">Book an Appointment</span>
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/services" 
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl text-white font-semibold rounded-xl border border-white/30 overflow-hidden hover:bg-white/20 transition-all duration-300"
              >
                <span className="relative z-10">Explore Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Welcome Card - Beautiful with Guaranteed Visibility */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full max-w-2xl mx-auto"
            style={{ minHeight: '300px' }}
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-[#B08D57]/20 rounded-3xl blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/50 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-full -translate-y-20 translate-x-20" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#B08D57]/10 to-transparent rounded-full translate-y-16 -translate-x-16" />
                
                <div className="relative z-10 text-center">
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
