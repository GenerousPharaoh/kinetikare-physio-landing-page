"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Image side - slides in from right and pans */}
      <motion.div
        className="absolute inset-0"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 animate-[slowPan_20s_ease-in-out_infinite_alternate]">
          <Image
            src="/images/clinic-pic-may-2025.jpg"
            alt="KinetiKare Physiotherapy clinic"
            fill
            priority
            className="object-cover scale-110"
            sizes="100vw"
            unoptimized={true}
          />
        </div>
      </motion.div>

      {/* Diagonal dark section */}
      <motion.div
        className="absolute inset-0 bg-[#0a0a0a]"
        style={{
          clipPath: 'polygon(0 0, 65% 0, 45% 100%, 0 100%)'
        }}
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Gold accent line along diagonal */}
      <motion.div
        className="absolute inset-0"
        style={{
          clipPath: 'polygon(65% 0, 66% 0, 46% 100%, 45% 100%)'
        }}
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="w-full h-full bg-[#D4AF37]" />
      </motion.div>

      {/* Content on dark side */}
      <div className="relative h-full flex items-center">
        <div className="w-full max-w-[55%] px-6 sm:px-8 md:px-12 lg:px-16 pt-16">

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
              className="px-6 py-3 bg-[#D4AF37] text-black text-sm font-semibold hover:bg-white transition-colors duration-300"
            >
              Book Assessment
            </Link>

            <Link
              href="/services"
              className="px-6 py-3 border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-colors duration-300"
            >
              View Services
            </Link>
          </motion.div>

          {/* Info */}
          <motion.div
            className="flex flex-wrap gap-x-4 gap-y-1 text-white/50 text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            <span>Direct Billing</span>
            <span>•</span>
            <span>No Referral</span>
            <span>•</span>
            <span>Evening Hours</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
