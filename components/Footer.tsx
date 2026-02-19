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
      ariaLabel: 'Email Kareem Hassanein Physiotherapy'
    }
  ];

  const businessHours = [
    { day: 'Monday', hours: '1:30 PM - 8:00 PM' },
    { day: 'Tuesday', hours: '1:30 PM - 8:00 PM' },
    { day: 'Wednesday*', hours: '2:00 PM - 7:30 PM' },
    { day: 'Thursday', hours: '1:30 PM - 8:00 PM' },
    { day: 'Friday*', hours: '2:00 PM - 7:30 PM' }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kareemhassanein',
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
    <footer className="bg-gradient-to-b from-primary-900 to-primary-950 text-white pt-12 pb-32 md:pb-12 relative overflow-hidden">
      {/* Premium subtle background pattern */}
      <BackgroundTexture texture="noise" opacity={0.02} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        {/* Centered branding with proper hierarchy */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-block">
            <Image
              src="/images/kinetikare-logo-without-text.webp"
              alt="KinetiKare"
              width={50}
              height={50}
              className="mx-auto mb-4 opacity-90 hover:opacity-100 transition-opacity"
            />
            <h3 className="font-heading text-xl text-white mb-1">
              KinetiKare <span className="text-gold">Physiotherapy</span>
            </h3>
            <p className="text-sm text-white/80 mb-1">Kareem Hassanein</p>
            <p className="text-xs text-white/60">Registered Physiotherapist</p>
          </Link>
        </div>

        {/* Main grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Contact Information */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-white uppercase tracking-wider">Contact</h3>
            <div className="space-y-3 text-white/80 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" weight="duotone" />
                <a href="tel:+19056346000" className="hover:text-gold transition-colors">
                  (905) 634-6000
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Envelope className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" weight="duotone" />
                <a href="mailto:kareem.hassanein@gmail.com" className="hover:text-gold transition-colors break-all">
                  kareem.hassanein@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" weight="duotone" />
                <a
                  href="https://maps.app.goo.gl/syZN4FUBgACrtqgK9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  4631 Palladium Way, Unit 6<br />
                  Burlington, ON L7M 0W9
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-white uppercase tracking-wider">Hours</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              {businessHours.map((schedule) => (
                <li key={schedule.day} className="flex justify-between">
                  <span>{schedule.day}:</span>
                  <span className="text-white/60">{schedule.hours}</span>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10 mt-2 space-y-1">
                <span className="text-white/50 text-xs italic block">* Headon Physio location</span>
                <span className="text-white/40 text-xs italic block">Direct billing only at Endorphins</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>
                <Link href="/services" className="hover:text-gold transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/conditions" className="hover:text-gold transition-colors">Conditions</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">About</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gold transition-colors">FAQ</Link>
              </li>
              <li className="pt-2">
                <a
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors font-medium"
                >
                  Book Online
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-white uppercase tracking-wider">Connect</h3>
            <div className="space-y-4">
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={`Visit ${social.name} profile`}
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-gold/30 transition-all flex items-center justify-center group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinLogo weight="fill" className="w-5 h-5 text-white/80 group-hover:text-white" />
                  </a>
                ))}
              </div>

              {/* CPO Registration */}
              <Link
                href="https://portal.collegept.org/en-US/public-register/display-member-contact/?id=757882d7-8c40-eb11-a813-000d3af427b4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-gold hover:text-gold/80 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                CPO Verified Registration
              </Link>

              {/* Small Map Preview */}
              <div className="rounded-lg overflow-hidden h-[120px] relative border border-white/10 bg-slate-800">
                <iframe
                  src="https://www.google.com/maps?q=4631+Palladium+Way+Unit+6+Burlington+ON&output=embed"
                  title="Clinic location map"
                  width="100%"
                  height="120"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60 mb-3 md:mb-0">
            © {currentYear} KinetiKare Physiotherapy. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-white/60">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <span className="text-white/20">•</span>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
            <span className="text-white/20">•</span>
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
