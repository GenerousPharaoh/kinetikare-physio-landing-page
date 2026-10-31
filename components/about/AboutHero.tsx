'use client';

import React from 'react';
import Image from 'next/image';
import { m as motion } from 'framer-motion';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const PORTRAIT = '/images/professional-photo-kareem-hassanein-registered-physiotherapist-burlington-waterdown-flamborough-oakville-carlisle.png';

/**
 * The About page's opening: who he is beside his portrait card on laptops
 * (until 2026-10-30 the portrait only appeared further down, in the
 * sidebar), the portrait under the text on phones.
 */
export default function AboutHero() {
  return (
    <section className="relative pt-28 pb-14 lg:pt-36 lg:pb-24 bg-gradient-to-br from-white via-slate-50/50 to-white overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B08D57]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #B08D57 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0.01, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left lg:col-span-7"
          >
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-6"
            >
              <UserCircleIcon className="w-5 h-5 text-[#B08D57]" />
              <span className="text-sm font-medium text-gray-700">Meet Kareem Hassanein</span>
            </motion.div>

            {/* Main heading with premium typography */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-6 tracking-tight">
              Registered <span className="font-semibold">Physiotherapist</span>
            </h1>

            {/* Decorative line */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#B08D57]/40 lg:hidden"></div>
              <div className="w-2 h-2 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full"></div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#D4AF37]/40 lg:w-32"></div>
            </div>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto lg:mx-0 mb-10">
              One-on-one physiotherapy in Burlington for sports injuries, joint and tendon pain, and recovery after surgery
            </p>

            {/* Key highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B08D57]"></div>
                <span>MSc Physiotherapy</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B08D57]"></div>
                <span>Manual Therapy Training</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B08D57]"></div>
                <span>5+ Years Experience</span>
              </div>
            </div>
          </motion.div>

          {/* His portrait, in the same card as the rest of the page: a gold
              glow behind it and a hairline frame. */}
          <motion.div
            initial={{ opacity: 0.01, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5 w-64 sm:w-72 lg:w-full max-w-sm mx-auto"
          >
            <div className="absolute -inset-6 bg-gradient-to-br from-[#D4AF37]/25 via-[#B08D57]/10 to-transparent rounded-[2rem] blur-2xl" aria-hidden="true"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/70 bg-gradient-to-b from-slate-100 to-slate-200 aspect-[826/1000]">
              <Image
                src={PORTRAIT}
                alt="Kareem Hassanein, Registered Physiotherapist"
                width={826}
                height={1169}
                priority
                quality={82}
                sizes="(min-width: 1024px) 384px, 288px"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-3 rounded-xl border border-white/50 pointer-events-none" aria-hidden="true"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
