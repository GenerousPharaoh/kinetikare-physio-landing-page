"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <>
      {/* Mobile */}
      <section className="lg:hidden min-h-screen bg-slate-900 flex flex-col pt-16 relative overflow-hidden">
        {/* Elite background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #B08D57 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, #B08D57 0%, transparent 50%)`
          }} />
        </div>

        {/* Image section with unique treatment */}
        <div className="relative h-[45vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-slate-900/40 z-10" />
          <Image
            src="/images/clinic-pic-may-2025.jpg"
            alt="KinetiKare Physiotherapy"
            fill
            priority
            className="object-cover scale-110"
            sizes="100vw"
          />
          {/* Unique angular overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent z-20" />
          <div className="absolute bottom-0 left-0 right-0 z-30">
            <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-20 fill-slate-900">
              <polygon points="0,20 100,0 100,20" />
            </svg>
          </div>
        </div>

        {/* Content section */}
        <div className="flex-1 flex flex-col justify-center px-8 py-10 relative z-10">
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
              className="text-[11px] uppercase tracking-[0.3em] text-[#B08D57] mb-8 font-semibold"
            >
              Registered Physiotherapist
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[44px] sm:text-[52px] font-bold text-white leading-[1.08] mb-10"
            >
              The Science<br/>
              <span className="text-[#B08D57]">of Recovery.</span><br/>
              <span className="inline-block mt-3">The Art</span><br/>
              <span className="text-[#B08D57]">of Care.</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-10"
            >
              <p className="text-[28px] font-extralight text-white mb-4 tracking-wide">Kareem Hassanein</p>
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
              className="text-white/70 mb-12 leading-[1.8] max-w-md mx-auto text-[15px]"
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
                  className="block w-full text-center px-6 py-4 bg-[#B08D57] text-slate-900 font-semibold transition-all hover:bg-[#C9A769] group overflow-hidden"
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
                  className="block w-full text-center px-6 py-4 bg-transparent border border-white/20 text-white font-medium hover:bg-white/5 hover:border-white/40 transition-all"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex justify-center gap-8 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#B08D57] rounded-full" />
                  <span className="font-medium">Direct Billing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#B08D57] rounded-full" />
                  <span className="font-medium">Evening Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#B08D57] rounded-full" />
                  <span className="font-medium">5+ Years</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden lg:block min-h-screen bg-slate-900 relative overflow-hidden">
        {/* Elite background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #B08D57 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, #B08D57 0%, transparent 50%)`
          }} />
        </div>

        <div className="flex h-screen">
          {/* Left content - Dark elegant */}
          <div className="w-[45%] flex items-center justify-center px-[8%] relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[12px] uppercase tracking-[0.35em] text-[#B08D57] mb-12 font-semibold"
              >
                Registered Physiotherapist
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-[68px] xl:text-[76px] font-bold text-white leading-[0.88] mb-14"
              >
                The Science<br/>
                <span className="text-[#B08D57]">of Recovery.</span><br/>
                <span className="mt-6 block">The Art</span>
                <span className="text-[#B08D57]">of Care.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
              >
                <p className="text-[34px] font-extralight text-white mb-4 tracking-wide">Kareem Hassanein</p>
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
                className="text-[17px] text-white/70 mb-14 leading-[1.8] max-w-xl"
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
                  className="px-10 py-[18px] bg-[#B08D57] text-slate-900 font-semibold transition-all hover:bg-[#C9A769] group overflow-hidden"
                >
                  Book Your Assessment
                </Link>

                <Link
                  href="/services"
                  className="px-10 py-[18px] bg-transparent border border-white/20 text-white font-medium hover:bg-white/5 hover:border-white/40 transition-all"
                >
                  Explore Services
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex gap-10 text-[14px] text-white/60"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#B08D57] rounded-full" />
                  <span>Direct Billing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#B08D57] rounded-full" />
                  <span>Evening Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#B08D57] rounded-full" />
                  <span>5+ Years Experience</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right image - Dramatic treatment */}
          <div className="w-[55%] relative">
            {/* Angular overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-slate-900 z-20" 
                 style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
            
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative h-full"
            >
              <div className="absolute inset-0 bg-slate-900/30 z-10" />
              <Image
                src="/images/clinic-pic-may-2025.jpg"
                alt="KinetiKare Physiotherapy"
                fill
                priority
                className="object-cover"
                sizes="55vw"
              />
              
              {/* Floating accent */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-20 right-20 z-30"
              >
                <div className="bg-slate-900/90 backdrop-blur-md px-6 py-4 border border-[#B08D57]/30">
                  <Image
                    src="/images/kinetikare-logo-kareem-hassanein-physiotherapy-transparent.png"
                    alt="KinetiKare"
                    width={50}
                    height={50}
                    className="opacity-80"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}