"use client";

import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import BackgroundTexture from './BackgroundTexture';

interface SectionBackgroundProps {
  children: ReactNode;
  id?: string;
  className?: string;
  bgVariant?: 'primary' | 'subtle' | 'light' | 'white' | 'dark' | 'transparent' | 'gradient';
  patternOverlay?: boolean;
  patternOpacity?: number;
  patternVariant?: 'dots' | 'grid' | 'waves' | 'triangles';
  texture?: 'noise' | 'dots' | 'mesh' | 'none';
  textureOpacity?: number;
  glowEffect?: boolean;
  glowPosition?: 'top' | 'right' | 'bottom' | 'left' | 'center';
  glowSize?: 'sm' | 'md' | 'lg' | 'xl';
  border?: boolean;
  spacing?: 'none' | 'small' | 'normal' | 'large' | 'xlarge';
  hasDividerTop?: boolean;
  hasDividerBottom?: boolean;
  dividerShape?: 'wave' | 'curve' | 'tilt' | 'triangle' | 'peaks';
  dividerColor?: string;
  dividerHeight?: number;
}

/**
 * SectionBackground Component
 * 
 * This component applies consistent backgrounds to sections based on our design system.
 * Uses our standard navy/gold color palette with light greys.
 */
const SectionBackground = ({
  children,
  id,
  className = '',
  bgVariant = 'light',
  patternOverlay = false,
  patternOpacity = 0.1,
  patternVariant = 'dots',
  texture = 'none',
  textureOpacity = 0.05,
  glowEffect = false,
  glowPosition = 'top',
  glowSize = 'lg', 
  border = false,
  spacing = 'normal',
  hasDividerTop = false,
  hasDividerBottom = false,
  dividerShape = 'wave',
  dividerColor = '#FFFFFF',
  dividerHeight = 50,
}: SectionBackgroundProps) => {
  // Background colors based on variant
  const bgColors = {
    primary: 'bg-gradient-to-br from-[#1A2036] to-[#252E4A] text-white',
    subtle: 'bg-gradient-to-br from-[#F9FAFD] to-[#F2F6FC] text-[#1A2036]', 
    light: 'bg-white text-[#1A2036]',
    white: 'bg-white text-[#1A2036]',
    dark: 'bg-[#1A2036] text-white',
    transparent: 'bg-transparent',
    gradient: 'bg-gradient-to-br from-[#FCFCFD] via-white to-[#F9FAFD] text-[#1A2036]'
  };

  // Section spacing
  const spacingClasses = {
    none: 'py-0',
    small: 'py-8',
    normal: 'py-16',
    large: 'py-24',
    xlarge: 'py-32'
  };

  // Pattern file based on variant
  const patternFiles = {
    dots: '/images/patterns/pattern-dots.svg',
    grid: '/images/patterns/pattern-grid.svg',
    waves: '/images/patterns/pattern-waves.svg',
    triangles: '/images/patterns/pattern-triangles.svg',
  };

  // Function to generate divider SVG path based on shape
  const getDividerPath = (shape: string, isTop: boolean): string => {
    const flip = isTop ? 'rotateX(180deg)' : 'rotate(0)';
    
    switch (shape) {
      case 'wave':
        return `<svg preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" 
                style="transform: ${flip}; width: 100%; height: ${dividerHeight}px;">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="${dividerColor}"></path>
              </svg>`;
          
      case 'curve':
        return `<svg preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" 
                style="transform: ${flip}; width: 100%; height: ${dividerHeight}px;">
                <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" 
                fill="${dividerColor}"></path>
              </svg>`;
          
      case 'tilt':
        return `<svg preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" 
                style="transform: ${flip}; width: 100%; height: ${dividerHeight}px;">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" 
                fill="${dividerColor}"></path>
              </svg>`;
          
      case 'triangle':
        return `<svg preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" 
                style="transform: ${flip}; width: 100%; height: ${dividerHeight}px;">
                <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" 
                fill="${dividerColor}" style="transform-origin: center; transform: scale(20);"></path>
              </svg>`;
          
      case 'peaks':
        return `<svg preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" 
                style="transform: ${flip}; width: 100%; height: ${dividerHeight}px;">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                fill="${dividerColor}" opacity=".25" />
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                fill="${dividerColor}" opacity=".5" />
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                fill="${dividerColor}" />
              </svg>`;
          
      default:
        return `<svg preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" 
                style="width: 100%; height: ${dividerHeight}px;">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" 
                fill="${dividerColor}"></path>
              </svg>`;
    }
  };

  // Calculate glow effect styling
  const getGlowStyle = () => {
    // Size of the glow based on glowSize
    const sizeMap = {
      sm: '300px',
      md: '500px',
      lg: '700px',
      xl: '900px',
    };
    
    const size = sizeMap[glowSize];
    
    // Position of the glow
    let positionStyle = {};
    
    switch (glowPosition) {
      case 'top':
        positionStyle = {
          top: `-${parseInt(size) / 3}px`,
          left: '50%',
          transform: 'translateX(-50%) scale(1, 0.6)',
        };
        break;
      case 'right':
        positionStyle = {
          top: '50%',
          right: `-${parseInt(size) / 3}px`,
          transform: 'translateY(-50%) scale(0.6, 1)',
        };
        break;
      case 'bottom':
        positionStyle = {
          bottom: `-${parseInt(size) / 3}px`,
          left: '50%',
          transform: 'translateX(-50%) scale(1, 0.6)',
        };
        break;
      case 'left':
        positionStyle = {
          top: '50%',
          left: `-${parseInt(size) / 3}px`,
          transform: 'translateY(-50%) scale(0.6, 1)',
        };
        break;
      case 'center':
      default:
        positionStyle = {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) scale(1.5, 0.7)',
        };
        break;
    }
    
    return {
      position: 'absolute',
      width: size,
      height: size,
      borderRadius: '70% 30% 50% 40% / 50% 60% 40% 50%',
      background: bgVariant === 'primary' || bgVariant === 'dark'
        ? 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.05) 40%, rgba(212, 175, 55, 0) 70%)'
        : 'radial-gradient(ellipse at center, rgba(26, 32, 54, 0.08) 0%, rgba(26, 32, 54, 0.03) 40%, rgba(26, 32, 54, 0) 70%)',
      opacity: 0.4,
      filter: 'blur(30px)',
      zIndex: 0,
      ...positionStyle,
    };
  };

  return (
    <section
      id={id}
      className={cn(
        'relative overflow-hidden',
        bgColors[bgVariant],
        spacingClasses[spacing],
        border && 'border-y border-[#D4AF37]/10',
        className
      )}
    >
      {/* Top divider */}
      {hasDividerTop && (
        <div 
          className="absolute top-0 left-0 right-0 overflow-hidden z-10 pointer-events-none"
          dangerouslySetInnerHTML={{
            __html: getDividerPath(dividerShape, true),
          }}
          style={{ transform: 'translateY(-98%)' }}
        />
      )}
      
      {/* Optional background pattern overlay */}
      {patternOverlay && (
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ opacity: patternOpacity }}
        >
          <Image
            src={patternFiles[patternVariant]}
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
        </div>
      )}
      
      {/* Optional texture overlay */}
      {texture !== 'none' && (
        <BackgroundTexture 
          texture={texture} 
          opacity={textureOpacity} 
        />
      )}

      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {children}
      </div>

      {/* Bottom divider */}
      {hasDividerBottom && (
        <div
          className="absolute bottom-0 left-0 right-0 overflow-hidden z-10 pointer-events-none"
          dangerouslySetInnerHTML={{
            __html: getDividerPath(dividerShape, false),
          }}
          style={{ transform: 'translateY(98%)' }}
        />
      )}
    </section>
  );
};

export default SectionBackground; 