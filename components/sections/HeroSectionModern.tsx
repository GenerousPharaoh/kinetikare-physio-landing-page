"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <>
      {/* Mobile */}
      <section className="lg:hidden min-h-screen bg-white flex flex-col -mt-16">
        {/* Image section - starts at top behind header */}
        <div className="relative h-[60vh] w-full pt-16">
          <Image
            src="/images/clinic-pic-may-2025.jpg"
            alt="KinetiKare Physiotherapy"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Subtle gradient at bottom for transition */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Content section */}
        <div className="flex-1 flex flex-col justify-center px-6 py-10 -mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[#B08D57] mb-4 font-medium">
              Registered Physiotherapist
            </p>
            
            <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-6">
              The Science<br/>
              <span className="text-[#B08D57]">of Recovery.</span><br/>
              The Art<br/>
              <span className="text-[#B08D57]">of Care.</span>
            </h1>
            
            <div className="mb-8">
              <p className="text-2xl font-light text-gray-900">Kareem Hassanein</p>
              <div className="w-20 h-0.5 bg-[#B08D57] mt-2" />
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Advanced physiotherapy combining evidence-based techniques with personalized attention for lasting results.
            </p>

            <div className="space-y-3">
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                className="block w-full text-center px-6 py-3.5 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
              >
                Book Your Assessment
              </Link>
              
              <Link
                href="/services"
                className="block w-full text-center px-6 py-3.5 border-2 border-slate-200 text-gray-700 font-medium rounded-lg hover:border-[#B08D57] hover:text-[#B08D57] transition-colors"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-100 flex justify-around text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#B08D57] rounded-full" />
                <span>Direct Billing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#B08D57] rounded-full" />
                <span>Evening Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#B08D57] rounded-full" />
                <span>5+ Years</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden lg:flex min-h-screen bg-white -mt-16">
        <div className="flex w-full">
          {/* Left content - with proper padding and centering */}
          <div className="w-1/2 flex items-center pl-[8%] pr-[6%] pt-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[#B08D57] mb-8 font-semibold">
                Registered Physiotherapist
              </p>
              
              <h1 className="text-7xl font-bold text-slate-900 leading-[0.9] mb-10">
                The Science<br/>
                <span className="text-[#B08D57]">of Recovery.</span><br/>
                <span className="mt-4 block">The Art</span>
                <span className="text-[#B08D57]">of Care.</span>
              </h1>

              <div className="mb-10">
                <p className="text-3xl font-light text-gray-900 mb-2">Kareem Hassanein</p>
                <div className="w-24 h-0.5 bg-[#B08D57]" />
              </div>

              <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-xl">
                Advanced physiotherapy combining evidence-based techniques with personalized attention for lasting results.
              </p>

              <div className="flex gap-4 mb-12">
                <Link
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  className="px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all hover:shadow-xl"
                >
                  Book Your Assessment
                </Link>

                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-slate-200 text-gray-700 font-medium rounded-lg hover:border-[#B08D57] hover:text-[#B08D57] transition-all"
                >
                  Explore Services
                </Link>
              </div>

              <div className="flex gap-8 text-sm text-gray-600">
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
              </div>
            </motion.div>
          </div>

          {/* Right image - full height starting from top */}
          <div className="w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
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