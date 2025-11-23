"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ClockIcon, DocumentCheckIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const clipPathVariants = {
    hidden: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
    visible: {
      clipPath: 'polygon(0 0, 65% 0, 45% 100%, 0 100%)',
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0f172a]">

      {/* 1. Background Image Layer (Right Side) */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 hidden md:block"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute top-0 right-0 w-[65%] h-full">
            <Image
              src="/images/clinic-pic-may-2025.jpg"
              alt="KinetiKare Physiotherapy clinic"
              fill
              priority
              className="object-cover object-center brightness-105 contrast-105"
              sizes="65vw"
              unoptimized={true}
            />
            {/* Sophisticated Overlays */}
            <div className="absolute inset-0 bg-[#D4AF37]/10 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/50 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Mobile Background */}
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-[#0f172a]/40" />
        </div>
      </div>

      {/* 2. Diagonal Swipe Layer (Left Side) */}
      <motion.div
        className="absolute inset-0 bg-[#0f172a] hidden md:block z-10"
        initial="hidden"
        animate="visible"
        variants={clipPathVariants}
      >
        {/* Subtle Texture/Gradient on the dark side */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
      </motion.div>

      {/* 3. Gold Accent Line */}
      <motion.div
        className="absolute inset-0 hidden md:block z-20 pointer-events-none"
        initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', opacity: 0 }}
        animate={{
          clipPath: 'polygon(65% 0, 65.2% 0, 45.2% 100%, 45% 100%)',
          opacity: 1
        }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="w-full h-full bg-gradient-to-b from-[#D4AF37] via-[#F5E6B3] to-[#D4AF37]" />
      </motion.div>

      {/* 4. Content Layer */}
      <div className="relative z-30 h-full flex items-end md:items-center pb-20 md:pb-0">
        <div className="w-full md:max-w-[60%] px-6 sm:px-8 md:px-12 lg:px-16">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-2xl"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs tracking-[0.25em] uppercase font-medium">
                Registered Physiotherapist
              </span>
            </motion.div>

            {/* Main Heading - Playfair Display */}
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-playfair text-white leading-[1.1]">
                Kareem <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5E6B3] to-[#D4AF37]">
                  Hassanein
                </span>
              </h1>
            </motion.div>

            {/* Slogan */}
            <motion.div variants={itemVariants} className="mb-10">
              <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide">
                The Science of Recovery. <span className="text-[#D4AF37] font-normal italic font-playfair">The Art of Care.</span>
              </p>
            </motion.div>

            {/* Brilliant Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                className="group relative px-8 py-4 bg-[#D4AF37] overflow-hidden rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-shadow duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                <span className="relative flex items-center gap-2 text-[#0f172a] text-sm font-bold tracking-wider uppercase">
                  Book Assessment
                  <ArrowRightIcon className="w-4 h-4" />
                </span>
              </Link>

              <Link
                href="/services"
                className="group px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 rounded-sm"
              >
                <span className="text-white text-sm font-bold tracking-wider uppercase group-hover:text-[#D4AF37] transition-colors">
                  View Services
                </span>
              </Link>
            </motion.div>

            {/* Info Badges - Glassmorphism */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {[
                { icon: DocumentCheckIcon, text: "Direct Billing" },
                { icon: CheckCircleIcon, text: "No Referral" },
                { icon: ClockIcon, text: "Evening Hours" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md hover:bg-white/10 transition-colors duration-300"
                >
                  <item.icon className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-white/80 text-xs tracking-wide">{item.text}</span>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
