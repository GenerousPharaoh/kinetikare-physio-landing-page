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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Enhanced testimonials data with initials for avatar
  const testimonials: TestimonialItem[] = [
    {
      name: "Kathy",
      role: "Parent of Patient",
      stars: 5,
      text: "Highly recommend! In particular, Kareem has been truly exceptional! Can't express my gratitude for the remarkable care and guidance he has provided during my son's recovery from a knee injury.",
      initial: "K"
    },
    {
      name: "Catherine",
      role: "Patient",
      stars: 5,
      text: "I've been under the expert physiotherapy care of Kareem since August for Plantar Fasciitis, tendonitis & some aches & pains associated with aging. He shows genuine interest and concern for my well-being.",
      initial: "C"
    },
    {
      name: "Tania",
      role: "Parent of Patient",
      stars: 5,
      text: "My daughter had her knee pain treated by Kareem. He was kind and really good at asking the right questions to diagnose her issues and give her the right exercises to help her heal.",
      initial: "T"
    },
    {
      name: "Tobi",
      role: "Patient",
      stars: 5,
      text: "For the past few months Kareem has helped me with a very stubborn shoulder injury. He's been patient and supportive every step of the way. Thanks to him, my shoulder is finally starting to feel like my own again.",
      initial: "T"
    },
    {
      name: "Thanula",
      role: "Patient",
      stars: 5,
      text: "Highly recommend. Everybody go ask for Kareem. He is the best physiotherapist ever. He's kind, funny and encouraging. I've been seeing him for a few weeks now for my ankle injury, and it has been such a positive experience. He communicates clearly and patiently explains each step of the treatment process. I've noticed improvement in my condition since starting treatment. I feel genuinely cared for by Kareem and his empathy makes a difference in my recovery journey.",
      initial: "T"
    }
  ];

  const goToTestimonial = (index: number) => {
    setIsAutoPlaying(false); // Stop auto-play when user manually navigates
    setCurrentTestimonialIndex(index);
  };

  useEffect(() => {
    // Testimonial carousel with adjusted timing
    if (!isAutoPlaying) return;
    
    const testimonialStartDelay = setTimeout(() => {
      setIsTestimonialReady(true);
      const testimonialInterval = setInterval(() => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 6000); // Changed to 6 seconds for better reading time

      return () => clearInterval(testimonialInterval);
    }, 3000); // Hold reviews for 3 seconds

    return () => {
      clearTimeout(testimonialStartDelay);
    };
  }, [testimonials.length, isAutoPlaying]);

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <section 
      className="relative overflow-hidden min-h-screen flex items-center py-24 lg:pt-36"
    >
      {/* Enhanced backdrop image with dynamic effects */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full overflow-hidden relative">
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
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[80vh]">
          {/* Left side content - main hero content */}
          <motion.div 
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
            className="lg:col-span-7 text-left space-y-8 lg:space-y-10"
          >
            <div className="max-w-4xl space-y-6 lg:space-y-8">
              {/* More Impactful main heading with enhanced styling */}
              <div className="relative mb-8">
                <motion.h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.05] relative">
                  {/* First line with enhanced impact */}
                  <div className="overflow-hidden">
                    <motion.span 
                      initial={{ y: 120, opacity: 0, scale: 0.8 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 1.2, 
                        delay: 0.8, 
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="block relative transform-gpu text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black"
                      style={{
                        textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 8px 40px rgba(176, 141, 87, 0.3)',
                        filter: 'contrast(1.1) brightness(1.1)'
                      }}
                    >
                      The Science of Recovery,
                    </motion.span>
                  </div>
                  
                  {/* Second line with maximum impact - clean and simple */}
                  <div className="overflow-hidden">
                    <motion.span 
                      initial={{ y: 140, opacity: 0, scale: 0.7, rotateX: 20 }}
                      animate={{ y: 0, opacity: 1, scale: 1, rotateX: 0 }}
                      transition={{ 
                        duration: 1.4, 
                        delay: 1.4, 
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="block relative text-4xl md:text-5xl lg:text-6xl xl:text-7xl transform-gpu font-black"
                      style={{
                        background: 'linear-gradient(135deg, #B08D57 0%, #D4AF37 15%, #F4E4BC 35%, #D4AF37 55%, #B08D57 75%, #A17D47 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontWeight: '900',
                        letterSpacing: '0.01em'
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
                initial={{ y: 30 }}
                animate={{ y: 0 }}
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
                  className="relative px-7 py-3.5 font-medium rounded-xl text-white flex items-center justify-center transition-all duration-300 group overflow-hidden focus:outline-none focus:ring-4 focus:ring-white/30"
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
          
          {/* Right side - Premium Patient Testimonials */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.8, 0.25, 1], delay: 2.0 }}
            className="lg:col-span-5 mt-8 lg:mt-0"
          >
            <div className="relative max-w-xl ml-auto">
              {/* Modern Testimonials Card */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.0, ease: [0.25, 0.8, 0.25, 1], delay: 2.2 }}
                className="relative bg-white/95 backdrop-blur-3xl rounded-[2rem] p-6 shadow-[0_20px_70px_-10px_rgba(0,0,0,0.3)] border border-white/40 overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.9) 100%)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
                  backgroundSize: '20px 20px'
                }}></div>
                
                {/* Elegant top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B08D57] to-transparent"></div>
                
                {/* Floating elements for depth */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#B08D57]/5 to-[#D4AF37]/5 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tr from-[#D4AF37]/5 to-[#B08D57]/5 rounded-full blur-lg"></div>

                {/* Header */}
                <div className="text-center mb-6 relative z-10">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2 tracking-tight">
                    Patient Testimonials
              </h3>
                  <div className="w-12 h-px bg-gradient-to-r from-[#B08D57] to-[#D4AF37] mx-auto"></div>
                </div>

                {/* Testimonial Content */}
                <div className="relative h-[320px] relative z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTestimonialIndex}
                      initial={{ 
                        opacity: 0, 
                        y: 30, 
                        scale: 0.98
                      }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1
                      }}
                      exit={{ 
                        opacity: 0, 
                        y: -30, 
                        scale: 0.98
                      }}
                      transition={{ 
                        duration: 0.8, 
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="absolute inset-0 flex flex-col"
                    >
                      {/* User Info */}
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex items-center space-x-3 mb-4"
                      >
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 200 }}
                          className="relative"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden">
                            {/* Subtle inner glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                            <span className="text-white font-bold text-base relative z-10">
                              {currentTestimonial.initial}
                            </span>
                  </div>
                          {/* Subtle outer ring */}
                          <div className="absolute inset-0 rounded-xl ring-1 ring-white/20"></div>
                        </motion.div>
                        
                        <div className="flex-1">
                          <motion.h4 
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="font-semibold text-slate-800 text-base"
                          >
                            {currentTestimonial.name}
                          </motion.h4>
                          <motion.p 
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="text-slate-500 text-sm font-medium"
                          >
                            {currentTestimonial.role}
                          </motion.p>
                  </div>
                      </motion.div>

                      {/* Stars */}
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="flex space-x-1 mb-4"
                      >
                        {Array(5).fill(0).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ 
                              delay: 0.7 + (i * 0.1), 
                              duration: 0.4,
                              type: "spring",
                              stiffness: 200
                            }}
                          >
                            <StarIcon className="h-4 w-4 text-[#D4AF37]" />
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Quote */}
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="flex-1 relative"
                      >
                        {/* Large opening quote */}
                        <div className="absolute -top-1 -left-1 text-3xl text-[#B08D57]/20 font-serif leading-none">"</div>
                        
                        <div className="relative pl-5">
                          <div 
                            className="text-slate-700 leading-relaxed text-sm font-normal pr-4 overflow-y-auto max-h-full"
                            style={{
                              scrollBehavior: 'smooth',
                              scrollbarWidth: 'none',
                              msOverflowStyle: 'none'
                            }}
                            ref={(el) => {
                              if (el && currentTestimonial.name === "Thanula") {
                                // Auto-scroll for lengthy reviews
                                const scrollHeight = el.scrollHeight;
                                const clientHeight = el.clientHeight;
                                if (scrollHeight > clientHeight) {
                                  let scrollPosition = 0;
                                  const scrollStep = (scrollHeight - clientHeight) / 8; // 8 steps over 6 seconds
                                  const scrollInterval = setInterval(() => {
                                    scrollPosition += scrollStep;
                                    if (scrollPosition >= scrollHeight - clientHeight) {
                                      clearInterval(scrollInterval);
                                    } else {
                                      el.scrollTop = scrollPosition;
                                    }
                                  }, 750); // Every 0.75 seconds
                                  
                                  // Clean up on component unmount or testimonial change
                                  return () => clearInterval(scrollInterval);
                                }
                              }
                            }}
                          >
                            <style jsx>{`
                              div::-webkit-scrollbar {
                                display: none;
                              }
                            `}</style>
                            
                            {/* Beautiful, elegantly emphasized testimonial content */}
                            {currentTestimonial.name === "Kathy" && (
                              <p className="text-base leading-7">
                                <span className="text-[#B08D57] font-medium">Highly recommend!</span> Kareem has been{" "}
                                <span className="relative font-medium text-slate-800">
                                  truly exceptional
                                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#B08D57]/30 to-[#D4AF37]/30 rounded-full"></span>
                                </span>! Can't express my gratitude for the{" "}
                                <span className="font-medium text-slate-800">remarkable care and guidance</span> he has provided during my son's recovery from a knee injury.
                              </p>
                            )}
                            
                            {currentTestimonial.name === "Catherine" && (
                              <p className="text-base leading-7">
                                I've been under the{" "}
                                <span className="font-medium text-slate-800 bg-gradient-to-r from-[#B08D57]/5 to-[#D4AF37]/5 px-1 rounded">expert physiotherapy care</span>{" "}
                                of Kareem since August for Plantar Fasciitis, tendonitis & some aches & pains associated with aging. He shows{" "}
                                <span className="relative font-medium text-slate-800">
                                  genuine interest and concern
                                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#B08D57]/30 to-[#D4AF37]/30 rounded-full"></span>
                                </span>{" "}
                                for my well-being.
                              </p>
                            )}
                            
                            {currentTestimonial.name === "Tania" && (
                              <p className="text-base leading-7">
                                My daughter had her knee pain treated by Kareem. He was{" "}
                                <span className="font-medium text-[#B08D57]">kind</span> and{" "}
                                <span className="relative font-medium text-slate-800">
                                  really good at asking the right questions
                                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#B08D57]/30 to-[#D4AF37]/30 rounded-full"></span>
                                </span>{" "}
                                to diagnose her issues and give her the{" "}
                                <span className="font-medium text-slate-800">right exercises to help her heal.</span>
                              </p>
                            )}
                            
                            {currentTestimonial.name === "Tobi" && (
                              <p className="text-base leading-7">
                                For the past few months Kareem has helped me with a{" "}
                                <span className="italic text-slate-600">very stubborn shoulder injury.</span> He's been{" "}
                                <span className="relative font-medium text-slate-800">
                                  patient and supportive every step of the way
                                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#B08D57]/30 to-[#D4AF37]/30 rounded-full"></span>
                                </span>. Thanks to him, my shoulder is finally{" "}
                                <span className="font-medium text-[#B08D57]">starting to feel like my own again.</span>
                              </p>
                            )}
                            
                            {currentTestimonial.name === "Thanula" && (
                              <div className="space-y-4 text-base leading-7">
                                <p>
                                  <span className="text-[#B08D57] font-medium">Highly recommend.</span> Everybody go ask for Kareem. He is the best physiotherapist ever. He's{" "}
                                  <span className="font-medium text-slate-700">kind, funny and encouraging.</span>
                                </p>
                                <p>
                                  I've been seeing him for a few weeks now for my ankle injury, and it has been such a{" "}
                                  <span className="font-medium text-[#B08D57] bg-gradient-to-r from-[#B08D57]/5 to-[#D4AF37]/5 px-1 rounded">positive experience</span>. He{" "}
                                  <span className="relative font-medium text-slate-800">
                                    communicates clearly
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#B08D57]/30 to-[#D4AF37]/30 rounded-full"></span>
                                  </span> and patiently explains each step of the treatment process.
                                </p>
                                <p>
                                  I've noticed{" "}
                                  <span className="font-medium text-slate-800">improvement in my condition</span> since starting treatment. I feel{" "}
                                  <span className="relative font-medium text-slate-800">
                                    genuinely cared for by Kareem
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#B08D57]/30 to-[#D4AF37]/30 rounded-full"></span>
                                  </span>{" "}
                                  and his empathy makes a difference in my recovery journey.
                                </p>
                  </div>
                            )}
                  </div>
                  </div>
                        
                        {/* Closing quote */}
                        <div className="absolute bottom-0 right-0 text-3xl text-[#B08D57]/20 font-serif leading-none transform rotate-180">"</div>
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                  </div>

                {/* Navigation Dots */}
                <div className="flex justify-center space-x-2 mt-4 relative z-10">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`relative transition-all duration-300 ${
                        index === currentTestimonialIndex 
                          ? 'scale-110' 
                          : 'hover:scale-105'
                      }`}
                      aria-label={`View testimonial ${index + 1}`}
                    >
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonialIndex 
                          ? 'bg-[#B08D57] shadow-lg shadow-[#B08D57]/40' 
                          : 'bg-slate-300 hover:bg-slate-400'
                      }`}>
                        {index === currentTestimonialIndex && (
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              ease: "easeInOut" 
                            }}
                            className="absolute inset-0 w-2 h-2 rounded-full bg-[#B08D57] opacity-30"
                          />
                        )}
                  </div>
                    </button>
                  ))}
                  </div>
              </motion.div>
              
              {/* Subtle outer glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#B08D57]/10 to-[#D4AF37]/10 rounded-[2.5rem] blur-2xl opacity-60 -z-10"></div>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
