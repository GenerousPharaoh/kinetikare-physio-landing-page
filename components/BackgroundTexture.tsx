"use client";

import React from 'react';

interface BackgroundTextureProps {
  texture: 'noise' | 'dots' | 'mesh' | 'none';
  opacity?: number;
  className?: string;
}

/**
 * Adds a subtle paper texture to the background for added depth
 * - Very low performance impact
 * - Uses existing noise pattern from the site
 * - Configured to not interfere with any other elements
 */
const BackgroundTexture: React.FC<BackgroundTextureProps> = ({
  texture,
  opacity = 0.05,
  className = '',
}) => {
  if (texture === 'none') return null;

  // Noise pattern SVG (subtle static noise)
  const noiseSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300" preserveAspectRatio="none">
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
      <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.1 0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)" />
  </svg>
  `;

  // Dots pattern SVG
  const dotsSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
    <circle cx="1.5" cy="1.5" r="0.7" fill="currentColor" />
  </svg>
  `;

  // Mesh/grid pattern SVG
  const meshSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
    <path d="M0 30 L60 30 M30 0 L30 60" stroke="currentColor" stroke-width="0.3" />
  </svg>
  `;

  // Select the appropriate SVG
  let svgData: string;
  switch (texture) {
    case 'noise':
      svgData = noiseSvg;
      break;
    case 'dots':
      svgData = dotsSvg;
      break;
    case 'mesh':
      svgData = meshSvg;
      break;
    default:
      return null;
  }

  // Base64 encode the SVG
  const encodedSvg = Buffer.from(svgData).toString('base64');
  const dataUrl = `data:image/svg+xml;base64,${encodedSvg}`;

  return (
    <div 
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
      style={{ 
        backgroundImage: `url(${dataUrl})`,
        opacity,
        backgroundRepeat: 'repeat',
        backgroundSize: texture === 'noise' ? 'cover' : texture === 'dots' ? '30px 30px' : '60px 60px',
        mixBlendMode: 'multiply'
      }}
      aria-hidden="true"
    />
  );
};

export default BackgroundTexture; 