"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Photo */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative max-w-md mx-auto lg:mx-0">
                <div className="bg-white rounded-2xl shadow-xl p-4 relative z-10">
              <Image
                src="/images/kareem-profile.png"
                alt="Kareem Hassanein - Professional Physiotherapist"
                    width={400}
                    height={480}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#B08D57]/20 to-[#D4AF37]/20 rounded-2xl blur-xl"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-[#B08D57]/30 rounded-xl"></div>
              </div>
            </motion.div>
            
            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <div className="inline-block px-4 py-2 bg-[#B08D57]/10 text-[#B08D57] text-sm font-medium rounded-full mb-6">
                Meet Your Physiotherapist
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Kareem Hassanein
              </h2>
              
              <div className="text-lg text-gray-600 leading-relaxed mb-8 space-y-4">
                <p>
                  Behind every treatment plan is a physiotherapist who has stood in your shoes. My journey into physiotherapy was forged through personal experience—from competitive soccer to navigating my own significant injuries.
                </p>
                <p>
                  I don't subscribe to high-volume, prescriptive protocols; instead, I focus on individualized care with plans tailored to your unique needs, grounded in advanced manual therapy and evidence-based practice.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/about"
                  className="bg-[#B08D57] hover:bg-[#A17D47] text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Learn More About Kareem
                </Link>
                          <Link 
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                            target="_blank"
                            rel="noopener noreferrer"
                  className="bg-white text-gray-700 hover:text-[#B08D57] border-2 border-gray-200 hover:border-[#B08D57] font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Book Appointment
                          </Link>
                      </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
