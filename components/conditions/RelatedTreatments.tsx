'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getTreatmentsByCondition } from '@/lib/treatments-data';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface RelatedTreatmentsProps {
  conditionSlug: string;
}

export default function RelatedTreatments({ conditionSlug }: RelatedTreatmentsProps) {
  const treatments = getTreatmentsByCondition(conditionSlug);

  if (treatments.length === 0) return null;

  return (
    <section className="py-8 lg:py-12 bg-gradient-to-b from-white via-gray-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4 tracking-tight">
            Recommended <span className="font-semibold">Treatments</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Evidence-based treatment approaches for this condition
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/treatments/${treatment.id}`}>
                <div className="bg-white rounded-2xl p-7 h-full border-2 border-gray-100 hover:border-[#B08D57]/30 hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#B08D57] transition-colors">
                    {treatment.name}
                  </h3>
                  <p className="text-gray-600 mb-5 line-clamp-3 leading-relaxed text-sm flex-grow">
                    {treatment.shortDescription}
                  </p>
                  <div className="flex items-center text-[#B08D57] font-medium text-sm group-hover:gap-2 transition-all">
                    <span>Learn More</span>
                    <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
