'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

export default function FAQHero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-slate-50 overflow-hidden">
      {/* Premium background elements - subdued and sophisticated */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main soft gradient blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#B08D57]/5 to-transparent rounded-[100%] blur-3xl opacity-60"></div>

        {/* Subtle accent blob */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#B08D57]/5 rounded-full blur-[100px] opacity-40"></div>

        {/* Texture overlay */}
        <div className="absolute inset-0 opacity-[0.4]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B08D57' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Premium Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#B08D57]/20 shadow-sm mb-8"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B08D57] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B08D57]"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-slate-600 uppercase">Information & Support</span>
            </motion.div>

            {/* Main heading with premium typography */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-8 tracking-tight leading-tight">
              Common <span className="text-[#B08D57]">Questions</span>
            </h1>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto mb-10">
              Clear answers to help you understand your journey to recovery.
              Find detailed information about physiotherapy, insurance coverage, and what to expect.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

