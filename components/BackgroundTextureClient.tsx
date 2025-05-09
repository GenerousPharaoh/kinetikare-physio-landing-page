"use client";

import React from 'react';

interface BackgroundTextureClientProps {
  opacity?: number;
  zIndex?: number;
}

export default function BackgroundTextureClient({
  opacity = 0.04,
  zIndex = -10,
}: BackgroundTextureClientProps) {
  return (
    <>
      {/* Primary background gradient */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #f9fbff 0%, #eef2fa 100%)',
          zIndex: zIndex - 1,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />
      
      {/* Subtle texture overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          opacity: opacity,
          zIndex: zIndex,
          pointerEvents: 'none',
          mixBlendMode: 'multiply',
        }}
        aria-hidden="true"
      />
      
      {/* Subtle accent glow elements - larger and with better positioning */}
      <div
        style={{
          position: 'fixed',
          top: '5%',
          right: '5%',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(52, 79, 161, 0.04) 0%, rgba(52, 79, 161, 0) 70%)',
          zIndex: zIndex,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: 'fixed',
          bottom: '10%',
          left: '5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(52, 79, 161, 0.03) 0%, rgba(52, 79, 161, 0) 70%)',
          zIndex: zIndex,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />
      
      {/* Subtle gold accent element */}
      <div
        style={{
          position: 'fixed',
          bottom: '30%',
          right: '15%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.03) 0%, rgba(212, 175, 55, 0) 70%)',
          zIndex: zIndex,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />
    </>
  );
} 