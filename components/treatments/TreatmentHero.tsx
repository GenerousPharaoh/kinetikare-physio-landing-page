'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Treatment } from '@/lib/treatments-data';
import { CheckCircleIcon, ArrowDownIcon, ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';

interface TreatmentHeroProps {
  treatment: Treatment;
}

export default function TreatmentHero({ treatment }: TreatmentHeroProps) {
  return (
    <section className="relative flex items-center bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#B08D57]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-4 lg:py-12 lg:pb-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-[#B08D57] transition-colors duration-200 flex items-center">
              <HomeIcon className="h-4 w-4" />
            </Link>
            <ChevronRightIcon className="h-3 w-3" />
            <Link href="/treatments" className="hover:text-[#B08D57] transition-colors duration-200">
              Treatments
            </Link>
            <ChevronRightIcon className="h-3 w-3" />
            <span className="text-gray-900 font-medium">{treatment.name}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#B08D57]" />
            <span className="text-sm font-medium text-gray-700">Evidence-Based Treatment</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-8 tracking-tight leading-tight">
            {treatment.name}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-light max-w-3xl">
            {treatment.shortDescription}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {treatment.benefits.slice(0, 3).map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-100"
              >
                <CheckCircleIcon className="w-5 h-5 text-[#B08D57] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 leading-relaxed">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://endorphinshealth.janeapp.com/#/staff_member/42"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#B08D57] text-white font-medium rounded-full hover:bg-[#9A7A4A] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Your Assessment
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-medium rounded-full hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md border-2 border-gray-200"
            >
              <span>Learn More</span>
              <ArrowDownIcon className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}