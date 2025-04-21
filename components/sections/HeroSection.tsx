"use client";

import React, { useState, useEffect, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const HeroSection = memo(function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-24 md:py-32 lg:py-40 xl:py-48 overflow-hidden min-h-screen flex items-center hero-fade-in">
      {/* Enhanced backdrop image with subtle parallax */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="h-full w-full overflow-hidden image-fade-in"
          initial={{ scale: 1.05 }}
          animate={{ 
            y: ["0%", "-2%", "0%"],
            scale: 1.05 
          }}
          transition={{ 
            y: { 
              duration: 20, 
              repeat: Infinity, 
              ease: "easeInOut" 
            },
            scale: { duration: 0.8 }
          }}
        >
          <Image
            src="/images/clinic-pic-updated.jpg"
            alt="Physiotherapy treatment room"
            fill
            className="object-cover object-center"
            priority={true}
            quality={85}
            style={{
              filter: 'brightness(0.65) contrast(1.1) saturate(1.05)', // Enhanced professional look
            }}
          />
        </motion.div>

        {/* Enhanced gradient overlay with better depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-900/50 to-primary-900/70"></div>
        
        {/* Refined vignette effect */}
        <div className="absolute inset-0 bg-radial-gradient opacity-60 mix-blend-multiply"></div>
      </div>

      {/* Refined decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-pattern opacity-[0.03]"></div>
        {/* Subtle accent glow */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-primary-500/5 blur-[80px]"></div>
      </div>
      
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
              <motion.span 
                className="inline-block px-5 py-1.5 text-sm font-medium bg-primary-700/40 text-white rounded-full backdrop-blur-md mb-6 border border-white/10 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Experience Expert Care in Burlington
              </motion.span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                The Science of 
                <span className="relative inline-block ml-3">
                  <span className="relative z-10">Recovery</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/20 rounded-lg -z-0"></span>
                </span>
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-accent">The Art of Care</span>
              </h1>
              
              <motion.p 
                className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Revealing the subtle patterns in your movement to design targeted interventions that restore function, 
                minimize pain, and help you reclaim the activities that matter most.
              </motion.p>
              
              <div className="flex flex-wrap gap-5 mt-8">
                <Link 
                  href="https://khphysiotherapy.janeapp.com/" 
                  target="_blank"
                  className="bg-gradient-to-br from-accent to-accent-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-2xl shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-1 hover:scale-105"
                  aria-label="Book an appointment online"
                >
                  <CalendarDaysIcon className="h-5 w-5" aria-hidden="true" />
                  <span>Book an Appointment</span>
                </Link>
                
                <Link 
                  href="#services" 
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 text-center border border-white/20 hover:border-white/40 flex items-center justify-center hover:scale-105"
                  aria-label="Explore our services"
                >
                  Explore Our Services
                </Link>
              </div>
              
              {/* Enhanced testimonial preview */}
              <motion.div 
                className="mt-14 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 max-w-md shadow-xl relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Decorative element */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-accent/10 blur-[30px]"></div>
                
                <div className="flex items-center gap-4 mb-3 relative z-10">
                  <div className="flex -space-x-3">
                    <div className="w-11 h-11 rounded-full bg-accent/40 flex items-center justify-center text-white font-bold ring-2 ring-white/10">K</div>
                    <div className="w-11 h-11 rounded-full bg-primary-500/40 flex items-center justify-center text-white font-bold ring-2 ring-white/10">M</div>
                    <div className="w-11 h-11 rounded-full bg-primary-700/40 flex items-center justify-center text-white font-bold ring-2 ring-white/10">J</div>
                  </div>
                  <div className="text-amber-200 tracking-wider">★★★★★</div>
                </div>
                <p className="text-sm font-medium text-white/90 italic leading-relaxed relative z-10">
                  &quot;The treatment I received for my shoulder issue was excellent. Professional, thorough, and effective.&quot;
                </p>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right side - Enhanced decorative element with glass morphism */}
          <motion.div 
            className="lg:col-span-5 hidden lg:block image-fade-in"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative h-[580px] w-full">
              <div className="absolute inset-0 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl overflow-hidden">
                {/* Enhanced background glow effects */}
                <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]"></div>
                <div className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-primary-500/10 blur-[80px]"></div>
                
                <div className="p-10 h-full flex flex-col justify-center">
                  {/* Enhanced professional credentials */}
                  <div className="mb-10 flex flex-col gap-5 stagger-fade-in">
                    <motion.div 
                      className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/10 shadow-lg"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-primary-700/50 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg">Registered Physiotherapist</p>
                        <p className="text-xs text-white/70">Ontario College of Physiotherapists</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/10 shadow-lg"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-primary-700/50 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg">5+ Years Experience</p>
                        <p className="text-xs text-white/70">Registered Physiotherapist</p>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Enhanced specialties section */}
                  <motion.div 
                    className="mt-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <p className="text-white/90 text-base mb-4 font-medium">Specialized Treatment For:</p>
                    <div className="flex flex-wrap gap-2.5">
                      <span className="text-sm bg-accent/20 text-white px-4 py-1.5 rounded-full border border-accent/30 shadow-sm hover:bg-accent/30 transition-colors">Sports Injuries</span>
                      <span className="text-sm bg-accent/20 text-white px-4 py-1.5 rounded-full border border-accent/30 shadow-sm hover:bg-accent/30 transition-colors">Back Pain</span>
                      <span className="text-sm bg-accent/20 text-white px-4 py-1.5 rounded-full border border-accent/30 shadow-sm hover:bg-accent/30 transition-colors">Post-Surgery</span>
                      <span className="text-sm bg-accent/20 text-white px-4 py-1.5 rounded-full border border-accent/30 shadow-sm hover:bg-accent/30 transition-colors">Chronic Pain</span>
                      <span className="text-sm bg-accent/20 text-white px-4 py-1.5 rounded-full border border-accent/30 shadow-sm hover:bg-accent/30 transition-colors">Joint Mobility</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
