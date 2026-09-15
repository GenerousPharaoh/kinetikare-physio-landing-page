"use client";

import { JANE_BOOKING_URL } from '@/lib/booking';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon, StarIcon } from '@heroicons/react/24/solid';

/**
 * Home hero, the seam (2026-09-15, Kareem's pick from the review sheet at
 * ~/Documents/Websites/kinetikare-hero-review/integration/).
 *
 * Navy text side on the left; on the right, one of his commissioned
 * illustrations (the basketball dunk) sitting on its own cream paper, the two
 * meeting at a single gold diagonal seam. No photograph, no frame, no review
 * marquee: the paper of the drawing is the right half of the page. On phones
 * and tablets the text comes first and the drawing follows below it, cut by
 * the same seam along its top edge.
 *
 * The header keeps its navy bar on the home page (it used to go transparent
 * at the top) because white nav links over cream paper were unreadable.
 */

const ART = {
  src: '/images/illustrations/basketball-dunk.webp',
  paper: '#f5efdf',
};

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden !bg-[#020617] !bg-none !py-0">
      {/* Stage */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_10%_0%,#13244a_0%,#0b1733_38%,#020617_72%)]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '26px 26px' }}
        />
      </div>

      {/* Desktop: the drawing on its own paper, right of the seam. Starts under the header bar. */}
      <motion.div
        aria-hidden="true"
        className="absolute right-0 bottom-0 top-[5.5rem] hidden w-[56%] xl:block [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)]"
        style={{ backgroundColor: ART.paper }}
        initial={shouldReduceMotion ? false : { opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={ART.src}
          alt=""
          fill
          priority
          quality={84}
          sizes="(min-width: 1280px) 56vw, 100vw"
          className="object-cover object-[50%_20%]"
        />
      </motion.div>
      {/* The seam. A plain line: pathLength animation dashes under a non-uniform viewBox. */}
      <motion.svg
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 top-[5.5rem] hidden w-[56%] xl:block"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.5 }}
      >
        <line x1="15" y1="0" x2="0" y2="100" stroke="#D4AF37" vectorEffect="non-scaling-stroke" style={{ strokeWidth: 2 }} />
      </motion.svg>

      {/* Content */}
      <div className="relative z-30 flex pt-28 pb-0 md:pt-32 xl:min-h-[100dvh] xl:items-start xl:pt-36">
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

      {/* Phone and tablet: the drawing below the text, cut by the seam along its top. */}
      <div className="relative mt-10 h-[62vh] min-h-[420px] max-h-[640px] xl:hidden" aria-hidden="true">
        <div
          className="absolute inset-0 [clip-path:polygon(0_9%,100%_0,100%_100%,0_100%)]"
          style={{ backgroundColor: ART.paper }}
        >
          <Image
            src={ART.src}
            alt=""
            fill
            priority
            quality={80}
            sizes="100vw"
            className="object-cover object-[50%_18%]"
          />
        </div>
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="0" y1="9" x2="100" y2="0" stroke="#D4AF37" vectorEffect="non-scaling-stroke" style={{ strokeWidth: 2 }} />
        </svg>
      </div>
    </section>
  );
}
