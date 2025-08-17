"use client";

// <!-- UI REDESIGN 2024 - FEATURED CONDITIONS OVERHAUL -->

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
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-[#B08D57]/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - PREMIUM DESIGN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#B08D57]/20 to-[#D4AF37]/20 rounded-full mb-6 shadow-lg">
              <SparklesIcon className="h-6 w-6 text-[#B08D57] mr-3" />
              <span className="text-base font-black text-[#B08D57] uppercase tracking-wide">
                Common Conditions
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1]">
              Conditions We <span className="bg-gradient-to-r from-[#B08D57] to-[#D4AF37] bg-clip-text text-transparent">Specialize In</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-light">
              Expert treatment for the most common musculoskeletal conditions affecting Burlington residents
            </p>
          </motion.div>

          {/* Conditions Grid - COMPLETELY REDESIGNED */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredConditions.map((condition, index) => (
              <motion.div
                key={condition.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/conditions/${condition.slug}`}
                  className="group block h-full"
                >
                  <div className="relative bg-white rounded-3xl p-8 border-2 border-slate-100 hover:border-[#B08D57] transition-all duration-500 h-full shadow-xl hover:shadow-2xl hover:-translate-y-2 transform">
                    {/* Priority Badge - Redesigned */}
                    {condition.priority && condition.priority <= 3 && (
                      <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-2xl flex items-center justify-center shadow-xl transform rotate-12">
                        <span className="text-white text-base font-black transform -rotate-12">{condition.priority}</span>
                      </div>
                    )}
                    
                    {/* Content - Premium Typography */}
                    <div className="flex flex-col h-full">
                      <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-[#B08D57] transition-colors leading-tight">
                        {condition.name}
                      </h3>
                      <p className="text-slate-700 text-base mb-6 flex-grow leading-relaxed">
                        {condition.description}
                      </p>
                      
                      {/* Action Link - Modern Design */}
                      <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                        <span className="text-[#B08D57] font-bold text-base">Learn More</span>
                        <div className="w-10 h-10 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                          <ArrowRightIcon className="h-5 w-5 text-white group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Conditions Button - PREMIUM DESIGN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/conditions"
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#B08D57] text-white rounded-full font-bold text-lg transition-all duration-500 shadow-2xl shadow-[#B08D57]/30 hover:shadow-[#B08D57]/50 hover:-translate-y-1 transform"
            >
              View All 146 Conditions
              <ArrowRightIcon className="ml-4 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Trust Statement - MODERN DESIGN */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center justify-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full"></div>
                <span className="text-slate-700">
                  <span className="font-black text-2xl text-slate-900">600+</span> patients treated
                </span>
              </div>
              <div className="w-px h-8 bg-slate-300"></div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full"></div>
                <span className="text-slate-700">
                  <span className="font-black text-slate-900">Direct billing</span> available
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}