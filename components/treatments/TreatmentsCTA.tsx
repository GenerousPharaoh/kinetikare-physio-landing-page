'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

export default function TreatmentsCTA() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Sure Which Treatment Is Right for You?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Our expert physiotherapists will assess your condition and create a personalized treatment plan 
            combining the most effective approaches for your specific needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://endorphinshealth.janeapp.com/#/staff_member/42"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-all duration-300 shadow-xl"
            >
              <CalendarIcon className="w-5 h-5" />
              Book Your Assessment
            </motion.a>
            
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl"
            >
              <ChatBubbleBottomCenterTextIcon className="w-5 h-5" />
              Contact Us
            </motion.a>
          </div>
          
          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">12+</div>
              <div className="text-white/80">Treatment Methods</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">47+</div>
              <div className="text-white/80">Conditions Treated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-white/80">Evidence-Based Care</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}