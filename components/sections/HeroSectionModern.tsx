"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <>
      {/* Mobile */}
      <section className="lg:hidden min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col -mt-16">
        {/* Image section - starts at top behind header */}
        <div className="relative h-[55vh] w-full" style={{ paddingTop: '64px' }}>
          <Image
            src="/images/clinic-pic-may-2025.jpg"
            alt="KinetiKare Physiotherapy"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Premium overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
          {/* Subtle gradient at bottom for transition */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/95 to-transparent" />
        </div>

        {/* Content section */}
        <div className="flex-1 flex flex-col justify-center px-8 py-12 -mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#B08D57] mb-6 font-semibold">
              Registered Physiotherapist
            </p>
            
            <h1 className="text-[42px] leading-[1.1] font-bold text-slate-900 mb-8">
              The Science<br/>
              <span className="bg-gradient-to-r from-[#B08D57] to-[#C9A769] bg-clip-text text-transparent">of Recovery.</span><br/>
              <span className="mt-2 block">The Art</span>
              <span className="bg-gradient-to-r from-[#B08D57] to-[#C9A769] bg-clip-text text-transparent">of Care.</span>
            </h1>
            
            <div className="mb-8">
              <p className="text-[26px] font-light text-slate-900 tracking-wide">Kareem Hassanein</p>
              <div className="w-24 h-[1px] bg-gradient-to-r from-[#B08D57] to-[#C9A769] mt-3 opacity-80" />
            </div>

            <p className="text-gray-600 mb-10 leading-[1.7] text-[15px]">
              Advanced physiotherapy combining evidence-based techniques with personalized attention for lasting results.
            </p>

            <div className="space-y-3">
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                className="relative block w-full text-center px-6 py-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-medium rounded-xl hover:from-slate-800 hover:to-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span className="relative z-10">Book Your Assessment</span>
              </Link>
              
              <Link
                href="/services"
                className="block w-full text-center px-6 py-4 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:border-[#B08D57]/30 hover:text-[#B08D57] hover:bg-[#B08D57]/5 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex justify-between text-sm">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 bg-gradient-to-br from-[#B08D57] to-[#C9A769] rounded-full shadow-sm" />
                  <span className="text-gray-700 font-medium">Direct Billing</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 bg-gradient-to-br from-[#B08D57] to-[#C9A769] rounded-full shadow-sm" />
                  <span className="text-gray-700 font-medium">Evening Hours</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 bg-gradient-to-br from-[#B08D57] to-[#C9A769] rounded-full shadow-sm" />
                  <span className="text-gray-700 font-medium">5+ Years</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden lg:flex min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50/50 -mt-16">
        <div className="flex w-full">
          {/* Left content - with proper padding and centering */}
          <div className="w-1/2 flex items-center pl-[10%] pr-[8%]" style={{ paddingTop: '64px' }}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <p className="text-[13px] uppercase tracking-[0.35em] text-[#B08D57] mb-10 font-bold">
                Registered Physiotherapist
              </p>
              
              <h1 className="text-[80px] xl:text-[88px] font-bold text-slate-900 leading-[0.9] mb-12">
                The Science<br/>
                <span className="bg-gradient-to-r from-[#B08D57] via-[#C9A769] to-[#B08D57] bg-clip-text text-transparent">of Recovery.</span><br/>
                <span className="mt-6 block">The Art</span>
                <span className="bg-gradient-to-r from-[#B08D57] via-[#C9A769] to-[#B08D57] bg-clip-text text-transparent">of Care.</span>
              </h1>

              <div className="mb-10">
                <p className="text-[34px] font-light text-slate-900 mb-3 tracking-wide">Kareem Hassanein</p>
                <div className="w-32 h-[2px] bg-gradient-to-r from-[#B08D57] via-[#C9A769] to-[#B08D57] opacity-80" />
              </div>

              <p className="text-[17px] text-gray-600 mb-14 leading-[1.8] max-w-xl">
                Advanced physiotherapy combining evidence-based techniques with personalized attention for lasting results.
              </p>

              <div className="flex gap-5 mb-14">
                <Link
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  className="relative px-10 py-4.5 bg-gradient-to-r from-slate-900 to-slate-800 text-white font-semibold rounded-xl hover:from-slate-800 hover:to-slate-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <span className="relative z-10">Book Your Assessment</span>
                </Link>

                <Link
                  href="/services"
                  className="px-10 py-4.5 bg-white border border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-[#B08D57]/30 hover:text-[#B08D57] hover:bg-[#B08D57]/5 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Explore Services
                </Link>
              </div>

              <div className="flex gap-10 text-[15px]">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-gradient-to-br from-[#B08D57] to-[#C9A769] rounded-full shadow-md" />
                  <span className="text-gray-700 font-medium">Direct Billing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-gradient-to-br from-[#B08D57] to-[#C9A769] rounded-full shadow-md" />
                  <span className="text-gray-700 font-medium">Evening Hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-gradient-to-br from-[#B08D57] to-[#C9A769] rounded-full shadow-md" />
                  <span className="text-gray-700 font-medium">5+ Years Experience</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right image - full height starting from top */}
          <div className="w-1/2 relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative h-full"
            >
              <Image
                src="/images/clinic-pic-may-2025.jpg"
                alt="KinetiKare Physiotherapy"
                fill
                priority
                className="object-cover"
                sizes="50vw"
              />
              
              {/* Premium overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              
              {/* Premium floating accent */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute bottom-20 right-20"
              >
                <div className="bg-white/90 backdrop-blur-md px-8 py-6 rounded-2xl shadow-2xl border border-white/50">
                  <Image
                    src="/images/kinetikare-logo-kareem-hassanein-physiotherapy-transparent.png"
                    alt="KinetiKare"
                    width={55}
                    height={55}
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