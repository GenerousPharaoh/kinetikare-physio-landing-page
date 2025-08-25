'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/outline';

export default function TreatmentsHero() {
  return (
    <section className="relative min-h-[50vh] bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-3 bg-accent/10 rounded-full"
            >
              <SparklesIcon className="w-8 h-8 text-accent" />
            </motion.div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Our Treatments
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Evidence-based physiotherapy treatments tailored to your unique needs. 
            Discover how our expert care can help you achieve lasting recovery.
          </p>
        </motion.div>
      </div>
    </section>
  );
}