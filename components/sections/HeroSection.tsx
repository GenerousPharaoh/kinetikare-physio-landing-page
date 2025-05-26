"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { StarIcon, ClipboardDocumentCheckIcon, HandRaisedIcon, AcademicCapIcon, MapIcon } from '@heroicons/react/24/solid';
import GlassCard from '@/components/ui/GlassCard';

// Type definitions
type CareJourneyItem = {
  type: 'journey';
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

type TestimonialItem = {
  type: 'testimonial';
  name: string;
  role: string;
  stars: number;
  text: string;
};

type ContentItem = CareJourneyItem | TestimonialItem;

const HeroSection = React.memo(function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCarouselReady, setIsCarouselReady] = useState(false);

  // Care Journey items with appropriate icons
  const careJourneyItems: CareJourneyItem[] = [
    {
      type: 'journey',
      title: "Thorough Assessments",
      description: "Seeking to uncover the root causes and patterns where applicable, beyond just treating the symptoms",
      icon: ClipboardDocumentCheckIcon
    },
    {
      type: 'journey',
      title: "Advanced Manual Therapy",
      description: "Specialized hands-on techniques combined with evidence-based interventions for effective treatment",
      icon: HandRaisedIcon
    },
    {
      type: 'journey',
      title: "Personalized Exercise Plans",
      description: "Customized rehabilitation strategies tailored to your unique needs and functional status",
      icon: AcademicCapIcon
    },
    {
      type: 'journey',
      title: "Clear Recovery Roadmap",
      description: "Strategic planning with measurable milestones to achieve your health goals efficiently",
      icon: MapIcon
    }
  ];

  // Testimonials data from existing TestimonialsSection
  const testimonials: TestimonialItem[] = [
    {
      type: 'testimonial',
      name: "Kathy",
      role: "Parent of Patient",
      stars: 5,
      text: "Highly recommend! In particular, Kareem has been truly exceptional! Can't express my gratitude for the remarkable care and guidance he has provided during my son's recovery from a knee injury."
    },
    {
      type: 'testimonial',
      name: "Catherine",
      role: "Patient",
      stars: 5,
      text: "I've been under the expert physiotherapy care of Kareem since August for Plantar Fasciitis, tendonitis & some aches & pains associated with aging. He shows genuine interest and concern for my well-being."
    },
    {
      type: 'testimonial',
      name: "Tania",
      role: "Parent of Patient",
      stars: 5,
      text: "My daughter had her knee pain treated by Kareem. He was kind and really good at asking the right questions to diagnose her issues and give her the right exercises to help her heal."
    },
    {
      type: 'testimonial',
      name: "Tobi",
      role: "Patient",
      stars: 5,
      text: "For the past few months Kareem has helped me with a very stubborn shoulder injury. He's been patient and supportive every step of the way. Thanks to him, my shoulder is finally starting to feel like my own again."
    }
  ];

  // Combine care journey and testimonials in alternating pattern
  const allContent: ContentItem[] = [];
  const maxLength = Math.max(careJourneyItems.length, testimonials.length);
  
  for (let i = 0; i < maxLength; i++) {
    if (i < careJourneyItems.length) {
      allContent.push(careJourneyItems[i]);
    }
    if (i < testimonials.length) {
      allContent.push(testimonials[i]);
    }
  }

  useEffect(() => {
    // Add a delay before starting the carousel to let the page load properly
    const startDelay = setTimeout(() => {
      setIsCarouselReady(true);
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % allContent.length);
      }, 5000); // Change every 5 seconds

      return () => clearInterval(interval);
    }, 2000); // Wait 2 seconds before starting the carousel

    return () => {
      clearTimeout(startDelay);
    };
  }, [allContent.length]);

  const currentContent = allContent[currentIndex];

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
        <div className="grid lg:grid-cols-12 gap-6 items-center">
          {/* Left side content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
            className="lg:col-span-7 text-left"
          >
            <div className="max-w-3xl">
              {/* Sophisticated main heading with dramatic reveals */}
              <div className="relative mb-10">
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
              
              {/* Sophisticated tagline with staggered word reveals - forced two lines */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.2 }}
                className="relative mb-12"
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
                className="flex flex-wrap gap-5 mt-12"
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
          
          {/* Right side - REDESIGNED vibrant carousel */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.8, 0.25, 1], delay: 0.2 }}
            className="lg:col-span-5 mt-12 lg:mt-0"
            style={{ 
              willChange: 'transform, opacity',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)'
            }}
          >
            <div className="relative">
              {/* REDESIGNED: More vibrant and dynamic container */}
              <div 
                className="relative bg-gradient-to-br from-white/95 via-slate-50/90 to-white/85 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/60 overflow-hidden"
                style={{
                  willChange: 'auto',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)',
                  boxShadow: '0 32px 64px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.9)'
                }}
              >
                
                {/* REDESIGNED: More vibrant background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/8 via-transparent to-[#B08D57]/12 rounded-3xl"></div>
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#D4AF37]/25 via-[#B08D57]/15 to-transparent rounded-3xl blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#B08D57]/20 via-[#D4AF37]/15 to-transparent rounded-3xl blur-xl"></div>
                
                {/* REDESIGNED: More prominent accent bar */}
                <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#B08D57] via-[#D4AF37] to-[#B08D57] rounded-t-3xl shadow-lg"></div>
                
                {/* REDESIGNED: Dynamic floating elements */}
                <div className="absolute top-8 right-8 w-4 h-4 bg-[#D4AF37] rounded-full shadow-lg animate-pulse"></div>
                <div className="absolute bottom-12 left-12 w-3 h-3 bg-[#B08D57] rounded-full shadow-md animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-12 w-2 h-2 bg-[#D4AF37]/70 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                
                {/* REDESIGNED: More vibrant header */}
                <div className="text-center mb-8 relative z-10">
                  <h3 className="text-3xl font-bold text-slate-800 mb-3 tracking-tight">
                    {currentContent?.type === 'testimonial' ? 'Client Success' : 'Your Care Journey'}
                  </h3>
                  <div className="w-24 h-2 bg-gradient-to-r from-[#B08D57] via-[#D4AF37] to-[#B08D57] mx-auto rounded-full shadow-md"></div>
                </div>
                
                {/* REDESIGNED: Content area with much more vibrant styling */}
                <div className="relative h-64 flex items-center justify-center z-10">
                  {isCarouselReady ? (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 20, scale: 0.95, rotateX: 10 }}
                        animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95, rotateX: -10 }}
                        transition={{ 
                          duration: 0.7, 
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className="text-center w-full"
                      >
                        {currentContent?.type === 'testimonial' ? (
                          // REDESIGNED: Much more vibrant testimonial cards
                          <div className="relative bg-gradient-to-br from-white/80 to-slate-50/60 rounded-2xl p-6 shadow-xl border border-white/40 backdrop-blur-sm">
                            {/* Quote icon background */}
                            <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B08D57] rounded-full flex items-center justify-center shadow-lg">
                              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                              </svg>
                            </div>
                            
                            {/* Vibrant stars */}
                            <motion.div 
                              className="flex justify-center space-x-1 mb-4"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.1, duration: 0.4 }}
                            >
                              {Array(5).fill(0).map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                  transition={{ delay: 0.15 + (i * 0.1), duration: 0.5, ease: "backOut" }}
                                >
                                  <StarIcon className="h-6 w-6 text-[#D4AF37] drop-shadow-sm" />
                                </motion.div>
                              ))}
                            </motion.div>
                            
                            {/* Enhanced testimonial text */}
                            <motion.p 
                              className="text-slate-700 leading-relaxed text-base max-w-sm mx-auto font-medium mb-4"
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3, duration: 0.5 }}
                            >
                              "{(currentContent as TestimonialItem).text}"
                            </motion.p>
                            
                            {/* Enhanced patient info */}
                            <motion.div 
                              className="pt-4 border-t border-slate-200/60"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4, duration: 0.4 }}
                            >
                              <p className="font-bold text-slate-800 text-lg">
                                {(currentContent as TestimonialItem).name}
                              </p>
                              <p className="text-slate-600 text-sm font-medium">
                                {(currentContent as TestimonialItem).role}
                              </p>
                            </motion.div>
                            
                            {/* Decorative elements */}
                            <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#D4AF37]/20 to-[#B08D57]/20 rounded-full blur-sm"></div>
                            <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-[#B08D57]/15 to-[#D4AF37]/15 rounded-full blur-sm"></div>
                        </div>
                        ) : (
                          // REDESIGNED: More vibrant care journey cards
                          <div className="relative bg-gradient-to-br from-slate-50/70 to-white/60 rounded-2xl p-6 shadow-lg border border-white/30 backdrop-blur-sm">
                            {/* Enhanced icon with more vibrant styling */}
                            <motion.div 
                              className="flex justify-center mb-6"
                              initial={{ opacity: 0, scale: 0.6, rotateY: 180 }}
                              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                              transition={{ delay: 0.1, duration: 0.6, ease: "backOut" }}
                            >
                              <div className="relative w-20 h-20 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-2xl flex items-center justify-center shadow-xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-2xl animate-pulse opacity-30"></div>
                                <div className="absolute -inset-1 bg-gradient-to-br from-[#D4AF37]/40 to-[#B08D57]/40 rounded-2xl blur-md"></div>
                                {React.createElement((currentContent as CareJourneyItem).icon, {
                                  className: "w-10 h-10 text-white relative z-10 drop-shadow-sm"
                                })}
                          </div>
                            </motion.div>
                            
                            {/* Enhanced title with better contrast */}
                            <motion.h4 
                              className="text-2xl font-bold text-slate-800 mb-4 leading-tight tracking-tight"
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2, duration: 0.5 }}
                            >
                              {(currentContent as CareJourneyItem).title}
                            </motion.h4>
                            
                            {/* Enhanced description with better readability */}
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3, duration: 0.5 }}
                              className="relative"
                            >
                              <p className="text-slate-600 leading-relaxed text-base max-w-sm mx-auto font-medium relative z-10 px-4 py-3 bg-white/60 rounded-xl border border-slate-200/50 backdrop-blur-sm shadow-sm">
                                {(currentContent as CareJourneyItem).description}
                              </p>
                            </motion.div>
                            
                            {/* Enhanced accent line */}
                            <motion.div 
                              className="flex justify-center mt-6"
                              initial={{ width: 0, opacity: 0 }}
                              animate={{ width: "4rem", opacity: 1 }}
                              transition={{ delay: 0.4, duration: 0.5 }}
                            >
                              <div className="h-1 bg-gradient-to-r from-[#B08D57] to-[#D4AF37] rounded-full shadow-sm"></div>
                            </motion.div>
                        </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  ) : (
                    // Enhanced placeholder
                    <div className="text-center w-full">
                      <div className="relative bg-gradient-to-br from-slate-50/70 to-white/60 rounded-2xl p-6 shadow-lg border border-white/30 backdrop-blur-sm">
                        <div className="relative w-20 h-20 bg-gradient-to-br from-[#B08D57] to-[#D4AF37] rounded-2xl flex items-center justify-center shadow-xl mx-auto mb-6">
                          <ClipboardDocumentCheckIcon className="w-10 h-10 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold text-slate-800 mb-4 leading-tight tracking-tight">
                          Thorough Assessments
                        </h4>
                        <p className="text-slate-600 leading-relaxed text-base max-w-sm mx-auto font-medium px-4 py-3 bg-white/60 rounded-xl border border-slate-200/50 backdrop-blur-sm shadow-sm">
                          Seeking to uncover the root causes and patterns where applicable, beyond just treating the symptoms
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* REDESIGNED: More vibrant progress dots */}
                <div className="flex justify-center space-x-3 mt-8 mb-6 relative z-20">
                  {allContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`group relative transition-all duration-300 cursor-pointer hover:scale-125 ${
                        index === currentIndex 
                          ? 'scale-125' 
                          : 'hover:scale-110'
                      }`}
                      style={{ pointerEvents: 'auto', zIndex: 20 }}
                      aria-label={`Go to slide ${index + 1}`}
                    >
                      <div className={`w-4 h-4 rounded-full transition-all duration-300 relative ${
                        index === currentIndex 
                          ? 'bg-gradient-to-r from-[#B08D57] to-[#D4AF37] shadow-lg shadow-[#D4AF37]/60' 
                          : 'bg-slate-300 hover:bg-slate-400 shadow-md'
                      }`}>
                        {index === currentIndex && (
                          <>
                            <div className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r from-[#B08D57] to-[#D4AF37] animate-ping opacity-40"></div>
                            <div className="absolute -inset-1 w-6 h-6 rounded-full bg-[#D4AF37]/30 blur-sm"></div>
                          </>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              
                {/* Enhanced CTA */}
                <div className="pt-6 border-t border-slate-200/60 text-center relative z-20">
                  <Link
                    href="/about"
                    className="inline-flex items-center text-slate-600 hover:text-[#B08D57] transition-all duration-300 text-sm font-semibold tracking-wide cursor-pointer group"
                    style={{ pointerEvents: 'auto', zIndex: 20 }}
                  >
                    <span className="mr-2">Learn more about my approach</span>
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1 text-[#D4AF37]">→</span>
                  </Link>
                </div>
              </div>
              
              {/* Enhanced shadow with more vibrant colors */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#B08D57]/30 to-[#D4AF37]/30 rounded-3xl blur-2xl opacity-60"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;