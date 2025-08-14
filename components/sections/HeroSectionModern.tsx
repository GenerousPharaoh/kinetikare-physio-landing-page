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
                            radial-gradient(circle at 80% 80%, #B08D57 0%, transparent 50%),
                            radial-gradient(circle at 40% 20%, #B08D57 0%, transparent 50%)`
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
        <div className="flex-1 flex flex-col justify-center px-8 py-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Elite badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <div className="h-[1px] w-12 bg-[#B08D57]" />
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#B08D57] font-bold">
                Elite Performance
              </p>
              <div className="h-[1px] w-12 bg-[#B08D57]" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[38px] sm:text-[44px] font-bold text-white leading-[1.1] mb-6"
            >
              Beyond<br/>
              <span className="text-[#B08D57] text-[48px] sm:text-[56px]">Recovery</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/60 text-sm uppercase tracking-[0.3em] mb-8 font-medium"
            >
              Performance Redefined
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <p className="text-[24px] font-extralight text-white mb-2">Kareem Hassanein</p>
              <p className="text-[11px] text-[#B08D57] uppercase tracking-[0.25em]">MSc PT • CAMPT Certified</p>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white/70 mb-10 leading-[1.8] max-w-md mx-auto text-[14px] font-light"
            >
              Where clinical excellence meets personalized care. 
              Experience physiotherapy elevated to an art form.
            </motion.p>

            <div className="space-y-3 max-w-sm mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  className="relative block w-full text-center px-6 py-4 bg-[#B08D57] text-slate-900 font-semibold rounded-none transition-all hover:bg-[#C9A769] group overflow-hidden"
                >
                  <span className="relative z-10">Begin Your Journey</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Link
                  href="/services"
                  className="block w-full text-center px-6 py-4 bg-transparent border border-white/20 text-white font-medium rounded-none hover:bg-white/5 hover:border-white/40 transition-all"
                >
                  Explore Excellence
                </Link>
              </motion.div>
            </div>

            {/* Elite features */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 pt-8 border-t border-white/10"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-[#B08D57] text-2xl font-light mb-1">5+</p>
                  <p className="text-white/50 text-[10px] uppercase tracking-wider">Years Elite</p>
                </div>
                <div>
                  <p className="text-[#B08D57] text-2xl font-light mb-1">1:1</p>
                  <p className="text-white/50 text-[10px] uppercase tracking-wider">Focused Care</p>
                </div>
                <div>
                  <p className="text-[#B08D57] text-2xl font-light mb-1">100%</p>
                  <p className="text-white/50 text-[10px] uppercase tracking-wider">Commitment</p>
                </div>
              </div>
            </motion.div>
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="max-w-xl"
            >
              {/* Elite badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-4 mb-12"
              >
                <div className="h-[1px] w-16 bg-[#B08D57]" />
                <p className="text-[11px] uppercase tracking-[0.5em] text-[#B08D57] font-bold">
                  Elite Performance
                </p>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-[72px] xl:text-[84px] font-bold text-white leading-[0.85] mb-8"
              >
                Beyond<br/>
                <span className="text-[#B08D57] text-[88px] xl:text-[96px]">Recovery</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-white/60 text-sm uppercase tracking-[0.4em] mb-12 font-medium"
              >
                Performance Redefined
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-12"
              >
                <p className="text-[32px] font-extralight text-white mb-3">Kareem Hassanein</p>
                <p className="text-[12px] text-[#B08D57] uppercase tracking-[0.3em]">MSc PT • CAMPT Certified</p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-white/70 mb-14 leading-[1.9] text-[16px] font-light"
              >
                Where clinical excellence meets personalized care. 
                Experience physiotherapy elevated to an art form.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex gap-4 mb-16"
              >
                <Link
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  className="relative px-10 py-4 bg-[#B08D57] text-slate-900 font-semibold transition-all hover:bg-[#C9A769] group overflow-hidden"
                >
                  <span className="relative z-10">Begin Your Journey</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                </Link>

                <Link
                  href="/services"
                  className="px-10 py-4 bg-transparent border border-white/20 text-white font-medium hover:bg-white/5 hover:border-white/40 transition-all"
                >
                  Explore Excellence
                </Link>
              </motion.div>

              {/* Elite metrics */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex gap-12"
              >
                <div className="border-l border-white/10 pl-4">
                  <p className="text-[#B08D57] text-3xl font-light mb-1">5+</p>
                  <p className="text-white/40 text-[11px] uppercase tracking-wider">Years Elite</p>
                </div>
                <div className="border-l border-white/10 pl-4">
                  <p className="text-[#B08D57] text-3xl font-light mb-1">1:1</p>
                  <p className="text-white/40 text-[11px] uppercase tracking-wider">Focused Care</p>
                </div>
                <div className="border-l border-white/10 pl-4">
                  <p className="text-[#B08D57] text-3xl font-light mb-1">100%</p>
                  <p className="text-white/40 text-[11px] uppercase tracking-wider">Commitment</p>
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
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
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
              
              {/* Elite badge overlay */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-20 right-20 z-30"
              >
                <div className="bg-slate-900/90 backdrop-blur-md px-8 py-6 border border-[#B08D57]/30">
                  <Image
                    src="/images/kinetikare-logo-kareem-hassanein-physiotherapy-transparent.png"
                    alt="KinetiKare"
                    width={60}
                    height={60}
                    className="opacity-80"
                  />
                  <p className="text-[10px] text-[#B08D57] uppercase tracking-[0.3em] mt-3 text-center">
                    Excellence
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}