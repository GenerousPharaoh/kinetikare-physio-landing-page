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
    <section 
      id="home" 
      className="relative pt-40 pb-28 md:pt-44 md:pb-32 lg:pt-52 lg:pb-36 overflow-hidden"
    >
      {/* Background gradient with improved aesthetics */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-900 to-black z-0"></div>
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-pattern opacity-[0.03] z-0"></div>
      
      {/* Enhanced abstract decorative elements with animations */}
      <motion.div 
        className="absolute top-24 right-[5%] w-64 h-64 bg-accent/10 rounded-full blur-3xl z-0"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1] 
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        aria-hidden="true"
      ></motion.div>
      <motion.div 
        className="absolute bottom-12 left-[10%] w-96 h-96 bg-primary-500/10 rounded-full blur-3xl z-0"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
        aria-hidden="true"
      ></motion.div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content with enhanced animations */}
          <motion.div 
            className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Tag line with glassmorphism */}
            <motion.div variants={itemVariants}>
              <GlassCard 
                className="inline-block px-4 py-1.5 mb-6"
                backgroundOpacity="light"
                blurStrength="sm"
                hoverEffect={false}
                animate={false}
              >
                <span className="text-white/90 text-sm font-medium">Expert Physiotherapy in Burlington & Waterdown</span>
              </GlassCard>
            </motion.div>
            
            <motion.h1 
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              variants={itemVariants}
            >
              Personalized Care for Your <span className="text-accent relative">
                Physiotherapy
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent/40 rounded-full"></span>
              </span> Journey
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-neutral-100 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              Experience individualized treatment plans designed to address your unique needs and get you back to optimal health and performance.
            </motion.p>
            
            {/* Call to Action Buttons with enhanced styling */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-5"
              variants={itemVariants}
            >
              <Link 
                href="https://endorphinshealth.janeapp.com/#/staff_member/6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg btn-primary w-full sm:w-auto shadow-elevation-1 hover:shadow-elevation-2 relative overflow-hidden group" 
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                <CalendarDaysIcon className="w-5 h-5 mr-2" />
                Book Appointment
              </Link>
              
              {/* Services button with glassmorphism */}
              <GlassCard
                className="w-full sm:w-auto"
                backgroundOpacity="light"
                blurStrength="sm"
                animate={false}
              >
                <Link 
                  href="/#services" 
                  className="flex items-center justify-center px-8 py-4 text-lg font-medium text-white w-full group"
                >
                  Physiotherapy Services 
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </GlassCard>
            </motion.div>
            
            {/* Trust indicators with improved styling */}
            <motion.div 
              className="mt-10 pt-6 border-t border-white/10 hidden md:block"
              variants={itemVariants}
            >
              <p className="text-white/70 text-sm mb-3">Trusted by patients throughout Burlington & Waterdown</p>
              <div className="flex items-center justify-center lg:justify-start gap-6">
                <div className="flex -space-x-2" aria-hidden="true">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div 
                      key={i} 
                      className="w-8 h-8 rounded-full bg-neutral-200 border-2 border-primary-800 flex items-center justify-center text-xs font-medium text-primary-900"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (i * 0.1), duration: 0.4 }}
                    >
                      {/* This would normally be small patient avatars, but using initials for privacy */}
                      {String.fromCharCode(64 + i)}
                    </motion.div>
                  ))}
                </div>
                <motion.div 
                  className="flex items-center gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  {[1, 2, 3, 4, 5].map((star, i) => (
                    <motion.svg 
                      key={star} 
                      className="w-4 h-4 text-accent" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + (i * 0.1), duration: 0.3 }}
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                  <span className="text-white text-sm ml-1">100+ satisfied clients</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Hero Image with enhanced styling and animations */}
          <motion.div 
            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] max-w-xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {/* Image Container with enhanced styling */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Image 
                src={heroImage}
                alt="Kareem Hassanein providing personalized physiotherapy treatment"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover"
                priority
              />
              {/* Enhanced overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
            
            {/* Enhanced decorative elements */}
            <motion.div 
              className="absolute -bottom-3 -right-3 w-24 h-24 bg-accent/90 rounded-full blur-xl opacity-30"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
              aria-hidden="true"
            ></motion.div>
            <motion.div 
              className="absolute -top-3 -left-3 w-32 h-32 bg-primary-400/40 rounded-full blur-xl opacity-30"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", delay: 1 }}
              aria-hidden="true"
            ></motion.div>
            
            {/* Caption with glassmorphism */}
            <div className="absolute bottom-0 left-0 right-0">
              <GlassCard
                className="m-6 p-4"
                backgroundOpacity={0.2}
                blurStrength="md"
                borderStyle="none"
                animate={false}
              >
                <p className="text-white text-sm font-medium">
                  Personalized, hands-on physiotherapy care
                </p>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle bottom wave divider with animation */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <svg className="absolute bottom-0 w-full h-auto" viewBox="0 0 1440 44" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
            <path d="M1440 21C1177.73 21 907.401 44 720.5 44C533.599 44 262.73 21 0 21V0H1440V21Z" fill="white" fillOpacity="0.05" />
          </svg>
        </motion.div>
      </div>
      
      {/* Keep bg-pattern style definition */}
      <style jsx>{`
        .bg-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </section>
  );
}
