"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

const HeroSection = React.memo(function HeroSection() {
  return (
    <section 
      className="w-full"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '80px',
        paddingBottom: '40px',
        overflow: 'visible'
      }}
    >
      {/* Background Image */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          width: '100%',
          height: '100%'
        }}
      >
        <Image
          src="/images/clinic-pic-may-2025.jpg"
          alt="Physiotherapy clinic"
          fill
          priority
          quality={90}
          style={{ 
            objectFit: 'cover',
            filter: 'brightness(0.4)'
          }}
        />
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(26, 32, 54, 0.7)'
          }}
        />
      </div>
      
      {/* Content Container */}
      <div 
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px'
        }}
      >
        {/* Logo Section - GUARANTEED VISIBLE */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            width: '100%'
          }}
        >
          <div 
            style={{
              backgroundColor: 'rgba(20, 25, 40, 0.9)',
              padding: '32px',
              borderRadius: '16px',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'inline-block'
            }}
          >
            <Image
              src="/images/kinetikare-logo.png"
              alt="KinetiKare logo"
              width={140}
              height={140}
              style={{
                width: '140px',
                height: '140px',
                display: 'block'
              }}
            />
          </div>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.9)', 
            fontSize: '18px',
            fontWeight: '500',
            textAlign: 'center',
            margin: 0
          }}>
            Kareem Hassanein Physiotherapy
          </p>
        </div>
        
        {/* Hero Text */}
        <div 
          style={{
            textAlign: 'center',
            width: '100%'
          }}
        >
          <h1 style={{ marginBottom: '24px' }}>
            <span 
              style={{
                display: 'block',
                fontSize: 'clamp(28px, 5vw, 56px)',
                fontWeight: '900',
                color: 'white',
                marginBottom: '12px',
                lineHeight: '1.2'
              }}
            >
              The Science of Recovery,
            </span>
            <span 
              style={{
                display: 'block',
                fontSize: 'clamp(36px, 6vw, 72px)',
                fontWeight: '900',
                background: 'linear-gradient(to right, #B08D57, #D4AF37)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                lineHeight: '1.1'
              }}
            >
              The Art of Care
            </span>
          </h1>
          
          <div style={{ marginBottom: '40px' }}>
            <p style={{
              fontSize: 'clamp(18px, 3vw, 24px)',
              color: 'rgba(255, 255, 255, 0.9)',
              margin: '0 0 8px 0'
            }}>
              <strong>Genuine Understanding.</strong> <strong>Expert Care.</strong>
            </p>
            <p style={{
              fontSize: 'clamp(24px, 4vw, 32px)',
              color: '#D4AF37',
              fontWeight: '600',
              margin: 0
            }}>
              Lasting Recovery.
            </p>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            width: '100%',
            maxWidth: '400px',
            alignItems: 'center'
          }}
        >
          <Link 
            href="https://endorphinshealth.janeapp.com/#/staff_member/42"
            target="_blank"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              width: '100%',
              padding: '16px 32px',
              backgroundColor: '#B08D57',
              color: 'white',
              borderRadius: '12px',
              fontWeight: '600',
              fontSize: '16px',
              textDecoration: 'none',
              transition: 'background-color 0.3s'
            }}
          >
            <CalendarDaysIcon style={{ width: '20px', height: '20px' }} />
            Book an Appointment
          </Link>
          
          <Link
            href="/services" 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '16px 32px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '12px',
              fontWeight: '600',
              fontSize: '16px',
              textDecoration: 'none',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              transition: 'background-color 0.3s'
            }}
          >
            Explore Services
          </Link>
        </div>
        
        {/* Welcome Card - GUARANTEED VISIBLE */}
        <div 
          style={{
            width: '100%',
            maxWidth: '600px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '24px',
            padding: '32px',
            textAlign: 'center',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            marginTop: '20px'
          }}
        >
          <h2 style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#1A2036',
            marginBottom: '16px'
          }}>
            Welcome
          </h2>
          <div style={{
            width: '60px',
            height: '3px',
            background: 'linear-gradient(to right, #B08D57, #D4AF37)',
            margin: '0 auto 24px',
            borderRadius: '2px'
          }} />
          
          <p style={{
            fontSize: '18px',
            color: '#455070',
            marginBottom: '16px',
            lineHeight: '1.6'
          }}>
            I'm passionate about helping people move better, feel stronger, and get back to doing what they love.
          </p>
          
          <div style={{
            width: '40px',
            height: '1px',
            backgroundColor: '#e5e5e5',
            margin: '16px auto'
          }} />
          
          <p style={{
            fontSize: '16px',
            color: '#667085',
            margin: 0,
            lineHeight: '1.6'
          }}>
            Every person's journey is unique, and I'm here to guide you through yours with care, understanding, and evidence-based treatment.
          </p>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
