"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <>
      {/* Mobile */}
      <section className="lg:hidden min-h-screen bg-white flex flex-col pt-16 relative">
        {/* Image section */}
        <div className="relative h-[45vh] w-full">
          <Image
            src="/images/clinic-pic-may-2025.jpg"
            alt="KinetiKare Physiotherapy"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Content section */}
        <div className="flex-1 flex flex-col justify-center px-6 py-8">
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
              className="text-sm uppercase tracking-[0.3em] text-[#B08D57] mb-6 font-semibold"
            >
              Registered Physiotherapist
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
              className="leading-[1.05] mb-8"
              style={{ fontFamily: "'Crimson Text', 'Times New Roman', serif" }}
            >
              <div className="flex flex-col items-center">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-[32px] sm:text-[36px] font-bold tracking-[0.025em] italic bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent" 
                  style={{ 
                    textShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
                  }}
                >
                  The Science of Recovery
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-[36px] sm:text-[42px] font-black ml-8 mt-2 relative tracking-[0.02em] bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] bg-clip-text text-transparent" 
                  style={{ 
                    textShadow: '0 3px 12px rgba(212, 175, 55, 0.4)',
                    filter: 'drop-shadow(0 2px 4px rgba(212, 175, 55, 0.3))'
                  }}
                >
                  The Art of <span className="relative inline-block">Care
                    <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#F4D03F] origin-left transform scale-x-0 animate-[luxurySlide_0.5s_cubic-bezier(0.4,0,0.2,1)_0.8s_forwards]" style={{
                      clipPath: 'polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%)',
                      boxShadow: '0 3px 8px rgba(212, 175, 55, 0.4), 0 0 20px rgba(244, 208, 63, 0.2)',
                      filter: 'blur(0.3px)'
                    }}></span>
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F4D03F] to-[#D4AF37] origin-left transform scale-x-0 animate-[luxurySlide_0.5s_cubic-bezier(0.4,0,0.2,1)_0.85s_forwards]" style={{
                      clipPath: 'polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%)',
                      boxShadow: '0 1px 4px rgba(244, 208, 63, 0.6)'
                    }}></span>
                  </span>
                </motion.span>
              </div>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-3xl font-semibold mb-3 tracking-wide bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700 bg-clip-text text-transparent" 
                style={{ 
                  fontFamily: "'Crimson Text', serif", 
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.08))'
                }}
              >
                Kareem Hassanein
              </motion.p>
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-16 bg-[#B08D57]/40" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#B08D57]" />
                <div className="h-px w-16 bg-[#B08D57]/40" />
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg mx-auto font-light"
            >
              Advanced physiotherapy combining evidence-based techniques with personalized attention for lasting results.
            </motion.p>

            <div className="space-y-3 max-w-sm mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  className="block w-full text-center px-8 py-5 bg-[#B08D57] text-white font-semibold rounded-xl hover:bg-[#997A4B] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Book Your Assessment
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link
                  href="/services"
                  className="block w-full text-center px-8 py-5 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-[#B08D57] hover:text-[#B08D57] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 flex justify-center"
            >
              <div className="inline-flex items-center gap-4 text-xs text-slate-600">
                <span>Direct Billing</span>
                <span className="text-[#B08D57]">•</span>
                <span>Evening Hours</span>
                <span className="text-[#B08D57]">•</span>
                <span>5+ Years Experience</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden lg:block h-screen bg-white relative">
        {/* Right image - absolute positioned, completely independent */}
        <div className="absolute top-0 right-0 w-1/2 h-screen">
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-full w-full"
          >
            <Image
              src="/images/clinic-pic-may-2025.jpg"
              alt="KinetiKare Physiotherapy"
              fill
              priority
              className="object-cover brightness-110 contrast-125 saturate-110"
              sizes="50vw"
            />
            {/* Multiple dramatic overlays for depth and mood */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#B08D57]/5 to-black/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#B08D57]/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,black/15_100%)]" />
          </motion.div>
        </div>
        
        {/* Left content - independently positioned */}
        <div className="relative h-full flex items-center pt-20">
          <div className="w-1/2 pl-[8%] pr-[6%]">
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
                className="text-base uppercase tracking-[0.3em] text-[#B08D57] mb-6 font-semibold"
              >
                Registered Physiotherapist
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
                className="leading-[1.05] mb-8"
                style={{ fontFamily: "'Crimson Text', 'Times New Roman', serif" }}
              >
                <div className="flex flex-col">
                  <motion.span 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-[48px] xl:text-[52px] font-bold tracking-[0.025em] italic bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent" 
                    style={{ 
                      textShadow: '0 3px 12px rgba(0,0,0,0.2)',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                    }}
                  >
                    The Science of Recovery
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-[52px] xl:text-[58px] font-black ml-20 mt-3 relative tracking-[0.02em] bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] bg-clip-text text-transparent" 
                    style={{ 
                      textShadow: '0 4px 16px rgba(212, 175, 55, 0.5)',
                      filter: 'drop-shadow(0 3px 6px rgba(212, 175, 55, 0.4))'
                    }}
                  >
                    The Art of <span className="relative inline-block">Care
                      <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#F4D03F] origin-left transform scale-x-0 animate-[luxurySlide_0.5s_cubic-bezier(0.4,0,0.2,1)_0.8s_forwards]" style={{
                        clipPath: 'polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%)',
                        boxShadow: '0 4px 12px rgba(212, 175, 55, 0.5), 0 0 30px rgba(244, 208, 63, 0.3)',
                        filter: 'blur(0.4px)'
                      }}></span>
                      <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#F4D03F] to-[#D4AF37] origin-left transform scale-x-0 animate-[luxurySlide_0.5s_cubic-bezier(0.4,0,0.2,1)_0.85s_forwards]" style={{
                        clipPath: 'polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%)',
                        boxShadow: '0 2px 6px rgba(244, 208, 63, 0.7)'
                      }}></span>
                    </span>
                  </motion.span>
                </div>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-6"
              >
                <motion.p 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-4xl font-semibold mb-4 tracking-wide bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700 bg-clip-text text-transparent" 
                  style={{ 
                    fontFamily: "'Crimson Text', serif", 
                    textShadow: '0 3px 6px rgba(0,0,0,0.12)',
                    filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.1))'
                  }}
                >
                  Kareem Hassanein
                </motion.p>
                <div className="flex items-center gap-3">
                  <div className="h-px w-20 bg-[#B08D57]/40" />
                  <div className="h-2 w-2 rounded-full bg-[#B08D57]" />
                  <div className="h-px w-20 bg-[#B08D57]/40" />
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl font-light"
              >
                Advanced physiotherapy combining evidence-based techniques with personalized attention for lasting results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex gap-4 mb-8"
              >
                <Link
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  className="px-10 py-5 bg-[#B08D57] text-white font-semibold rounded-xl hover:bg-[#997A4B] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Book Your Assessment
                </Link>

                <Link
                  href="/services"
                  className="px-10 py-5 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-[#B08D57] hover:text-[#B08D57] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Explore Services
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="inline-flex items-center gap-6 text-base text-slate-600 font-medium"
              >
                <span>Direct Billing</span>
                <span className="text-[#B08D57]">•</span>
                <span>Evening Hours</span>
                <span className="text-[#B08D57]">•</span>
                <span>5+ Years Experience</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}