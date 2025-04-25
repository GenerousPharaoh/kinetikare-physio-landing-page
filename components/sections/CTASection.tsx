"use client";

import React from 'react';
import Link from 'next/link';
import { FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa';

export function CTASection() {
  return (
    <section className="py-12 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Start Your Recovery Journey?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Book your appointment today and take the first step towards pain-free movement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://endorphinshealth.janeapp.com/#/staff_member/42"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              <FaCalendarAlt className="mr-2" /> Book Online
            </a>
            <Link 
              href="tel:+19056346000"
              className="bg-white text-primary-800 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              <FaPhoneAlt className="mr-2" /> Call 905-634-6000
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 