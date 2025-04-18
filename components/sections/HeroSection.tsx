"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import VideoBackground from '../VideoBackground';
import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const heroImage = "/images/physiotherapist.jpg"; // Updated path to existing image

  // Framer Motion variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-12 md:py-20 lg:py-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 md:pr-8 lg:pr-12 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Physical Therapy Tailored to <span className="text-primary">Your Needs</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-6 max-w-xl">
              Expert physiotherapy services to help you move better, 
              feel better, and live better.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                href="https://khphysiotherapy.janeapp.com/" 
                target="_blank"
                className="bg-primary hover:bg-primary-dark text-white font-medium px-5 py-2.5 rounded-md transition-colors duration-300 text-center flex items-center justify-center gap-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label="Book an appointment online"
              >
                <CalendarDaysIcon className="h-5 w-5" aria-hidden="true" />
                <span>Book an Appointment</span>
              </Link>
              <Link 
                href="/services" 
                className="bg-white hover:bg-gray-100 text-primary border border-primary font-medium px-5 py-2.5 rounded-md transition-colors duration-300 text-center flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-60"
              >
                <span>Our Services</span>
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/hero-image.jpg"
                alt="Physiotherapy treatment session showing a therapist working with a patient"
                width={600}
                height={450}
                sizes="(max-width: 768px) 100vw, 600px"
                className="w-full h-auto rounded-xl"
                priority={true}
                quality={90}
              />
              <div className="absolute inset-0 bg-primary/10 rounded-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
