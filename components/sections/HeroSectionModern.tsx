"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background with dramatic scale reveal */}
      <div className="absolute inset-0 animate-[dramaticScale_2s_cubic-bezier(0.22,1,0.36,1)_forwards]">
        <Image
          src="/images/clinic-pic-may-2025.jpg"
          alt="KinetiKare Physiotherapy clinic"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 pt-20 pb-16">

        <div className="max-w-5xl">

          {/* Eyebrow - clip reveal from left */}
          <div className="mb-6 overflow-hidden">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#D4AF37] font-medium animate-[clipRevealLeft_1s_cubic-bezier(0.77,0,0.175,1)_0.8s_both]">
              Registered Physiotherapist
            </p>
          </div>

          {/* Name - dramatic clip reveal from bottom */}
          <div className="mb-10 overflow-hidden">
            <h1 className="hero-name text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-white animate-[clipRevealUp_1.2s_cubic-bezier(0.77,0,0.175,1)_1s_both]">
              Kareem Hassanein
            </h1>
          </div>

          {/* Tagline - staggered lines */}
          <div className="mb-12">
            <div className="overflow-hidden">
              <p className="text-2xl sm:text-3xl md:text-4xl text-white font-light leading-snug tracking-tight animate-[clipRevealUp_1s_cubic-bezier(0.77,0,0.175,1)_1.4s_both]">
                The Science of Recovery
              </p>
            </div>
            <div className="overflow-hidden mt-1">
              <p className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug tracking-tight animate-[clipRevealUp_1s_cubic-bezier(0.77,0,0.175,1)_1.6s_both]">
                <span className="text-[#D4AF37]">The Art of Care</span>
              </p>
            </div>
          </div>

          {/* Description - fade with scale */}
          <p className="text-base sm:text-lg text-white/70 mb-14 max-w-xl leading-relaxed animate-[impactFade_1s_cubic-bezier(0.22,1,0.36,1)_2s_both]">
            Evidence-based physiotherapy in Burlington. Manual therapy, dry needling, and personalized rehabilitation programs.
          </p>

          {/* CTAs - pop in with scale */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-12">
            <Link
              href="https://endorphinshealth.janeapp.com/#/staff_member/42"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#D4AF37] text-black text-base font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-black hover:shadow-2xl hover:-translate-y-1 animate-[popIn_0.8s_cubic-bezier(0.34,1.56,0.64,1)_2.2s_both]"
            >
              Book Assessment
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 text-white text-base font-medium rounded-lg hover:bg-white hover:text-black transition-all duration-300 animate-[popIn_0.8s_cubic-bezier(0.34,1.56,0.64,1)_2.4s_both]"
            >
              View Services
            </Link>
          </div>

          {/* Info badges - slide up */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-white/60 text-sm animate-[impactFade_0.8s_cubic-bezier(0.22,1,0.36,1)_2.8s_both]">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
              Direct Billing
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
              No Referral Required
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
              Evening Hours
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
