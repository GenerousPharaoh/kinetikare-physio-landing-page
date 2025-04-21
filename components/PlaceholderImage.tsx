"use client";

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

type PlaceholderImageProps = Omit<ImageProps, 'src'> & {
  src: string;
  fallbackSrc?: string;
  category?: string;
  objectPosition?: string;
  isProfile?: boolean;
  priority?: boolean;
};

export default function PlaceholderImage({
  src,
  alt,
  fallbackSrc,
  category = 'physiotherapy',
  objectPosition = 'center',
  isProfile = false,
  priority = false,
  ...props
}: PlaceholderImageProps) {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize the image source on the client side to avoid SSR issues
    setImgSrc(src);

    // Prefetch critical images
    if (priority && typeof window !== 'undefined') {
      const imgElement = new window.Image();
      imgElement.src = src;
      imgElement.onload = () => {
        setIsLoaded(true);
      };
    }
  }, [src, priority]);

  // Generate a placeholder URL if the image fails to load
  const generatePlaceholder = () => {
    if (fallbackSrc) return fallbackSrc;

    // Default placeholder dimensions
    const width = typeof props.width === 'number' ? props.width : 800;
    const height = typeof props.height === 'number' ? props.height : 600;
    
    // Create a colored placeholder with category text
    const colors = {
      'physiotherapy': 'E2E8F0/0A1A2F',
      'Physiotherapist': 'D1D5DB/1E293B',
      'Treatment Room': 'F3F4F6/0F172A',
      'Manual Therapy': 'E2E8F0/0A1A2F',
      'Sports Rehabilitation': 'D1D5DB/1E293B', 
      'Dry Needling': 'F3F4F6/0F172A',
      'Exercise Therapy': 'E2E8F0/0A1A2F',
      default: 'FAFAFA/334155'
    };
    
    const colorPair = colors[category as keyof typeof colors] || colors.default;
    
    // Use placehold.co for a simple placeholder
    return `https://placehold.co/${width}x${height}/${colorPair}.jpg?text=${encodeURIComponent(category)}`;
  };

  const handleError = () => {
    if (!error) {
      setImgSrc(generatePlaceholder());
      setError(true);
    }
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Special styling for profile images to prevent head cropping
  const imageStyle = {
    ...(props.style || {}),
    objectFit: props.style?.objectFit || 'cover',
    objectPosition: isProfile ? 'center 20%' : objectPosition,
    transition: isLoaded ? 'opacity 0.3s ease-in' : 'none',
    opacity: isLoaded ? 1 : 0,
    transform: 'translateZ(0)', // Hardware acceleration
    willChange: 'opacity',
  };

  if (!imgSrc) {
    // Return a colored div while loading to prevent layout shifts
    return (
      <div 
        style={{
          width: '100%',
          height: '100%',
          background: '#E2E8F0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0A1A2F',
          fontSize: '14px',
          fontWeight: 500,
          transform: 'translateZ(0)', // Hardware acceleration
        }}
      >
        {category}
      </div>
    );
  }

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
      onLoad={handleLoad}
      style={imageStyle}
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      sizes={priority ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
    />
  );
} 