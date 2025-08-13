"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <>
      {/* Mobile */}
      <section className="lg:hidden min-h-screen bg-gradient-to-b from-white via-white to-slate-50/30 flex flex-col pt-16">
        {/* Image section */}
        <div className="relative h-[50vh] w-full overflow-hidden">
          <Image
            src="/images/clinic-pic-may-2025.jpg"
            alt="KinetiKare Physiotherapy"
            fill
            priority
            className="object-cover scale-105"
            sizes="100vw"
          />
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
          {/* Subtle gradient at bottom for transition */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/90 to-transparent" />
        </div>

        {/* Content section */}
        <div className="flex-1 flex flex-col justify-center px-8 py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#B08D57] font-bold px-4 py-1.5 border border-[#B08D57]/20 rounded-full bg-[#B08D57]/5">
                Registered Physiotherapist
              </p>
            </div>
            
            <h1 className="text-[40px] sm:text-[48px] font-bold text-slate-900 leading-[1.05] mb-8">
              <span className="block">The Science</span>
              <span className="block bg-gradient-to-r from-[#B08D57] via-[#C9A769] to-[#B08D57] bg-clip-text text-transparent">of Recovery.</span>
              <span className="block mt-3">The Art</span>
              <span className="block bg-gradient-to-r from-[#B08D57] via-[#C9A769] to-[#B08D57] bg-clip-text text-transparent">of Care.</span>
            </h1>
            
            <div className="mb-8">
              <p className="text-[28px] font-extralight text-slate-800 mb-3 tracking-wide">Kareem Hassanein</p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#B08D57]" />
                <div className="w-2 h-2 rounded-full bg-[#B08D57]" />
                <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#B08D57]" />
              </div>
            </div>

            <p className="text-[15px] text-gray-600 mb-10 leading-[1.7] max-w-md mx-auto font-light">
              Advanced physiotherapy combining evidence-based techniques with personalized attention for lasting results.
            </p>

            <div className="space-y-3 max-w-sm mx-auto w-full">
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                className="relative block w-full text-center px-6 py-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-medium rounded-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 overflow-hidden group"
              >
                <span className="relative z-10">Book Your Assessment</span>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <Link
                href="/services"
                className="block w-full text-center px-6 py-4 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:border-[#B08D57]/40 hover:text-[#B08D57] hover:bg-[#B08D57]/5 transition-all shadow-md hover:shadow-lg"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100/50">
              <div className="flex justify-center gap-6 text-[13px] text-gray-600">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50/50">
                  <div className="w-1.5 h-1.5 bg-gradient-to-br from-[#B08D57] to-[#C9A769] rounded-full" />
                  <span className="font-medium">Direct Billing</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50/50">
                  <div className="w-1.5 h-1.5 bg-gradient-to-br from-[#B08D57] to-[#C9A769] rounded-full" />
                  <span className="font-medium">Evening</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50/50">
                  <div className="w-1.5 h-1.5 bg-gradient-to-br from-[#B08D57] to-[#C9A769] rounded-full" />
                  <span className="font-medium">5+ Years</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden lg:flex min-h-screen bg-gradient-to-br from-white via-white to-slate-50/40">
        <div className="flex w-full">
          {/* Left content - with proper padding and centering */}
          <div className="w-1/2 flex items-center pl-[9%] pr-[7%] py-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#B08D57]/50" />
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#B08D57] font-bold">
                  Registered Physiotherapist
                </p>
              </div>
              
              <h1 className="text-[64px] xl:text-[72px] font-bold text-slate-900 leading-[0.9] mb-12">
                <span className="block">The Science</span>
                <span className="block bg-gradient-to-r from-[#B08D57] via-[#C9A769] to-[#B08D57] bg-clip-text text-transparent">of Recovery.</span>
                <span className="block mt-6">The Art</span>
                <span className="block bg-gradient-to-r from-[#B08D57] via-[#C9A769] to-[#B08D57] bg-clip-text text-transparent">of Care.</span>
              </h1>

              <div className="mb-10">
                <p className="text-[32px] font-extralight text-slate-800 mb-3 tracking-wide">Kareem Hassanein</p>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#B08D57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#B08D57] to-[#C9A769]" />
                  <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#B08D57]" />
                </div>
              </div>

              <p className="text-[17px] text-gray-600 mb-14 leading-[1.75] max-w-xl font-light">
                Advanced physiotherapy combining evidence-based techniques with personalized attention for lasting results.
              </p>

              <div className="flex gap-4 mb-14">
                <Link
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  className="relative px-10 py-4.5 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-medium rounded-xl transition-all hover:shadow-2xl hover:-translate-y-0.5 shadow-xl overflow-hidden group"
                >
                  <span className="relative z-10">Book Your Assessment</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>

                <Link
                  href="/services"
                  className="px-10 py-4.5 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:border-[#B08D57]/40 hover:text-[#B08D57] hover:bg-[#B08D57]/5 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Explore Services
                </Link>
              </div>

              <div className="flex gap-6 text-[14px]">
                <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-50/70 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-gradient-to-br from-[#B08D57] to-[#C9A769] rounded-full shadow-sm" />
                  <span className="text-gray-700 font-medium">Direct Billing</span>
                </div>
                <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-50/70 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-gradient-to-br from-[#B08D57] to-[#C9A769] rounded-full shadow-sm" />
                  <span className="text-gray-700 font-medium">Evening Hours</span>
                </div>
                <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-50/70 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-gradient-to-br from-[#B08D57] to-[#C9A769] rounded-full shadow-sm" />
                  <span className="text-gray-700 font-medium">5+ Years</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right image - full height starting from top */}
          <div className="w-1/2 relative min-h-screen">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
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
              
              {/* Enhanced overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/8" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              
              {/* Premium floating accent */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                className="absolute bottom-20 right-20"
              >
                <div className="bg-white/90 backdrop-blur-md px-7 py-5 rounded-2xl shadow-2xl border border-white/50">
                  <Image
                    src="/images/kinetikare-logo-kareem-hassanein-physiotherapy-transparent.png"
                    alt="KinetiKare"
                    width={48}
                    height={48}
                    className="opacity-85"
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