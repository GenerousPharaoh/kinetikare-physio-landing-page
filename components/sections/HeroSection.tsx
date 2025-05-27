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
      {/* Simplified backdrop image */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full overflow-hidden relative">
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
        </div>

        {/* Simplified gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 via-primary-800/60 to-primary-800/65" />
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary-700/25" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-neutral-50/10 to-transparent z-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[80vh]">
          {/* Left side content - main hero content */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
            className="lg:col-span-7 text-left space-y-8 lg:space-y-10"
          >
            <div className="max-w-4xl space-y-6 lg:space-y-8">
              {/* Simplified main heading */}
              <div className="relative mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.05] relative">
                  {/* First line */}
                  <span 
                    className="block relative transform-gpu text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black"
                    style={{
                      textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 8px 40px rgba(176, 141, 87, 0.3)',
                      filter: 'contrast(1.1) brightness(1.1)'
                    }}
                  >
                    The Science of Recovery,
                  </span>
                  
                  {/* Second line */}
                  <span 
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
                  </span>
                </h1>
              </div>
              
              {/* Simplified tagline */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative mb-10"
              >
                <div className="text-lg md:text-xl text-white leading-[1.6] max-w-2xl font-light relative z-10">
                  <div className="block">
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
              </motion.div>

              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap gap-5 mt-10"
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
                
                <Link
                  href="#services" 
                  className="relative px-7 py-3.5 font-medium rounded-xl text-white flex items-center justify-center transition-all duration-300 group overflow-hidden focus:outline-none focus:ring-4 focus:ring-white/30 bg-white/15 backdrop-blur-xl border border-white/20 hover:bg-white/25 hover:border-white/30"
                  aria-label="Explore services"
                >
                  <span className="tracking-wide">Explore Services</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right side - Welcome Card */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.8, 0.25, 1], delay: 0.4 }}
            className="lg:col-span-5 mt-8 lg:mt-0"
          >
            <div className="relative max-w-xl ml-auto">
              
              {/* Personal Welcome Card */}
              <div 
                className="relative bg-white/95 backdrop-blur-3xl rounded-[2rem] p-6 shadow-[0_20px_70px_-10px_rgba(0,0,0,0.3)] border border-white/40 overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.9) 100%)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* Elegant top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B08D57] to-transparent"></div>

                {/* Welcome Content */}
                <div className="relative z-10 text-center">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 tracking-tight">
                      Welcome
                    </h3>
                    <div className="w-12 h-px bg-gradient-to-r from-[#B08D57] to-[#D4AF37] mx-auto mb-6"></div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-slate-700 leading-relaxed text-base">
                      I'm passionate about helping people move better, feel stronger, and get back to doing what they love.
                    </p>
                    
                    <p className="text-slate-600 leading-relaxed text-sm">
                      Every person's journey is unique, and I'm here to guide you through yours with care, understanding, and evidence-based treatment.
                    </p>
                  </div>
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
