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
      ariaLabel: 'View my location on Google Maps'
    },
    {
      icon: <Phone className="w-5 h-5 text-gold flex-shrink-0" weight="duotone" />,
      text: '(905) 634-6000',
      href: 'tel:+19056346000',
      ariaLabel: 'Call my office'
    },
    {
      icon: <Envelope className="w-5 h-5 text-gold flex-shrink-0" weight="duotone" />,
      text: 'kareem.hassanein@gmail.com',
      href: 'mailto:kareem.hassanein@gmail.com',
      ariaLabel: 'Email us'
    }
  ];

  const businessHours = [
    { day: 'Monday', hours: '1:30 PM - 8:00 PM' },
    { day: 'Tuesday', hours: '1:30 PM - 8:00 PM' },
    { day: 'Thursday', hours: '1:30 PM - 8:00 PM' }
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
    <footer className="bg-gradient-to-b from-primary-900 to-primary-950 text-white py-8 relative overflow-hidden">
      {/* Premium subtle background pattern */}
      <BackgroundTexture texture="noise" opacity={0.02} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        {/* Compact centered branding */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3" aria-label="Return to homepage">
            <Image
              src="/images/kinetikare-logo-kareem-hassanein-physiotherapy-transparent.png"
              alt="KinetiKare"
              width={40}
              height={40}
              className="opacity-90 hover:opacity-100 transition-opacity"
            />
            <div className="text-left">
              <h3 className="font-heading text-lg text-white">
                KinetiKare <span className="text-gold">Physiotherapy</span>
              </h3>
              <p className="text-xs text-white/70">Kareem Hassanein, Registered Physiotherapist</p>
            </div>
          </Link>
        </div>

        {/* Compact grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 text-sm">
          
          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium mb-3 text-white/90 uppercase tracking-wider">Contact</h3>
            <div className="space-y-2 text-white/70 text-xs">
              <a href="tel:+19056346000" className="block hover:text-gold transition-colors">
                (905) 634-6000
              </a>
              <a href="mailto:kareem.hassanein@gmail.com" className="block hover:text-gold transition-colors break-all">
                kareem.hassanein@gmail.com
              </a>
              <a 
                href="https://maps.app.goo.gl/syZN4FUBgACrtqgK9"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-gold transition-colors"
              >
                4631 Palladium Way<br/>
                Burlington, ON
              </a>
            </div>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="text-xs font-medium mb-3 text-white/90 uppercase tracking-wider">Hours</h3>
            <div className="space-y-1 text-white/70 text-xs">
              <div>Mon: 1:30-8:00 PM</div>
              <div>Tue: 1:30-8:00 PM</div>
              <div>Thu: 1:30-8:00 PM</div>
              <div className="text-white/50 italic">Wed, Fri-Sun: Closed</div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-medium mb-3 text-white/90 uppercase tracking-wider">Quick Links</h3>
            <div className="space-y-1 text-white/70 text-xs">
              <Link href="/services" className="block hover:text-gold transition-colors">Services</Link>
              <Link href="/conditions" className="block hover:text-gold transition-colors">Conditions</Link>
              <Link href="/about" className="block hover:text-gold transition-colors">About</Link>
              <Link href="/faq" className="block hover:text-gold transition-colors">FAQ</Link>
            </div>
          </div>
          
          {/* Book & Social */}
          <div>
            <h3 className="text-xs font-medium mb-3 text-white/90 uppercase tracking-wider">Connect</h3>
            <a 
              href="https://endorphinshealth.janeapp.com/#/staff_member/42"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-gold/20 hover:bg-gold/30 text-white text-xs rounded-lg transition-all mb-3"
            >
              Book Online
            </a>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  aria-label={`Visit ${social.name} profile`}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-gold/30 transition-all flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinLogo weight="fill" className="w-4 h-4 text-white/90" />
                </a>
              ))}
              <Link
                href="https://portal.collegept.org/en-US/public-register/display-member-contact/?id=757882d7-8c40-eb11-a813-000d3af427b4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-gold/30 transition-all flex items-center justify-center"
                aria-label="CPO Registration"
              >
                <svg className="w-4 h-4 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Minimal bottom section */}
        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-white/50 mb-2 md:mb-0">
            © {currentYear} KinetiKare Physiotherapy
          </p>
          <div className="flex gap-3 text-xs text-white/50">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms</Link>
            <Link href="/accessibility" className="hover:text-white/70 transition-colors">Accessibility</Link>
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