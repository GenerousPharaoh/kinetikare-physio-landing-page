'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Treatment } from '@/lib/treatments-data';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface TreatmentProcessProps {
  treatment: Treatment;
}

export default function TreatmentProcess({ treatment }: TreatmentProcessProps) {
  return (
    <section id="process" className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Your Treatment Journey
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A structured approach to ensure the best possible outcomes
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatment.process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-bold text-accent/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {index < treatment.process.length - 1 && (
                    <ArrowRightIcon className="w-5 h-5 text-accent hidden lg:block" />
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < treatment.process.length - 1 && (
                <div className="hidden md:block lg:hidden absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                  <ArrowRightIcon className="w-5 h-5 text-accent rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}