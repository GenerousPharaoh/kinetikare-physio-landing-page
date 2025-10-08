'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Treatment } from '@/lib/treatments-data';
import { CheckCircleIcon, HeartIcon, UserGroupIcon } from '@heroicons/react/24/outline';

interface TreatmentContentProps {
  treatment: Treatment;
}

export default function TreatmentContent({ treatment }: TreatmentContentProps) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-6">About This Treatment</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {treatment.description}
            </p>
            
            <div className="bg-primary/5 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <HeartIcon className="w-6 h-6 text-accent" />
                What to Expect
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {treatment.expectations}
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {treatment.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircleIcon className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                <UserGroupIcon className="w-7 h-7 text-accent" />
                Conditions Treated
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {treatment.conditions.map((condition, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 px-4 py-2 rounded-lg text-gray-700 text-sm"
                  >
                    {condition}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}