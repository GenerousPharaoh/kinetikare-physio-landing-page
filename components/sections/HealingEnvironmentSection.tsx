'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const HealingEnvironmentSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const clinicImages = [
    {
      src: '/images/facebook-image.jpg',
      alt: 'Modern Clinic Building',
      title: 'Modern Clinic Building'
    },
    {
      src: '/images/clinic-reception-new-may-2025.jpg',
      alt: 'Welcoming Reception Area',
      title: 'Welcoming Reception Area'
    },
    {
      src: '/images/clinic-pic-may-2025.jpg',
      alt: 'Dedicated Treatment Space',
      title: 'Dedicated Treatment Space'
    }
  ];

  // Simplified animations for mobile to prevent flashing
  const mobileAnimations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.4, ease: "easeOut" }
  };

  const desktopAnimations = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="mt-24 mb-16"
          initial={isMobile ? mobileAnimations.initial : desktopAnimations.initial}
          whileInView={isMobile ? mobileAnimations.animate : desktopAnimations.animate}
          transition={isMobile ? mobileAnimations.transition : desktopAnimations.transition}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Your Healing Environment
            </h3>
            <div className="w-24 h-1 bg-[#B08D57] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clinicImages.map((image, index) => (
              <motion.div
                key={index}
                className={`relative group overflow-hidden rounded-2xl shadow-lg ${
                  isMobile 
                    ? 'hover:shadow-xl transition-shadow duration-300' 
                    : 'hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'
                }`}
                initial={isMobile ? mobileAnimations.initial : desktopAnimations.initial}
                whileInView={isMobile ? mobileAnimations.animate : desktopAnimations.animate}
                transition={isMobile ? 
                  { ...mobileAnimations.transition, delay: index * 0.1 } : 
                  { ...desktopAnimations.transition, delay: index * 0.15 }
                }
                viewport={{ once: true, margin: "-100px" }}
                style={{ 
                  transform: isMobile ? 'translateZ(0)' : undefined,
                  willChange: isMobile ? 'auto' : 'transform, opacity'
                }}
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={`object-cover ${
                      isMobile 
                        ? 'transition-opacity duration-300' 
                        : 'transition-transform duration-500 group-hover:scale-110'
                    }`}
                    style={{
                      filter: 'contrast(1.05) saturate(1.1) brightness(1.02)',
                      transform: isMobile ? 'translateZ(0)' : undefined
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-md border border-white/40">
                      <h4 className="text-sm font-semibold text-slate-800">
                        {image.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HealingEnvironmentSection; 