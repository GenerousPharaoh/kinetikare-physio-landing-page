"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/clinic-pic-may-2025.jpg"
          alt="KinetiKare Physiotherapy clinic"
          fill
          priority
          className="object-cover opacity-0 animate-[zoomReveal_1.5s_cubic-bezier(0.33,1,0.68,1)_forwards]"
          sizes="100vw"
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-20">

        {/* Top: Eyebrow */}
        <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-4 font-medium opacity-0 animate-[fadeDown_0.8s_cubic-bezier(0.33,1,0.68,1)_0.3s_forwards]">
          Registered Physiotherapist
        </p>

        {/* Name - elegant light serif with tracking */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-8 tracking-[0.02em] opacity-0 animate-[slideFromLeft_1s_cubic-bezier(0.33,1,0.68,1)_0.5s_forwards]"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          Kareem Hassanein
        </h1>

        {/* Tagline - offset to right with different animation */}
        <div className="md:ml-auto md:mr-12 lg:mr-24 max-w-md mb-10 opacity-0 animate-[slideFromRight_1s_cubic-bezier(0.33,1,0.68,1)_0.8s_forwards]">
          <p className="text-lg md:text-xl text-white/70 font-light mb-2">
            The Science of Recovery
          </p>
          <p className="text-2xl md:text-3xl text-white font-light">
            The Art of <span className="text-[#D4AF37] italic">Care</span>
          </p>
        </div>

        {/* Description - back to left */}
        <p className="text-sm md:text-base text-white/50 mb-8 max-w-md leading-relaxed opacity-0 animate-[fadeUp_0.8s_cubic-bezier(0.33,1,0.68,1)_1.1s_forwards]">
          Evidence-based physiotherapy in Burlington. Manual therapy techniques with personalized treatment plans.
        </p>

        {/* CTAs and info in a row */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 opacity-0 animate-[fadeUp_0.8s_cubic-bezier(0.33,1,0.68,1)_1.3s_forwards]">
          <div className="flex gap-3">
            <Link
              href="https://endorphinshealth.janeapp.com/#/staff_member/42"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#D4AF37] hover:bg-[#B8963A] text-black text-sm font-semibold rounded transition-all duration-200 hover:shadow-lg"
            >
              Book Assessment
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white text-sm font-medium rounded hover:bg-white/10 transition-all duration-200"
            >
              Services
            </Link>
          </div>

          <div className="flex items-center gap-4 text-white/40 text-xs">
            <span>Direct Billing</span>
            <span>•</span>
            <span>Evening Hours</span>
          </div>
        </div>

      </div>
    </section>
  );
}
