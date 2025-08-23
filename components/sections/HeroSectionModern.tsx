"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CreditCardIcon, ClockIcon } from '@heroicons/react/24/outline';

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
          
          {/* Mobile overlay badges */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              className="flex-1 flex items-center gap-2 px-3 py-2 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37]/40 to-[#B08D57]/40 flex items-center justify-center flex-shrink-0">
                <CreditCardIcon className="w-4 h-4 text-white drop-shadow-lg" />
              </div>
              <div>
                <div className="text-white/80 text-[10px] font-medium uppercase tracking-wider">Direct</div>
                <div className="text-white text-xs font-semibold">Billing</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
              className="flex-1 flex items-center gap-2 px-3 py-2 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37]/40 to-[#B08D57]/40 flex items-center justify-center flex-shrink-0">
                <ClockIcon className="w-4 h-4 text-white drop-shadow-lg" />
              </div>
              <div>
                <div className="text-white/80 text-[10px] font-medium uppercase tracking-wider">Evening</div>
                <div className="text-white text-xs font-semibold">Hours</div>
              </div>
            </motion.div>
          </div>
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
              className="text-sm uppercase tracking-[0.3em] bg-gradient-to-r from-[#B08D57] to-[#D4AF37] bg-clip-text text-transparent mb-6 font-semibold"
            >
              Registered Physiotherapist
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[32px] sm:text-[36px] leading-[1.2] mb-8 text-center"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <div className="space-y-3">
                <div className="text-slate-800 font-light tracking-wide text-[28px] sm:text-[30px]">The Science of Recovery</div>
                <div className="text-slate-800 font-medium relative tracking-wide text-[34px] sm:text-[38px] overflow-visible">
                  The Art of <span className="relative inline-block bg-gradient-to-r from-[#B08D57] to-[#D4AF37] bg-clip-text text-transparent font-semibold italic pr-1">Care
                    <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B08D57] to-[#D4AF37] origin-left transform scale-x-0 animate-[taperedSlide_0.6s_ease-out_0.4s_forwards] rounded-full"></span>
                  </span>
                </div>
              </div>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <div className="mb-3">
                <p className="text-[32px] font-extralight text-slate-900 tracking-[0.15em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Kareem Hassanein</p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#B08D57] to-[#D4AF37]/40" />
                <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37]" />
                <div className="h-px w-16 bg-gradient-to-r from-[#D4AF37]/40 via-[#B08D57] to-transparent" />
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
                  className="block w-full text-center px-8 py-5 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] hover:from-[#C99A65] hover:to-[#E6B84A] text-white hover:text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 shadow-lg transform hover:-translate-y-0.5"
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
            
            {/* Elegant overlay badges */}
            <div className="absolute bottom-20 left-10 flex flex-col gap-3">
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                className="group flex items-center gap-3 px-5 py-3 bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-black/25 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37]/40 to-[#B08D57]/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CreditCardIcon className="w-5 h-5 text-white drop-shadow-lg" />
                </div>
                <div>
                  <div className="text-white/80 text-xs font-medium uppercase tracking-wider">Direct</div>
                  <div className="text-white text-sm font-semibold">Insurance Billing</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                className="group flex items-center gap-3 px-5 py-3 bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-black/25 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37]/40 to-[#B08D57]/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ClockIcon className="w-5 h-5 text-white drop-shadow-lg" />
                </div>
                <div>
                  <div className="text-white/80 text-xs font-medium uppercase tracking-wider">Flexible</div>
                  <div className="text-white text-sm font-semibold">Evening Hours</div>
                </div>
              </motion.div>
            </div>
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
                className="text-base uppercase tracking-[0.3em] bg-gradient-to-r from-[#B08D57] to-[#D4AF37] bg-clip-text text-transparent mb-6 font-semibold"
              >
                Registered Physiotherapist
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="leading-[1.2] mb-8"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <div className="space-y-4">
                  <div className="text-[34px] xl:text-[36px] text-slate-800 font-light tracking-wide">The Science of Recovery</div>
                  <div className="text-[40px] xl:text-[44px] text-slate-800 font-medium relative tracking-wide overflow-visible">
                    The Art of <span className="relative inline-block bg-gradient-to-r from-[#B08D57] to-[#D4AF37] bg-clip-text text-transparent font-semibold italic pr-1">Care
                      <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B08D57] to-[#D4AF37] origin-left transform scale-x-0 animate-[taperedSlide_0.6s_ease-out_0.4s_forwards] rounded-full"></span>
                    </span>
                  </div>
                </div>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-6"
              >
                <div className="mb-4">
                  <p className="text-[38px] font-extralight text-slate-900 tracking-[0.15em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Kareem Hassanein</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#B08D57] to-[#D4AF37]/40" />
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37]" />
                  <div className="h-px w-20 bg-gradient-to-r from-[#D4AF37]/40 via-[#B08D57] to-transparent" />
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
                  className="px-10 py-5 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] hover:from-[#C99A65] hover:to-[#E6B84A] text-white hover:text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 shadow-lg transform hover:-translate-y-1"
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
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}