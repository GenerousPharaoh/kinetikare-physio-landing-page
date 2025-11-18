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
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 opacity-0 animate-[heroOverlay_1.2s_ease-out_0.3s_forwards]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 animate-[heroOverlay_1.2s_ease-out_0.4s_forwards]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black/30_100%)] opacity-0 animate-[heroOverlay_1.2s_ease-out_0.5s_forwards]" />
      </div>

      {/* Content container - with proper header spacing */}
      <div className="relative min-h-screen flex items-center pt-24 pb-12">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-28">
          <div className="max-w-2xl">

            {/* Eyebrow text */}
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-white/80 mb-6 font-medium opacity-0 animate-[heroSlideUp_1s_cubic-bezier(0.16,1,0.3,1)_0.6s_forwards]">
              Registered Physiotherapist
            </p>

            {/* Main headline - dramatic typography */}
            <h1 className="mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
              <div className="space-y-2 md:space-y-3">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-wide opacity-0 animate-[heroSlideUp_1s_cubic-bezier(0.16,1,0.3,1)_0.8s_forwards]">
                  The Science of Recovery
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-wide opacity-0 animate-[heroSlideUp_1s_cubic-bezier(0.16,1,0.3,1)_1s_forwards]">
                  The Art of{' '}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-[#D4AF37] to-[#B08D57] bg-clip-text text-transparent font-medium italic">
                      Care
                    </span>
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#B08D57] origin-left scale-x-0 animate-[heroLineReveal_0.8s_cubic-bezier(0.16,1,0.3,1)_1.8s_forwards]" />
                  </span>
                </div>
              </div>
            </h1>

            {/* Name with separator */}
            <div className="mb-8 opacity-0 animate-[heroSlideUp_1s_cubic-bezier(0.16,1,0.3,1)_1.2s_forwards]">
              <p className="text-2xl md:text-3xl lg:text-4xl font-extralight text-white tracking-[0.1em] uppercase mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                Kareem Hassanein
              </p>
              <div className="flex items-center gap-3">
                <div className="h-px w-12 md:w-16 bg-gradient-to-r from-[#D4AF37] to-transparent opacity-0 animate-[heroFadeIn_0.8s_ease-out_1.6s_forwards]" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] opacity-0 animate-[heroScaleIn_0.6s_cubic-bezier(0.16,1,0.3,1)_1.7s_forwards]" />
                <div className="h-px w-12 md:w-16 bg-gradient-to-l from-[#D4AF37] to-transparent opacity-0 animate-[heroFadeIn_0.8s_ease-out_1.6s_forwards]" />
              </div>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg lg:text-xl text-white/80 mb-3 leading-relaxed max-w-xl font-light opacity-0 animate-[heroSlideUp_1s_cubic-bezier(0.16,1,0.3,1)_1.4s_forwards]">
              Evidence-based physiotherapy combining proven techniques with personalized attention for lasting results.
            </p>

            {/* Location */}
            <p className="text-sm md:text-base text-white/50 mb-10 font-light opacity-0 animate-[heroFadeIn_0.8s_ease-out_1.6s_forwards]">
              Burlington • Serving Burlington, Waterdown, Oakville & Flamborough
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-[heroSlideUp_1s_cubic-bezier(0.16,1,0.3,1)_1.8s_forwards]">
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B08D57] hover:from-[#E5C04B] hover:to-[#C99A65] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              >
                Book Your Assessment
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
              >
                Explore Services
              </Link>
            </div>

            {/* Minimal badges - bottom of content */}
            <div className="flex gap-6 mt-10 opacity-0 animate-[heroFadeIn_0.8s_ease-out_2s_forwards]">
              <div className="flex items-center gap-2 text-white/60">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span className="text-sm font-light">Direct Billing</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-light">Evening Hours</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
