"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <>
      {/* Mobile */}
      <section className="lg:hidden min-h-screen bg-gradient-to-b from-white to-gray-50/50 flex flex-col pt-16">
        {/* Image section */}
        <div className="relative h-[50vh] w-full">
          <Image
            src="/images/clinic-pic-may-2025.jpg"
            alt="KinetiKare Physiotherapy"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Premium gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
          {/* Subtle gradient at bottom for transition */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/95 to-transparent" />
        </div>

        {/* Content section */}
        <div className="flex-1 flex flex-col justify-center px-8 py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[11px] uppercase tracking-[0.3em] text-[#B08D57] mb-8 font-medium"
            >
              Registered Physiotherapist
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[44px] sm:text-[52px] font-light text-slate-900 leading-[1.08] mb-10 tracking-[-0.02em]"
            >
              The Science<br/>
              <span className="bg-gradient-to-r from-[#B08D57] to-[#D4AF37] bg-clip-text text-transparent">of Recovery.</span><br/>
              <span className="inline-block mt-3">The Art</span><br/>
              <span className="bg-gradient-to-r from-[#B08D57] to-[#D4AF37] bg-clip-text text-transparent">of Care.</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-10"
            >
              <p className="text-[28px] font-extralight text-slate-800 mb-4 tracking-wide">Kareem Hassanein</p>
              <div className="flex items-center justify-center gap-4">
                <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#B08D57]/60" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#B08D57]" />
                <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#B08D57]/60" />
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 mb-12 leading-[1.8] max-w-md mx-auto text-[15px]"
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
                  className="block w-full text-center px-7 py-4.5 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-normal tracking-wide rounded-2xl hover:from-slate-800 hover:to-slate-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 transform"
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
                  className="block w-full text-center px-7 py-4.5 bg-white/80 backdrop-blur-sm border border-slate-200/60 text-slate-700 font-normal tracking-wide rounded-2xl hover:border-[#B08D57]/40 hover:text-[#B08D57] hover:bg-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-10 flex justify-center"
            >
              <div className="inline-flex items-center gap-1 px-5 py-2.5 bg-gradient-to-r from-[#B08D57]/5 to-[#D4AF37]/5 backdrop-blur-sm rounded-full border border-[#B08D57]/10">
                <span className="px-3 py-1 text-xs font-light text-slate-700">Direct Billing</span>
                <span className="text-[#B08D57]/30">•</span>
                <span className="px-3 py-1 text-xs font-light text-slate-700">Evening Hours</span>
                <span className="text-[#B08D57]/30">•</span>
                <span className="px-3 py-1 text-xs font-light text-slate-700">5+ Years Experience</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden lg:flex min-h-screen bg-gradient-to-br from-white via-gray-50/30 to-white pt-16">
        <div className="flex w-full">
          {/* Left content - with proper padding and centering */}
          <div className="w-1/2 flex items-center pl-[8%] pr-[6%] py-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[12px] uppercase tracking-[0.35em] text-[#B08D57] mb-12 font-medium"
              >
                Registered Physiotherapist
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-[68px] xl:text-[76px] font-light text-slate-900 leading-[0.88] mb-14 tracking-[-0.03em]"
              >
                The Science<br/>
                <span className="bg-gradient-to-r from-[#B08D57] to-[#D4AF37] bg-clip-text text-transparent">of Recovery.</span><br/>
                <span className="mt-6 block">The Art</span>
                <span className="bg-gradient-to-r from-[#B08D57] to-[#D4AF37] bg-clip-text text-transparent">of Care.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
              >
                <p className="text-[34px] font-extralight text-slate-800 mb-4 tracking-wide">Kareem Hassanein</p>
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#B08D57]/60" />
                  <div className="h-2 w-2 rounded-full bg-[#B08D57]/80" />
                  <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#B08D57]/60" />
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[17px] text-gray-600 mb-14 leading-[1.8] max-w-xl"
              >
                Advanced physiotherapy combining evidence-based techniques with personalized attention for lasting results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex gap-5 mb-14"
              >
                <Link
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  className="px-10 py-[18px] bg-gradient-to-r from-slate-900 to-slate-800 text-white font-normal tracking-wide rounded-2xl hover:from-slate-800 hover:to-slate-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 transform"
                >
                  Book Your Assessment
                </Link>

                <Link
                  href="/services"
                  className="px-10 py-[18px] bg-white/90 backdrop-blur-sm border border-slate-200/60 text-slate-700 font-normal tracking-wide rounded-2xl hover:border-[#B08D57]/40 hover:text-[#B08D57] hover:bg-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
                >
                  Explore Services
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#B08D57]/5 to-[#D4AF37]/5 backdrop-blur-sm rounded-full border border-[#B08D57]/10"
              >
                <span className="px-3 py-1 text-sm font-light text-slate-700">Direct Billing</span>
                <span className="text-[#B08D57]/30">•</span>
                <span className="px-3 py-1 text-sm font-light text-slate-700">Evening Hours</span>
                <span className="text-[#B08D57]/30">•</span>
                <span className="px-3 py-1 text-sm font-light text-slate-700">5+ Years Experience</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right image - full height starting from top */}
          <div className="w-1/2 relative min-h-screen">
            <motion.div
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative h-full min-h-screen"
            >
              <Image
                src="/images/clinic-pic-may-2025.jpg"
                alt="KinetiKare Physiotherapy"
                fill
                priority
                className="object-cover"
                sizes="50vw"
              />
              
              {/* Premium overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/8" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}