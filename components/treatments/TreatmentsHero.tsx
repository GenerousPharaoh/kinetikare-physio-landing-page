'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/outline';

export default function TreatmentsHero() {
  return (
    <section className="relative flex items-center bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#B08D57]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 w-full">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-8"
          >
            <SparklesIcon className="w-5 h-5 text-[#B08D57]" />
            <span className="text-sm font-medium text-gray-700">Evidence-Based Care</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-6 tracking-tight">
            Treatment <span className="font-semibold">Approaches</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light mb-0">
            Tailored physiotherapy treatments designed for your unique needs and recovery goals
          </p>
        </motion.div>
      </div>
    </section>
  );
}