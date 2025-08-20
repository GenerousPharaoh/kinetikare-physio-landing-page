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
        {/* Premium background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black">
          <div className="absolute inset-0 bg-gradient-to-t from-[#B08D57]/20 via-transparent to-transparent opacity-60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(176,141,87,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(176,141,87,0.1),transparent_50%)]" />
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-sm uppercase tracking-[0.3em] text-[#D4AF37] mb-8 font-semibold"
            >
              Registered Physiotherapist
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-[52px] font-bold text-white leading-[0.9] mb-10 drop-shadow-2xl"
              style={{
                textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 40px rgba(176,141,87,0.3)'
              }}
            >
              The Science<br/>
              <span className="text-[#D4AF37] bg-gradient-to-r from-[#D4AF37] to-[#F4E49C] bg-clip-text text-transparent">of Recovery</span><br/>
              <span className="inline-block mt-3">The Art</span><br/>
              <span className="text-[#D4AF37] bg-gradient-to-r from-[#D4AF37] to-[#F4E49C] bg-clip-text text-transparent">of Care</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-10"
            >
              <p className="text-4xl font-semibold text-white mb-4 drop-shadow-lg">Kareem Hassanein</p>
              <div className="flex items-center justify-center gap-4">
                <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                <div className="h-2 w-2 rounded-full bg-[#D4AF37] shadow-lg shadow-[#D4AF37]/50" />
                <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl text-slate-200 mb-12 leading-relaxed max-w-lg mx-auto drop-shadow-md"
            >
              Advanced physiotherapy combining evidence-based techniques with personalized attention for lasting results.
            </motion.p>

            <div className="space-y-5 max-w-md mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.0 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  className="block w-full text-center px-8 py-6 bg-gradient-to-r from-[#D4AF37] to-[#B08D57] text-black font-bold text-lg rounded-2xl shadow-2xl shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/50 transition-all duration-300 transform"
                >
                  Book Your Assessment
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.2 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/services"
                  className="block w-full text-center px-8 py-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-semibold text-lg rounded-2xl hover:bg-white/20 hover:border-[#D4AF37]/50 transition-all duration-300 transform shadow-xl"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mt-10 flex justify-center"
            >
              <div className="inline-flex items-center gap-6 text-sm text-slate-300 font-medium">
                <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">Direct Billing</span>
                <span className="text-[#D4AF37]">•</span>
                <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">Evening Hours</span>
                <span className="text-[#D4AF37]">•</span>
                <span className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm">5+ Years Experience</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden lg:block h-screen relative overflow-hidden">
        {/* Premium full-screen background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black">
          <div className="absolute inset-0 bg-gradient-to-t from-[#B08D57]/20 via-transparent to-transparent opacity-60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(176,141,87,0.2),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(212,175,55,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(176,141,87,0.05)_50%,transparent_100%)]" />
        </div>
        
        {/* Centered content */}
        <div className="relative h-full flex items-center justify-center pt-20 z-10">
          <div className="max-w-5xl mx-auto px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-lg uppercase tracking-[0.4em] text-[#D4AF37] mb-8 font-bold"
              >
                Registered Physiotherapist
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-[80px] xl:text-[96px] font-black text-white leading-[0.85] mb-12 drop-shadow-2xl"
                style={{
                  textShadow: '0 6px 30px rgba(0,0,0,0.8), 0 0 60px rgba(176,141,87,0.4)'
                }}
              >
                <motion.span 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="block"
                >
                  The Science
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="bg-gradient-to-r from-[#D4AF37] via-[#F4E49C] to-[#D4AF37] bg-clip-text text-transparent block"
                >
                  of Recovery
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="mt-6 block"
                >
                  The Art
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                  className="bg-gradient-to-r from-[#D4AF37] via-[#F4E49C] to-[#D4AF37] bg-clip-text text-transparent block"
                >
                  of Care
                </motion.span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="mb-12"
              >
                <p className="text-5xl font-bold text-white mb-6 drop-shadow-lg">Kareem Hassanein</p>
                <div className="flex items-center justify-center gap-6">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "5rem" }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" 
                  />
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                    className="h-3 w-3 rounded-full bg-[#D4AF37] shadow-lg shadow-[#D4AF37]/60" 
                  />
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "5rem" }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" 
                  />
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 }}
                className="text-2xl text-slate-200 mb-16 leading-relaxed max-w-4xl mx-auto drop-shadow-md font-light"
              >
                Advanced physiotherapy combining evidence-based techniques with personalized attention for lasting results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 2.4 }}
                className="flex gap-8 mb-16 justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.08, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                    target="_blank"
                    className="inline-block px-12 py-6 bg-gradient-to-r from-[#D4AF37] to-[#B08D57] text-black font-bold text-xl rounded-2xl shadow-2xl shadow-[#D4AF37]/40 hover:shadow-[#D4AF37]/60 transition-all duration-300 transform"
                  >
                    Book Your Assessment
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.08, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    href="/services"
                    className="inline-block px-12 py-6 bg-white/15 backdrop-blur-md border-3 border-white/30 text-white font-bold text-xl rounded-2xl hover:bg-white/25 hover:border-[#D4AF37]/60 transition-all duration-300 transform shadow-2xl"
                  >
                    Explore Services
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.6 }}
                className="flex items-center justify-center gap-8 text-lg text-slate-300 font-semibold"
              >
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.8 }}
                  className="px-6 py-3 bg-white/15 rounded-full backdrop-blur-md shadow-lg"
                >
                  Direct Billing
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.0 }}
                  className="text-[#D4AF37] text-2xl"
                >
                  •
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.2 }}
                  className="px-6 py-3 bg-white/15 rounded-full backdrop-blur-md shadow-lg"
                >
                  Evening Hours
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.4 }}
                  className="text-[#D4AF37] text-2xl"
                >
                  •
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.6 }}
                  className="px-6 py-3 bg-white/15 rounded-full backdrop-blur-md shadow-lg"
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