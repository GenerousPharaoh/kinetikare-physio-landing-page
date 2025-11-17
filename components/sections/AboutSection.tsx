"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { UserCircleIcon } from '@heroicons/react/24/outline';

export default function AboutSection() {
  const { ref: sectionRef, animationProps } = useScrollAnimation({ yOffset: 30 });
  const { ref: contentRef, containerVariants, itemVariants, isInView } = useStaggeredAnimation({ delay: 0.1 });

  return (
    <motion.section
      ref={sectionRef}
      {...animationProps}
      className="section-luxury-spacing section-temperature-b texture-luxury"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-2 items-center">
            {/* Left side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-sm mx-auto lg:ml-0 lg:mr-auto">
                {/* Photo container with subtle enhancements */}
                <div className="relative">
                  <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-luxury-deep hover:shadow-luxury-float transition-all duration-700 bg-gradient-to-br from-gray-50 to-gray-100 image-luxury-frame group">
                    <Image
                      src="/images/professional-photo-kareem-hassanein-registered-physiotherapist-burlington-waterdown-flamborough-oakville-carlisle.png"
                      alt="Kareem Hassanein, registered physiotherapist in Burlington, expert in manual therapy, sports rehabilitation, dry needling"
                      fill
                      className="object-contain group-hover:scale-[1.02] transition-transform duration-700"
                      priority
                      quality={95}
                    />
                    {/* Subtle professional overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Subtle accent border */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-[#B08D57]/10 via-transparent to-[#B08D57]/5 rounded-3xl -z-10 opacity-60"></div>
                </div>
              </div>
            </motion.div>
            
            {/* Right side - Content */}
            <motion.div
              ref={contentRef}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-center lg:text-left lg:-ml-12"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-6">
                <UserCircleIcon className="w-5 h-5 text-[#B08D57]" />
                <span className="text-sm font-medium text-gray-700">Meet Kareem Hassanein</span>
              </motion.div>
              
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl text-primary-warm mb-6 heading-luxury-2">
                Kareem Hassanein
              </motion.h2>
              
              <motion.div variants={itemVariants} className="text-lg mb-8 space-y-4 text-luxury-subtle">
                <p>
                  Behind every treatment plan is a physiotherapist who has stood in your shoes. My journey into physiotherapy was shaped by personal experience, from competitive soccer to navigating my own significant injuries.
                </p>
                <p>
                  I don't subscribe to high-volume, prescriptive protocols; instead, I focus on individualized care with plans tailored to your unique needs, grounded in targeted manual therapy and evidence-based practice.
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] text-white hover:text-white rounded-lg button-luxury-primary shadow-luxury-soft hover:shadow-luxury-medium transition-all duration-500 premium-hover-lift"
                >
                  Learn More About Kareem
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 rounded-lg button-luxury-primary shadow-luxury-soft hover:shadow-luxury-medium border-luxury-subtle hover:bg-gray-50 transition-all duration-500 premium-hover-lift"
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
