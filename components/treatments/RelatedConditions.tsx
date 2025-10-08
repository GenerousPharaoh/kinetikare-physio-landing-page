'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getConditionBySlug } from '@/lib/conditions-data';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface RelatedConditionsProps {
  conditionIds: string[];
}

export default function RelatedConditions({ conditionIds }: RelatedConditionsProps) {
  const conditions = conditionIds.map(slug => getConditionBySlug(slug)).filter(Boolean);

  if (conditions.length === 0) return null;

  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Conditions Treated
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            This treatment approach is effective for these common conditions
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {conditions.map((condition, index) => (
            condition && (
              <motion.div
                key={condition.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/conditions/${condition.slug}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full group cursor-pointer">
                    <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                      {condition.name}
                    </h3>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                      {condition.shortDescription}
                    </p>
                    <div className="flex items-center text-accent font-semibold text-sm group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}