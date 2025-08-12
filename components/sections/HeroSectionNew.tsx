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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Desktop Split Layout / Mobile Stacked */}
      <div className="w-full h-full flex flex-col lg:flex-row">
        
        {/* Left Content Side */}
        <motion.div 
          className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-1 z-20 bg-white lg:bg-transparent"
          style={{ y: textY }}
        >
          <div className="px-6 sm:px-12 lg:px-16 xl:px-24 py-20 lg:py-32 max-w-2xl lg:max-w-none w-full">
            
            {/* Subtle credential tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center space-x-2">
                <div className="h-px w-8 bg-slate-300"></div>
                <span className="text-xs tracking-[0.2em] text-slate-500 uppercase font-medium">
                  Registered Physiotherapist
                </span>
              </div>
            </motion.div>

            {/* Main Headline - Massive and Bold */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-900 leading-[0.85] tracking-[-0.02em] mb-6"
            >
              The Science
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900">
                of Recovery.
              </span>
              <span className="block mt-2">
                The Art
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-700 ml-4">
                  of Care.
                </span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-12 max-w-lg"
            >
              Advanced physiotherapy combining evidence-based techniques with personalized attention 
              for lasting results.
            </motion.p>

            {/* Name - Elegant Signature Style */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-12"
            >
              <p className="text-2xl font-light text-slate-900 mb-1">
                Kareem Hassanein
              </p>
              <div className="h-px w-20 bg-gradient-to-r from-amber-600 to-transparent"></div>
            </motion.div>

            {/* CTAs - Modern Flat Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                className="group inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-medium rounded-none hover:bg-slate-800 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Book Your Assessment</span>
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 text-slate-700 font-medium rounded-none hover:border-slate-900 hover:text-slate-900 transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Trust Indicators - Subtle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-16 pt-8 border-t border-slate-200"
            >
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-slate-500">
                <span>✓ Direct Billing</span>
                <span>✓ Evening Hours</span>
                <span>✓ 5+ Years Experience</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image Side */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative order-1 lg:order-2">
          {/* Image Container with Parallax */}
          <motion.div 
            className="absolute inset-0"
            style={{ y: imageY }}
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
                filter: 'contrast(1.1)'
              }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Gradient Overlay - Very Subtle */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 lg:bg-gradient-to-r lg:from-white/40 lg:via-transparent lg:to-transparent"></div>

          {/* Floating Glass Card with Logo - Desktop Only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hidden lg:block absolute bottom-12 right-12"
          >
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/50">
              <Image
                src="/images/kinetikare-logo-kareem-hassanein-physiotherapy-transparent.png"
                alt="KinetiKare Physiotherapy"
                width={60}
                height={60}
                className="opacity-80"
              />
            </div>
          </motion.div>

          {/* Mobile Overlay Content */}
          <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end">
            <div className="p-6 pb-8 text-white">
              <p className="text-sm font-medium mb-2 opacity-90">Welcome to</p>
              <p className="text-2xl font-bold">KinetiKare Physiotherapy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Desktop Only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="hidden lg:block absolute bottom-8 left-1/2 lg:left-1/4 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-slate-400"
        >
          <span className="text-xs tracking-wider uppercase mb-2">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-400 to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}