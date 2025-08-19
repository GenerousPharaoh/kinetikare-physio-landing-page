"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Ambient gradient background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(176, 141, 87, 0.15) 0%, transparent 70%)',
            left: `${mousePosition.x - 400}px`,
            top: `${mousePosition.y - 400}px`,
            transform: 'translate3d(0, 0, 0)',
            transition: 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
        />
      </div>

      {/* Mobile */}
      <section className="lg:hidden min-h-screen bg-gradient-to-br from-white via-gray-50/30 to-white flex flex-col pt-16 relative overflow-hidden">
        {/* Image section */}
        <div className="relative h-[50vh] w-full">
          <Image
            src="/images/clinic-pic-may-2025.jpg"
            alt="KinetiKare Physiotherapy"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Premium multi-layer gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent" />
          {/* Subtle gradient at bottom for transition */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/98 to-transparent" />
          {/* Floating accent */}
          <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-[#B08D57]/10 to-transparent rounded-full blur-3xl" />
        </div>

        {/* Content section */}
        <div className="flex-1 flex flex-col justify-center px-8 py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-10"
            >
              <div className="inline-flex items-center gap-3">
                <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#B08D57]/40" />
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#B08D57] font-semibold">
                  Registered Physiotherapist
                </p>
                <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#B08D57]/40" />
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[46px] sm:text-[56px] font-extralight text-slate-900 leading-[1.05] mb-12 tracking-[-0.03em]"
            >
              <span className="block">The Science</span>
              <span className="block bg-gradient-to-r from-[#B08D57] via-[#C89F65] to-[#D4AF37] bg-clip-text text-transparent font-light">of Recovery.</span>
              <span className="block mt-4">The Art</span>
              <span className="block bg-gradient-to-r from-[#B08D57] via-[#C89F65] to-[#D4AF37] bg-clip-text text-transparent font-light">of Care.</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-10"
            >
              <p className="text-[32px] font-thin text-slate-800 mb-5 tracking-[0.05em]">Kareem Hassanein</p>
              <div className="flex items-center justify-center gap-3">
                <div className="h-[0.5px] w-20 bg-gradient-to-r from-transparent via-[#B08D57]/40 to-[#B08D57]/60" />
                <div className="relative">
                  <div className="h-2 w-2 rounded-full bg-[#B08D57]/80" />
                  <div className="absolute inset-0 h-2 w-2 rounded-full bg-[#B08D57] animate-ping" />
                </div>
                <div className="h-[0.5px] w-20 bg-gradient-to-l from-transparent via-[#B08D57]/40 to-[#B08D57]/60" />
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600/90 mb-14 leading-[1.9] max-w-md mx-auto text-[16px] font-light"
            >
              Advanced physiotherapy combining evidence-based techniques with personalized attention for lasting results.
            </motion.p>

            <div className="space-y-3 max-w-sm mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  className="group relative block w-full text-center px-8 py-5 overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 transform"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#B08D57] via-[#C89F65] to-[#D4AF37] opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#E5C742] to-[#B08D57] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <span className="relative z-10 text-white font-medium tracking-[0.05em] text-[15px]">Book Your Assessment</span>
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link
                  href="/services"
                  className="group relative block w-full text-center px-8 py-5 overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 transform"
                >
                  <div className="absolute inset-0 bg-white/90 backdrop-blur-md" />
                  <div className="absolute inset-0 border border-slate-200/50 rounded-2xl" />
                  <div className="absolute inset-0 border border-[#B08D57]/0 group-hover:border-[#B08D57]/30 rounded-2xl transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#B08D57]/0 to-[#D4AF37]/0 group-hover:from-[#B08D57]/5 group-hover:to-[#D4AF37]/5 transition-all duration-500" />
                  <span className="relative z-10 text-slate-700 group-hover:text-[#B08D57] font-normal tracking-[0.05em] transition-colors duration-300 text-[15px]">Explore Services</span>
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B08D57]/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </Link>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-10 flex justify-center"
            >
              <div className="relative inline-flex items-center gap-1 px-6 py-3 overflow-hidden rounded-full group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#B08D57]/5 via-[#C89F65]/5 to-[#D4AF37]/5 backdrop-blur-sm" />
                <div className="absolute inset-0 border border-[#B08D57]/10 rounded-full" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#B08D57]/0 to-[#D4AF37]/0 group-hover:from-[#B08D57]/10 group-hover:to-[#D4AF37]/10 transition-all duration-700" />
                <span className="relative px-3 py-1 text-[11px] font-medium text-slate-700/80 tracking-wider">Direct Billing</span>
                <span className="relative text-[#B08D57]/40 text-[10px]">●</span>
                <span className="relative px-3 py-1 text-[11px] font-medium text-slate-700/80 tracking-wider">Evening Hours</span>
                <span className="relative text-[#B08D57]/40 text-[10px]">●</span>
                <span className="relative px-3 py-1 text-[11px] font-medium text-slate-700/80 tracking-wider">5+ Years Experience</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Desktop */}
      <section className="hidden lg:flex min-h-screen bg-gradient-to-br from-white via-gray-50/20 to-white pt-16 relative overflow-hidden">
        {/* Floating orbs for premium depth */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-[#B08D57]/5 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-[#D4AF37]/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="flex w-full">
          {/* Left content - with proper padding and centering */}
          <div className="w-1/2 flex items-center pl-[8%] pr-[6%] py-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-14"
              >
                <div className="inline-flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#B08D57]/50" />
                  <p className="text-[11px] uppercase tracking-[0.45em] text-[#B08D57] font-semibold">
                    Registered Physiotherapist
                  </p>
                  <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#B08D57]/50" />
                </div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-[72px] xl:text-[82px] font-thin text-slate-900 leading-[0.85] mb-16 tracking-[-0.04em]"
              >
                <span className="block">The Science</span>
                <span className="block bg-gradient-to-r from-[#B08D57] via-[#C89F65] to-[#D4AF37] bg-clip-text text-transparent font-extralight">of Recovery.</span>
                <span className="mt-8 block">The Art</span>
                <span className="block bg-gradient-to-r from-[#B08D57] via-[#C89F65] to-[#D4AF37] bg-clip-text text-transparent font-extralight">of Care.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
              >
                <p className="text-[38px] font-thin text-slate-800 mb-6 tracking-[0.08em]">Kareem Hassanein</p>
                <div className="flex items-center gap-4">
                  <div className="h-[0.5px] w-24 bg-gradient-to-r from-transparent via-[#B08D57]/40 to-[#B08D57]/60" />
                  <div className="relative">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#B08D57]/80" />
                    <div className="absolute inset-0 h-2.5 w-2.5 rounded-full bg-[#B08D57] animate-ping" />
                  </div>
                  <div className="h-[0.5px] w-24 bg-gradient-to-l from-transparent via-[#B08D57]/40 to-[#B08D57]/60" />
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[18px] text-gray-600/90 mb-16 leading-[1.95] max-w-xl font-light"
              >
                Advanced physiotherapy combining evidence-based techniques with personalized attention for lasting results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex gap-5 mb-14"
              >
                <Link
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  className="group relative px-12 py-5 overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1.5 transform inline-block"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#B08D57] via-[#C89F65] to-[#D4AF37] transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#E5C742] to-[#B08D57] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <span className="relative z-10 text-white font-medium tracking-[0.08em] text-[16px]">Book Your Assessment</span>
                  <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>

                <Link
                  href="/services"
                  className="group relative px-12 py-5 overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1.5 transform inline-block"
                >
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-md" />
                  <div className="absolute inset-0 border border-slate-200/40 rounded-2xl transition-all duration-500" />
                  <div className="absolute inset-0 border border-[#B08D57]/0 group-hover:border-[#B08D57]/30 rounded-2xl transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#B08D57]/0 to-[#D4AF37]/0 group-hover:from-[#B08D57]/5 group-hover:to-[#D4AF37]/5 transition-all duration-700" />
                  <span className="relative z-10 text-slate-700 group-hover:text-[#B08D57] font-normal tracking-[0.08em] transition-colors duration-300 text-[16px]">Explore Services</span>
                  <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B08D57]/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative inline-flex items-center gap-2 px-8 py-4 overflow-hidden rounded-full group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#B08D57]/5 via-[#C89F65]/5 to-[#D4AF37]/5 backdrop-blur-sm" />
                <div className="absolute inset-0 border border-[#B08D57]/10 rounded-full" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#B08D57]/0 to-[#D4AF37]/0 group-hover:from-[#B08D57]/10 group-hover:to-[#D4AF37]/10 transition-all duration-700" />
                <span className="relative px-3 py-1 text-[13px] font-medium text-slate-700/80 tracking-[0.08em]">Direct Billing</span>
                <span className="relative text-[#B08D57]/40 text-[12px]">●</span>
                <span className="relative px-3 py-1 text-[13px] font-medium text-slate-700/80 tracking-[0.08em]">Evening Hours</span>
                <span className="relative text-[#B08D57]/40 text-[12px]">●</span>
                <span className="relative px-3 py-1 text-[13px] font-medium text-slate-700/80 tracking-[0.08em]">5+ Years Experience</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right image - full height starting from top */}
          <div className="w-1/2 relative min-h-screen">
            <motion.div
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative h-full min-h-screen"
            >
              <Image
                src="/images/clinic-pic-may-2025.jpg"
                alt="KinetiKare Physiotherapy"
                fill
                priority
                className="object-cover"
                sizes="50vw"
              />
              
              {/* Premium multi-layer overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5" />
              {/* Subtle vignette effect */}
              <div className="absolute inset-0" style={{
                background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.08) 100%)'
              }} />
            </motion.div>
          </div>
        </div>
        
        {/* Premium scroll indicator */}
        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1
          }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 group cursor-pointer z-10"
          aria-label="Scroll to next section"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#B08D57]/10 rounded-full blur-xl group-hover:bg-[#B08D57]/20 transition-all duration-500" />
            <ChevronDownIcon className="h-8 w-8 text-[#B08D57]/60 group-hover:text-[#B08D57] transition-all duration-300" />
          </div>
        </motion.button>
      </section>
    </>
  );
}