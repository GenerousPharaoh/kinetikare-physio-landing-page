"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

const HeroSection = React.memo(function HeroSection() {
  return (
    <section 
      className="hero-section relative min-h-screen w-full overflow-hidden"
      style={{ willChange: 'transform' }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full relative">
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
              sizes="100vw"
              style={{ 
                filter: 'brightness(0.6) contrast(1.2) saturate(1.2)',
                objectFit: 'cover',
                objectPosition: '70% center'
              }}
            />
          </motion.div>
        </div>

        {/* Single consistent overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/75 via-primary-800/65 to-primary-800/70" />
      </div>
      
      {/* Main content container - scrollable, always visible */}
      <div className="relative z-10 min-h-screen w-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="w-full max-w-7xl mx-auto">
          
          {/* Logo Section - guaranteed visibility */}
          <div className="w-full flex justify-center mb-8 lg:mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full max-w-sm"
            >
              <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl rounded-2xl p-6 lg:p-8 shadow-2xl border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/8 via-transparent to-[#B08D57]/5 rounded-2xl"></div>
                
                <div className="relative z-10 flex items-center justify-center">
                  <Image
                    src="/images/kinetikare-logo.png"
                    alt="KinetiKare physiotherapy logo Burlington Waterdown"
                    width={160}
                    height={160}
                    className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 object-contain"
                    style={{
                      filter: 'contrast(1.1) saturate(1.1) brightness(1.1) drop-shadow(0 4px 16px rgba(212, 175, 55, 0.25))'
                    }}
                  />
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="mt-4 lg:mt-6 text-center"
              >
                <div className="text-white/95 text-base sm:text-lg lg:text-xl font-medium tracking-wide">
                  Kareem Hassanein Physiotherapy
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Content Section - stack on mobile, side-by-side on desktop */}
          <div className="w-full space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-10">
            
            {/* Left side - Main content */}
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-center lg:text-left space-y-6 lg:space-y-8"
              >
                {/* Main heading */}
                <div>
                  <h1 className="text-white tracking-tight leading-[1.1]">
                    <motion.span 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                      className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-3"
                      style={{
                        textShadow: '0 6px 24px rgba(0, 0, 0, 0.9), 0 12px 48px rgba(176, 141, 87, 0.4)'
                      }}
                    >
                      The Science of Recovery,
                    </motion.span>
                    <motion.span 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                      className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black"
                      style={{
                        background: 'linear-gradient(135deg, #B08D57 0%, #D4AF37 15%, #F4E4BC 35%, #D4AF37 55%, #B08D57 75%, #A17D47 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
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
                >
                  <div className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed font-light mx-auto lg:mx-0 max-w-3xl">
                    <div className="mb-3">
                      <span className="font-medium text-white/95 inline-block mr-3">
                        Genuine Understanding.
                      </span>
                      <span className="font-medium text-white/95 inline-block">
                        Expert Care.
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-[#D4AF37] inline-block text-xl sm:text-2xl md:text-3xl">
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
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 justify-center lg:justify-start"
                >
                  <Link 
                    href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                    target="_blank"
                    className="group relative px-6 sm:px-8 py-4 font-semibold rounded-xl text-white flex items-center justify-center gap-3 transition-all duration-300 bg-gradient-to-r from-[#B08D57] to-[#C9A769] hover:shadow-xl hover:shadow-[#B08D57]/40 text-base sm:text-lg"
                  >
                    <CalendarDaysIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    <span className="tracking-wide">Book an Appointment</span>
                  </Link>
                  
                  <Link
                    href="/services" 
                    className="relative px-6 sm:px-8 py-4 font-semibold rounded-xl text-white flex items-center justify-center transition-all duration-300 bg-slate-700/90 backdrop-blur-xl border border-slate-600/80 hover:bg-slate-600/90 hover:border-slate-500/80 text-base sm:text-lg"
                  >
                    <span className="tracking-wide">Explore Services</span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Right side - Welcome Card */}
            <div className="lg:col-span-4">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="w-full max-w-md mx-auto lg:ml-auto"
              >
                <div className="relative rounded-2xl p-6 lg:p-8 shadow-2xl border border-white/50 bg-white/95 backdrop-blur-2xl">
                  <div className="absolute top-3 left-3 w-2 h-2 bg-gradient-to-br from-[#B08D57]/15 to-[#D4AF37]/15 rounded-full"></div>
                  <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-gradient-to-br from-[#D4AF37]/15 to-[#B08D57]/15 rounded-full"></div>

                  <div className="relative z-10 text-center">
                    <div className="mb-6">
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-5 tracking-tight">
                        Welcome
                      </h3>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-[#B08D57] via-[#D4AF37] to-[#B08D57] mx-auto mb-6 rounded-full"></div>
                    </div>

                    <div className="space-y-5">
                      <p className="text-slate-700 leading-relaxed text-base lg:text-lg font-medium">
                        I'm passionate about helping people move better, feel stronger, and get back to doing what they love.
                      </p>
                      
                      <div className="w-6 h-px bg-gradient-to-r from-transparent via-[#B08D57]/25 to-transparent mx-auto"></div>
                      
                      <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                        Every person's journey is unique, and I'm here to guide you through yours with care, understanding, and evidence-based treatment.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
