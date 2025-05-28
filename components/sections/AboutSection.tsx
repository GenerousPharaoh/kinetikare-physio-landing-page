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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Image side */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "0px 0px -5% 0px" }}
              className="relative group order-2 lg:order-1"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="/images/temp/about-kareem-section.jpg"
                    alt="Kareem Hassanein, Physiotherapist"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Professional overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* CAMPT Badge */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true, margin: "0px 0px -5% 0px" }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-gray-900 mb-1">CAMPT Level 2 Certified</p>
                          <p className="text-xs text-gray-600">Upper & Lower Quadrant</p>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">L2</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Decorative accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#D4AF37] to-[#B08D57] rounded-full blur-2xl opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-[#B08D57] to-[#D4AF37] rounded-full blur-3xl opacity-15"></div>
            </motion.div>

            {/* Content side */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              viewport={{ once: true, margin: "0px 0px -5% 0px" }}
              className="order-1 lg:order-2"
            >
              <div className="space-y-6">
                <div>
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                    viewport={{ once: true, margin: "0px 0px -5% 0px" }}
                    className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2"
                  >
                    Dedicated to Your Recovery
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    viewport={{ once: true, margin: "0px 0px -5% 0px" }}
                    className="text-xl text-gray-600"
                  >
                    Trusted by 600+ patients for exceptional care and lasting results
                  </motion.p>
                </div>
                
                {/* Professional Stats - NEW */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                  viewport={{ once: true, margin: "0px 0px -5% 0px" }}
                  className="grid grid-cols-3 gap-4 py-6"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#B08D57] mb-1">600+</div>
                    <div className="text-sm text-gray-600">Patients Served</div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="text-3xl font-bold text-[#B08D57] mb-1">90%</div>
                    <div className="text-sm text-gray-600">Return Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#B08D57] mb-1">First</div>
                    <div className="text-sm text-gray-600">Saturday Services</div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true, margin: "0px 0px -5% 0px" }}
                  className="space-y-4 text-gray-700"
                >
                  <p className="text-lg leading-relaxed">
                    I believe in treating the whole person, not just symptoms. With extensive advanced training in manual therapy and evidence-based techniques, I take the time to truly understand your concerns and develop personalized treatment plans that address the root cause of your issues.
                  </p>
                  <p className="text-lg leading-relaxed">
                    My approach focuses on empowering you with the knowledge and tools needed for lasting recovery. Whether you're an athlete returning to sport, recovering from surgery, or seeking relief from chronic pain, I'm committed to helping you achieve your goals and maintain long-term wellness.
                  </p>
                  <p className="text-lg leading-relaxed font-medium text-gray-800">
                    Known for pioneering extended hours including Burlington's first Saturday physiotherapy services, I'm dedicated to making exceptional care accessible when you need it most.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                  viewport={{ once: true, margin: "0px 0px -5% 0px" }}
                  className="flex flex-wrap gap-4 pt-6"
                >
                  <Link 
                    href="/about"
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#B08D57] to-[#D4AF37] text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Learn More About My Approach
                  </Link>
                  <Link 
                    href="/services"
                    className="inline-flex items-center px-6 py-3 rounded-xl border-2 border-[#B08D57] text-[#B08D57] font-semibold hover:bg-[#B08D57] hover:text-white transition-all duration-200"
                  >
                    View Services
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
