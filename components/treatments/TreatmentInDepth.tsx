'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Treatment } from '@/lib/treatments-data';

interface TreatmentInDepthProps {
  treatment: Treatment;
}

export default function TreatmentInDepth({ treatment }: TreatmentInDepthProps) {
  if (!treatment.inDepth || treatment.inDepth.length === 0) {
    return null;
  }

  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight">
            A Closer <span className="font-semibold">Look</span>
          </h2>
        </motion.div>

        <div className="space-y-10">
          {treatment.inDepth.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-[#B08D57]" aria-hidden="true" />
                {block.heading}
              </h3>
              <div className="space-y-4">
                {block.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-600 text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
