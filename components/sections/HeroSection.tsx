"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { Award, CheckCircle } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const HeroSection = React.memo(function HeroSection() {
  return (
    <section 
      className="relative overflow-hidden min-h-screen flex items-center py-24 lg:pt-36"
    >
      {/* Backdrop image with refined styling */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full overflow-hidden" style={{ position: 'relative' }}>
          <Image
            src="/images/clinic-pic-updated.jpg"
            alt="Physiotherapy treatment room"
            fill
            className="object-cover object-center"
            priority={true}
            quality={90}
            sizes="100vw"
            style={{ 
              filter: 'brightness(0.6) contrast(1.05) saturate(1)',
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: 1
            }}
          />
        </div>

        {/* Refined gradient overlays with reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/60 via-primary-800/55 to-primary-800/60" style={{ opacity: 1 }}></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/8 via-transparent to-primary-700/20" style={{ opacity: 1 }}></div>
        
        {/* Refined texture overlay */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: "url('/images/patterns/noise-pattern.png')",
            backgroundSize: "200px",
            opacity: 0.04
          }}
        ></div>
        
        {/* Light beam effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute -inset-[25%] blur-3xl bg-gradient-to-br from-accent-light/20 via-transparent to-transparent rotate-12" 
            style={{ 
              opacity: 0.03,
              transform: 'rotate(12deg)'
            }}
          ></div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-neutral-50/10 to-transparent z-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left side content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
            className="lg:col-span-7 text-left"
          >
            <div className="max-w-3xl">
              <div className="inline-block mb-6 md:mb-8 px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm font-medium bg-white/10 text-white/95 rounded-full backdrop-blur-xl border border-white/20 shadow-lg">
                <span className="inline-block w-2 h-2 rounded-full bg-[#B08D57] mr-2 relative top-[1px]"></span>
                <span className="tracking-wide">Experience Expert Care in Burlington</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.2]">
                <span className="block">The Science of Recovery,</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#B08D57] via-[#D4AF37] to-[#B08D57] font-semibold tracking-tight">
                  The Art of Care
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-white mb-12 leading-[1.6] max-w-2xl font-light">
                Expert Care. Genuine Understanding. Lasting Recovery.
              </p>

              <div className="flex flex-wrap gap-5 mt-12">
                <Link 
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  className="group relative px-7 py-3.5 font-semibold rounded-xl text-white flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent/30"
                  aria-label="Book an appointment online"
                  style={{ position: 'relative', zIndex: 10, backgroundColor: '#B08D57' }}
                >
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-[#B08D57] to-[#B08D57] transition-all duration-300 shadow-lg shadow-[#B08D57]/10 group-hover:shadow-[#B08D57]/20"
                    style={{ inset: 0, zIndex: 0 }}
                  ></div>
                  <CalendarDaysIcon className="h-5 w-5 relative z-10 transition-transform group-hover:translate-y-[1px]" aria-hidden="true" />
                  <span className="relative z-10 tracking-wide transition-transform group-hover:translate-y-[1px]">Book an Appointment</span>
                </Link>
                
                <Link
                  href="#services" 
                  className="relative px-7 py-3.5 font-medium rounded-xl text-white flex items-center justify-center transition-all duration-300 group overflow-hidden focus:outline-none focus:ring-4 focus:ring-white/30"
                  aria-label="Explore services"
                  style={{ position: 'relative', zIndex: 10 }}
                >
                  <div 
                    className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl transition-all duration-300 shadow-lg shadow-black/5 group-hover:bg-white/15"
                    style={{ inset: 0, zIndex: 0 }}
                  ></div>
                  <span className="relative z-10 tracking-wide transition-transform group-hover:translate-y-[1px]">Explore Services</span>
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Right side - enhanced glass card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.8, 0.25, 1], delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <GlassCard
              variant="dark"
              blur="xl"
              border
              glow
              className="p-8 backdrop-blur-md"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-[#B08D57]/70 pb-4">
                Your Personalized Care Journey
              </h3>
              
              <ul className="space-y-5">
                <li className="flex items-start p-2 rounded-md transition-all duration-300 hover:bg-white/5 transform hover:-translate-y-0.5">
                  <div className="flex-shrink-0 mr-3 bg-[#B08D57]/20 rounded-full p-1 transition-all duration-300 group-hover:bg-[#B08D57]/30">
                    <CheckCircle className="h-5 w-5 text-[#B08D57]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Thorough Assessments</h4>
                    <p className="text-white/80">Seeking to uncover the root causes and patterns where applicable, beyond just treating the symptoms</p>
                  </div>
                </li>
                <li className="flex items-start p-2 rounded-md transition-all duration-300 hover:bg-white/5 transform hover:-translate-y-0.5">
                  <div className="flex-shrink-0 mr-3 bg-[#B08D57]/20 rounded-full p-1 transition-all duration-300 group-hover:bg-[#B08D57]/30">
                    <CheckCircle className="h-5 w-5 text-[#B08D57]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Advanced Manual Therapy</h4>
                    <p className="text-white/80">Specialized techniques for effective treatment</p>
                  </div>
                </li>
                <li className="flex items-start p-2 rounded-md transition-all duration-300 hover:bg-white/5 transform hover:-translate-y-0.5">
                  <div className="flex-shrink-0 mr-3 bg-[#B08D57]/20 rounded-full p-1 transition-all duration-300 group-hover:bg-[#B08D57]/30">
                    <CheckCircle className="h-5 w-5 text-[#B08D57]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Personalized Exercise Rehabilitation Plans</h4>
                    <p className="text-white/80">Customized strategies tailored to your unique needs and functional status</p>
                  </div>
                </li>
                <li className="flex items-start p-2 rounded-md transition-all duration-300 hover:bg-white/5 transform hover:-translate-y-0.5">
                  <div className="flex-shrink-0 mr-3 bg-[#B08D57]/20 rounded-full p-1 transition-all duration-300 group-hover:bg-[#B08D57]/30">
                    <CheckCircle className="h-5 w-5 text-[#B08D57]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Clear Recovery Roadmap</h4>
                    <p className="text-white/80">Strategic planning to achieve your health goals</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-[#B08D57]/70">
                <Link
                  href="/#about"
                  className="inline-flex items-center text-[#B08D57] hover:text-[#D4AF37] transition-colors group"
                >
                  <span>Learn more about my approach</span>
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;