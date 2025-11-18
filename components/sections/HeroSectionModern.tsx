"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background - lighter overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
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
        {/* Subtle vignette - not overbearing */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40" />
      </motion.div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 pt-16">

          <div className="max-w-2xl">

            {/* Eyebrow */}
            <motion.p
              className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase font-medium mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Registered Physiotherapist
            </motion.p>

            {/* Name with text shadow for contrast */}
            <motion.h1
              className="hero-name text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Kareem Hassanein
            </motion.h1>

            {/* Slogan */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <p className="text-white text-xl sm:text-2xl md:text-3xl font-light drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
                The Science of Recovery
              </p>
              <p className="text-[#D4AF37] text-xl sm:text-2xl md:text-3xl font-light mt-1 drop-shadow-[0_1px_8px_rgba(0,0,0,0.3)]">
                The Art of Care
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                className="px-6 py-3 bg-[#D4AF37] text-black text-sm font-semibold rounded-sm hover:bg-white transition-colors duration-300"
              >
                Book Assessment
              </Link>

              <Link
                href="/services"
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-sm hover:bg-white/20 transition-colors duration-300"
              >
                View Services
              </Link>
            </motion.div>

            {/* Info */}
            <motion.div
              className="flex flex-wrap gap-4 mt-8 text-white/60 text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <span>Direct Insurance Billing</span>
              <span>•</span>
              <span>No Referral Required</span>
              <span>•</span>
              <span>Evening Hours</span>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
