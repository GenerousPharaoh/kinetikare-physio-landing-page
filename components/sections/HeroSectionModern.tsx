"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image with slow ken burns */}
      <div className="absolute inset-0">
        <Image
          src="/images/clinic-pic-may-2025.jpg"
          alt="KinetiKare Physiotherapy clinic"
          fill
          priority
          className="object-cover animate-[kenBurnsSlow_30s_ease-in-out_infinite_alternate]"
          sizes="100vw"
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 pt-20 pb-16">

        <div className="max-w-5xl">

          {/* Eyebrow - elegant fade */}
          <div className="overflow-hidden mb-6">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#D4AF37] font-medium opacity-0 animate-[luxuryFadeIn_1.4s_cubic-bezier(0.25,0.1,0.25,1)_0.5s_forwards]">
              Registered Physiotherapist
            </p>
          </div>

          {/* Name - slow dramatic rise */}
          <div className="overflow-hidden mb-10">
            <h1 className="hero-name text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-white opacity-0 animate-[luxuryRise_1.8s_cubic-bezier(0.25,0.1,0.25,1)_0.8s_forwards]">
              Kareem Hassanein
            </h1>
          </div>

          {/* Tagline - smooth reveal */}
          <div className="mb-12 opacity-0 animate-[luxuryReveal_1.6s_cubic-bezier(0.25,0.1,0.25,1)_1.4s_forwards]">
            <p className="text-2xl sm:text-3xl md:text-4xl text-white font-light leading-snug tracking-tight">
              The Science of Recovery
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug tracking-tight mt-1">
              <span className="text-[#D4AF37]">The Art of Care</span>
            </p>
          </div>

          {/* Description - gentle emergence */}
          <p className="text-base sm:text-lg text-white/70 mb-14 max-w-xl leading-relaxed opacity-0 animate-[luxuryFadeIn_1.4s_cubic-bezier(0.25,0.1,0.25,1)_2s_forwards]">
            Evidence-based physiotherapy in Burlington. Manual therapy, dry needling, and personalized rehabilitation programs.
          </p>

          {/* CTAs - measured entrance */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-12">
            <Link
              href="https://endorphinshealth.janeapp.com/#/staff_member/42"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#D4AF37] text-black text-base font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-black hover:shadow-2xl hover:-translate-y-1 opacity-0 animate-[luxuryRise_1.2s_cubic-bezier(0.25,0.1,0.25,1)_2.4s_forwards]"
            >
              Book Assessment
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 text-white text-base font-medium rounded-lg hover:bg-white hover:text-black transition-all duration-300 opacity-0 animate-[luxuryRise_1.2s_cubic-bezier(0.25,0.1,0.25,1)_2.6s_forwards]"
            >
              View Services
            </Link>
          </div>

          {/* Info badges */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-white/60 text-sm opacity-0 animate-[luxuryFadeIn_1.2s_cubic-bezier(0.25,0.1,0.25,1)_3s_forwards]">
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
