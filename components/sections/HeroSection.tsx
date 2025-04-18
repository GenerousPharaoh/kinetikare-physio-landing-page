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
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 md:pr-12 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Physical Therapy Tailored to <span className="text-primary">Your Needs</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Expert physiotherapy services to help you move better, 
              feel better, and live better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://khphysiotherapy.janeapp.com/" 
                target="_blank"
                className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-md transition-colors duration-300 text-center"
              >
                Book an Appointment
              </Link>
              <Link 
                href="/services" 
                className="bg-white hover:bg-gray-100 text-primary border border-primary font-medium px-6 py-3 rounded-md transition-colors duration-300 text-center"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero-image.jpg"
                alt="Physiotherapy treatment"
                width={700}
                height={500}
                sizes="(max-width: 768px) 100vw, 700px"
                className="w-full h-auto rounded-2xl"
                priority={true}
                quality={90}
              />
              <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
