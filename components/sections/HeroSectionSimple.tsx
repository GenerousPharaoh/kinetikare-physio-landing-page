"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="relative w-full bg-white" style={{ marginTop: '0px', paddingTop: '0px' }}>
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Mobile Image - Smaller, just decorative */}
        <div className="relative w-full h-[30vh] min-h-[250px]">
          <Image
            src="/images/clinic-pic-may-2025.jpg"
            alt="Modern physiotherapy clinic"
            fill
            priority
            quality={85}
            className="object-cover brightness-50"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white" />
        </div>
        
        {/* Mobile Hero Content - Below Image */}
        <div className="px-6 py-8 bg-white -mt-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#B08D57]/10 rounded-full mb-4">
              <div className="w-1.5 h-1.5 bg-[#B08D57] rounded-full" />
              <p className="text-xs font-medium tracking-wider uppercase text-gray-700">
                Registered Physiotherapist
              </p>
            </div>
            
            <h1 className="text-3xl font-bold mb-4 text-gray-900">
              The Science of Recovery.
              <span className="block text-[#B08D57] mt-1">The Art of Care.</span>
            </h1>
            
            <p className="text-xl font-light text-gray-800 mb-2">Kareem Hassanein</p>
            <div className="w-16 h-px bg-[#B08D57] mx-auto mb-4" />
            
            <p className="text-sm text-gray-600 leading-relaxed max-w-sm mx-auto mb-8">
              Evidence-based physiotherapy combining proven techniques with personalized attention for lasting results.
            </p>
          </motion.div>
        </div>

        {/* Mobile CTA Section */}
        <div className="px-6 pb-8 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            
            <div className="space-y-3">
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                className="block w-full text-center px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
              >
                Book Your Assessment
              </Link>
              
              <Link
                href="/services"
                className="block w-full text-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Explore Services
              </Link>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#B08D57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Direct Billing Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#B08D57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Evening Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#B08D57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>5+ Years Experience</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex h-[85vh] max-h-[900px]">
        {/* Left Content */}
        <div className="w-1/2 flex items-center justify-center px-12 xl:px-20 bg-white">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B08D57]/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#B08D57] rounded-full" />
              <span className="text-xs tracking-wider text-gray-700 uppercase font-semibold">
                Registered Physiotherapist
              </span>
            </div>

            <h1 className="text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              The Science
              <span className="block text-[#B08D57]">of Recovery.</span>
              The Art
              <span className="block text-[#B08D57]">of Care.</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Evidence-based physiotherapy combining proven techniques with personalized attention for lasting results.
            </p>

            <div className="mb-8">
              <p className="text-2xl font-light text-gray-900">Kareem Hassanein</p>
              <div className="w-20 h-px bg-[#B08D57] mt-2" />
            </div>

            <div className="flex gap-4 mb-12">
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                className="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-medium rounded hover:bg-slate-800 transition-all group"
              >
                Book Your Assessment
                <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded hover:border-[#B08D57] hover:text-[#B08D57] transition-all"
              >
                Explore Services
              </Link>
            </div>

            <div className="flex gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#B08D57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Direct Billing</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#B08D57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Evening Hours</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Image */}
        <div className="w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src="/images/clinic-pic-may-2025.jpg"
              alt="Modern physiotherapy clinic"
              fill
              priority
              quality={90}
              className="object-cover"
              sizes="50vw"
            />
          </motion.div>

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10" />

          {/* Logo Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-12 right-12"
          >
            <div className="bg-white/95 backdrop-blur p-6 rounded-xl shadow-xl">
              <Image
                src="/images/kinetikare-logo-kareem-hassanein-physiotherapy-transparent.png"
                alt="KinetiKare"
                width={60}
                height={60}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}