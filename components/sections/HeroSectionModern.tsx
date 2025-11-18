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
          className="object-cover opacity-0 animate-[heroImageReveal_1.8s_cubic-bezier(0.16,1,0.3,1)_forwards]"
          sizes="100vw"
          unoptimized={true}
        />

        {/* Cinematic vignette overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 opacity-0 animate-[heroOverlay_1.2s_ease-out_0.3s_forwards]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 opacity-0 animate-[heroOverlay_1.2s_ease-out_0.4s_forwards]" />
      </div>

      {/* Content container - full width with offset positioning */}
      <div className="relative min-h-screen flex flex-col justify-between pt-24 pb-8 px-6 md:px-12 lg:px-16">

        {/* Top section - Eyebrow left aligned */}
        <div className="opacity-0 animate-[heroSlideUp_1s_cubic-bezier(0.16,1,0.3,1)_0.6s_forwards]">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/70 font-medium">
            Registered Physiotherapist
          </p>
        </div>

        {/* Middle section - Main content spread across */}
        <div className="flex-1 flex flex-col justify-center -mt-8">
          {/* Headline - left side */}
          <div className="max-w-4xl">
            <h1 className="mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              <div className="space-y-1 md:space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-light tracking-wide opacity-0 animate-[heroSlideUp_1s_cubic-bezier(0.16,1,0.3,1)_0.8s_forwards]">
                  The Science of Recovery
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-light tracking-wide opacity-0 animate-[heroSlideUp_1s_cubic-bezier(0.16,1,0.3,1)_1s_forwards]">
                  The Art of{' '}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-[#D4AF37] to-[#B08D57] bg-clip-text text-transparent font-medium italic">
                      Care
                    </span>
                    <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#B08D57] origin-left scale-x-0 animate-[heroLineReveal_0.8s_cubic-bezier(0.16,1,0.3,1)_1.8s_forwards]" />
                  </span>
                </div>
              </div>
            </h1>
          </div>

          {/* Name and description - offset to right */}
          <div className="md:ml-auto md:mr-16 lg:mr-24 max-w-md opacity-0 animate-[heroSlideUp_1s_cubic-bezier(0.16,1,0.3,1)_1.2s_forwards]">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-gradient-to-r from-[#D4AF37] to-transparent" />
              <p className="text-lg md:text-xl lg:text-2xl font-extralight text-white tracking-[0.08em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                Kareem Hassanein
              </p>
            </div>
            <p className="text-sm md:text-base text-white/70 leading-relaxed font-light">
              Evidence-based physiotherapy combining proven techniques with personalized attention for lasting results.
            </p>
          </div>
        </div>

        {/* Bottom section - CTAs left, badges right */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          {/* CTAs - left side */}
          <div className="flex flex-col sm:flex-row gap-3 opacity-0 animate-[heroSlideUp_1s_cubic-bezier(0.16,1,0.3,1)_1.6s_forwards]">
            <Link
              href="https://endorphinshealth.janeapp.com/#/staff_member/42"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B08D57] hover:from-[#E5C04B] hover:to-[#C99A65] text-white text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Book Your Assessment
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Services
            </Link>
          </div>

          {/* Info - right side */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-white/50 text-xs opacity-0 animate-[heroFadeIn_0.8s_ease-out_1.8s_forwards]">
            <span>Burlington • Waterdown • Oakville</span>
            <div className="flex gap-4">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                Direct Billing
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Evening Hours
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
