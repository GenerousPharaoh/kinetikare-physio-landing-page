"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

export default function AboutSection() {
  const { ref: sectionRef, animationProps } = useScrollAnimation({ yOffset: 30 });
  const { ref: contentRef, containerVariants, itemVariants, isInView } = useStaggeredAnimation({ delay: 0.1 });

  return (
    <motion.section 
      ref={sectionRef}
      {...animationProps}
      className="py-16 md:py-20 bg-gradient-to-b from-gray-50/50 via-white to-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-lg mx-auto lg:mx-0">
                <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/professional-photo-kareem-hassanein-registered-physiotherapist-burlington-waterdown-flamborough-oakville-carlisle.png"
                    alt="Kareem Hassanein, registered physiotherapist in Burlington, expert in manual therapy, sports rehabilitation, dry needling"
                    fill
                    className="object-cover object-top"
                    style={{ objectPosition: 'center 5%' }}
                  />
                </div>
              </div>
            </motion.div>
            
            {/* Right side - Content */}
            <motion.div 
              ref={contentRef}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-center lg:text-left"
            >
              <motion.div variants={itemVariants} className="inline-block px-4 py-2 bg-[#B08D57]/10 text-[#B08D57] text-sm font-medium rounded-full mb-6">
                Meet Kareem Hassanein
              </motion.div>
              
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-[-0.02em]">
                Kareem Hassanein
              </motion.h2>
              
              <motion.div variants={itemVariants} className="text-lg text-gray-600 leading-relaxed mb-8 space-y-4">
                <p>
                  Behind every treatment plan is a physiotherapist who has stood in your shoes. My journey into physiotherapy was shaped by personal experience, from competitive soccer to navigating my own significant injuries.
                </p>
                <p>
                  I don't subscribe to high-volume, prescriptive protocols; instead, I focus on individualized care with plans tailored to your unique needs, grounded in advanced manual therapy and evidence-based practice.
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] text-white hover:text-white rounded-lg font-normal shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Learn More About Kareem
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 rounded-lg font-normal shadow-lg border border-gray-200 hover:bg-gray-50 hover:shadow-xl transition-all duration-300"
                >
                  View Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
