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
    <section id="process" className="py-8 lg:py-12 bg-gradient-to-b from-slate-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            Your Treatment <span className="font-semibold">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            A structured approach to ensure the best possible outcomes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {treatment.process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#B08D57]/30 hover:shadow-2xl transition-all duration-500 h-full">
                {/* Number badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#B08D57] to-[#9A7A4A] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">
                    {index + 1}
                  </span>
                </div>

                {/* Arrow connector - desktop only */}
                {index < treatment.process.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <ArrowRightIcon className="w-6 h-6 text-[#B08D57]/30" />
                  </div>
                )}

                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-[#B08D57] transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow connector - mobile/tablet */}
              {index < treatment.process.length - 1 && (
                <div className="lg:hidden flex justify-center my-4">
                  <ArrowRightIcon className="w-6 h-6 text-[#B08D57]/30 rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}