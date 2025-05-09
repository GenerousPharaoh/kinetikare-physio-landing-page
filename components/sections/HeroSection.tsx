"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

const HeroSection = React.memo(function HeroSection() {
  return (
    <section 
      className="relative overflow-hidden min-h-[80vh] flex items-center"
    >
      {/* Backdrop image with simplified styling */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full overflow-hidden" style={{ position: 'relative' }}>
          <Image
            src="/images/clinic-pic-updated.jpg"
            alt="Physiotherapy treatment room"
            fill
            className="object-cover object-center"
            priority={true}
            quality={90}
            style={{ 
              filter: 'brightness(0.40) contrast(1.15) saturate(1.05)',
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: 1
            }}
          />
        </div>

        {/* Gradient overlays with fixed styles */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/85 to-primary-900/90" style={{ opacity: 1 }}></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-primary-700/30" style={{ opacity: 1 }}></div>
        
        {/* Simplified pattern overlay */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: "url('/images/patterns/pattern-dots.svg')",
            opacity: 0.02
          }}
        ></div>
        
        {/* Light beam effect - simplified */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute -inset-[10%] blur-3xl bg-gradient-to-br from-accent-light/30 via-transparent to-transparent rotate-12" 
            style={{ 
              opacity: 0.03,
              transform: 'rotate(12deg)'
            }}
          ></div>
        </div>
      </div>
      
      {/* Bottom transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-neutral-50 via-neutral-50/90 to-transparent z-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left side content */}
          <div className="lg:col-span-7 text-left">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-block mb-8 px-6 py-2 text-sm font-medium bg-white/10 text-white/95 rounded-full backdrop-blur-xl border border-white/20 shadow-lg">
                <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2 align-middle"></span>
                <span className="tracking-wide">Experience Expert Care in Burlington</span>
              </div>
              
              {/* Simplified heading with fixed styles */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.2]">
                <span className="block font-light tracking-wide">The Science of</span>
                <span className="relative inline-block mt-2">
                  <span className="relative z-10">Recovery</span>
                  <span className="absolute bottom-3 left-0 w-full h-4 bg-accent/40 rounded-lg -z-0 blur-[3px]"></span>
                </span>
                <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-accent to-accent-light font-semibold">
                  The Art of Care
                </span>
              </h1>
              
              {/* Main paragraph */}
              <p className="text-lg md:text-xl text-white/95 mb-10 leading-[1.6] max-w-2xl font-light">
                Revealing the subtle patterns in your movement to design targeted interventions that
                <span className="text-accent font-medium"> improve mobility, alleviate pain,</span> and
                help you reclaim the activities that matter most.
              </p>
              
              {/* CTA buttons with simplified styling */}
              <div className="flex flex-wrap gap-5 mt-10">
                <Link 
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42" 
                  target="_blank"
                  className="group relative px-7 py-3.5 font-semibold rounded-xl text-white flex items-center justify-center gap-2 overflow-hidden transition-all duration-300"
                  aria-label="Book an appointment online"
                  style={{ 
                    position: 'relative',
                    zIndex: 10 
                  }}
                >
                  {/* Button background */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-accent to-accent-dark transition-all duration-300 shadow-lg shadow-accent/10"
                    style={{
                      inset: 0,
                      zIndex: 0
                    }}
                  ></div>
                  
                  {/* Button content */}
                  <CalendarDaysIcon className="h-5 w-5 relative z-10" aria-hidden="true" />
                  <span className="relative z-10 tracking-wide">Book an Appointment</span>
                </Link>
                
                <Link 
                  href="#services" 
                  className="relative px-7 py-3.5 font-medium rounded-xl text-white flex items-center justify-center transition-all duration-300 group overflow-hidden"
                  aria-label="Explore our services"
                  style={{ 
                    position: 'relative',
                    zIndex: 10 
                  }}
                >
                  {/* Button background */}
                  <div 
                    className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl transition-all duration-300 shadow-lg shadow-black/5"
                    style={{
                      inset: 0,
                      zIndex: 0
                    }}
                  ></div>
                  
                  {/* Button content */}
                  <span className="relative z-10 tracking-wide">Explore Our Services</span>
                </Link>
              </div>
              
              {/* Testimonial preview with simplified styling */}
              <div className="mt-16 relative">
                <div 
                  className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-7 border border-white/20 max-w-md shadow-xl overflow-hidden"
                  style={{
                    position: 'relative'
                  }}
                >
                  {/* Background glow - simplified */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-white/[0.18] to-white/[0.05] pointer-events-none"
                    style={{
                      inset: 0,
                      zIndex: 1
                    }}
                  ></div>
                  
                  {/* Gold accent - simplified */}
                  <div className="absolute -bottom-3 -right-3 w-full h-full z-0 pointer-events-none">
                    <div className="absolute bottom-0 right-0 w-2/3 h-1.5 bg-[#D4AF37]/40"></div>
                    <div className="absolute right-0 top-1/3 h-2/3 w-1.5 bg-[#D4AF37]/40"></div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-5 relative z-10">
                    <div className="flex -space-x-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center text-white font-bold ring-[1.5px] ring-white/30 shadow-lg">K</div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-600/80 flex items-center justify-center text-white font-bold ring-[1.5px] ring-white/30 shadow-lg">M</div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-700 to-primary-800/80 flex items-center justify-center text-white font-bold ring-[1.5px] ring-white/30 shadow-lg">J</div>
                    </div>
                    <div className="text-amber-300 tracking-wider text-lg">★★★★★</div>
                  </div>
                  
                  <p className="text-sm font-medium text-white/95 leading-[1.6] relative z-10">
                    <span className="text-3xl text-accent/70 font-serif absolute -top-2 -left-1">&ldquo;</span>
                    <span className="italic pl-4">The treatment I received for my shoulder issue was excellent. Professional, thorough, and effective.</span>
                    <span className="text-3xl text-accent/70 font-serif absolute -bottom-8 right-0">&rdquo;</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - decorative element with simplified styling */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative h-[540px] w-full" style={{ position: 'relative' }}>
              <div className="absolute inset-0 rounded-3xl overflow-hidden" style={{ position: 'absolute', inset: 0 }}>
                {/* Glass effect - simplified */}
                <div 
                  className="absolute inset-0 backdrop-blur-2xl bg-gradient-to-br from-white/20 to-white/5 border border-white/20 shadow-2xl z-10"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 10
                  }}
                ></div>
                
                <div className="p-8 h-full flex flex-col justify-center relative z-50">
                  {/* Professional credentials with simplified styling */}
                  <div className="mb-10 flex flex-col gap-5">
                    <div className="relative overflow-hidden">
                      <div 
                        className="flex items-center gap-4 bg-white/15 backdrop-blur-md rounded-xl px-5 py-4 border border-white/20 shadow-xl relative z-10 overflow-hidden"
                        style={{ position: 'relative' }}
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500/80 to-primary-700/80 flex items-center justify-center shadow-inner relative">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 text-white" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                          >
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-semibold text-lg">Registered Physiotherapist</p>
                          <p className="text-xs text-white/80 tracking-wide">Ontario College of Physiotherapists</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative overflow-hidden">
                      <div 
                        className="flex items-center gap-4 bg-white/15 backdrop-blur-md rounded-xl px-5 py-4 border border-white/20 shadow-xl relative z-10 overflow-hidden"
                        style={{ position: 'relative' }}
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500/80 to-primary-700/80 flex items-center justify-center shadow-inner relative">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 text-white" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                          >
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-semibold text-lg">5+ Years Experience</p>
                          <p className="text-xs text-white/80 tracking-wide">Registered Physiotherapist</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Specialties section with simplified styling */}
                  <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      <p className="text-white/95 text-base font-medium tracking-wide">Specialized Treatment For:</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {["Sports Injuries", "Back Pain", "Post-Surgery", "Chronic Pain", "Joint Mobility"].map((specialty) => (
                        <span
                          key={specialty}
                          className="text-sm bg-white/10 text-white px-3 py-1.5 rounded-full border border-white/20 shadow-lg"
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