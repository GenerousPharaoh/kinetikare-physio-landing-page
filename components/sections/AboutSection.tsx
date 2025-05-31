"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto lg:mx-0">
                <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/kareem-profile.png"
                    alt="Kareem Hassanein, registered physiotherapist in Burlington, expert in manual therapy, sports rehabilitation, dry needling"
                    fill
                    className="object-contain object-center"
                  />
                </div>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="text-center lg:text-left">
              <div className="inline-block px-4 py-2 bg-[#B08D57]/10 text-[#B08D57] text-sm font-medium rounded-full mb-6">
                Meet Your Physiotherapist
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Kareem Hassanein
              </h2>
              
              <div className="text-lg text-gray-600 leading-relaxed mb-8 space-y-4">
                <p>
                  Behind every treatment plan is a physiotherapist who has stood in your shoes. My journey into physiotherapy was forged through personal experience—from competitive soccer to navigating my own significant injuries.
                </p>
                <p>
                  I don't subscribe to high-volume, prescriptive protocols; instead, I focus on individualized care with plans tailored to your unique needs, grounded in advanced manual therapy and evidence-based practice.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Learn More About Me
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold shadow-lg border border-gray-200 hover:bg-gray-50 hover:shadow-xl transition-all duration-300"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
