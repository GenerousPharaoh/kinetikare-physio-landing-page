"use client";

import React from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import { GraduationCap, Award, Heart, Store } from 'lucide-react';
import { AcademicCapIcon, TrophyIcon, HeartIcon, BuildingStorefrontIcon } from '@heroicons/react/24/solid';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  const qualifications = [
    {
      id: 'education',
      // icon: <GraduationCap className="w-5 h-5 text-teal-500" />,
      icon: AcademicCapIcon,
      title: 'Education',
      items: [
        'Master of Science in Physical Therapy',
        'Bachelor of Science in Kinesiology'
      ]
    },
    {
      id: 'certification',
      // icon: <Award className="w-5 h-5 text-teal-500" />,
      icon: TrophyIcon,
      title: 'Certifications',
      items: [
        'Advanced Manual & Manipulative Therapy (CAMPT)',
        'Certified Dry Needling Practitioner',
        'Sports Rehabilitation Specialist'
      ]
    },
    {
      id: 'experience',
      // icon: <Heart className="w-5 h-5 text-teal-500" />,
      icon: HeartIcon,
      title: 'Experience',
      items: [
        '10+ years of clinical experience',
        'Worked with professional athletes',
        'Specialized in complex injury rehabilitation'
      ]
    },
    {
      id: 'affiliations',
      // icon: <Store className="w-5 h-5 text-teal-500" />,
      icon: BuildingStorefrontIcon,
      title: 'Affiliations',
      items: [
        'Canadian Physiotherapy Association',
        'Orthopaedic Division of CPA',
        'Canadian Academy of Manipulative Physiotherapy'
      ]
    }
  ];

  return (
    // Add top border for separation
    <section id="about" className="section bg-primary-900 text-neutral-200 overflow-hidden relative border-t border-primary-700 pt-20 md:pt-28">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`transition-opacity duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Section Header - Adjust text colors */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
              About Kareem
            </h2>
            <p className="section-subtitle text-lg text-neutral-300 mx-auto max-w-3xl">
              A dedicated professional committed to your optimal health and recovery
            </p>
             {/* Accent separator */}
             <div className="w-20 h-px bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Image column */}
            <div 
              className={`transition-all duration-700 ease-out delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            >
              <div className="relative">
                {/* Removed the background accent div */}
                
                {/* Main profile image */}
                <div className="relative rounded-lg overflow-hidden shadow-xl w-full max-w-sm mx-auto lg:max-w-md"> 
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/kareem-profile.png"
                      alt="Kareem Hassanein - Professional Physiotherapist"
                      width={400}
                      height={500}
                      sizes="(max-width: 640px) 90vw, (max-width: 768px) 40vw, 400px"
                      className="w-full h-auto object-cover"
                      quality={85}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0YPh/HwAEJgJmXaiXvwAAAABJRU5ErkJggg=="
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content column - Adjust text colors */}
            <div 
              className={`transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            >
              {/* Heading with white text */}
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-white mb-6">
                Your Path to Optimal Health
              </h3>
              
              {/* Paragraph text color already neutral-200 */}
              <div className="space-y-4 text-neutral-200 leading-relaxed">
                <p>
                  With over a decade of experience as a physiotherapist, I bring advanced manual therapy skills, 
                  evidence-based practice, and a personalized approach to every treatment session.
                </p>
                <p>
                  Building on extensive experience, including several years dedicatedly serving the Waterdown community, 
                  my focus is always on achieving the best possible outcomes for my patients. 
                </p>
                <p>
                  My treatment philosophy centers on identifying the root cause of your symptoms rather than just 
                  addressing the pain. This comprehensive approach leads to more effective and lasting results.
                </p>
                <p>
                  Whether you&apos;re recovering from an injury, managing chronic pain, or seeking to optimize 
                  your physical performance, I&apos;m committed to helping you achieve your health goals through 
                  dedicated one-on-one care.
                </p>
              </div>
              
              {/* Qualifications grid - Moved below the main 2-column layout */}
              {/* 
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                ...
              </div>
              */}
            </div>
          </div> {/* End of main 2-column grid */} 

          {/* Qualifications Section - Now below the main grid */}
          <div className="mt-20 lg:mt-24 max-w-4xl mx-auto"> {/* Added margin-top, centered, max-width */} 
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">My Qualifications</h3> {/* Added title */} 
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {qualifications.map((qual, index) => {
                const IconComponent = qual.icon; 
                return (
                  <div 
                    key={qual.id}
                    className="bg-primary-800 p-6 rounded-xl shadow-lg border-l-4 border-accent transition-all duration-300 hover:shadow-xl hover:border-accent/80"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-primary-700 rounded-lg mr-4">
                        <IconComponent className="w-6 h-6 text-accent" aria-hidden="true" />
                      </div>
                      <h4 className="font-semibold text-white text-lg">{qual.title}</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-neutral-300 pl-1">
                      {qual.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-accent mr-2.5 mt-1 inline-block w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" aria-hidden="true"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* REMOVED Subtle Bottom Divider */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-px bg-primary-700"></div> */}
    </section>
  );
}
