"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Handle scroll to services
  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const headerOffset = document.querySelector('header')?.offsetHeight || 80;
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

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
    <section className="relative bg-primary-900 text-white py-20 md:py-28 lg:py-32 border-b border-primary-800">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[100px]" aria-hidden="true"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-primary-800/30 blur-[80px]" aria-hidden="true"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 lg:w-5/12 md:pr-8 lg:pr-12 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Physical Therapy Tailored to <span className="text-accent">Your Needs</span>
            </h1>
            <p className="text-base md:text-lg text-neutral-300 mb-8 max-w-xl leading-relaxed">
              Expert physiotherapy services to help you move better, 
              feel better, and live better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://khphysiotherapy.janeapp.com/" 
                target="_blank"
                className="bg-accent hover:bg-accent-dark text-white font-medium px-5 py-3 rounded-lg transition-colors duration-300 text-center flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:shadow-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
                aria-label="Book an appointment online"
              >
                <CalendarDaysIcon className="h-5 w-5" aria-hidden="true" />
                <span>Book an Appointment</span>
              </Link>
              <Link 
                href="/services" 
                onClick={handleServicesClick}
                className="bg-primary-800 hover:bg-primary-700 text-white border border-primary-700/50 font-medium px-5 py-3 rounded-lg transition-colors duration-300 text-center flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
              >
                <span>Our Services</span>
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 lg:w-7/12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/physiotherapist.jpg"
                alt="Physiotherapy treatment session showing a therapist working with a patient"
                width={700}
                height={500}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                className="w-full h-auto rounded-xl"
                priority={true}
                quality={90}
              />
              <div className="absolute inset-0 bg-primary-900/20 rounded-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
