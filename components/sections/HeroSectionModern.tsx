"use client";

import { JANE_BOOKING_URL } from '@/lib/booking';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue, useReducedMotion, useInView } from 'framer-motion';
import { CheckCircleIcon, ClockIcon, DocumentCheckIcon, ArrowRightIcon, StarIcon } from '@heroicons/react/24/solid';
import { DocumentCheckIcon as OutlineDocumentCheckIcon, CheckCircleIcon as OutlineCheckCircleIcon, ClockIcon as OutlineClockIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  // Pause the expensive background pan + vertical review marquee whenever the
  // hero is scrolled off-screen. Cuts idle CPU/battery drain on long pages.
  const sectionRef = useRef<HTMLElement | null>(null);
  const isHeroInView = useInView(sectionRef, { amount: 0.05 });

  // Mouse Spotlight Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
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
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] w-full overflow-hidden bg-[#020617] group"
      onMouseMove={handleMouseMove}
    >

      {/* 1. Background Image Layer (Right Side) */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 hidden xl:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
        >
          <div className="absolute top-0 right-0 w-[65%] h-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%)]">
            <motion.div
              className="relative w-full h-full will-change-transform"
              initial={{ scale: 1.15, x: "0%" }}
              animate={(shouldReduceMotion || !isHeroInView) ? undefined : {
                scale: [1.15, 1.2, 1.15, 1.2],
                x: ["0%", "10%", "5%", "15%"], // Shifted right
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
                src="/images/endorphins-treatment-room.webp"
                alt="Treatment room at Endorphins Health & Wellness Centre, Burlington"
                fill
                loading="eager"
                fetchPriority="high"
                quality={82}
                className="object-cover object-[50%_60%] brightness-100 contrast-105"
                sizes="(min-width: 1280px) 65vw, 100vw"
              />
            </motion.div>

            {/* Cinematic Overlays */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#D4AF37]/20 via-transparent to-transparent mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[#1e293b]/20 mix-blend-multiply" />

            {/* Tech Grid Overlay */}
            <div
              className="absolute inset-0 opacity-[0.07] pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}
            />

            {/* Status Badge */}
            <motion.div
              className="absolute bottom-[10%] right-[8%] z-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, duration: 0.8 }}
            >
              <div className="flex items-center gap-3 px-4 py-2 bg-[#0f172a]/80 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-white/90 tracking-wide uppercase">Accepting New Patients</span>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* Mobile and tablet background, before the split composition has room. */}
        <div className="absolute inset-0 xl:hidden" aria-hidden="true">
          <Image
            src="/images/endorphins-treatment-room.webp"
            alt=""
            fill
            loading="eager"
            fetchPriority="high"
            quality={82}
            className="object-cover"
            sizes="(min-width: 1280px) 65vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-[#0f172a]/40" />
        </div>
      </div>

      {/* 2. Diagonal Swipe Layer (Left Side) */}
      <motion.div
        className="absolute inset-0 bg-[#0f172a] hidden xl:block z-10 will-change-[clip-path]"
        initial="hidden"
        animate="visible"
        variants={clipPathVariants}
        style={{ transform: 'translateZ(0)' }}
      >
        {/* Interactive Spotlight Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(212, 175, 55, 0.08),
                transparent 80%
              )
            `,
          }}
        />

        {/* Aurora Background Effect */}
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1e293b] via-[#0f172a] to-[#0f172a] opacity-90" />
        <div
          className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[100px]"
          style={{ opacity: 0.4 }}
        />

        {/* Subtle Texture */}
        <div
          className="absolute inset-0 opacity-[0.03] bg-[url('/images/noise.png')] mix-blend-overlay"
        />

        {/* Dot Matrix Pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
      </motion.div>

      {/* 3. Gold Accent Line - PERFECTLY SYNCED */}
      <motion.div
        className="absolute inset-0 hidden xl:block z-20 pointer-events-none will-change-[clip-path]"
        initial="hidden"
        animate="visible"
        variants={goldLineVariants}
        style={{ transform: 'translateZ(0)' }}
      >
        <div className="w-full h-full bg-gradient-to-b from-[#D4AF37] via-[#F5E6B3] to-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.3)]" />
      </motion.div>

      {/* 4. Content Layer - Accounting for mobile browser bars with explicit safe padding */}
      <div className="relative z-30 h-full flex items-end md:items-start pb-12 pt-12 xl:pb-0 md:pt-24">
        <div className="w-full max-w-3xl xl:max-w-[50%] px-6 sm:px-8 md:px-12 lg:px-16">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-xl"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-3 sm:mt-0">
              <span className="h-[1px] w-8 bg-gradient-to-r from-[#D4AF37] to-transparent" />
              <span className="text-[#D4AF37] text-[10px] tracking-[0.25em] uppercase font-medium">
                Physiotherapy In Burlington
              </span>
            </motion.div>

            {/* Main Heading - Playfair Display */}
            <motion.div variants={itemVariants} className="mb-4 md:mb-6">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair text-white leading-[1.1] tracking-tight drop-shadow-2xl">
                Kareem <br />
                <span className="text-[#D4AF37]">
                  Hassanein
                </span>
              </h1>
            </motion.div>

            {/* Slogan */}
            <motion.div variants={itemVariants} className="mb-6 md:mb-8">
              <p className="text-base md:text-lg text-white/80 font-light tracking-wide leading-relaxed">
                The Science of Recovery. <br />
                <span className="text-[#D4AF37] font-normal italic font-playfair text-lg md:text-xl">The Art of Care.</span>
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6 md:mb-8">
              <p className="max-w-lg text-base md:text-lg text-white/85 leading-relaxed">
                One-on-one physiotherapy in Burlington, built around finding the root cause of your pain and getting back to feeling your best.
              </p>
            </motion.div>

            {/* Buttons - Full width on mobile */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 md:mb-10">
              <Link
                href={JANE_BOOKING_URL}
                data-booking-source="hero"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative px-8 py-4 bg-[#D4AF37] overflow-hidden rounded-lg sm:rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-[transform,box-shadow,color] duration-300 flex items-center justify-center gap-3"
                >
                  {/* Sophisticated Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />

                  <span className="relative text-[#0f172a] text-xs font-bold tracking-[0.15em] uppercase flex items-center gap-2">
                    Book Assessment
                    <ArrowRightIcon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </motion.div>
              </Link>

              <Link
                href="/services"
                className="group relative w-full sm:w-auto"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-[transform,background,border-color] duration-300 rounded-lg sm:rounded-sm hover:border-[#D4AF37]/30 flex items-center justify-center"
                >
                  <span className="text-white text-xs font-bold tracking-[0.15em] uppercase group-hover:text-[#D4AF37] transition-colors">
                    View Services
                  </span>
                </motion.div>
              </Link>
            </motion.div>

            {/* Info Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap xl:flex-nowrap gap-2 md:gap-3 mb-5 xl:mb-0">
              {[
                "Direct Billing",
                "No Referral Needed",
                "Evening Hours"
              ].map((text, index) => (
                <div
                  key={index}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md hover:bg-white/10 transition-[background,border-color] duration-300 hover:border-[#D4AF37]/30 group whitespace-nowrap"
                >
                  <span className="text-white/80 text-[10px] md:text-xs font-medium tracking-wider uppercase group-hover:text-[#D4AF37] transition-colors">{text}</span>
                </div>
              ))}
            </motion.div>

            {/* Compact trust signal for mobile and tablet. */}
            <motion.div
              className="xl:hidden flex items-center gap-3 mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-3.5 h-3.5 text-[#D4AF37]" />
                ))}
              </div>
              <span className="text-white/80 text-xs font-medium">5.0 on Google</span>
              <span className="text-white/70 text-xs">31 reviews</span>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
