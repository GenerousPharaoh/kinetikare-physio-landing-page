'use client';

import React from 'react';

interface BackgroundPatternProps {
  variant?: 'grid' | 'angle' | 'minimal' | 'pinstripe' | 'dots';
  opacity?: number;
  color?: string;
  className?: string;
}

/**
 * A performance-optimized background pattern component
 * Uses CSS only - no images or heavy libraries
 */
export default function BackgroundPattern({
  variant = 'grid',
  opacity = 0.04,
  color = '100, 130, 210', // RGB format for easier opacity control
  className = '',
}: BackgroundPatternProps) {
  // Generate the appropriate background pattern based on variant
  const getPatternStyle = () => {
    switch (variant) {
      case 'grid':
        return {
          backgroundImage: `
            linear-gradient(rgba(${color}, ${opacity}) 1px, transparent 1px),
            linear-gradient(90deg, rgba(${color}, ${opacity}) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '-1px -1px',
        };
      case 'angle':
        return {
          backgroundImage: `
            linear-gradient(135deg, 
              transparent 25%, 
              rgba(${color}, ${opacity}) 25%, 
              rgba(${color}, ${opacity}) 26%, 
              transparent 26%,
              transparent 75%,
              rgba(${color}, ${opacity}) 75%,
              rgba(${color}, ${opacity}) 76%,
              transparent 76%)
          `,
          backgroundSize: '120px 120px',
        };
      case 'pinstripe':
        return {
          backgroundImage: `
            linear-gradient(90deg, 
              transparent calc(50% - 0.5px), 
              rgba(${color}, ${opacity}) calc(50% - 0.5px), 
              rgba(${color}, ${opacity}) calc(50% + 0.5px), 
              transparent calc(50% + 0.5px))
          `,
          backgroundSize: '20px 100%',
        };
      case 'dots':
        return {
          backgroundImage: `
            radial-gradient(
              circle at 50% 50%,
              rgba(${color}, ${opacity * 1.5}) 1px,
              transparent 1px
            )
          `,
          backgroundSize: '28px 28px',
        };
      case 'minimal':
      default:
        return {
          backgroundImage: `
            linear-gradient(rgba(${color}, ${opacity / 2}) 1px, transparent 1px)
          `,
          backgroundSize: '100% 40px',
        };
    }
  };

  return (
    <div 
      className={`absolute inset-0 -z-10 ${className}`}
      style={getPatternStyle()}
      aria-hidden="true"
    />
  );
} 