"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <>
      {/* Mobile */}
      <section className="lg:hidden min-h-screen flex flex-col pt-16 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-neutral-50">
          {/* Floating geometric elements */}
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-1/4 right-8 w-32 h-32 border border-[#B08D57]/10 rounded-full"
          />
          <motion.div 
            animate={{ 
              rotate: -360,
              y: [0, -20, 0]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute bottom-1/4 left-4 w-24 h-24 bg-[#B08D57]/5 rounded-xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-1/3 left-1/3 w-16 h-16 bg-gradient-to-br from-[#B08D57]/20 to-transparent rounded-full"
          />
        </div>

        {/* Content section */}
        <div className="relative flex-1 flex flex-col justify-center px-6 py-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs uppercase tracking-[0.2em] text-[#B08D57] mb-6 font-medium"
            >
              Registered Physiotherapist
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[48px] font-light text-slate-900 leading-tight mb-8"
            >
              <motion.span 
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block"
              >
                The Science
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-[#B08D57] block"
              >
                of Recovery
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="inline-block mt-2"
              >
                The Art
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="text-[#B08D57] block"
              >
                of Care
              </motion.span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mb-8"
            >
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="text-3xl font-light text-slate-800 mb-4"
              >
                Kareem Hassanein
              </motion.p>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 1, delay: 1.6 }}
                className="flex items-center justify-center gap-3"
              >
                <div className="h-px w-16 bg-[#B08D57]/30" />
                <motion.div 
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="h-1.5 w-1.5 rounded-full bg-[#B08D57]"
                />
                <div className="h-px w-16 bg-[#B08D57]/30" />
              </motion.div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="text-gray-600 mb-10 leading-relaxed max-w-md mx-auto"
            >
              Advanced physiotherapy combining evidence-based techniques with personalized attention for lasting results.
            </motion.p>

            <div className="space-y-4 max-w-sm mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.0 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  className="block w-full text-center px-8 py-5 bg-[#B08D57] text-white font-medium rounded-xl hover:bg-[#997A4B] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Book Your Assessment
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/services"
                  className="block w-full text-center px-8 py-5 bg-white border-2 border-slate-200 text-slate-700 font-medium rounded-xl hover:border-[#B08D57] hover:text-[#B08D57] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.4 }}
              className="mt-8 flex justify-center"
            >
              <div className="inline-flex items-center gap-4 text-xs text-slate-600">
                <motion.span 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.6 }}
                >
                  Direct Billing
                </motion.span>
                <motion.span 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="text-[#B08D57]"
                >
                  •
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.8 }}
                >
                  Evening Hours
                </motion.span>
                <motion.span 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="text-[#B08D57]"
                >
                  •
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.0 }}
                >
                  5+ Years Experience
                </motion.span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden lg:block h-screen relative overflow-hidden">
        {/* Animated Background - Full Width */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-neutral-50">
          {/* Large floating elements */}
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-1/4 right-1/4 w-80 h-80 border-2 border-[#B08D57]/8 rounded-full"
          />
          <motion.div 
            animate={{ 
              rotate: -360,
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-[#B08D57]/4 rounded-2xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-1/3 right-1/2 w-32 h-32 bg-gradient-to-br from-[#B08D57]/15 to-transparent rounded-full"
          />
          {/* Additional smaller elements */}
          <motion.div 
            animate={{ 
              y: [0, -40, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-1/2 right-1/5 w-6 h-6 bg-[#B08D57]/20 rounded-full"
          />
          <motion.div 
            animate={{ 
              x: [0, 30, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-2/3 w-4 h-16 bg-[#B08D57]/10 rounded-full"
          />
        </div>
        
        {/* Content - Centered and Full Width */}
        <div className="relative h-full flex items-center justify-center pt-20 z-10">
          <div className="max-w-4xl mx-auto px-[8%]">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-sm uppercase tracking-[0.2em] text-[#B08D57] mb-4 font-medium"
              >
                Registered Physiotherapist
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-[64px] xl:text-[80px] font-light text-slate-900 leading-[0.85] mb-8 text-center"
              >
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block"
                >
                  The Science
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-[#B08D57] block"
                >
                  of Recovery
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-4 block"
                >
                  The Art
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="text-[#B08D57] block"
                >
                  of Care
                </motion.span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mb-8 text-center"
              >
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="text-4xl font-light text-slate-800 mb-4"
                >
                  Kareem Hassanein
                </motion.p>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  transition={{ duration: 1, delay: 1.6 }}
                  className="flex items-center justify-center gap-4"
                >
                  <div className="h-px w-20 bg-[#B08D57]/30" />
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="h-2 w-2 rounded-full bg-[#B08D57]"
                  />
                  <div className="h-px w-20 bg-[#B08D57]/30" />
                </motion.div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto text-center"
              >
                Advanced physiotherapy combining evidence-based techniques with personalized attention for lasting results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.0 }}
                className="flex gap-6 mb-12 justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                    target="_blank"
                    className="inline-block px-10 py-5 bg-[#B08D57] text-white font-medium rounded-xl hover:bg-[#997A4B] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Book Your Assessment
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/services"
                    className="inline-block px-10 py-5 bg-white border-2 border-slate-200 text-slate-700 font-medium rounded-xl hover:border-[#B08D57] hover:text-[#B08D57] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Explore Services
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.2 }}
                className="flex items-center justify-center gap-8 text-sm text-slate-600"
              >
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4 }}
                >
                  Direct Billing
                </motion.span>
                <motion.span 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="text-[#B08D57]"
                >
                  •
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.6 }}
                >
                  Evening Hours
                </motion.span>
                <motion.span 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="text-[#B08D57]"
                >
                  •
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.8 }}
                >
                  5+ Years Experience
                </motion.span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}