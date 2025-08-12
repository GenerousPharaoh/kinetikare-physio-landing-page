"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax effect for image
  const imageY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="relative h-[90vh] lg:h-[85vh] flex items-center justify-center overflow-hidden bg-white" style={{ marginTop: '0px', paddingTop: '0px', top: '0px' }}>
      {/* Desktop Split Layout / Mobile Stacked */}
      <div className="w-full h-full flex flex-col lg:flex-row">
        
        {/* Left Content Side */}
        <motion.div 
          className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-1 z-20 bg-white lg:bg-transparent"
          style={{ y: textY }}
        >
          <div className="px-6 sm:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 lg:py-16 max-w-2xl lg:max-w-none w-full">
            
            {/* Premium credential badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-[#B08D57]/10 to-[#C9A769]/10 rounded-full border border-[#B08D57]/20">
                <div className="w-2 h-2 bg-[#B08D57] rounded-full animate-pulse"></div>
                <span className="text-xs tracking-[0.15em] text-slate-700 uppercase font-semibold">
                  Registered Physiotherapist
                </span>
              </div>
            </motion.div>

            {/* Main Headline - Massive and Bold with Better Color Balance */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.85] tracking-[-0.02em] mb-6"
            >
              <span className="block bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent">
                The Science
              </span>
              <span className="block bg-gradient-to-r from-[#B08D57] via-[#C9A769] to-[#B08D57] bg-clip-text text-transparent">
                of Recovery.
              </span>
              <span className="block mt-2 bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent">
                The Art
              </span>
              <span className="block bg-gradient-to-r from-[#B08D57] via-[#C9A769] to-[#B08D57] bg-clip-text text-transparent">
                of Care.
              </span>
            </motion.h1>

            {/* Subtitle with Enhanced Typography */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-12 max-w-lg"
            >
              Advanced physiotherapy combining 
              <span className="font-semibold text-slate-800"> evidence-based techniques </span>
              with 
              <span className="font-semibold text-slate-800"> personalized attention </span>
              for lasting results.
            </motion.p>

            {/* Name - Elegant Signature Style */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8 sm:mb-10"
            >
              <p className="text-2xl font-light bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-1">
                Kareem Hassanein
              </p>
              <div className="h-px w-20 bg-gradient-to-r from-[#B08D57] to-transparent"></div>
            </motion.div>

            {/* CTAs - Modern Flat Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                className="group inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-medium rounded-none hover:bg-slate-800 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Book Your Assessment</span>
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#B08D57] to-[#C9A769] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </Link>

              <Link
                href="/services"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-700 font-medium rounded-none hover:border-[#B08D57] hover:text-[#B08D57] transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Explore Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#B08D57]/5 to-[#C9A769]/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </Link>
            </motion.div>

            {/* Trust Indicators - Premium Design */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 sm:mt-12 pt-6 border-t border-slate-200/50"
            >
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#B08D57]/20 to-[#C9A769]/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#B08D57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-600 font-medium">Direct Billing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#B08D57]/20 to-[#C9A769]/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#B08D57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-600 font-medium">Evening Hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#B08D57]/20 to-[#C9A769]/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#B08D57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-600 font-medium">5+ Years Experience</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image Side */}
        <div className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-[85vh] relative order-1 lg:order-2">
          {/* Image Container with Premium Ken Burns Effect */}
          <motion.div 
            className="absolute inset-0"
            style={{ y: imageY }}
          >
            <motion.div
              className="absolute inset-0 scale-110"
              animate={{ 
                scale: [1.1, 1.15, 1.1],
                x: [0, -20, 0],
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src="/images/clinic-pic-may-2025.jpg"
                alt="Modern physiotherapy clinic"
                fill
                priority
                quality={95}
                className="object-cover"
                style={{ 
                  objectPosition: 'center',
                  filter: 'contrast(1.05) brightness(1.02) saturate(1.1)'
                }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>

          {/* Animated Light Overlay for Premium Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(176, 141, 87, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(176, 141, 87, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(176, 141, 87, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(176, 141, 87, 0.15) 0%, transparent 50%)'
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />


          {/* Premium Static Logo Badge - Desktop Only */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="hidden lg:block absolute bottom-12 right-12"
          >
            <div className="relative group">
              {/* Subtle glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-[#B08D57]/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              {/* Main badge - Logo only */}
              <div className="relative bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/50">
                <Image
                  src="/images/kinetikare-logo-kareem-hassanein-physiotherapy-transparent.png"
                  alt="KinetiKare Physiotherapy"
                  width={60}
                  height={60}
                  className="opacity-90"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      
      {/* Bottom Transition Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none z-30"></div>
    </section>
  );
}