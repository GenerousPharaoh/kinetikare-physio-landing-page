"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import { GraduationCap, Award, Heart, Store } from 'lucide-react';
import { AcademicCapIcon, TrophyIcon, HeartIcon, BuildingStorefrontIcon } from '@heroicons/react/24/solid';
import { FaGraduationCap, FaCertificate, FaHeartbeat, FaUsers } from 'react-icons/fa';
import { LightBulbIcon, UserGroupIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
// import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import IconBadge from '../ui/IconBadge';

export default function AboutSection() {
  // Removed animation variants since they're no longer needed

  const qualifications = [
    {
      id: 'education',
      icon: FaGraduationCap,
      title: 'Education',
      items: [
        'MSc Physiotherapy (Distinction), Robert Gordon University',
        'BSc Kinesiology (Honours), McMaster University'
      ],
      logos: [
        {
          src: "/images/robert-gordon-university-logo-png_seeklogo-341455.png",
          alt: "Robert Gordon University Logo",
          link: "https://www.rgu.ac.uk/"
        },
        {
          src: "/images/mcmaster-university-logo-png_seeklogo-90018.png",
          alt: "McMaster University Logo",
          link: "https://www.mcmaster.ca/"
        }
      ]
    },
    {
      id: 'certification',
      icon: FaCertificate,
      title: 'Advanced Certifications',
      items: [
        'FCAMPT Level 2 (Manual & Manipulative Therapy)',
        'Certified Dry Needling Practitioner',
      ]
    },
    {
      id: 'experience',
      icon: FaHeartbeat,
      title: 'Experience & Athletic Background',
      items: [
        '5+ years clinical practice',
        '6,000+ hours personal training',
        'Former Assistant Fitness Manager, GoodLife Fitness',
        'Semi-professional soccer (Cove Rangers, Scotland)',
        'Canadian Soccer League (Brantford Galaxy)'
      ]
    },
    {
      id: 'affiliations',
      icon: FaUsers,
      title: 'Professional Affiliations',
      items: [],
      logos: [
        {
          src: "/images/canadian-physio-association-logo.png",
          alt: "Canadian Physiotherapy Association",
          link: "https://physiotherapy.ca/"
        },
        {
          src: "/images/college-of-physiotherapists-of-ontario-logo.webp",
          alt: "College of Physiotherapists of Ontario",
          link: "https://collegept.org/"
        },
        {
          src: "/images/endorphins-health-and-wellness-centre-logo.png",
          alt: "Endorphins Health & Wellness Centre",
          link: "https://endorphinshealth.com/"
        }
      ]
    }
  ];

  const credentials = [
    'Registered Physiotherapist',
    'Sports Rehabilitation',
    'Manual Therapy'
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-pattern-grid opacity-[0.03]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-[#B08D57]/10 text-[#B08D57] text-sm font-medium rounded-full mb-4">
            About Kareem
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
            A Journey of Experience and Empathy
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            The fusion of professional expertise and personal experience that shapes my approach to physiotherapy
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center mb-20">
          {/* Image column - significantly reduced size */}
          <div className="lg:col-span-2 relative max-w-sm mx-auto lg:max-w-md">
            <div className="bg-white rounded-lg shadow-xl p-3 relative z-10">
              <Image
                src="/images/kareem-profile.png"
                alt="Kareem Hassanein - Professional Physiotherapist"
                width={320}
                height={380}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-2/3 h-1/3 border-r-2 border-b-2 border-[#B08D57]/30 rounded-br-lg"></div>
            <div className="absolute -top-4 -left-4 w-1/3 h-1/3 border-l-2 border-t-2 border-[#B08D57]/30 rounded-tl-lg"></div>
          </div>
          
          {/* Content column */}
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold text-primary-800 mb-6 relative inline-block pb-2">
              A Different Approach to Care
              <span className="absolute bottom-0 left-0 w-24 h-1 bg-[#B08D57]"></span>
            </h3>
            
            <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-primary-800 prose-p:text-primary-700 prose-p:leading-relaxed mb-8">
              <p>
                Behind every treatment plan is a physiotherapist who has stood in your shoes. My journey into physiotherapy was forged through personal experience—from competitive soccer and a Kinesiology degree at McMaster to navigating my own significant injuries, including debilitating disc herniations.
              </p>

              <blockquote className="italic border-l-4 border-[#B08D57] pl-4 py-2 my-6">
                Having sat on both sides of the treatment table, I recognize the profound difference between being processed through a system and being truly understood.
              </blockquote>

              <p>
                My practice is built on firsthand experience—both as a clinician and a patient who has navigated the frustrations of an impersonal healthcare system. I don't subscribe to high-volume, prescriptive protocols; instead, I focus on individualized care with plans tailored to your unique needs.
              </p>
            </div>
            
            <div className="flex gap-4">
              <Link
                href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#B08D57] hover:bg-[#C9A769] text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1"
              >
                Contact Kareem
              </Link>

              <Link
                href="/about"
                className="bg-white text-primary-800 hover:bg-gray-50 border border-primary-800/20 font-medium py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1"
              >
                Full Professional Biography
              </Link>
            </div>
          </div>
        </div>
        
        {/* Clinic images section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary-800 mb-12 text-center relative pb-3">
            Your Healing Environment
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#B08D57]"></span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Exterior clinic image - now first */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl transition-all duration-500 ease-in-out group hover:shadow-3xl transform hover:-translate-y-1">
              <div className="aspect-[16/9] relative">
                <Image
                  src="/images/facebook-image.jpg"
                  alt="Clinic Exterior"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 600px"
                  style={{
                    filter: 'brightness(1) contrast(1.05) saturate(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                  <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg inline-block">
                    <h4 className="text-xl font-semibold text-white mb-1">Modern Clinic Building</h4>
                    <div className="w-16 h-0.5 bg-[#B08D57]"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Reception area image - now second */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl transition-all duration-500 ease-in-out group hover:shadow-3xl transform hover:-translate-y-1">
              <div className="aspect-[16/9] relative">
                <Image
                  src="/images/clinic-pic-3.jpg"
                  alt="Reception Area"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 600px"
                  style={{
                    filter: 'brightness(1) contrast(1.05) saturate(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                  <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg inline-block">
                    <h4 className="text-xl font-semibold text-white mb-1">Welcoming Reception Area</h4>
                    <div className="w-16 h-0.5 bg-[#B08D57]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Premium treatment room image with enhanced elegant styling */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl transition-all duration-500 ease-in-out group hover:shadow-3xl transform hover:-translate-y-1">
            <div className="aspect-[21/9] relative">
              <Image
                src="/images/clinic-pic-may-2025.jpg"
                alt="Treatment Room"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 1200px"
                style={{
                  filter: 'brightness(1) contrast(1.05) saturate(1)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 w-full p-4 md:p-8 text-center z-10">
                 <div className="bg-black/30 backdrop-blur-sm p-3 md:p-6 rounded-lg inline-block max-w-xs sm:max-w-sm md:max-w-xl">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">A calming space designed for your comfort and recovery</h4>
                  <div className="w-16 md:w-24 h-1 bg-[#B08D57] mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Philosophy of Practice - Redesigned for Light Theme */}
        <div className="max-w-4xl mx-auto mb-20">
          {/* Changed section background to white, added border, adjusted shadow and padding */}
          <div className="bg-white p-8 md:p-10 rounded-xl border border-neutral-200 shadow-xl">
            <h3 className="text-3xl font-bold text-primary-800 mb-10 text-center relative pb-3">
              Philosophy of Practice
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#B08D57]"></span>
            </h3>
            
            {/* Changed top border of card grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10 pt-8 border-t border-neutral-200">
              {/* Card 1: Root Cause Resolution - Redesigned */}
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col items-center text-center">
                <LightBulbIcon className="h-10 w-10 md:h-12 md:w-12 text-[#B08D57] mb-5" />
                <h4 className="font-semibold text-lg md:text-xl text-primary-800 mb-3">Root Cause Resolution</h4>
                <p className="text-primary-700 leading-relaxed text-sm">I don't just treat symptoms; I investigate underlying movement patterns, compensations, and lifestyle factors to address what's truly driving your pain or limitation.</p>
              </div>
              
              {/* Card 2: Collaborative Partnership - Redesigned */}
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col items-center text-center">
                <UserGroupIcon className="h-10 w-10 md:h-12 md:w-12 text-[#B08D57] mb-5" />
                <h4 className="font-semibold text-lg md:text-xl text-primary-800 mb-3">Collaborative Partnership</h4>
                <p className="text-primary-700 leading-relaxed text-sm">Your input is essential to successful outcomes. I listen intently, explain clearly, and involve you actively in every treatment decision.</p>
              </div>
              
              {/* Card 3: Personalized Progression - Redesigned */}
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col items-center text-center">
                <AdjustmentsHorizontalIcon className="h-10 w-10 md:h-12 md:w-12 text-[#B08D57] mb-5" />
                <h4 className="font-semibold text-lg md:text-xl text-primary-800 mb-3">Personalized Progression</h4>
                <p className="text-primary-700 leading-relaxed text-sm">Recovery isn't linear. Your treatment evolves as you do, with continual reassessment and adaptation to optimize your unique healing journey.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Qualifications Section */}
        <div className="max-w-5xl mx-auto"> 
          <h3 className="text-3xl font-bold text-primary-800 mb-12 text-center relative pb-4">
            Qualifications
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-1.5 bg-gradient-to-r from-[#9a7744] via-[#B08D57] to-[#d1b174]"></span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {qualifications.map((qual) => {
              const IconComponent = qual.icon; 
              return (
                <div 
                  key={qual.id}
                  className="bg-gradient-to-b from-white to-gray-50 p-8 rounded-xl shadow-lg border border-neutral-200 hover:shadow-2xl transition-all duration-500 h-full transform hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#B08D57]/10 to-transparent"></div>
                  
                  <div className="flex items-center mb-7">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-primary-700 to-primary-900 mr-5 shadow-lg relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#B08D57]/50 to-transparent opacity-50 animate-pulse-slow"></div>
                      <IconComponent className="h-7 w-7 text-[#B08D57]" />
                    </div>
                    <h4 className="font-bold text-2xl text-primary-800 tracking-tight">{qual.title}</h4>
                  </div>
                  
                  {qual.items.length > 0 && (
                    <ul className={`space-y-4 text-primary-700 mb-6 ${qual.id === 'certification' ? 'mb-8' : ''}`}>
                      {qual.items.map((item, i) => (
                        <li key={i} className="flex items-start group">
                          <span className="text-[#B08D57] mr-3 mt-1 text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">•</span>
                          <span className={`${qual.id === 'certification' ? 'text-xl font-medium' : 'text-lg'} group-hover:text-primary-900 transition-colors duration-300`}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {qual.logos && (
                    <div className={`${qual.items.length > 0 ? 'mt-8 pt-6 border-t border-neutral-200' : 'mt-4'}`}>
                      <div className={`flex flex-wrap ${qual.id === 'education' ? 'gap-8' : 'gap-8'} items-center justify-center`}>
                        {qual.logos.map((logo, i) => (
                          <Link 
                            key={i} 
                            href={logo.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-95 transition-all duration-300 bg-gradient-to-b from-white to-gray-50 p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl border border-neutral-100 flex items-center justify-center transform hover:-translate-y-1 relative overflow-hidden group"
                          >
                            {/* Subtle corner accent */}
                            <div className="absolute top-0 right-0 w-10 h-10 bg-gradient-to-bl from-primary-200/20 to-transparent"></div>
                            <div className="absolute -bottom-1 -left-1 w-10 h-10 bg-gradient-to-tr from-[#B08D57]/10 to-transparent"></div>
                            
                            {/* Enhanced hover effect */}
                            <div className="absolute inset-0 bg-primary-50/0 group-hover:bg-primary-50/30 transition-colors duration-300"></div>
                            
                            <Image
                              src={logo.src}
                              alt={logo.alt}
                              width={qual.id === 'education' ? 140 : 170}
                              height={qual.id === 'education' ? 80 : 100}
                              className={`object-contain ${qual.id === 'education' ? 'h-20' : 'h-24'} transition-transform duration-300 group-hover:scale-105`}
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Enhanced empty space filler for Advanced Certifications */}
                  {qual.id === 'certification' && qual.items.length > 0 && !qual.logos && (
                    <div className="mt-6 pt-6 border-t border-neutral-200">
                      <div className="flex justify-center">
                        <div className="bg-primary-50 px-8 py-4 rounded-lg border border-primary-100">
                          <p className="text-center text-primary-700 italic">Certified by leading professional organizations</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
