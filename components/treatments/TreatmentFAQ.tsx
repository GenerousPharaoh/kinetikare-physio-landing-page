'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Treatment } from '@/lib/treatments-data';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

interface TreatmentFAQProps {
  treatment: Treatment;
}

export default function TreatmentFAQ({ treatment }: TreatmentFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Generate FAQPage schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: treatment.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-8 lg:py-12 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            Frequently Asked <span className="font-semibold">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Common questions about {treatment.name}
          </p>
        </motion.div>

        <div className="space-y-4">
          {treatment.faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gradient-to-br from-slate-50 to-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#B08D57]/30 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between group"
              >
                <h3 className="text-lg font-semibold text-slate-900 text-left group-hover:text-[#B08D57] transition-colors duration-300">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 ml-6">
                  <div className={`w-10 h-10 rounded-full bg-[#B08D57]/10 flex items-center justify-center group-hover:bg-[#B08D57]/20 transition-all duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    {openIndex === index ? (
                      <MinusIcon className="w-5 h-5 text-[#B08D57]" />
                    ) : (
                      <PlusIcon className="w-5 h-5 text-[#B08D57]" />
                    )}
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pt-2">
                      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4" />
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}