"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]">
      {/* Background with gradient reveal */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src="/images/clinic-pic-may-2025.jpg"
          alt="KinetiKare Physiotherapy clinic"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          unoptimized={true}
        />
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>

      {/* Content - compact for 14" screens */}
      <div className="relative h-full flex items-center">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 pt-16">

          <div className="max-w-3xl">

            {/* Eyebrow with line */}
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="w-12 h-[1px] bg-[#D4AF37]" />
              <p className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase font-medium">
                Registered Physiotherapist
              </p>
            </motion.div>

            {/* Name - single line */}
            <motion.h1
              className="hero-name text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              Kareem Hassanein
            </motion.h1>

            {/* Tagline - horizontal with divider */}
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <span className="text-white/90 text-lg sm:text-xl md:text-2xl font-light">
                The Science of Recovery
              </span>
              <span className="text-[#D4AF37] text-lg sm:text-xl">|</span>
              <span className="text-[#D4AF37] text-lg sm:text-xl md:text-2xl font-light">
                The Art of Care
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-white/50 text-sm sm:text-base max-w-lg mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              Evidence-based manual therapy, dry needling, and personalized rehabilitation in Burlington.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                className="px-6 py-3 bg-[#D4AF37] text-black text-sm font-semibold rounded hover:bg-white transition-all duration-300 hover:scale-105"
              >
                Book Assessment
              </Link>

              <Link
                href="/services"
                className="px-6 py-3 border border-white/30 text-white text-sm font-medium rounded hover:bg-white/10 transition-all duration-300"
              >
                View Services
              </Link>

              <div className="hidden sm:flex items-center gap-6 ml-4 text-white/40 text-xs">
                <span>Direct Billing</span>
                <span>No Referral</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/50 to-transparent"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 2, ease: [0.22, 1, 0.36, 1] }}
      />
    </section>
  );
}
