'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { MapPinIcon, ClockIcon, PhoneIcon } from '@heroicons/react/24/outline';

const HealingEnvironmentSection = () => {
  const { ref: sectionRef, animationProps } = useScrollAnimation({ yOffset: 30 });
  const { ref: contentRef, containerVariants, itemVariants, isInView } = useStaggeredAnimation({ 
    delay: 0.2,
    duration: 0.5 
  });

  const supportingImages = [
    {
      src: '/images/facebook-image.jpg',
      alt: 'Clinic Building',
      title: 'Our Location'
    },
    {
      src: '/images/clinic-reception-new-may-2025.jpg',
      alt: 'Reception Area',
      title: 'Welcoming Reception'
    }
  ];

  const clinicFeatures = [
    {
      icon: MapPinIcon,
      title: "Convenient Location",
      description: "Easily accessible in Burlington with ample parking"
    },
    {
      icon: ClockIcon,
      title: "Flexible Hours",
      description: "Extended hours to accommodate your schedule"
    },
    {
      icon: PhoneIcon,
      title: "Direct Access",
      description: "One-on-one care with your dedicated physiotherapist"
    }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      {...animationProps}
      className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header - More prominent */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-6 tracking-[-0.03em]">
            Where Your <span className="text-[#B08D57]">Recovery Continues</span>
          </h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#B08D57] to-transparent mx-auto mb-8"></div>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            A modern, welcoming space designed to support your recovery journey
          </p>
        </motion.div>

        {/* Main Content Grid - Hero image as focal point */}
        <motion.div 
          ref={contentRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16"
        >
          {/* Left: Hero Image - Focal Point */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/clinic-pic-may-2025.jpg"
                  alt="Modern Treatment Room at KinetiKare"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-60"></div>
                
                {/* Overlay text on image */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                  <div className="bg-gradient-to-r from-black/50 to-transparent">
                    <div className="px-4 py-3 sm:px-6 sm:py-4">
                      <h3 className="text-white text-base sm:text-lg lg:text-xl font-light mb-0.5">
                        The Treatment Space
                      </h3>
                      <p className="text-white/85 text-xs sm:text-sm font-light">
                        A calm, private environment focused on your recovery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content with Features */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2 space-y-8">
            <div>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                A dedicated space for personalized, one-on-one physiotherapy care. Each session is tailored 
                to your specific needs and recovery goals.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-6">
              {clinicFeatures.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#B08D57]/10 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-[#B08D57]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-normal text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-[#B08D57] text-white rounded-xl font-normal shadow-lg hover:bg-[#D4AF37] transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Book Your Visit
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Supporting Images - Smaller, secondary focus */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {supportingImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="aspect-[16/10] relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="bg-gradient-to-r from-black/50 to-transparent">
                    <div className="px-4 py-3">
                      <h4 className="text-white text-sm sm:text-base font-light">
                        {image.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HealingEnvironmentSection; 