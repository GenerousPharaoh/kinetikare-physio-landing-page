'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/outline';

export default function TreatmentsHero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-br from-white via-slate-50/50 to-white overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B08D57]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #B08D57 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-6"
          >
            <SparklesIcon className="w-5 h-5 text-[#B08D57]" />
            <span className="text-sm font-medium text-gray-700">Evidence-Based Care</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-6 tracking-tight">
            Treatment <span className="font-semibold">Approaches</span>
          </h1>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#B08D57]/40"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#D4AF37]/40"></div>
          </div>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light mb-10">
            Tailored physiotherapy treatments designed for your unique needs and recovery goals
          </p>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}