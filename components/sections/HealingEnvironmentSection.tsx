'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const HealingEnvironmentSection = () => {
  const { ref: sectionRef, animationProps } = useScrollAnimation({ yOffset: 30 });
  const { ref: imagesRef, containerVariants, itemVariants, isInView } = useStaggeredAnimation({ 
    delay: 0.2,
    duration: 0.5 
  });

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

  return (
    <motion.section 
      ref={sectionRef}
      {...animationProps}
      className="py-12 md:py-16 bg-gray-50"
    >
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Your Healing Environment
            </h3>
            <div className="w-24 h-1 bg-[#B08D57] mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.div 
            ref={imagesRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {clinicImages.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group overflow-hidden rounded-2xl shadow-lg"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{
                      filter: 'contrast(1.05) saturate(1.1) brightness(1.02)'
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-md border border-white/40">
                      <h4 className="text-sm font-semibold text-slate-800">
                        {image.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HealingEnvironmentSection; 