"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#D4AF37]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#B08D57]/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -5% 0px" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative w-full max-w-lg mx-auto lg:mx-0">
                <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/kareem-profile.png"
                    alt="Kareem Hassanein, Physiotherapist"
                    fill
                    className="object-cover object-center"
                    style={{
                      filter: 'contrast(1.05) saturate(1.1) brightness(1.02)',
                    }}
                  />
                </div>
                
                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#D4AF37]/20 to-[#B08D57]/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-[#B08D57]/15 to-[#D4AF37]/15 rounded-full blur-2xl"></div>
              </div>
            </motion.div>
            
            {/* Right side - Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -5% 0px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
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
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Learn More About Me
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold shadow-lg border border-gray-200 hover:bg-gray-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
