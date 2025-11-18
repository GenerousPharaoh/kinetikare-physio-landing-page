"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background image with subtle zoom */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
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
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </motion.div>

      {/* Decorative gold line */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 left-0 w-24 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Content Panel - no opacity animation to prevent glitch */}
      <div className="relative h-full flex items-center">
        <motion.div
          className="ml-6 sm:ml-8 md:ml-12 lg:ml-16 my-8"
          initial={{ x: -60 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Panel with solid dark background */}
          <div className="relative bg-black/80 border-l-2 border-[#D4AF37] p-8 sm:p-10 md:p-12 max-w-lg shadow-2xl">

            {/* Eyebrow */}
            <motion.p
              className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase font-medium mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Registered Physiotherapist
            </motion.p>

            {/* Name */}
            <motion.h1
              className="hero-name text-4xl sm:text-5xl md:text-6xl text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              Kareem Hassanein
            </motion.h1>

            {/* Slogan */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3 }}
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
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.6 }}
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
              transition={{ duration: 0.5, delay: 1.9 }}
            >
              <span>Direct Billing</span>
              <span>•</span>
              <span>No Referral</span>
              <span>•</span>
              <span>Evening Hours</span>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        className="absolute bottom-12 right-0 w-1/3 h-[1px] bg-gradient-to-l from-[#D4AF37]/50 to-transparent"
        initial={{ scaleX: 0, originX: 1 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 2, ease: [0.22, 1, 0.36, 1] }}
      />
    </section>
  );
}
