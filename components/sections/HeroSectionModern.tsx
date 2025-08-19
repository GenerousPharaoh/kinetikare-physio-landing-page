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
              className="text-xs uppercase tracking-[0.2em] text-[#B08D57] mb-6 font-medium"
            >
              Registered Physiotherapist
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[42px] font-light text-slate-900 leading-tight mb-8"
            >
              The Science<br/>
              <span className="text-[#B08D57]">of Recovery.</span><br/>
              <span className="inline-block mt-2">The Art</span><br/>
              <span className="text-[#B08D57]">of Care.</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <p className="text-2xl font-light text-slate-800 mb-3">Kareem Hassanein</p>
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-[#B08D57]/30" />
                <div className="h-1 w-1 rounded-full bg-[#B08D57]" />
                <div className="h-px w-12 bg-[#B08D57]/30" />
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 mb-10 leading-relaxed max-w-md mx-auto"
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
                  className="block w-full text-center px-6 py-4 bg-[#B08D57] text-white font-medium rounded-lg hover:bg-[#997A4B] transition-colors"
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
                  className="block w-full text-center px-6 py-4 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:border-[#B08D57] hover:text-[#B08D57] transition-all"
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
      <section className="hidden lg:flex h-screen bg-white relative pt-16">
        <div className="flex w-full h-full">
          {/* Left content */}
          <div className="w-1/2 flex items-center pl-[8%] pr-[6%]">
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
                className="text-sm uppercase tracking-[0.2em] text-[#B08D57] mb-8 font-medium"
              >
                Registered Physiotherapist
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-[64px] xl:text-[72px] font-light text-slate-900 leading-[0.95] mb-10"
              >
                The Science<br/>
                <span className="text-[#B08D57]">of Recovery.</span><br/>
                <span className="mt-4 block">The Art</span>
                <span className="text-[#B08D57]">of Care.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-10"
              >
                <p className="text-3xl font-light text-slate-800 mb-3">Kareem Hassanein</p>
                <div className="flex items-center gap-3">
                  <div className="h-px w-16 bg-[#B08D57]/30" />
                  <div className="h-1.5 w-1.5 rounded-full bg-[#B08D57]" />
                  <div className="h-px w-16 bg-[#B08D57]/30" />
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-600 mb-12 leading-relaxed max-w-xl"
              >
                Advanced physiotherapy combining evidence-based techniques with personalized attention for lasting results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex gap-4 mb-12"
              >
                <Link
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  className="px-8 py-4 bg-[#B08D57] text-white font-medium rounded-lg hover:bg-[#997A4B] transition-colors shadow-sm hover:shadow-md"
                >
                  Book Your Assessment
                </Link>

                <Link
                  href="/services"
                  className="px-8 py-4 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:border-[#B08D57] hover:text-[#B08D57] transition-all shadow-sm hover:shadow-md"
                >
                  Explore Services
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="inline-flex items-center gap-6 text-sm text-slate-600"
              >
                <span>Direct Billing</span>
                <span className="text-[#B08D57]">•</span>
                <span>Evening Hours</span>
                <span className="text-[#B08D57]">•</span>
                <span>5+ Years Experience</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right image - extends from top to bottom */}
          <div className="w-1/2 relative h-full">
            <motion.div
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src="/images/clinic-pic-may-2025.jpg"
                alt="KinetiKare Physiotherapy"
                fill
                priority
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}