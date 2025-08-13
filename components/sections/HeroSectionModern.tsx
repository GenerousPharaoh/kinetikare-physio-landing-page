"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <>
      {/* Mobile */}
      <section className="lg:hidden min-h-screen bg-white flex flex-col pt-16">
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
          {/* Subtle gradient at bottom for transition */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Content section */}
        <div className="flex-1 flex flex-col justify-center px-8 py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[#B08D57] mb-6 font-medium opacity-90">
              Registered Physiotherapist
            </p>
            
            <h1 className="text-[42px] sm:text-[48px] font-bold text-slate-900 leading-[1.15] mb-8">
              The Science<br/>
              <span className="text-[#B08D57]">of Recovery.</span><br/>
              <span className="inline-block mt-3">The Art</span><br/>
              <span className="text-[#B08D57]">of Care.</span>
            </h1>
            
            <div className="mb-8">
              <p className="text-[26px] font-light text-slate-800 mb-3">Kareem Hassanein</p>
              <div className="w-24 h-[1px] bg-[#B08D57] mx-auto opacity-60" />
            </div>

            <p className="text-gray-600 mb-10 leading-relaxed max-w-md mx-auto">
              Advanced physiotherapy combining evidence-based techniques with personalized attention for lasting results.
            </p>

            <div className="space-y-3 max-w-sm mx-auto w-full">
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                className="block w-full text-center px-6 py-4 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
              >
                Book Your Assessment
              </Link>
              
              <Link
                href="/services"
                className="block w-full text-center px-6 py-4 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:border-[#B08D57]/50 hover:text-[#B08D57] hover:bg-[#B08D57]/5 transition-all shadow-sm hover:shadow-md"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex justify-center gap-8 text-sm text-gray-600">
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
      <section className="hidden lg:flex min-h-screen bg-white">
        <div className="flex w-full">
          {/* Left content - with proper padding and centering */}
          <div className="w-1/2 flex items-center pl-[8%] pr-[6%] py-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[#B08D57] mb-10 font-medium opacity-90">
                Registered Physiotherapist
              </p>
              
              <h1 className="text-[64px] xl:text-[72px] font-bold text-slate-900 leading-[0.9] mb-12">
                The Science<br/>
                <span className="text-[#B08D57]">of Recovery.</span><br/>
                <span className="mt-5 block">The Art</span>
                <span className="text-[#B08D57]">of Care.</span>
              </h1>

              <div className="mb-10">
                <p className="text-[32px] font-light text-slate-800 mb-3">Kareem Hassanein</p>
                <div className="w-28 h-[1px] bg-[#B08D57] opacity-60" />
              </div>

              <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-xl">
                Advanced physiotherapy combining evidence-based techniques with personalized attention for lasting results.
              </p>

              <div className="flex gap-4 mb-12">
                <Link
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  className="px-9 py-4 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Book Your Assessment
                </Link>

                <Link
                  href="/services"
                  className="px-9 py-4 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:border-[#B08D57]/50 hover:text-[#B08D57] hover:bg-[#B08D57]/5 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  Explore Services
                </Link>
              </div>

              <div className="flex gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-full shadow-sm" />
                  <span>Direct Billing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-full shadow-sm" />
                  <span>Evening Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-full shadow-sm" />
                  <span>5+ Years Experience</span>
                </div>
              </motion.div>
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
              
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/5" />
              
              {/* Floating accent */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-16 right-16"
              >
                <div className="bg-white/95 backdrop-blur-sm px-6 py-4 rounded-lg shadow-2xl">
                  <Image
                    src="/images/kinetikare-logo-kareem-hassanein-physiotherapy-transparent.png"
                    alt="KinetiKare"
                    width={50}
                    height={50}
                    className="opacity-90"
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