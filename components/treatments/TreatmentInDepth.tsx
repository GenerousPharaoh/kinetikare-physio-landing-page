'use client';

import React from 'react';
import { m as motion } from 'framer-motion';
import { Treatment } from '@/lib/treatments-data';

interface TreatmentInDepthProps {
  treatment: Treatment;
}

export default function TreatmentInDepth({ treatment }: TreatmentInDepthProps) {
  const inDepth = treatment.inDepth ?? [];
  const redFlags = treatment.redFlags ?? [];

  if (inDepth.length === 0 && redFlags.length === 0) {
    return null;
  }

  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {inDepth.length > 0 && (
        <>
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
          {inDepth.map((block, index) => (
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
        </>
        )}

        {redFlags.length > 0 && (
          <div
            id="warning-signs"
            className={`${inDepth.length > 0 ? 'mt-12' : ''} rounded-2xl border border-red-200 bg-red-50/60 p-6 sm:p-8`}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
              When to get medical help
            </h2>
            <p className="text-gray-700 mb-6">
              If you notice any of these, follow the action given rather than waiting for your next physiotherapy visit.
            </p>
            <ul className="space-y-4">
              {redFlags.map((flag, index) => (
                <li key={index} className="border-t border-red-100 pt-4 first:border-t-0 first:pt-0">
                  <p className="mb-0 font-semibold text-slate-900 leading-relaxed">{flag.sign}</p>
                  <p className="mb-0 text-gray-700 leading-relaxed mt-1">{flag.action}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
