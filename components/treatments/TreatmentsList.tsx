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
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search treatments or conditions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
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
                  <div className="bg-gray-50 rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      {treatment.name}
                    </h3>
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {treatment.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {treatment.conditions.slice(0, 3).map((condition, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-white px-2 py-1 rounded-full text-gray-600"
                        >
                          {condition}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-16">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-primary mb-8">{category.name}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.treatments.map((treatmentId, index) => {
                    const treatment = treatments.find(t => t.id === treatmentId);
                    if (!treatment) return null;
                    
                    return (
                      <motion.div
                        key={treatment.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Link href={`/treatments/${treatment.id}`}>
                          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100">
                            <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                              {treatment.name}
                            </h3>
                            <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                              {treatment.shortDescription}
                            </p>
                            <div className="flex items-center text-accent font-semibold text-sm group-hover:gap-2 transition-all">
                              Explore Treatment
                              <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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