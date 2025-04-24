"use client";

import React from 'react';

interface SectionBackgroundProps {
  variant?: 'subtle-lines' | 'clean';
  className?: string;
}

/**
 * Adds a subtle background pattern to sections
 * This is an unobtrusive way to add visual interest without being tacky
 */
export default function SectionBackground({ 
  variant = 'subtle-lines',
  className = ''
}: SectionBackgroundProps) {
  // Clean background with almost invisible horizontal lines
  if (variant === 'subtle-lines') {
    return (
      <div 
        className={`absolute inset-0 -z-10 pointer-events-none ${className}`}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-500/[0.02] to-transparent" />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, 
              var(--neutral-300, rgba(200, 200, 200, 0.2)) 25%, 
              var(--neutral-300, rgba(200, 200, 200, 0.2)) 26%, 
              transparent 27%, transparent 74%, 
              var(--neutral-300, rgba(200, 200, 200, 0.2)) 75%, 
              var(--neutral-300, rgba(200, 200, 200, 0.2)) 76%, 
              transparent 77%, transparent)`,
            backgroundSize: '100% 8rem',
          }}
        />
      </div>
    );
  }
  
  // Clean background
  return (
    <div 
      className={`absolute inset-0 -z-10 pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-500/[0.01] to-transparent" />
    </div>
  );
} 