"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

// Completely remove ParticleEffect component since it's just for animation

const HeroSection = React.memo(function HeroSection() {
  // Remove all animation state and effects
  
  return (
    <section 
      className="relative py-24 md:py-32 lg:py-40 xl:py-48 overflow-hidden min-h-screen flex items-center"
    >
      {/* Simplified backdrop image without animations */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full overflow-hidden">
          <Image
            src="/images/clinic-pic-updated.jpg"
            alt="Physiotherapy treatment room"
            fill
            className="object-cover object-center"
            priority={true}
            quality={80}
            style={{ 
              filter: 'brightness(0.5) contrast(1.2)',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>

        {/* Simplified gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/70 to-primary-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary-700/20"></div>
      </div>
      
      {/* Simplified transition gradient at the bottom - Reduced height */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-neutral-50 via-neutral-50/90 to-transparent z-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left side content - Enhanced text and CTA */}
          <div className="lg:col-span-7 text-left">
            <div className="max-w-3xl">
              {/* Enhanced badge */}
              <div className="inline-block mb-8 px-5 py-1.5 text-sm font-medium bg-primary-700/40 text-white rounded-full backdrop-blur-md border border-white/20 shadow-lg">
                Experience Expert Care in Burlington
              </div>
              
              {/* Enhanced heading with better typography */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                <span className="block">The Science of</span>
                <span className="relative inline-block mt-2">
                  <span className="relative z-10">Recovery</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/30 rounded-lg -z-0"></span>
                </span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-accent">
                  The Art of Care
                </span>
              </h1>
              
              {/* Simplified paragraph */}
              <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl">
                Revealing the subtle patterns in your movement to design targeted interventions that
                <span className="text-accent font-medium"> improve mobility, alleviate pain,</span> and
                help you reclaim the activities that matter most.
              </p>
              
              {/* Enhanced CTA buttons with improved styling */}
              <div className="flex flex-wrap gap-5 mt-8">
                <Link 
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42" 
                  target="_blank"
                  className="bg-gradient-to-br from-accent to-accent-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-300 text-center flex items-center justify-center gap-2 shadow-lg shadow-accent/20 hover:shadow-accent/40 group"
                  aria-label="Book an appointment online"
                >
                  <CalendarDaysIcon className="h-5 w-5" aria-hidden="true" />
                  <span>Book an Appointment</span>
                </Link>
                
                <Link 
                  href="#services" 
                  className="bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-medium px-8 py-4 rounded-xl transition-colors duration-300 text-center border border-white/30 flex items-center justify-center"
                  aria-label="Explore our services"
                >
                  Explore Our Services
                </Link>
              </div>
              
              {/* Simplified testimonial preview with glass effect */}
              <div className="mt-14 relative">
                <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/30 max-w-md shadow-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] to-white/[0.05] pointer-events-none"></div>
                  
                  <div className="flex items-center gap-4 mb-4 relative z-10">
                    <div className="flex -space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center text-white font-bold ring-[1.5px] ring-white/30 shadow-lg">K</div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600/80 flex items-center justify-center text-white font-bold ring-[1.5px] ring-white/30 shadow-lg">M</div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-700 to-primary-800/80 flex items-center justify-center text-white font-bold ring-[1.5px] ring-white/30 shadow-lg">J</div>
                    </div>
                    <div className="text-amber-200 tracking-wider text-lg">★★★★★</div>
                  </div>
                  
                  <p className="text-sm font-medium text-white/95 leading-relaxed relative z-10">
                    <span className="text-4xl text-accent/70 font-serif absolute -top-2 -left-1">&ldquo;</span>
                    <span className="italic pl-4">The treatment I received for my shoulder issue was excellent. Professional, thorough, and effective.</span>
                    <span className="text-4xl text-accent/70 font-serif absolute -bottom-8 right-0">&rdquo;</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Simplified decorative element */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative h-[580px] w-full">
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                {/* Simplified glass effect */}
                <div className="absolute inset-0 backdrop-blur-2xl bg-gradient-to-br from-white/20 to-white/5 border border-white/30 shadow-xl z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.07] via-transparent to-white/[0.07] z-20"></div>
                
                {/* Simplified background glow effects */}
                <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-accent/15 blur-[100px] z-0"></div>
                <div className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-primary-500/15 blur-[80px] z-0"></div>
                
                <div className="p-10 h-full flex flex-col justify-center relative z-50">
                  {/* Enhanced professional credentials */}
                  <div className="mb-12 flex flex-col gap-5">
                    <div className="relative overflow-hidden">
                      <div className="flex items-center gap-4 bg-white/15 backdrop-blur-md rounded-xl px-5 py-4 border border-white/30 shadow-lg relative z-10 overflow-hidden">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-600/90 to-primary-700/90 flex items-center justify-center shadow-inner">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6 text-white" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                          >
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-semibold text-lg">Registered Physiotherapist</p>
                          <p className="text-xs text-white/70">Ontario College of Physiotherapists</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative overflow-hidden">
                      <div className="flex items-center gap-4 bg-white/15 backdrop-blur-md rounded-xl px-5 py-4 border border-white/30 shadow-lg relative z-10 overflow-hidden">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-600/90 to-primary-700/90 flex items-center justify-center shadow-inner">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6 text-white" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                          >
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-semibold text-lg">5+ Years Experience</p>
                          <p className="text-xs text-white/70">Registered Physiotherapist</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Simplified specialties section */}
                  <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      <p className="text-white/90 text-base font-medium">Specialized Treatment For:</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2.5">
                      {["Sports Injuries", "Back Pain", "Post-Surgery", "Chronic Pain", "Joint Mobility"].map((specialty) => (
                        <span
                          key={specialty}
                          className="text-sm bg-accent/20 text-white px-4 py-1.5 rounded-full border border-accent/30 shadow-sm hover:bg-accent/30 transition-colors cursor-pointer"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
