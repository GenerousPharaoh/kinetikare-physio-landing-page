'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAllTreatments } from '@/lib/treatments-data';
import { ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function TreatmentsList() {
  const [searchTerm, setSearchTerm] = useState('');
  const treatments = getAllTreatments();
  
  const filteredTreatments = treatments.filter(treatment =>
    treatment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    treatment.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
    treatment.conditions.some(condition => 
      condition.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const categories = [
    {
      name: 'Treatment Modalities',
      treatments: ['dry-needling', 'exercise-therapy', 'joint-mobilization', 'soft-tissue-release']
    },
    {
      name: 'Manual Techniques',
      treatments: ['trigger-point-therapy', 'myofascial-release', 'cupping-therapy', 'iastm']
    },
    {
      name: 'Programs & Assessment',
      treatments: ['sports-rehabilitation', 'return-to-sport', 'post-surgical-rehabilitation', 'postural-assessment', 'pain-education']
    }
  ];

  return (
    <section className="pt-0 pb-8 lg:pb-12 bg-gradient-to-b from-white via-gray-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="relative group">
            <MagnifyingGlassIcon className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#B08D57] transition-colors" />
            <input
              type="text"
              placeholder="Search treatments or conditions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#B08D57] transition-all duration-300 text-gray-900 placeholder-gray-400 shadow-sm hover:shadow-md"
            />
          </div>
        </motion.div>

        {searchTerm ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTreatments.map((treatment, index) => (
              <motion.div
                key={treatment.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link href={`/treatments/${treatment.id}`}>
                  <div className="bg-white rounded-2xl p-7 h-full border-2 border-gray-100 hover:border-[#B08D57]/30 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#B08D57] transition-colors">
                      {treatment.name}
                    </h3>
                    <p className="text-gray-600 mb-5 line-clamp-2 leading-relaxed text-sm">
                      {treatment.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {treatment.conditions.slice(0, 3).map((condition, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-50 px-3 py-1.5 rounded-full text-gray-600 border border-gray-200"
                        >
                          {condition}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-[#B08D57] font-medium text-sm group-hover:gap-2 transition-all">
                      <span>Learn More</span>
                      <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-12">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                  <h2 className="text-2xl font-light text-slate-900 tracking-wide">{category.name}</h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.treatments.map((treatmentId, index) => {
                    const treatment = treatments.find(t => t.id === treatmentId);
                    if (!treatment) return null;

                    return (
                      <motion.div
                        key={treatment.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        viewport={{ once: true }}
                      >
                        <Link href={`/treatments/${treatment.id}`}>
                          <div className="relative bg-white rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-gray-100 overflow-hidden">
                            {/* Hover gradient effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#B08D57]/0 via-[#B08D57]/0 to-[#B08D57]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative">
                              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-[#B08D57] transition-colors duration-300">
                                {treatment.name}
                              </h3>
                              <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed">
                                {treatment.shortDescription}
                              </p>
                              <div className="flex items-center text-[#B08D57] font-medium text-sm group-hover:gap-2 transition-all duration-300">
                                <span>Explore Treatment</span>
                                <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}