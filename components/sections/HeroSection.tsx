"use client";

import React, { useState, useEffect, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

// Animated particle component for a more premium background effect
const ParticleEffect = () => {
  // Generate random positions for particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
            y: [0, -20, 0]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = memo(function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const rotatingTexts = [
    "restore function",
    "alleviate pain",
    "improve mobility",
    "enhance performance"
  ];
  
  useEffect(() => {
    setIsVisible(true);
    
    // Set up text rotation
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  return (
    <section className="relative py-24 md:py-32 lg:py-40 xl:py-48 overflow-hidden min-h-screen flex items-center hero-fade-in">
      {/* Enhanced backdrop image with subtle parallax and improved quality */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="h-full w-full overflow-hidden image-fade-in"
          initial={{ scale: 1.05 }}
          animate={{ 
            scale: [1.05, 1.08, 1.05],
          }}
          transition={{
            scale: { 
              duration: 20, 
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut" 
            }
          }}
        >
          <Image
            src="/images/clinic-pic-updated.jpg"
            alt="Physiotherapy treatment room"
            fill
            className="object-cover object-center"
            priority={true}
            quality={95}  // Increased quality
            style={{
              filter: 'brightness(0.5) contrast(1.2) saturate(1.2)', // Enhanced filtering
            }}
          />
        </motion.div>

        {/* Enhanced layered gradient overlays for more depth and dimension */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/70 to-primary-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary-700/20"></div>
        
        {/* Refined vignette effect */}
        <div className="absolute inset-0 bg-radial-gradient opacity-70 mix-blend-multiply"></div>
        
        {/* Animated color overlay for visual interest */}
        <motion.div 
          className="absolute inset-0 bg-accent/5"
          animate={{ 
            opacity: [0.05, 0.1, 0.05] 
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        ></motion.div>
      </div>

      {/* Refined and enhanced decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-pattern opacity-[0.03]"></div>
        
        {/* More pronounced accent glows */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[100px]"
          animate={{ 
            opacity: [0.1, 0.15, 0.1],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-primary-500/15 blur-[80px]"
          animate={{ 
            opacity: [0.15, 0.2, 0.15],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        ></motion.div>
        
        {/* New subtle beam of light effect */}
        <motion.div 
          className="absolute top-0 left-1/3 w-[2px] h-[300px] bg-gradient-to-b from-white/0 via-white/20 to-white/0"
          animate={{ 
            opacity: [0, 0.7, 0],
            height: ["30vh", "70vh", "30vh"],
            left: ["30%", "35%", "30%"]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 5
          }}
        ></motion.div>
      </div>
      
      {/* Add particle effect for premium look */}
      <ParticleEffect />
      
      <div className="container mx-auto px-4 relative z-10 above-fold-content">
        <div className="grid lg:grid-cols-12 gap-12 items-center stagger-fade-in">
          {/* Left side content - Enhanced text and CTA */}
          <div className="lg:col-span-7 text-left">
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Enhanced badge with glow */}
              <motion.div
                className="relative inline-block mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="absolute inset-0 rounded-full bg-accent/20 blur-md transform scale-110"></span>
                <span className="relative inline-block px-5 py-1.5 text-sm font-medium bg-primary-700/40 text-white rounded-full backdrop-blur-md border border-white/20 shadow-lg">
                  Experience Expert Care in Burlington
                </span>
              </motion.div>
              
              {/* Enhanced heading with better typography and effects */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 tracking-tight leading-tight drop-shadow-md">
                <span className="block">The Science of</span>
                <span className="relative inline-block mt-2">
                  <span className="relative z-10">Recovery</span>
                  <motion.span 
                    className="absolute bottom-2 left-0 w-full h-3 bg-accent/30 rounded-lg -z-0"
                    animate={{ 
                      width: ["0%", "100%"],
                      opacity: [0, 1]
                    }}
                    transition={{ 
                      duration: 1, 
                      delay: 0.8,
                      ease: "easeOut"
                    }}
                  ></motion.span>
                </span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-accent">
                  The Art of Care
                </span>
              </h1>
              
              {/* Enhanced paragraph with animated text */}
              <motion.p 
                className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Revealing the subtle patterns in your movement to design targeted interventions that{' '}
                <span className="relative inline-flex h-7 items-center overflow-visible min-w-[160px] align-bottom">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentTextIndex}
                      className="absolute text-accent font-medium will-change-transform"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      {rotatingTexts[currentTextIndex]}
                    </motion.span>
                  </AnimatePresence>
                  <span className="opacity-0 invisible select-none">{rotatingTexts.reduce((a, b) => a.length > b.length ? a : b)}</span>
                </span>,{' '}
                and help you reclaim the activities that matter most.
              </motion.p>
              
              {/* Enhanced CTA buttons with improved styling and animations */}
              <div className="flex flex-wrap gap-5 mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <span className="absolute inset-0 rounded-xl bg-accent blur-md opacity-30 transform scale-105"></span>
                  <Link 
                    href="https://endorphinshealth.janeapp.com/#/staff_member/42" 
                    target="_blank"
                    className="relative bg-gradient-to-br from-accent to-accent-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-2xl shadow-accent/20 hover:shadow-accent/40 group"
                    aria-label="Book an appointment online"
                  >
                    <CalendarDaysIcon className="h-5 w-5 group-hover:animate-pulse" aria-hidden="true" />
                    <span>Book an Appointment</span>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="#services" 
                    className="bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 text-center border border-white/30 flex items-center justify-center relative overflow-hidden group"
                    aria-label="Explore our services"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                    Explore Our Services
                  </Link>
                </motion.div>
              </div>
              
              {/* Enhanced testimonial preview with better glass effect and animations */}
              <motion.div 
                className="mt-14 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-primary-500/20 blur-xl transform scale-105 opacity-60"
                  animate={{ 
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                ></motion.div>
                
                <div className="relative bg-white/15 backdrop-blur-xl rounded-2xl p-6 border border-white/20 max-w-md shadow-2xl overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-accent/20 blur-[30px]"></div>
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent"
                    animate={{ 
                      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  ></motion.div>
                  
                  <div className="flex items-center gap-4 mb-4 relative z-10">
                    <div className="flex -space-x-4">
                      <motion.div
                        className="w-12 h-12 rounded-full bg-accent/40 flex items-center justify-center text-white font-bold ring-2 ring-white/20 shadow-lg"
                        whileHover={{ scale: 1.1, y: -5 }}
                      >K</motion.div>
                      <motion.div 
                        className="w-12 h-12 rounded-full bg-primary-500/40 flex items-center justify-center text-white font-bold ring-2 ring-white/20 shadow-lg"
                        whileHover={{ scale: 1.1, y: -5 }}
                      >M</motion.div>
                      <motion.div 
                        className="w-12 h-12 rounded-full bg-primary-700/40 flex items-center justify-center text-white font-bold ring-2 ring-white/20 shadow-lg"
                        whileHover={{ scale: 1.1, y: -5 }}
                      >J</motion.div>
                    </div>
                    <div className="text-amber-200 tracking-wider text-lg">★★★★★</div>
                  </div>
                  
                  <p className="text-sm font-medium text-white leading-relaxed relative z-10">
                    <span className="text-4xl text-accent opacity-50 font-serif absolute -top-2 -left-1">&ldquo;</span>
                    <span className="italic pl-4">The treatment I received for my shoulder issue was excellent. Professional, thorough, and effective.</span>
                    <span className="text-4xl text-accent opacity-50 font-serif absolute -bottom-8 right-0">&rdquo;</span>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right side - Enhanced decorative element with better glass morphism */}
          <motion.div 
            className="lg:col-span-5 hidden lg:block image-fade-in"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative h-[580px] w-full">
              {/* Enhanced glass card with better styling */}
              <motion.div 
                className="absolute inset-0 rounded-3xl backdrop-blur-2xl bg-gradient-to-br from-white/20 to-white/5 border border-white/20 shadow-2xl overflow-hidden"
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Enhanced background glow effects with animations */}
                <motion.div 
                  className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-accent/15 blur-[100px]"
                  animate={{ 
                    opacity: [0.15, 0.25, 0.15],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 7, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                ></motion.div>
                
                <motion.div 
                  className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-primary-500/15 blur-[80px]"
                  animate={{ 
                    opacity: [0.15, 0.25, 0.15],
                    scale: [1, 1.15, 1]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1
                  }}
                ></motion.div>
                
                {/* Animated light beam effect */}
                <motion.div 
                  className="absolute top-0 right-1/3 w-[1px] h-[300px] bg-gradient-to-b from-white/0 via-white/30 to-white/0"
                  animate={{ 
                    opacity: [0, 0.7, 0],
                    height: ["0%", "100%", "0%"],
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 2
                  }}
                ></motion.div>
                
                <div className="p-10 h-full flex flex-col justify-center relative z-10">
                  {/* Enhanced professional credentials with better styling */}
                  <div className="mb-12 flex flex-col gap-5 stagger-fade-in">
                    <motion.div 
                      className="relative overflow-hidden group"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 10 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      whileHover={{ y: -5, x: 2 }}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100"
                        animate={{ 
                          backgroundPosition: ["0% 0%", "100% 100%"]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          repeatType: "reverse" 
                        }}
                      ></motion.div>
                      
                      <div className="flex items-center gap-4 bg-white/15 backdrop-blur-md rounded-xl px-5 py-4 border border-white/20 shadow-lg relative z-10">
                        <div className="w-12 h-12 rounded-full bg-primary-700/50 flex items-center justify-center shadow-inner group-hover:shadow-accent/20">
                          <motion.svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6 text-white" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                            whileHover={{ rotate: 5 }}
                          >
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </motion.svg>
                        </div>
                        <div>
                          <p className="text-white font-semibold text-lg">Registered Physiotherapist</p>
                          <p className="text-xs text-white/70">Ontario College of Physiotherapists</p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="relative overflow-hidden group"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 10 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      whileHover={{ y: -5, x: 2 }}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100"
                        animate={{ 
                          backgroundPosition: ["0% 0%", "100% 100%"]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: 0.5
                        }}
                      ></motion.div>
                      
                      <div className="flex items-center gap-4 bg-white/15 backdrop-blur-md rounded-xl px-5 py-4 border border-white/20 shadow-lg relative z-10">
                        <div className="w-12 h-12 rounded-full bg-primary-700/50 flex items-center justify-center shadow-inner group-hover:shadow-accent/20">
                          <motion.svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6 text-white" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                            whileHover={{ rotate: 5 }}
                          >
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                          </motion.svg>
                        </div>
                        <div>
                          <p className="text-white font-semibold text-lg">5+ Years Experience</p>
                          <p className="text-xs text-white/70">Registered Physiotherapist</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Enhanced specialties section with more interactive elements */}
                  <motion.div 
                    className="mt-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      <p className="text-white/90 text-base font-medium">Specialized Treatment For:</p>
                    </div>
                    
                    <motion.div 
                      className="flex flex-wrap gap-2.5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ staggerChildren: 0.1, delayChildren: 0.8 }}
                    >
                      {["Sports Injuries", "Back Pain", "Post-Surgery", "Chronic Pain", "Joint Mobility"].map((specialty, index) => (
                        <motion.span
                          key={specialty}
                          className="text-sm bg-accent/20 text-white px-4 py-1.5 rounded-full border border-accent/30 shadow-sm hover:bg-accent/30 transition-colors cursor-pointer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 + (index * 0.1) }}
                        >
                          {specialty}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
