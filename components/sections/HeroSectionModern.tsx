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
          className="object-cover opacity-0 animate-[fadeIn_1.2s_ease-out_forwards]"
          sizes="100vw"
          unoptimized={true}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50 opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="w-full px-6 md:px-12 lg:px-20 pt-20">
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <p className="text-sm uppercase tracking-[0.25em] text-[#D4AF37] mb-8 font-medium opacity-0 animate-[slideUp_0.6s_ease-out_0.4s_forwards]">
              Registered Physiotherapist
            </p>

            {/* Name - prominent */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-wide opacity-0 animate-[slideUp_0.7s_ease-out_0.6s_forwards]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Kareem Hassanein
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-light opacity-0 animate-[slideUp_0.6s_ease-out_0.8s_forwards]">
              The Science of Recovery. The Art of{' '}
              <span className="text-[#D4AF37] italic font-normal">Care</span>.
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-white/70 mb-10 max-w-xl leading-relaxed opacity-0 animate-[slideUp_0.6s_ease-out_1s_forwards]">
              Evidence-based physiotherapy in Burlington combining proven manual therapy techniques with personalized treatment plans.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 opacity-0 animate-[slideUp_0.6s_ease-out_1.2s_forwards]">
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#D4AF37] hover:bg-[#E5C04B] text-black font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                Book Assessment
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
              >
                View Services
              </Link>
            </div>

            {/* Simple info */}
            <div className="flex items-center gap-6 text-white/50 text-sm opacity-0 animate-[fadeIn_0.6s_ease-out_1.4s_forwards]">
              <span>Direct Insurance Billing</span>
              <span>•</span>
              <span>Evening Appointments</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
