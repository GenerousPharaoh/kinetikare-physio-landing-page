"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { getFeaturedConditions } from '@/lib/conditions-data';

export default function FeaturedConditions() {
  const featuredConditions = getFeaturedConditions().slice(0, 6); // Show top 6

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center px-4 py-2 bg-[#B08D57]/10 rounded-full mb-4">
              <SparklesIcon className="h-5 w-5 text-[#B08D57] mr-2" />
              <span className="text-sm font-semibold text-[#B08D57] uppercase tracking-wider">
                Common Conditions
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4 leading-tight">
              Conditions We <span className="text-[#B08D57]">Specialize In</span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Expert treatment for the most common musculoskeletal conditions affecting Burlington residents
            </p>
          </motion.div>

          {/* Conditions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredConditions.map((condition, index) => (
              <motion.div
                key={condition.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/conditions/${condition.slug}`}
                  className="group block h-full"
                >
                  <div className="relative bg-white rounded-xl p-6 border border-slate-200 hover:border-[#B08D57]/30 transition-all duration-300 h-full">
                    {/* Priority Badge */}
                    {condition.priority && condition.priority <= 3 && (
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-xs font-bold">{condition.priority}</span>
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="flex flex-col h-full">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-[#B08D57] transition-colors">
                        {condition.name}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 flex-grow leading-relaxed">
                        {condition.description}
                      </p>
                      
                      {/* Action Link */}
                      <div className="flex items-center text-[#B08D57] font-semibold text-sm group-hover:gap-3 transition-all">
                        <span>Learn More</span>
                        <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Conditions Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/conditions"
              className="inline-flex items-center px-6 py-3 bg-[#B08D57] hover:bg-[#997A4B] text-white rounded-lg font-medium transition-all duration-300"
            >
              View All 146 Conditions
              <ArrowRightIcon className="ml-3 h-5 w-5" />
            </Link>
          </motion.div>

          {/* Trust Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-slate-600">
              <span className="font-semibold text-slate-900">600+ patients</span> successfully treated across all conditions • 
              <span className="font-semibold text-slate-900"> Direct billing</span> available for most insurance providers
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}