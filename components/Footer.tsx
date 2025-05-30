"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Envelope, 
  Clock, 
  ArrowUp,
  FacebookLogo, 
  InstagramLogo, 
  LinkedinLogo 
} from "@phosphor-icons/react";
import Image from 'next/image';
import BackgroundTexture from './BackgroundTexture';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-gold flex-shrink-0" weight="duotone" />,
      text: '4631 Palladium Way, Unit 6, Burlington, ON L7M 0W9',
      href: 'https://maps.app.goo.gl/syZN4FUBgACrtqgK9',
      ariaLabel: 'View our location on Google Maps'
    },
    {
      icon: <Phone className="w-5 h-5 text-gold flex-shrink-0" weight="duotone" />,
      text: '(905) 634-6000',
      href: 'tel:+19056346000',
      ariaLabel: 'Call our office'
    },
    {
      icon: <Envelope className="w-5 h-5 text-gold flex-shrink-0" weight="duotone" />,
      text: 'kareem.hassanein@gmail.com',
      href: 'mailto:kareem.hassanein@gmail.com',
      ariaLabel: 'Email us'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '2:00 PM - 8:00 PM' },
    { day: 'Saturday', hours: 'Available upon request' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/kareem-hassanein-physiotherapy/',
      icon: <LinkedinLogo weight="fill" className="w-6 h-6" />
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle navigation for footer links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // For hash links on the home page
    if (href.startsWith('/#') && window.location.pathname === '/') {
      e.preventDefault();
      const targetId = href.substring(2); // Remove /# part
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerOffset = document.querySelector('header')?.offsetHeight || 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    // For non-home pages with hash links, navigate to the home page first
    else if (href.startsWith('/#') && window.location.pathname !== '/') {
      // Let the default navigation happen - will navigate to home page with hash
    }
  };

  return (
    <footer className="bg-gradient-to-b from-primary-900 to-primary-950 text-white pt-16 relative overflow-hidden">
      {/* Premium subtle background pattern */}
      <BackgroundTexture texture="noise" opacity={0.02} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Main footer content with map */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Column 1: Contact & Info (4 cols) */}
          <div className="md:col-span-1 lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-6" aria-label="Return to homepage">
                <div className="flex items-center">
                  <Image
                    src="/images/kareem-profile.png"
                    alt="Kareem Hassanein registered physiotherapist Burlington Waterdown"
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-gold/50 mr-3 shadow-md shadow-gold/20"
                  />
                  <div>
                    <h3 className="font-heading text-xl text-white">KinetiKare <span className="text-gold">Physiotherapy</span></h3>
                    <p className="text-xs text-white/90 font-medium">Kareem Hassanein</p>
                    <p className="text-xs text-white/80">Registered Physiotherapist</p>
                  </div>
                </div>
              </Link>
              
              <div className="mb-8">
                <h3 className="text-base font-semibold mb-4 text-white relative inline-flex">
                  <span className="relative z-10">Contact Information</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold/60 rounded-full -z-10"></span>
                </h3>
                <div className="space-y-3 text-white/90">
                  {contactInfo.map((item, index) => (
                    <p key={index} className="flex items-start">
                      <span className="mt-1">{item.icon}</span>
                      {item.href ? (
                        <a href={item.href} className="ml-3 hover:text-gold transition-colors duration-300 text-sm" aria-label={item.ariaLabel}>
                          {item.text}
                        </a>
                      ) : (
                        <span className="ml-3 text-sm">{item.text}</span>
                      )}
                    </p>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-base font-semibold mb-4 text-white relative inline-flex">
                  <span className="relative z-10">Business Hours</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold/60 rounded-full -z-10"></span>
                </h3>
                <ul className="space-y-3 text-white/90">
                  {businessHours.map((schedule) => (
                    <li key={schedule.day} className="flex flex-col sm:flex-row sm:justify-between text-sm">
                      <span className="font-medium mb-1 sm:mb-0">{schedule.day}</span>
                      <span className="text-white bg-gold/30 px-2 py-1 rounded-md font-medium inline-block max-w-full shadow-sm">{schedule.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Social links */}
            <div className="mt-8 flex space-x-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  aria-label={`Visit ${social.name} profile`}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-gold hover:text-white transition-all duration-300 flex items-center justify-center hover:scale-110 transform shadow-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 3: Google Map (5 cols) */}
          <div className="md:col-span-2 lg:col-span-8 rounded-xl overflow-hidden h-[300px] relative shadow-lg border border-white/20">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.518670972593!2d-79.82630139999999!3d43.4079889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b61568c54cbff%3A0x433767b454bd4446!2sEndorphins%20Health%20and%20Wellness%20Centre!5e0!3m2!1sen!2sca!4v1745456201323!5m2!1sen!2sca" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Endorphins Health and Wellness Centre location"
              className="transition-all duration-500 hover:opacity-95"
            ></iframe>
          </div>
        </div>
        
        {/* Bottom section with copyright and legal links */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-white">
            © {currentYear} <span className="text-white font-medium">KinetiKare Physiotherapy</span>. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end mt-4 md:mt-0 gap-4 md:space-x-6 text-xs text-white">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-gold transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
      
      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-gold shadow-lg hover:bg-gold-dark transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold z-50 flex items-center justify-center"
        aria-label="Back to top"
      >
        <ArrowUp weight="bold" className="w-5 h-5 text-white" />
      </button>
    </footer>
  );
} 