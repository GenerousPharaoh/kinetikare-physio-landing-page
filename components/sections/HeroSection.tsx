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
    <section className="relative bg-gradient-to-b from-primary-900 to-primary-800 text-white py-24 md:py-32 lg:py-40 border-b border-primary-800/50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient mesh */}
        <div className="gradient-mesh"></div>
        
        {/* Texture overlay */}
        <div className="absolute inset-0 opacity-20 texture-noise"></div>
        
        {/* Animated circles */}
        <div className="absolute top-20 right-[10%] w-[300px] h-[300px] rounded-full bg-accent/[0.03] blur-[80px] float-animation" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-primary-800/20 blur-[100px] float-animation" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-[40%] left-[15%] w-[200px] h-[200px] rounded-full bg-accent/[0.04] blur-[60px] float-animation" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Decorative lines */}
        <svg className="absolute top-0 right-0 h-full w-1/2 opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="100" y2="100" stroke="white" strokeWidth="0.5" />
          <line x1="20" y1="0" x2="100" y2="80" stroke="white" strokeWidth="0.3" />
          <line x1="40" y1="0" x2="100" y2="60" stroke="white" strokeWidth="0.2" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 lg:w-5/12 md:pr-8 lg:pr-12 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Physical Therapy Tailored to <span className="accent-gradient-text">Your Needs</span>
            </h1>
            <p className="text-base md:text-lg text-neutral-300 mb-8 max-w-xl leading-relaxed relative">
              Expert physiotherapy services to help you move better, 
              feel better, and live better.
              <motion.span 
                className="absolute -left-6 top-0 bottom-0 w-1 bg-accent/50"
                initial={{ height: 0 }}
                animate={{ height: '100%' }}
                transition={{ delay: 0.6, duration: 0.8 }}
              ></motion.span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://khphysiotherapy.janeapp.com/" 
                target="_blank"
                className="button-3d bg-accent hover:bg-accent-dark text-white font-medium px-5 py-3 rounded-lg transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-xl hover:shadow-accent/20 group"
                aria-label="Book an appointment online"
              >
                <motion.span 
                  className="absolute inset-0 bg-accent-dark rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.85 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
                <CalendarDaysIcon className="h-5 w-5 relative z-10" aria-hidden="true" />
                <span className="relative z-10">Book an Appointment</span>
              </Link>
              <Link 
                href="/services" 
                onClick={handleServicesClick}
                className="relative bg-transparent hover:bg-primary-700/50 text-white border border-primary-700/50 font-medium px-5 py-3 rounded-lg transition-all duration-300 text-center flex items-center justify-center gap-2 overflow-hidden group"
              >
                <motion.span 
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent 
                  translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 ease-in-out"
                ></motion.span>
                <span className="relative z-10">My Services</span>
                <ArrowRightIcon className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 lg:w-7/12 relative"
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform perspective-1000 rotate-y-[-3deg] hover:rotate-y-0 transition-transform duration-700">
              <Image
                src="/images/physiotherapist.jpg"
                alt="Physiotherapy treatment session showing a therapist working with a patient"
                width={700}
                height={500}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                className="w-full h-auto rounded-2xl"
                priority={true}
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-primary-900/20 to-transparent rounded-2xl"></div>
              
              {/* Decorative elements over the image */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute -right-4 -bottom-4 w-24 h-24 border-2 border-accent/40 rounded-xl"></div>
                <div className="absolute -left-3 -top-3 w-16 h-16 border border-white/30 rounded-lg"></div>
              </div>
            </div>
            
            {/* Floating badge */}
            <motion.div 
              className="absolute -right-4 -bottom-8 md:right-8 md:bottom-8 depth-card px-4 py-3 rounded-lg shadow-lg bg-white/90 backdrop-blur-md z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <p className="text-primary-800 font-medium text-sm">
                <span className="gradient-text font-bold">10+ years</span> of experience
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
