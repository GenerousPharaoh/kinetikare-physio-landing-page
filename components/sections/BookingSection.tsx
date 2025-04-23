"use client";

import React from 'react';
import Link from 'next/link';
// import { Phone, Calendar } from 'lucide-react';
import { PhoneIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface BookingSectionProps {
  onNavLinkClick?: (targetId: string) => void; 
}

export default function BookingSection({ onNavLinkClick }: BookingSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  // Simplified handler for contact link
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerOffset = document.querySelector('header')?.offsetHeight || 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="booking" className="section bg-primary-900 text-neutral-200 relative"> {/* Changed bg, added relative */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-5">
          Ready to Start Your Recovery?
        </h2>
        <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
          Take the first step towards a pain-free life. Book your appointment online or contact the clinic today.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          {/* Online Booking Button - Use btn-primary (accent) */}
          <Link 
            href="https://endorphinshealth.janeapp.com/#/staff_member/42"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent text-white text-base font-medium rounded-full shadow-md hover:shadow-lg transition transform duration-300 hover:scale-[1.02] w-full sm:w-auto"
          >
            <CalendarDaysIcon className="w-5 h-5 mr-2" />
            Book Online Now
          </Link>
          
          {/* Contact Button - Use subtle dark/ghost style */}
          <Link 
            href="/#contact" 
            onClick={handleContactClick}
            className="inline-flex items-center justify-center bg-primary-800/40 border border-primary-700/30 text-neutral-200 hover:bg-primary-800/70 hover:border-accent/30 px-6 py-3 rounded-lg transition-colors duration-300 text-center"
          >
             <PhoneIcon className="w-5 h-5 mr-2" />
             Contact Clinic
          </Link>
        </div>
      </div>
       {/* Subtle Bottom Divider */}
       <div className="absolute bottom-0 left-0 right-0 h-px bg-primary-700"></div>
    </section>
  );
}
