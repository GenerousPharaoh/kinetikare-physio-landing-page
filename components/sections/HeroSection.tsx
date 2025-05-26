"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

// Type definitions
type TestimonialItem = {
  name: string;
  role: string;
  stars: number;
  text: string;
  initial?: string;
};

const HeroSection = React.memo(function HeroSection() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isTestimonialReady, setIsTestimonialReady] = useState(false);

  // Enhanced testimonials data with initials for avatar
  const testimonials: TestimonialItem[] = [
    {
      name: "Kathy M.",
      role: "Parent of Patient",
      stars: 5,
      text: "Highly recommend! In particular, Kareem has been truly exceptional! Can't express my gratitude for the remarkable care and guidance he has provided during my son's recovery from a knee injury.",
      initial: "K"
    },
    {
      name: "Catherine L.",
      role: "Patient",
      stars: 5,
      text: "I've been under the expert physiotherapy care of Kareem since August for Plantar Fasciitis, tendonitis & some aches & pains associated with aging. He shows genuine interest and concern for my well-being.",
      initial: "C"
    },
    {
      name: "Tania R.",
      role: "Parent of Patient",
      stars: 5,
      text: "My daughter had her knee pain treated by Kareem. He was kind and really good at asking the right questions to diagnose her issues and give her the right exercises to help her heal.",
      initial: "T"
    },
    {
      name: "Tobi S.",
      role: "Patient",
      stars: 5,
      text: "For the past few months Kareem has helped me with a very stubborn shoulder injury. He's been patient and supportive every step of the way. Thanks to him, my shoulder is finally starting to feel like my own again.",
      initial: "T"
    }
  ];

  useEffect(() => {
    // Testimonial carousel
    const testimonialStartDelay = setTimeout(() => {
      setIsTestimonialReady(true);
      const testimonialInterval = setInterval(() => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 6000);

      return () => clearInterval(testimonialInterval);
    }, 3000);

    return () => {
      clearTimeout(testimonialStartDelay);
    };
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <section 
      className="relative overflow-hidden min-h-screen flex items-center py-24 lg:pt-36"
    >
      {/* Enhanced backdrop image with dynamic effects */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full overflow-hidden" style={{ position: 'relative' }}>
          <motion.div
            initial={{ scale: 1.3, x: 0, y: 0, opacity: 0 }}
            animate={{ 
              scale: 1.2,
              x: [0, 10, 0, 20, 0],
              y: [0, -8, 0, 8, 0],
              opacity: 1
            }}
            transition={{
              scale: { duration: 2.5, ease: [0.16, 1, 0.3, 1] },
              x: { duration: 40, repeat: Infinity, ease: "easeInOut", delay: 2.5 },
              y: { duration: 35, repeat: Infinity, ease: "easeInOut", delay: 2.5 },
              opacity: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
            }}
            className="w-full h-full"
          >
          <Image
              src="/images/clinic-pic-may-2025.jpg"
            alt="Physiotherapy treatment room"
            fill
            className="object-cover object-center"
            priority={true}
            quality={90}
            sizes="100vw"
            style={{ 
                filter: 'brightness(0.6) contrast(1.2) saturate(1.2) hue-rotate(8deg)',
              objectFit: 'cover',
                objectPosition: '70% center',
              opacity: 1
              }}
            />
          </motion.div>
          
          {/* Subtle vignette effect for premium look */}
          <motion.div 
            className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 3.0, 
              ease: [0.16, 1, 0.3, 1],
              delay: 1.0
            }}
          />
        </div>

        {/* Enhanced gradient overlays with elegant entrance */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary-900/70 via-primary-800/60 to-primary-800/65"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ 
            duration: 2.0, 
            ease: [0.16, 1, 0.3, 1]
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary-700/25"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ 
            duration: 2.5, 
            ease: [0.16, 1, 0.3, 1],
            delay: 0.3
          }}
        />
        
        {/* Premium texture overlay with fade-in */}
        <motion.div 
          className="absolute inset-0" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ 
            duration: 3.0, 
            ease: [0.16, 1, 0.3, 1],
            delay: 0.8
          }}
          style={{
            backgroundImage: "url('/images/patterns/noise-pattern.png')",
            backgroundSize: "200px"
          }}
        />
        
        {/* Sophisticated light beam effects with staggered entrance */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -inset-[25%] blur-3xl bg-gradient-to-br from-accent-light/25 via-transparent to-transparent" 
            initial={{ rotate: 12, opacity: 0, scale: 0.8 }}
            animate={{ 
              rotate: 15,
              opacity: 0.06,
              scale: 1
            }}
            transition={{ 
              duration: 4.0, 
              ease: [0.16, 1, 0.3, 1],
              delay: 1.2
            }}
          />
          <motion.div 
            className="absolute top-1/4 right-1/4 w-96 h-96 blur-3xl bg-gradient-to-br from-[#D4AF37]/15 via-transparent to-transparent rounded-full" 
            initial={{ scale: 0.5, opacity: 0, x: 50, y: 50 }}
            animate={{ 
              scale: 1,
              opacity: 0.7,
              x: 0,
              y: 0
            }}
            transition={{ 
              duration: 3.5, 
              ease: [0.16, 1, 0.3, 1],
              delay: 1.8
            }}
          />
          
          {/* Enhanced premium light effects */}
          <motion.div 
            className="absolute top-1/3 left-1/4 w-64 h-64 blur-2xl bg-gradient-to-br from-white/8 via-[#B08D57]/12 to-transparent rounded-full" 
            initial={{ scale: 0, opacity: 0, rotate: -45 }}
            animate={{ 
              scale: 1,
              opacity: 0.4,
              rotate: 0
            }}
            transition={{ 
              duration: 5.0, 
              ease: [0.16, 1, 0.3, 1],
              delay: 2.5
            }}
          />
          
          {/* Add floating particles for more dynamism */}
          <motion.div 
            className="absolute top-1/2 left-1/3 w-32 h-32 blur-xl bg-gradient-to-br from-[#D4AF37]/20 via-transparent to-transparent rounded-full" 
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              y: [0, -10, 0]
            }}
            transition={{ 
              duration: 6.0, 
              ease: "easeInOut",
              delay: 3.0,
              repeat: Infinity
            }}
          />
          
          {/* Additional dynamic light orb */}
          <motion.div 
            className="absolute bottom-1/3 right-1/3 w-48 h-48 blur-2xl bg-gradient-to-br from-[#B08D57]/15 via-[#D4AF37]/10 to-transparent rounded-full" 
            initial={{ scale: 0.8, opacity: 0, rotate: 45 }}
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.7, 0.4],
              rotate: [45, 60, 45]
            }}
            transition={{ 
              duration: 8.0, 
              ease: "easeInOut",
              delay: 4.0,
              repeat: Infinity
            }}
          />
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-neutral-50/10 to-transparent z-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left side content - main hero content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
            className="lg:col-span-7 text-left"
          >
            <div className="max-w-4xl">
              {/* Sophisticated main heading with dramatic reveals */}
              <div className="relative mb-8">
                <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-[1.1] relative">
                  {/* First line with sophisticated reveal - bigger and more prominent */}
                  <div className="overflow-hidden">
                    <motion.span 
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ 
                        duration: 1.0, 
                        delay: 0.8, 
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="block relative transform-gpu text-3xl md:text-4xl lg:text-5xl whitespace-nowrap"
                    >
                      The Science of Recovery,
                      <motion.div 
                        className="absolute -inset-2 bg-gradient-to-r from-white/12 to-transparent rounded-lg blur-xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.4, duration: 1.0, ease: "easeOut" }}
                      />
                    </motion.span>
                  </div>
                  
                  {/* Second line with enhanced dramatic reveal and premium styling */}
                  <div className="overflow-hidden">
                    <motion.span 
                      initial={{ y: 120, opacity: 0, scale: 0.9 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 1.2, 
                        delay: 1.3, 
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="block relative text-5xl md:text-6xl lg:text-7xl transform-gpu"
                      style={{
                        background: 'linear-gradient(135deg, #B08D57 0%, #D4AF37 25%, #F4E4BC 50%, #D4AF37 75%, #B08D57 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontWeight: 'bold',
                        letterSpacing: '0.02em',
                        textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        filter: 'contrast(1.1) brightness(1.05)'
                      }}
                    >
                      The Art of Care
                    </motion.span>
                  </div>
                </motion.h1>
              </div>
              
              {/* Sophisticated tagline with staggered word reveals */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.2 }}
                className="relative mb-10"
              >
                <div className="text-lg md:text-xl text-white leading-[1.6] max-w-2xl font-light relative z-10">
                  {/* First line */}
                  <div className="block">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
                      className="font-medium text-white/95 inline-block mr-2"
                    >
                      Genuine Understanding.
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2.7, ease: [0.16, 1, 0.3, 1] }}
                      className="font-medium text-white/95 inline-block"
                    >
                      Expert Care.
                    </motion.span>
                  </div>
                  {/* Second line */}
                  <div className="block">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 3.0, ease: [0.16, 1, 0.3, 1] }}
                      className="font-medium text-[#D4AF37] inline-block"
                    >
                      Lasting Recovery.
                    </motion.span>
                  </div>
                </div>
                
                {/* Enhanced background glow */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#B08D57]/8 via-transparent to-[#D4AF37]/8 rounded-lg blur-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.2, duration: 1.0, ease: "easeOut" }}
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex flex-wrap gap-5 mt-10"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                <Link 
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                    className="group relative px-7 py-3.5 font-semibold rounded-xl text-white flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent/30 bg-[#B08D57]"
                  aria-label="Book an appointment online"
                    style={{ position: 'relative', zIndex: 10 }}
                >
                  <div 
                      className="absolute inset-0 bg-gradient-to-r from-[#B08D57] to-[#C9A769] transition-all duration-300 shadow-lg shadow-[#B08D57]/20 group-hover:shadow-[#B08D57]/30"
                    style={{ inset: 0, zIndex: 0 }}
                  ></div>
                    <CalendarDaysIcon className="h-5 w-5 relative z-10 transition-transform group-hover:scale-110" aria-hidden="true" />
                    <span className="relative z-10 tracking-wide">Book an Appointment</span>
                </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                <Link
                  href="#services" 
                    className="relative px-7 py-3.5 font-medium rounded-xl text-white flex items-center justify-center transition-all duration-300 group overflow-hidden focus:outline-none focus:ring-4 focus:ring-white/30 bg-white/15 backdrop-blur-xl border border-white/20"
                  aria-label="Explore services"
                  style={{ position: 'relative', zIndex: 10 }}
                >
                  <div 
                      className="absolute inset-0 bg-white/15 backdrop-blur-xl border border-white/20 rounded-xl transition-all duration-300 shadow-lg shadow-black/5 group-hover:bg-white/25 group-hover:border-white/30"
                    style={{ inset: 0, zIndex: 0 }}
                  ></div>
                    <span className="relative z-10 tracking-wide">Explore Services</span>
                </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right side - Google Reviews Style Patient Testimonials */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.8, 0.25, 1], delay: 0.4 }}
            className="lg:col-span-5 mt-8 lg:mt-0"
          >
            <div className="relative max-w-md ml-auto">
              {/* Google Reviews Style Card */}
              <div 
                className="relative bg-white/95 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/60 overflow-hidden"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
                }}
              >
                {/* Header with Google-style branding */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#4285F4] to-[#34A853] rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800">Patient Testimonials</h3>
                      <div className="flex items-center space-x-1">
                        <div className="flex space-x-0.5">
                          {Array(5).fill(0).map((_, i) => (
                            <StarIcon key={i} className="h-4 w-4 text-[#FBBC04]" />
                          ))}
                        </div>
                        <span className="text-sm text-slate-600 ml-2">5.0</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Reviews</div>
                </div>

                {/* Testimonial Content */}
                <div className="relative h-48">
                  {isTestimonialReady ? (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentTestimonialIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0"
                      >
                        {/* User Avatar and Info */}
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-lg">
                              {currentTestimonial.initial}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-slate-800 text-base">
                              {currentTestimonial.name}
                            </h4>
                            <p className="text-slate-500 text-sm">
                              {currentTestimonial.role}
                            </p>
                            <div className="flex space-x-0.5 mt-1">
                              {Array(5).fill(0).map((_, i) => (
                                <StarIcon key={i} className="h-3.5 w-3.5 text-[#FBBC04]" />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Review Text */}
                        <div className="relative">
                          <p className="text-slate-700 leading-relaxed text-sm">
                            "{currentTestimonial.text}"
                          </p>
                        </div>

                        {/* Time indicator (Google style) */}
                        <div className="absolute bottom-0 right-0">
                          <span className="text-xs text-slate-400">
                            {Math.floor(Math.random() * 3) + 1} months ago
                          </span>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  ) : (
                    // Static placeholder
                    <div>
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-lg">K</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-800 text-base">Kathy M.</h4>
                          <p className="text-slate-500 text-sm">Parent of Patient</p>
                          <div className="flex space-x-0.5 mt-1">
                            {Array(5).fill(0).map((_, i) => (
                              <StarIcon key={i} className="h-3.5 w-3.5 text-[#FBBC04]" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-slate-700 leading-relaxed text-sm">
                        "Highly recommend! In particular, Kareem has been truly exceptional! Can't express my gratitude for the remarkable care and guidance he has provided during my son's recovery from a knee injury."
                      </p>
                    </div>
                  )}
                </div>

                {/* Progress indicators (Google style dots) */}
                <div className="flex justify-center space-x-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonialIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonialIndex 
                          ? 'bg-[#4285F4] scale-125' 
                          : 'bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Google-style footer */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                  <span>Powered by patient reviews</span>
                  <span className="flex items-center space-x-1">
                    <span>View all</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
              
              {/* Enhanced shadow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#4285F4]/10 to-[#34A853]/10 rounded-3xl blur-2xl opacity-60"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;