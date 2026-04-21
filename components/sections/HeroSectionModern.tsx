"use client";

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

  // Curated, punchy reviews for the vertical marquee (No truncation needed)
  const curatedReviews = [
    { name: "Dr. Fel Rocci", text: "Having worked with Kareem, I am now able to play tennis 4-5 times a week without a setback. Not bad for a 70 year old!" },
    { name: "Marko Vasilic", text: "He did a full movement analysis and showed me where the extra stress was coming from. I'm back to playing basketball comfortably." },
    { name: "Ryan Darkwah", text: "Kareem found the problem came from my hip and quads. My pain's gone now, and I'm back to playing at full speed." },
    { name: "David Espinosa", text: "He took the time to figure out what was causing it instead of just treating the pain. My hip feels strong again and the foot pain's gone." },
    { name: "D Belisle", text: "Kareem's professionalism, knowledge, and genuine care made a huge difference in my recovery after knee surgery." },
    { name: "Mitch Ball", text: "His assessments helped me understand what was wrong. The dry needling and deep tissue work really accelerated my recovery." },
    { name: "Nickel Chan", text: "Kareem is one of the best physiotherapists I've ever seen. He fixed issues I'd been struggling with for a long time." },
    { name: "Thanula Gnanakanthan", text: "Thorough, knowledgeable, and incredibly attentive. I saw consistent progress and now feel stronger and pain free." },
    { name: "Johan Mapa", text: "After my first appointment with Kareem, almost all the pain was gone. I always notice improvements in my mobility." },
    { name: "Kendra MacCuish", text: "He put together a therapy plan that allowed me to reduce my pain while increasing my range of motion." },
    { name: "Nader S", text: "Kareem took his time to assess my father's issue. His mobility immediately improved." },
    { name: "Tami Murzin", text: "His knowledge and hands-on approach helped me regain strength and mobility much faster than I expected." },
    { name: "Pasquale Di Clemente", text: "He's great at adjusting each session based on how I'm feeling. The exercises have made a big difference in my strength and balance." },
    { name: "Sean Vandenbarselaar", text: "He figured out the thigh pain was coming from a nerve in my lower back. Nobody had put that together before. A few weeks in the shock pain was gone." },
    { name: "Serhiy Sidey", text: "I fight in the UFC. Torn labrum, torn ligament, rotator cuff tear. Kareem caught the wrong post-op protocol and built me the right one. Training hard again." },
    { name: "Raahim Shaikh", text: "Years of knee pain after an ACL tear. Kareem coached me through the progressions with clear targets. My knee feels much stronger, more stable, and better during workouts." }
  ];

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
          className="absolute inset-0 hidden md:block"
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
                src="/images/clinic-pic-may-2025.webp"
                alt="KinetiKare Physiotherapy clinic"
                fill
                priority
                quality={82}
                className="object-cover object-[35%_center] brightness-100 contrast-105"
                sizes="65vw"
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

            {/* Floating Reviews Widget - VERTICAL MARQUEE */}
            <motion.div
              className="absolute top-[18%] right-[6%] w-[320px] md:w-[400px] z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 1 }}
              style={{ transform: 'translateZ(0)', willChange: 'opacity, transform' }} // Force GPU layer
            >
              <div
                className="relative rounded-xl border border-white/10 shadow-2xl overflow-hidden group/widget transition-colors duration-500 backdrop-blur-md"
                style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)' }} // Slate-900 with 60% opacity
              >

                {/* Top Bar */}
                <div
                  className="flex items-center justify-between px-5 py-4 border-b border-white/10 relative z-20 backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(30, 41, 59, 0.6)' }} // Slate-800 with 60% opacity
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-white rounded-full p-1.5 w-8 h-8 flex items-center justify-center shadow-sm">
                      <svg viewBox="0 0 24 24" className="w-5 h-5">
                        <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.6v3h3.9c2.28-2.1 3.6-5.2 3.6-8.84z" />
                        <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.96-2.91l-3.91-3c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96h-4.19v3.24c1.99 3.95 6.09 6.47 10.92 6.47z" />
                        <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.47h-4.19C.48 8.24 0 10.06 0 12.29c0 2.22.48 4.04 1.34 5.82l4.19-3.24z" />
                        <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.83 0-8.93 2.53-10.92 6.47l4.19 3.24c.95-2.85 3.6-4.96 6.73-4.96z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white tracking-wide">Google Reviews</span>
                      <div className="flex items-center gap-1">
                        <span className="text-[10px] font-bold text-white/80">5.0</span>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className="w-2.5 h-2.5 text-[#D4AF37]" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-2 py-1 rounded bg-[#D4AF37]/20 border border-[#D4AF37]/30">
                    <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">Verified</span>
                  </div>
                </div>

                {/* Vertical Marquee Content */}
                <div
                  className="relative h-[280px] overflow-hidden bg-transparent"
                >
                  {/* Gradient Masks for Smooth Fade In/Out - Adjusted for Transparency */}
                  <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-transparent z-10 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent z-10 pointer-events-none" />

                  <motion.div
                    className="flex flex-col gap-3 p-4"
                    animate={(shouldReduceMotion || !isHeroInView) ? undefined : { y: "-50%" }}
                    transition={{
                      duration: 60, // Slower speed
                      ease: "linear",
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  >
                    {/* Doubled list for seamless loop */}
                    {[...curatedReviews, ...curatedReviews].map((review, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl border border-white/10 shadow-sm transition-colors duration-300 group/card backdrop-blur-sm hover:bg-white/5"
                        style={{ backgroundColor: 'rgba(30, 41, 59, 0.4)' }} // Slate-800 with 40% opacity
                      >
                        <p
                          className="text-xs font-semibold leading-relaxed mb-3"
                          style={{ color: '#ffffff', opacity: 1 }}
                        >
                          "{review.text}"
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center text-[9px] font-bold text-white shadow-sm">
                            {review.name.charAt(0)}
                          </div>
                          <span className="text-[10px] font-bold text-[#D4AF37] tracking-wide">{review.name}</span>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

              </div>
            </motion.div>

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

        {/* Mobile Background (decorative duplicate of the desktop image) */}
        <div className="absolute inset-0 md:hidden" aria-hidden="true">
          <Image
            src="/images/clinic-pic-may-2025.webp"
            alt=""
            fill
            quality={82}
            className="object-cover"
            sizes="100vw"
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
        className="absolute inset-0 hidden md:block z-20 pointer-events-none will-change-[clip-path]"
        initial="hidden"
        animate="visible"
        variants={goldLineVariants}
        style={{ transform: 'translateZ(0)' }}
      >
        <div className="w-full h-full bg-gradient-to-b from-[#D4AF37] via-[#F5E6B3] to-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.3)]" />
      </motion.div>

      {/* 4. Content Layer - Accounting for mobile browser bars with explicit safe padding */}
      <div className="relative z-30 h-full flex items-end md:items-start pb-8 pt-12 md:pb-0 md:pt-24">
        <div className="w-full md:max-w-[55%] lg:max-w-[50%] px-6 sm:px-8 md:px-12 lg:px-16">

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
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
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
            <motion.div variants={itemVariants} className="flex flex-wrap md:flex-nowrap gap-2 md:gap-3 mb-5 md:mb-0">
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

            {/* Mobile-only: Google Reviews trust signal */}
            <motion.div
              className="md:hidden flex items-center gap-3 mt-1"
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
              <span className="text-white/70 text-xs">24 reviews</span>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
