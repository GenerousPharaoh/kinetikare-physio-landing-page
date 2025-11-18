"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a]">
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
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
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Content */}
      <div className="relative min-h-screen flex items-center">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-20 xl:px-28 pt-20">

          <div className="max-w-4xl">

            {/* Eyebrow */}
            <motion.p
              className="text-[#D4AF37] text-xs sm:text-sm tracking-[0.25em] uppercase font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Registered Physiotherapist
            </motion.p>

            {/* Name */}
            <motion.h1
              className="hero-name text-[clamp(3rem,8vw,6rem)] text-white leading-[0.95] mb-8"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Kareem
              <br />
              Hassanein
            </motion.h1>

            {/* Tagline */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <p className="text-white/80 text-xl sm:text-2xl md:text-3xl font-light">
                The Science of Recovery.
              </p>
              <p className="text-[#D4AF37] text-xl sm:text-2xl md:text-3xl font-light">
                The Art of Care.
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-white/50 text-base sm:text-lg max-w-md mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              Evidence-based physiotherapy in Burlington. Manual therapy, dry needling, and personalized care.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                className="px-8 py-4 bg-[#D4AF37] text-black font-semibold rounded hover:bg-white transition-colors duration-300"
              >
                Book Assessment
              </Link>

              <Link
                href="/services"
                className="px-8 py-4 border border-white/30 text-white font-medium rounded hover:bg-white/10 transition-colors duration-300"
              >
                View Services
              </Link>
            </motion.div>

            {/* Info line */}
            <motion.div
              className="mt-16 pt-8 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              <div className="flex flex-wrap gap-8 text-white/40 text-sm">
                <span>Direct Billing Available</span>
                <span>No Referral Required</span>
                <span>Evening Appointments</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
