"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import GlassCard from '@/components/ui/GlassCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Lucide React Icons (excluding Crutches and others being replaced)
import { 
  Dumbbell, 
  Pin, 
  TrendingUp 
} from 'lucide-react';

// Heroicons for new service icons
import { SparklesIcon, BoltIcon } from '@heroicons/react/24/outline';

// Local Crutches Icon
import CrutchesIcon from '@/components/icons/CrutchesIcon';

interface ServiceProps {
  id: string;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  onBookLinkClick?: () => void;
}

const ServiceCard = ({ id, title, description }: ServiceProps) => {
  return (
    <div className="h-full bg-white rounded-xl shadow-lg border border-neutral-200 group hover:shadow-2xl hover:border-[#B08D57] hover:border-opacity-80 transition-all duration-300 transform hover:-translate-y-1.5">
      <div className="p-8 flex flex-col h-full">
        <h3 className="text-2xl font-bold text-primary-800 mb-1 tracking-tight">{title}</h3>
        <div className="w-1/4 h-px bg-[#B08D57] mt-1 mb-4 group-hover:w-1/3 transition-all duration-300"></div>
        
        <p className="text-base text-neutral-700 leading-relaxed mb-6 flex-grow">{description}</p>
        
      </div>
    </div>
  );
};

  const services: ServiceProps[] = [
    {
      id: 'manual-therapy',
      title: 'Manual Therapy',
      description: 'Hands-on techniques to manipulate joints and soft tissue for improved mobility and reduced pain.'
    },
    {
      id: 'sports-injury',
      title: 'Sports Injury Rehab',
      description: 'Rehabilitation for athletes recovering from sports injuries, with a focus on safe return to activity and performance enhancement.'
    },
    {
      id: 'exercise-therapy',
      title: 'Exercise Therapy',
      description: 'Customized exercise programs to restore function, build strength, and prevent future injuries.'
    },
    {
      id: 'dry-needling',
      title: 'Dry Needling',
      description: 'Precision technique using thin needles to release trigger points and relieve muscular pain.'
    },
    {
      id: 'post-surgical',
      title: 'Post-Surgical Rehab',
      description: 'Structured rehabilitation plans to optimize recovery after surgery and restore normal function.'
    },
    {
      id: 'chronic-pain',
      title: 'Chronic Pain Management',
      description: 'Evidence-based strategies to manage persistent pain and improve quality of life.'
    }
];

export default function ServicesSection({ onBookLinkClick }: ServicesSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" ref={ref} className="py-24 bg-gray-50 relative">
      <div className="absolute inset-0 bg-pattern-dots opacity-[0.03]"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -20% 0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
            Physiotherapy Services
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Professional care tailored to your unique needs, combining advanced techniques with personalized attention.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
              
        {/* Your Healing Environment - Three Images Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Your Healing Environment
            </h3>
            <div className="w-24 h-1 bg-[#B08D57] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Image */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/facebook-image.jpg"
                  alt="Modern Clinic Building"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{
                    filter: 'contrast(1.05) saturate(1.1) brightness(1.02)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-md border border-white/40">
                    <h4 className="text-sm font-semibold text-slate-800">Modern Clinic Building</h4>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Second Image */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/clinic-reception-new-may-2025.jpg"
                  alt="Welcoming Reception Area"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{
                    filter: 'contrast(1.05) saturate(1.1) brightness(1.02)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-md border border-white/40">
                    <h4 className="text-sm font-semibold text-slate-800">Welcoming Reception Area</h4>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Third Image */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/clinic-pic-may-2025.jpg"
                  alt="Dedicated Treatment Space"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{
                    filter: 'contrast(1.05) saturate(1.1) brightness(1.02)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-md border border-white/40">
                    <h4 className="text-sm font-semibold text-slate-800">Dedicated Treatment Space</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 max-w-4xl mx-auto text-center bg-white p-10 rounded-xl shadow-lg border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-primary-800 mb-4">
            One-on-One Dedicated Care
          </h3>
          <p className="text-lg text-primary-600 mb-8">
            Every session focuses entirely on you. No rushed appointments or delegated care. I work directly with each patient to ensure comprehensive, focused treatment at every visit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://endorphinshealth.janeapp.com/#/staff_member/42"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#B08D57] hover:bg-[#C9A769] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <CalendarDaysIcon className="h-5 w-5 mr-2" /> Book Your First Session
            </a>
            <Link 
              href="/services"
              className="bg-white text-primary-800 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center border border-primary-800/20 shadow-sm hover:shadow-md transform hover:-translate-y-1"
            >
              Learn More About Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
