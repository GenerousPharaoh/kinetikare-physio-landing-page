"use client";

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';
// import { MapPin, Navigation, Compass, Clock, Building } from 'lucide-react';
import { MapPinIcon, ClockIcon, BuildingOffice2Icon, MapIcon, ArrowRightIcon } from '@heroicons/react/24/outline'; // Using relevant outline icons
import Image from 'next/image';

export default function ServiceAreasSection() {
  const { ref, isVisible } = useScrollAnimation();

  // Service area details
  const areas = [
    {
      name: "Burlington Central",
      icon: MapPinIcon,
      details: "Conveniently located near major routes (QEW, 407)."
    },
    {
      name: "North Burlington",
      icon: MapIcon,
      details: "Serving communities like Alton Village and Millcroft."
    },
    {
      name: "Waterdown",
      icon: BuildingOffice2Icon,
      details: "Easily accessible for Waterdown residents."
    },
    {
      name: "Oakville & Hamilton",
      icon: MapIcon,
      details: "Welcoming patients from neighbouring cities."
    }
  ];

  return (
    <section id="service-areas" className="section bg-primary-900 text-neutral-200 relative">
      <div className="container mx-auto px-4">
        <div>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
              Serving Burlington, Waterdown and Beyond
            </h2>
            <p className="section-subtitle text-lg text-neutral-300 mx-auto max-w-3xl">
              Providing accessible physiotherapy care to our local communities.
            </p>
            <div className="w-20 h-px bg-accent mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left Column: Content & Area List - Adjust colors */}
            <div> 
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-6">
                Conveniently Located Clinic
              </h3>
              <p className="text-neutral-300 leading-relaxed mb-8">
                My clinic, located within Endorphins Health and Wellness Centre in North Burlington, is easily accessible for residents throughout the area. 
                Having previously practiced extensively in Waterdown, I continue to proudly serve patients from both the Burlington and Waterdown communities, offering a modern, 
                comfortable environment equipped with the latest physiotherapy technology. 
                Ample free parking is available.
              </p>
              
              {/* Service Area Grid - Dark card style */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {areas.map((area, index) => {
                  const IconComponent = area.icon;
                  return (
                    <div 
                      key={area.name}
                      className="bg-primary-800 p-5 rounded-lg border border-primary-700 shadow-sm"
                    >
                      <div className="flex items-center mb-2">
                         {/* Icon Styling */}
                         <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-md flex items-center justify-center mr-3">
                          <IconComponent className="w-4 h-4 text-accent" />
                        </div>
                        {/* Title Color */}
                        <h4 className="font-semibold text-white text-lg">{area.name}</h4>
                      </div>
                      {/* Description Color */}
                      <p className="text-sm text-neutral-300">{area.details}</p>
                    </div>
                  );
                })}
              </div>
              
               {/* Contact/Booking Link - Use accent */}
               <div className="mt-10">
                 <Link href="/#contact" className="inline-flex items-center font-medium text-accent hover:text-accent-light group">
                   Find Us or Book Online
                   <ArrowRightIcon className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
                 </Link>
               </div>
            </div>
            
            {/* Right Column: Image - Adjust border */}
            <div 
              className={`relative h-80 md:h-96 lg:h-full rounded-lg overflow-hidden shadow-lg border border-primary-700`}
            >
              <Image 
                src="/images/clinic-pic-3.jpg" 
                alt="Reception area at Endorphins Health and Wellness Centre"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
       {/* Ensure subtle Bottom Divider is present and correctly styled */}
       <div className="absolute bottom-0 left-0 right-0 h-px bg-primary-700"></div>
    </section>
  );
}