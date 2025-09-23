"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <>
      {/* Mobile */}
      <section className="lg:hidden min-h-screen bg-white flex flex-col">
        {/* Image section */}
        <div className="relative h-[60vh] w-full">
          <Image
            src="/images/clinic-pic-may-2025.jpg"
            alt="KinetiKare Physiotherapy"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Content section */}
        <div className="flex-1 flex flex-col justify-center px-6 py-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            The Science of Recovery.
          </h1>
          <h2 className="text-4xl font-bold text-[#B08D57] mb-6">
            The Art of Care.
          </h2>
          
          <p className="text-lg text-gray-700 mb-1">Kareem Hassanein</p>
          <p className="text-sm text-gray-600 mb-8">Registered Physiotherapist</p>

          <div className="space-y-3">
            <Link
              href="https://endorphinshealth.janeapp.com/#/staff_member/42"
              target="_blank"
              className="block w-full text-center px-6 py-3 bg-slate-900 text-white font-medium rounded"
            >
              Book Your Assessment
            </Link>
            
            <Link
              href="/services"
              className="block w-full text-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden lg:block relative h-[85vh] bg-white">
        <div className="flex h-full">
          {/* Left content */}
          <div className="w-1/2 flex items-center justify-center px-16">
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-6">
                Registered Physiotherapist
              </p>
              
              <h1 className="text-6xl font-bold text-slate-900 mb-2">
                The Science
              </h1>
              <h2 className="text-6xl font-bold text-[#B08D57] mb-2">
                of Recovery.
              </h2>
              <h1 className="text-6xl font-bold text-slate-900 mb-2">
                The Art
              </h1>
              <h2 className="text-6xl font-bold text-[#B08D57] mb-8">
                of Care.
              </h2>

              <p className="text-2xl font-light text-gray-900 mb-1">Kareem Hassanein</p>
              <p className="text-gray-600 mb-10">
                Evidence-based physiotherapy combining proven techniques with personalized attention.
              </p>

              <div className="flex gap-4">
                <Link
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  className="px-6 py-3 bg-slate-900 text-white font-medium rounded hover:bg-slate-800"
                >
                  Book Your Assessment
                </Link>

                <Link
                  href="/services"
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded hover:border-[#B08D57]"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="w-1/2 relative">
            <Image
              src="/images/clinic-pic-may-2025.jpg"
              alt="KinetiKare Physiotherapy"
              fill
              priority
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}