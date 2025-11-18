"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/clinic-pic-may-2025.jpg"
          alt="KinetiKare Physiotherapy clinic"
          fill
          priority
          className="object-cover opacity-0 animate-[imageReveal_1.2s_ease-out_forwards]"
          sizes="100vw"
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-24 pb-12">

        {/* Main content wrapper */}
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#D4AF37] mb-6 opacity-0 animate-[fadeUp_0.6s_ease-out_0.2s_forwards]">
            Registered Physiotherapist • Burlington
          </p>

          {/* Name */}
          <h1 className="hero-name text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 opacity-0 animate-[fadeUp_0.7s_ease-out_0.4s_forwards]">
            Kareem Hassanein
          </h1>

          {/* Tagline */}
          <div className="mb-8 opacity-0 animate-[fadeUp_0.7s_ease-out_0.6s_forwards]">
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light leading-tight">
              The Science of Recovery.
              <br />
              <span className="text-[#D4AF37]">The Art of Care.</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-white/60 mb-10 max-w-lg leading-relaxed opacity-0 animate-[fadeUp_0.6s_ease-out_0.8s_forwards]">
            Evidence-based physiotherapy with personalized treatment plans.
            Manual therapy, dry needling, and exercise rehabilitation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 opacity-0 animate-[fadeUp_0.6s_ease-out_1s_forwards]">
            <Link
              href="https://endorphinshealth.janeapp.com/#/staff_member/42"
              target="_blank"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[#D4AF37] text-black text-sm font-semibold rounded-md transition-all duration-200 hover:brightness-110 hover:shadow-lg hover:-translate-y-0.5"
            >
              Book Assessment
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/40 text-white text-sm font-medium rounded-md hover:bg-white/10 hover:border-white/60 transition-all duration-200"
            >
              View Services
            </Link>
          </div>

          {/* Info badges */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-white/50 text-xs opacity-0 animate-[fadeUp_0.5s_ease-out_1.2s_forwards]">
            <span>Direct Insurance Billing</span>
            <span className="hidden sm:inline">•</span>
            <span>No Referral Required</span>
            <span className="hidden sm:inline">•</span>
            <span>Evening Hours</span>
          </div>
        </div>

      </div>
    </section>
  );
}
