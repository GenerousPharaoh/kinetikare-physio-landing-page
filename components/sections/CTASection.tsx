"use client";

import React from 'react';
import Link from 'next/link';
import { FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa';

export function CTASection() {
  return (
    <section className="py-12 bg-[#F5F5F5] text-primary-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Take the Next Step in Your Recovery Journey
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ready for physiotherapy that truly understands and partners with you? Begin your recovery journey with a plan that combines evidence-based care, genuine understanding, and a commitment to your unique goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://endorphinshealth.janeapp.com/#/staff_member/42"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#B08D57] hover:bg-[#A17D47] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              <FaCalendarAlt className="mr-2" /> Start Your Journey Today
            </a>
            <Link 
              href="tel:+19056346000"
              className="bg-white text-primary-800 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center border border-primary-800/10"
            >
              <FaPhoneAlt className="mr-2" /> Call 905-634-6000
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 