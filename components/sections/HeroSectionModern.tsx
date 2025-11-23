"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon, ClockIcon, DocumentCheckIcon, ArrowRightIcon, StarIcon } from '@heroicons/react/24/solid';
import { DocumentCheckIcon as OutlineDocumentCheckIcon, CheckCircleIcon as OutlineCheckCircleIcon, ClockIcon as OutlineClockIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  // Real Review Snippets from GoogleReviews.tsx
  const reviews = [
    "Thorough, knowledgeable, and incredibly attentive.",
    "Regained strength and mobility much faster than expected.",
    "Dry needling and deep tissue work accelerated my recovery.",
    "His professionalism and genuine care made a huge difference.",
    "My pain's gone now, and I'm back to playing at full speed."
  ];

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
              initial={{ scale: 1.15, x: "5%" }}
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
                className="object-cover object-[35%_center] brightness-100 contrast-105"
                sizes="65vw"
                unoptimized={true}
              />
            </motion.div>

            {/* Cinematic Overlays */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#D4AF37]/20 via-transparent to-transparent mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[#1e293b]/20 mix-blend-multiply" />
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
            />

            {/* Floating Reviews Widget */}
            <motion.div
              className="absolute top-[15%] right-[8%] max-w-[280px] z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <div className="relative p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-3.5 h-3.5 text-[#D4AF37]" />
                  ))}
                  <span className="ml-2 text-[10px] font-bold text-white uppercase tracking-wider">Google Reviews</span>
                </div>
                <div className="h-16 relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentReview}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                      className="text-white/95 text-xs font-medium italic leading-relaxed"
                    >
                      "{reviews[currentReview]}"
                    </motion.p>
                  </AnimatePresence>
                </div>
                <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-[#0f172a] text-[10px] font-bold">5.0</span>
                </div>
              </div>
            </motion.div>

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
        <div className="w-full md:max-w-[55%] lg:max-w-[50%] px-6 sm:px-8 md:px-12 lg:px-16">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-xl"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-5">
              <span className="h-[1px] w-8 bg-gradient-to-r from-[#D4AF37] to-transparent" />
              <span className="text-[#D4AF37] text-[10px] tracking-[0.25em] uppercase font-medium">
                Registered Physiotherapist
              </span>
            </motion.div>

            {/* Main Heading - Playfair Display (FURTHER REDUCED SIZE) */}
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair text-white leading-[1.1] tracking-tight drop-shadow-2xl">
                Kareem <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5E6B3] via-[#D4AF37] to-[#B8860B] animate-gradient-x bg-[length:200%_auto]">
                  Hassanein
                </span>
              </h1>
            </motion.div>

            {/* Slogan */}
            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-base md:text-lg text-white/80 font-light tracking-wide leading-relaxed">
                The Science of Recovery. <br />
                <span className="text-[#D4AF37] font-normal italic font-playfair text-lg md:text-xl">The Art of Care.</span>
              </p>
            </motion.div>

            {/* Brilliant Buttons (Compact) */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                className="group relative px-6 py-3 bg-[#D4AF37] overflow-hidden rounded-sm shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                <span className="relative flex items-center gap-2 text-[#0f172a] text-xs font-bold tracking-[0.15em] uppercase">
                  Book Assessment
                  <ArrowRightIcon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="/services"
                className="group px-6 py-3 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-500 rounded-sm hover:border-[#D4AF37]/30"
              >
                <span className="text-white text-xs font-bold tracking-[0.15em] uppercase group-hover:text-[#D4AF37] transition-colors">
                  View Services
                </span>
              </Link>
            </motion.div>

            {/* Info Badges - Compact & Safe Zone */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 max-w-[90%]">
              {[
                { icon: OutlineDocumentCheckIcon, text: "Direct Billing" },
                { icon: OutlineCheckCircleIcon, text: "No Referral" },
                { icon: OutlineClockIcon, text: "Evening Hours" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/5 rounded-full backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:border-[#D4AF37]/20 group"
                >
                  <item.icon className="w-3 h-3 text-[#D4AF37] group-hover:text-[#F5E6B3] transition-colors" />
                  <span className="text-white/60 text-[10px] tracking-widest uppercase group-hover:text-white/90 transition-colors whitespace-nowrap">{item.text}</span>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
