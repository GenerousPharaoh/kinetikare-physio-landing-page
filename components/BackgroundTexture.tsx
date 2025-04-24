"use client";

import { useEffect, useState } from 'react';

interface BackgroundTextureProps {
  opacity?: number;
  zIndex?: number;
}

/**
 * Adds a subtle paper texture to the background for added depth
 * - Very low performance impact
 * - Uses existing noise pattern from the site
 * - Configured to not interfere with any other elements
 */
export default function BackgroundTexture({ 
  opacity = 0.04, 
  zIndex = -50 
}: BackgroundTextureProps) {
  // Only show on client to avoid hydration issues
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