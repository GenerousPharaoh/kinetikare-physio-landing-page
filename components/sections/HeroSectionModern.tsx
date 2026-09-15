"use client";

import { JANE_BOOKING_URL } from '@/lib/booking';
import React, { useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRightIcon, StarIcon } from '@heroicons/react/24/solid';
import HeroMotionField from './HeroMotionField';

/**
 * Home hero, rebuilt 2026-09-15.
 *
 * One stage. The subject is movement analysed: a running gait cycle drawn
 * live as a motion-capture constellation (HeroMotionField), floating in the
 * dimmed treatment room where that analysis happens. No review marquee, no
 * diagonal cut, no illustration. The cursor scrubs the cycle and tilts the
 * trunk; the primary button leans towards the cursor; the room and the light
 * bloom parallax against each other and settle with scroll.
 *
 * Everything a patient needs (name, slogan, booking) is painted at full
 * opacity on the first frame; only transforms and decorative layers animate,
 * so the largest paint no longer waits on hydration.
 */

const ROOM = '/images/endorphins-treatment-room.webp';
const REVIEWS_URL = 'https://maps.google.com/maps?cid=12525727525636452787';
const REVIEW_COUNT = 31;

const rise = (delay: number) =>
  ({ animation: `heroRise 900ms cubic-bezier(0.22,1,0.36,1) ${delay}ms both` }) as React.CSSProperties;

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { amount: 0.05 });

  // Cursor parallax: the room leans slightly towards the cursor, the bloom away.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 40, damping: 18, mass: 0.6 });
  const roomX = useTransform(sx, (v) => v * 12);
  const roomY = useTransform(sy, (v) => v * 8);
  const bloomX = useTransform(sx, (v) => v * -26);
  const bloomY = useTransform(sy, (v) => v * -18);

  // Scroll parallax: the room settles upward a little faster than the page.
  const { scrollY } = useScroll();
  const roomScroll = useTransform(scrollY, [0, 900], [0, -80]);
  const bloomScroll = useTransform(scrollY, [0, 900], [0, -40]);
  const cueScale = useTransform(scrollY, [0, 240], [1, 0]);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (reduceMotion) return;
      const r = e.currentTarget.getBoundingClientRect();
      mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
      my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
    },
    [mx, my, reduceMotion]
  );
  const onMouseLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  // Magnetic primary button: leans a few pixels towards the cursor while hovered.
  const bx = useMotionValue(0);
  const by = useMotionValue(0);
  const bsx = useSpring(bx, { stiffness: 220, damping: 18 });
  const bsy = useSpring(by, { stiffness: 220, damping: 18 });
  const onButtonMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (reduceMotion) return;
      const r = e.currentTarget.getBoundingClientRect();
      bx.set(((e.clientX - r.left) / r.width - 0.5) * 12);
      by.set(((e.clientY - r.top) / r.height - 0.5) * 8);
    },
    [bx, by, reduceMotion]
  );
  const onButtonLeave = useCallback(() => {
    bx.set(0);
    by.set(0);
  }, [bx, by]);

  const drift = !reduceMotion && inView;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden !bg-[#071021] !bg-none text-white"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      aria-labelledby="hero-heading"
    >
      <style>{`
        @keyframes heroRise { from { transform: translate3d(0, 18px, 0); } to { transform: translate3d(0, 0, 0); } }
        @media (prefers-reduced-motion: reduce) { .hero-rise { animation: none !important; } }
      `}</style>

      {/* Stage: a quiet radial lift at the top-left so the text sits in light; noise and a fine dot grid for depth. */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_10%_0%,#13244a_0%,#0b1733_38%,#071021_72%)]" />
        <div className="absolute inset-0 opacity-[0.045] bg-[url('/images/noise.png')] mix-blend-overlay" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '26px 26px' }}
        />
      </div>

      {/* Desktop: the room, dimmed and dissolved into the stage. */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] xl:block [mask-image:linear-gradient(to_right,transparent_0%,black_30%,black_100%),linear-gradient(to_top,transparent_0%,black_18%)] [mask-composite:intersect] [-webkit-mask-composite:source-in]"
        style={{ x: roomX, y: roomY, translateY: roomScroll, willChange: 'transform' }}
        initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={ROOM}
          alt=""
          fill
          priority
          quality={80}
          sizes="(min-width: 1280px) 58vw, 100vw"
          className="object-cover object-[55%_60%] opacity-[0.34] saturate-[0.8]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_60%_55%,rgba(7,16,33,0)_0%,rgba(7,16,33,0.55)_100%)]" />
      </motion.div>

      {/* Bloom: the light the figure runs in. Drifts slowly, leans away from the cursor. */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-6%] top-[8%] h-[70vh] w-[70vh] max-h-[880px] max-w-[880px] rounded-full xl:right-[6%] xl:top-[10%]"
        style={{
          x: bloomX,
          y: bloomY,
          translateY: bloomScroll,
          background: 'radial-gradient(closest-side, rgba(212,175,55,0.20), rgba(212,175,55,0.05) 55%, transparent 72%)',
          filter: 'blur(18px)',
        }}
        animate={drift ? { scale: [1, 1.06, 1], opacity: [0.9, 1, 0.9] } : { scale: 1, opacity: 0.9 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Desktop: the gait constellation, over the room. */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[54%] xl:block">
        <HeroMotionField className="relative h-full w-full" still={!!reduceMotion} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1500px] flex-col justify-center px-6 pb-16 pt-28 sm:px-8 md:px-12 md:pt-32 lg:px-16 xl:pb-24">
        <div className="max-w-xl">
          <div className="hero-rise mb-5 flex items-center gap-3" style={rise(0)}>
            <span className="h-px w-10 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/0" />
            <span className="text-[11px] font-medium uppercase tracking-[0.26em] text-[#D4AF37]">Physiotherapy in Burlington</span>
          </div>

          <h1 id="hero-heading" className="hero-rise font-playfair !text-white text-[2.75rem] leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl" style={rise(60)}>
            Kareem
            <br />
            <span className="text-[#D4AF37]">Hassanein</span>
          </h1>

          <p className="hero-rise mt-6 text-lg text-white/80 sm:text-xl" style={rise(140)}>
            The Science of Recovery.
            <br />
            <span className="font-playfair italic text-[#D4AF37] sm:text-2xl">The Art of Care.</span>
          </p>

          <p className="hero-rise mt-6 max-w-md text-base leading-relaxed text-white/80 sm:text-lg" style={rise(220)}>
            One-on-one physiotherapy in Burlington, built around finding the root cause of your pain and getting back to feeling your best.
          </p>

          <div className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4" style={rise(300)}>
            <motion.a
              href={JANE_BOOKING_URL}
              data-booking-source="hero"
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={onButtonMove}
              onMouseLeave={onButtonLeave}
              style={{ x: bsx, y: bsy }}
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-md bg-[#D4AF37] px-7 py-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#071021] shadow-[0_12px_40px_-12px_rgba(212,175,55,0.55)] transition-[background-color,box-shadow] duration-300 hover:bg-[#E6C66A] hover:shadow-[0_16px_48px_-12px_rgba(212,175,55,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071021]"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
              <span className="relative">Book an assessment</span>
              <ArrowRightIcon className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </motion.a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-white/15 px-7 py-4 text-[13px] font-bold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:border-[#D4AF37]/50 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071021]"
            >
              View services
            </Link>
          </div>

          {/* Trust row: the source-linked summary that replaced the review marquee. */}
          <div className="hero-rise mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm" style={rise(380)}>
            <a
              href={REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 text-white/85 transition-colors hover:text-white"
              aria-label={`5.0 on Google from ${REVIEW_COUNT} reviews, opens the Google listing`}
            >
              <span className="flex gap-0.5" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-3.5 w-3.5 text-[#D4AF37]" />
                ))}
              </span>
              <span className="font-medium">5.0 on Google</span>
              <span className="text-white/60 underline decoration-white/25 underline-offset-4 transition-[text-decoration-color] group-hover:decoration-white/70">{REVIEW_COUNT} reviews</span>
            </a>
            <span className="hidden h-4 w-px bg-white/15 sm:block" aria-hidden="true" />
            <span className="inline-flex items-center gap-2 text-white/75">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7FB83F]" aria-hidden="true" />
              Accepting new patients
            </span>
          </div>

          <ul className="hero-rise mt-7 flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/55" style={rise(440)}>
            {['Direct billing', 'No referral needed', 'Evening hours'].map((t, i) => (
              <li key={t} className="flex items-center gap-4">
                {i > 0 && <span className="h-3 w-px bg-white/15" aria-hidden="true" />}
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Phone and tablet: the constellation in its own frame below the text, over the dimmed room. */}
        <div className="relative mt-12 xl:hidden" aria-hidden="true">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl [mask-image:radial-gradient(95%_90%_at_50%_50%,black_55%,transparent_100%)]">
            <Image src={ROOM} alt="" fill priority quality={76} sizes="(max-width: 640px) 100vw, 448px" className="object-cover object-[55%_60%] opacity-[0.38] saturate-[0.85]" />
            <HeroMotionField className="absolute inset-0" still={!!reduceMotion} />
          </div>
        </div>
      </div>

      {/* Scroll cue: a hairline that shortens as you scroll. */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-6 left-6 hidden origin-bottom md:block sm:left-8 md:left-12 lg:left-16"
        style={{ scaleY: cueScale }}
      >
        <span className="block h-16 w-px bg-gradient-to-t from-[#D4AF37]/70 to-transparent" />
      </motion.div>
    </section>
  );
}
