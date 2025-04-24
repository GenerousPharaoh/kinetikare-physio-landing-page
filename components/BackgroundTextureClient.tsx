"use client";

import React, { useEffect, useState } from 'react';

interface BackgroundTextureClientProps {
  opacity?: number;
  zIndex?: number;
}

export default function BackgroundTextureClient({ 
  opacity = 0.04, 
  zIndex = -50 
}: BackgroundTextureClientProps) {
  // Only render on client to avoid SSR issues
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none w-full h-full"
      style={{ 
        opacity,
        zIndex,
        backgroundImage: 'url("/images/patterns/noise-pattern.png")',
        backgroundRepeat: 'repeat',
        mixBlendMode: 'multiply'
      }}
      aria-hidden="true"
    />
  );
} 