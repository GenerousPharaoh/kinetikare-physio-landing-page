"use client";

import React from 'react';

interface BackgroundTextureClientProps {
  opacity?: number;
  zIndex?: number;
}

export default function BackgroundTextureClient({
  opacity = 0.025,
  zIndex = -10,
}: BackgroundTextureClientProps) {
  // Use the SVG noise pattern image file for better performance
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url("/images/patterns/noise-pattern.svg")',
        backgroundRepeat: 'repeat',
        opacity: opacity,
        zIndex: zIndex,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
} 