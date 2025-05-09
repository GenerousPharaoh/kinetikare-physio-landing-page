"use client";

import React from 'react';
import Link from 'next/link';
import { HomeIcon, PhoneIcon, CalendarDaysIcon, UserIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

// Remove framer-motion imports and styling

const navItems = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: 'https://endorphinshealth.janeapp.com/#/staff_member/42', label: 'Book', icon: CalendarDaysIcon, external: true, highlight: true },
  { href: '/#contact', label: 'Contact', icon: PhoneIcon },
  { href: '/about', label: 'About', icon: UserIcon },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  // Check if the current path matches the nav item
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    } else if (href.startsWith('/#')) {
      return pathname === '/';
    } else {
      return pathname.startsWith(href);
    }
  };

  // Handle smooth scrolling for hash links
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('/#') || href.includes('janeapp.com')) return; // Only handle local hash links
    
    e.preventDefault();
    const targetId = href.substring(2); // Remove /# part
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerOffset = document.querySelector('header')?.offsetHeight || 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-neutral-200 shadow-lg z-40 flex items-center justify-around"
      style={{ 
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 40
      }}
    >
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noopener noreferrer' : undefined}
          onClick={(e) => !item.external && handleClick(e, item.href)}
          className={`relative flex flex-col items-center justify-center text-center px-2 py-1 text-xs font-medium transition-colors duration-200 group ${
            item.highlight 
              ? 'text-white' 
              : isActive(item.href)
                ? 'text-accent'
                : 'text-primary-600 hover:text-accent'
          }`}
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {item.highlight && (
            <div
              className="absolute inset-0 bg-accent rounded-full -top-2 -left-1 -right-1"
              style={{
                position: 'absolute',
                inset: 0,
                top: '-0.5rem',
                left: '-0.25rem',
                right: '-0.25rem',
                backgroundColor: 'var(--color-accent, #D4AF37)',
                borderRadius: '9999px'
              }}
            />
          )}
          
          <div
            className={`relative z-10 flex flex-col items-center justify-center ${
              item.highlight ? '-mt-1' : ''
            }`}
            style={{
              position: 'relative',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: item.highlight ? '-0.25rem' : '0'
            }}
          >
            {item.highlight ? (
              <div 
                className="premium-icon-badge premium-icon-badge-sm premium-icon-badge-circle bg-white/30 mb-0.5 shadow-lg" 
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  marginBottom: '0.125rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              >
                <item.icon className="w-4 h-4 xs:w-5 xs:h-5 text-white" />
              </div>
            ) : (
              <div 
                className={`premium-icon-badge premium-icon-badge-sm premium-icon-badge-circle mb-0.5 shadow-md ${
                  isActive(item.href) ? 'premium-icon-badge-accent' : ''
                }`} 
                style={{ 
                  marginBottom: '0.125rem',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)'
                }}
              >
                <item.icon className="w-4 h-4 xs:w-5 xs:h-5" />
              </div>
            )}
            <span 
              className={`${item.highlight ? 'text-white font-medium' : ''} mt-1 text-[10px] xs:text-xs`}
              style={{
                marginTop: '0.25rem',
                fontSize: '10px',
                color: item.highlight ? 'white' : 'inherit',
                fontWeight: item.highlight ? '500' : 'inherit'
              }}
            >
              {item.label}
            </span>
            
            {isActive(item.href) && !item.highlight && (
              <div
                className="absolute -bottom-1 w-1.5 h-1.5 bg-accent rounded-full"
                style={{
                  position: 'absolute',
                  bottom: '-0.25rem',
                  width: '0.375rem',
                  height: '0.375rem',
                  backgroundColor: 'var(--color-accent, #D4AF37)',
                  borderRadius: '9999px'
                }}
              />
            )}
          </div>
        </Link>
      ))}

      {/* Add a bottom safe area for iOS devices */}
      <div 
        className="fixed bottom-0 h-[env(safe-area-inset-bottom,0px)] left-0 right-0 bg-white"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'white'
        }}
      ></div>
    </nav>
  );
}