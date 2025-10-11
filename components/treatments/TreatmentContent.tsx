'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Treatment } from '@/lib/treatments-data';
import { getConditionBySlug } from '@/lib/conditions-data';
import { CheckCircleIcon, HeartIcon, UserGroupIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface TreatmentContentProps {
  treatment: Treatment;
}

export default function TreatmentContent({ treatment }: TreatmentContentProps) {
  // Fetch full condition objects from slugs
  const relatedConditions = treatment.relatedConditions
    .map(slug => getConditionBySlug(slug))
    .filter(Boolean);

  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6 tracking-tight">
                About This <span className="font-semibold">Treatment</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {treatment.description}
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B08D57]/5 rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-[#B08D57]/10 rounded-lg">
                    <HeartIcon className="w-6 h-6 text-[#B08D57]" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">What to Expect</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {treatment.expectations}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {treatment.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircleIcon className="w-6 h-6 text-[#B08D57] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#B08D57]/10 rounded-lg">
                  <UserGroupIcon className="w-6 h-6 text-[#B08D57]" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">Conditions Treated</h3>
              </div>
              <p className="text-gray-600 text-sm mb-6">
                This treatment approach is effective for these common conditions and many more
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedConditions.map((condition, index) => (
                  condition && (
                    <Link key={condition.id} href={`/conditions/${condition.slug}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="group bg-white rounded-xl p-5 border border-gray-100 hover:border-[#B08D57]/40 hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
                      >
                        <h4 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-[#B08D57] transition-colors duration-300">
                          {condition.name}
                        </h4>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {condition.shortDescription}
                        </p>
                        <div className="flex items-center text-[#B08D57] font-medium text-sm group-hover:gap-2 transition-all duration-300">
                          Learn More
                          <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </motion.div>
                    </Link>
                  )
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}