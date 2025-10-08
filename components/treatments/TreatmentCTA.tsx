'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, CalendarIcon } from '@heroicons/react/24/outline';

interface TreatmentCTAProps {
  treatmentName: string;
}

export default function TreatmentCTA({ treatmentName }: TreatmentCTAProps) {
  return (
    <section className="py-8 lg:py-12" style={{ background: 'linear-gradient(to bottom right, rgb(15, 23, 42), rgb(30, 41, 59))' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Have Questions About {treatmentName}?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Book an assessment to discuss how this treatment approach can be integrated into your care plan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://endorphinshealth.janeapp.com/#/staff_member/42"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#B08D57] text-white font-semibold rounded-full hover:bg-[#9A7A4A] transition-all duration-300 shadow-xl"
            >
              <CalendarIcon className="w-5 h-5" />
              Book Online Now
            </motion.a>

            <motion.a
              href="tel:+19056346000"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl"
            >
              <PhoneIcon className="w-5 h-5" />
              (905) 634-6000
            </motion.a>
          </div>

          <p className="mt-8 text-gray-400">
            Direct billing available for most insurance providers
          </p>
        </motion.div>
      </div>
    </section>
  );
}