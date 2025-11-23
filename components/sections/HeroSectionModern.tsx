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
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Perfectly synced clip path transition
  const swipeTransition = { duration: 1.6, ease: [0.16, 1, 0.3, 1] };

  const clipPathVariants = {
    hidden: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
    visible: {
      clipPath: 'polygon(0 0, 65% 0, 45% 100%, 0 100%)',
      transition: swipeTransition
    }
  };

  const goldLineVariants = {
    hidden: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', opacity: 0 },
    visible: {
      clipPath: 'polygon(65% 0, 65.2% 0, 45.2% 100%, 45% 100%)',
      opacity: 1,
      transition: swipeTransition
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0f172a]">

      {/* 1. Background Image Layer (Right Side) */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
        >
          <div className="absolute top-0 right-0 w-[65%] h-full overflow-hidden">
            <motion.div
              className="relative w-full h-full will-change-transform"
              initial={{ scale: 1.15, x: "5%" }} // Shifted right to center the bed
              animate={{
                scale: [1.15, 1.2, 1.15, 1.2],
                x: ["5%", "0%", "5%", "2%"],
                y: ["0%", "-3%", "0%", "-2%"]
              }}
              transition={{
                duration: 45,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "linear"
              }}
            >
              <Image
                src="/images/clinic-pic-may-2025.jpg"
                alt="KinetiKare Physiotherapy clinic"
                fill
                priority
                className="object-cover object-[35%_center] brightness-100 contrast-105" // Adjusted object position
                sizes="65vw"
                unoptimized={true}
              />
            </motion.div>

            {/* Ultra-Premium Cinematic Grading */}
            {/* 1. Warm Gold Highlight (Top Right) */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#D4AF37]/20 via-transparent to-transparent mix-blend-overlay" />

            {/* 2. Deep Shadow Vignette (Left & Bottom) */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />

            {/* 3. Cinematic Color Grade */}
            <div className="absolute inset-0 bg-[#1e293b]/20 mix-blend-multiply" />

            {/* 4. Subtle Grain Texture */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
            />
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
        className="absolute inset-0 bg-[#0f172a] hidden md:block z-10 will-change-[clip-path]"
        initial="hidden"
        animate="visible"
        variants={clipPathVariants}
        style={{ transform: 'translateZ(0)' }}
      >
        {/* Visual Brilliance: Deep Spotlight Effect */}
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1e293b] via-[#0f172a] to-[#0f172a] opacity-90" />

        {/* Subtle Animated Texture */}
        <motion.div
          className="absolute inset-0 opacity-[0.03] bg-[url('/images/noise.png')] mix-blend-overlay"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* 3. Gold Accent Line - PERFECTLY SYNCED */}
      <motion.div
        className="absolute inset-0 hidden md:block z-20 pointer-events-none will-change-[clip-path]"
        initial="hidden"
        animate="visible"
        variants={goldLineVariants}
        style={{ transform: 'translateZ(0)' }}
      >
        <div className="w-full h-full bg-gradient-to-b from-[#D4AF37] via-[#F5E6B3] to-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.3)]" />
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
              <span className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37] to-transparent" />
              <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">
                Registered Physiotherapist
              </span>
            </motion.div>

            {/* Main Heading - Playfair Display */}
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-playfair text-white leading-[1] tracking-tight drop-shadow-2xl">
                Kareem <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5E6B3] via-[#D4AF37] to-[#B8860B] animate-gradient-x bg-[length:200%_auto]">
                  Hassanein
                </span>
              </h1>
            </motion.div>

            {/* Slogan */}
            <motion.div variants={itemVariants} className="mb-12">
              <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide leading-relaxed">
                The Science of Recovery. <br />
                <span className="text-[#D4AF37] font-normal italic font-playfair text-2xl md:text-3xl">The Art of Care.</span>
              </p>
            </motion.div>

            {/* Brilliant Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-5 mb-16">
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                className="group relative px-10 py-5 bg-[#D4AF37] overflow-hidden rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                <span className="relative flex items-center gap-3 text-[#0f172a] text-sm font-bold tracking-[0.15em] uppercase">
                  Book Assessment
                  <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="/services"
                className="group px-10 py-5 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-500 rounded-sm hover:border-[#D4AF37]/30"
              >
                <span className="text-white text-sm font-bold tracking-[0.15em] uppercase group-hover:text-[#D4AF37] transition-colors">
                  View Services
                </span>
              </Link>
            </motion.div>

            {/* Info Badges - Glassmorphism */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              {[
                { icon: DocumentCheckIcon, text: "Direct Billing" },
                { icon: CheckCircleIcon, text: "No Referral" },
                { icon: ClockIcon, text: "Evening Hours" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/5 rounded-full backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:border-[#D4AF37]/20 group"
                >
                  <item.icon className="w-4 h-4 text-[#D4AF37] group-hover:text-[#F5E6B3] transition-colors" />
                  <span className="text-white/60 text-xs tracking-widest uppercase group-hover:text-white/90 transition-colors">{item.text}</span>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
