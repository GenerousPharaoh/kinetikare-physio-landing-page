"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ClockIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background - dark base */}
      <div className="absolute inset-0 bg-[#0f172a]" />

      {/* Image container - positioned on the right */}
      <div className="absolute inset-0">
        {/* Desktop: Image on right side with fade effect */}
        <div className="absolute inset-0 hidden md:block">
          <div
            className="absolute top-0 right-0 w-[60%] h-full"
            style={{
              animation: 'imageFadeIn 1.5s ease-out 0.5s forwards',
              opacity: 0
            }}
          >
            <div className="relative w-full h-full overflow-hidden">
              <div className="absolute inset-0 animate-[slowZoomPan_30s_ease-in-out_infinite_alternate]">
                <Image
                  src="/images/clinic-pic-may-2025.jpg"
                  alt="KinetiKare Physiotherapy clinic"
                  fill
                  priority
                  className="object-cover object-center brightness-105 contrast-105"
                  sizes="60vw"
                  unoptimized={true}
                />
              </div>
              {/* Warm color grade */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#D4AF37]/10 mix-blend-overlay" />
              {/* Gradient fade to blend with diagonal */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/40 to-transparent" />
              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(15,23,42,0.25)_100%)]" />
            </div>
          </div>
        </div>

        {/* Mobile: Full image with bottom gradient */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/images/clinic-pic-may-2025.jpg"
            alt="KinetiKare Physiotherapy clinic"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            unoptimized={true}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/50 to-[#0f172a]/30" />
        </div>
      </div>

      {/* Diagonal section with shadow edge - desktop only */}
      <div
        className="absolute inset-0 bg-[#0f172a] hidden md:block"
        style={{
          clipPath: 'polygon(0 0, 65% 0, 45% 100%, 0 100%)',
          animation: 'fadeSlideIn 1s ease-out forwards'
        }}
      />

      {/* Shadow edge for depth */}
      <div
        className="absolute inset-0 hidden md:block pointer-events-none"
        style={{
          clipPath: 'polygon(64% 0, 66% 0, 46% 100%, 44% 100%)',
          animation: 'fadeSlideIn 1s ease-out forwards',
          background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.3), transparent)'
        }}
      />

      {/* Animated gold accent line - desktop only */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          clipPath: 'polygon(65% 0, 65.5% 0, 45.5% 100%, 45% 100%)',
          animation: 'fadeSlideIn 1s ease-out 0.1s forwards',
          opacity: 0
        }}
      >
        <div className="w-full h-full bg-gradient-to-b from-[#D4AF37] via-[#F5E6B3] to-[#D4AF37] animate-[shimmerGold_3s_ease-in-out_infinite]" />
      </div>

      {/* Subtle warm glow accent */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full hidden md:block pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)',
          animation: 'pulseGlow 4s ease-in-out infinite'
        }}
      />

      {/* Content */}
      <div className="relative h-full flex items-end md:items-center pb-16 md:pb-0">
        <div className="w-full md:max-w-[55%] px-6 sm:px-8 md:px-12 lg:px-16 pt-16">

          {/* Eyebrow */}
          <motion.p
            className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Registered Physiotherapist
          </motion.p>

          {/* Name */}
          <motion.h1
            className="hero-name text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Kareem Hassanein
          </motion.h1>

          {/* Slogan */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-light">
              The Science of Recovery
            </p>
            <p className="text-[#D4AF37] text-lg sm:text-xl md:text-2xl font-light mt-1">
              The Art of Care
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
          >
            <Link
              href="https://endorphinshealth.janeapp.com/#/staff_member/42"
              target="_blank"
              className="px-6 py-3 bg-[#D4AF37] text-black text-sm font-semibold hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Assessment
            </Link>

            <Link
              href="/services"
              className="px-6 py-3 border border-white/40 text-white text-sm font-medium hover:bg-white/10 hover:border-white/60 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              View Services
            </Link>
          </motion.div>

          {/* Info badges */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            <motion.div
              className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.8 }}
            >
              <DocumentCheckIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-white/70 text-xs">Direct Billing</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.9 }}
            >
              <CheckCircleIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-white/70 text-xs">No Referral</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 2.0 }}
            >
              <ClockIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-white/70 text-xs">Evening Hours</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
