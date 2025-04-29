"use client";

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

type PlaceholderImageProps = Omit<ImageProps, 'src'> & {
  src: string;
  fallbackSrc?: string;
  category?: string;
  objectPosition?: string;
  isProfile?: boolean;
};

export default function PlaceholderImage({
  src,
  alt,
  fallbackSrc,
  category = 'physiotherapy',
  objectPosition = 'center',
  isProfile = false,
  ...props
}: PlaceholderImageProps) {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark component as mounted to avoid hydration mismatch
    setMounted(true);
    // Initialize the image source on the client side to avoid SSR issues
    setImgSrc(src);
  }, [src]);

  // Generate a placeholder when needed
  const generatePlaceholder = () => {
    if (fallbackSrc) return fallbackSrc;

    // If the path starts with a slash, it's a local path
    if (src.startsWith('/') && !src.startsWith('//')) {
      // For specific categories, we can try to use default images
      // but since we know most avatar images are empty (0 bytes),
      // we'll handle those differently below by rendering a div
      const categoryMap: Record<string, string> = {
        'Manual Therapy': '/images/manual-therapy/manual-therapy.jpg',
        'Sports Injury': '/images/sports-injury/sports-injury.jpg',
        'Dry Needling': '/images/dry-needling/dry-needling.jpg',
        'Exercise Therapy': '/images/exercise-therapy/exercise-therapy.jpg',
      };
      
      if (categoryMap[category]) {
        return categoryMap[category];
      }
    }

    // Return the noise pattern as a general fallback
    return `/images/patterns/noise-pattern.png`;
  };

  const handleError = () => {
    if (!error) {
      // For avatar images or profile images, we'll render a div instead
      if (category.toLowerCase().includes('avatar') || isProfile || 
          category === 'Testimonial' || category === 'Physiotherapist') {
        setImgSrc(null);
      } else {
        setImgSrc(generatePlaceholder());
      }
      setError(true);
    }
  };

  // Special styling for profile images
  const imageStyle = {
    ...(props.style || {}),
    objectFit: props.style?.objectFit || 'cover',
    objectPosition: isProfile ? 'center 20%' : objectPosition,
  };

  // During SSR or before hydration, render a simple div
  if (!mounted) {
    return renderPlaceholderDiv();
  }

  // If imgSrc is null or we've determined we should use a div placeholder
  if (!imgSrc || (error && (category.toLowerCase().includes('avatar') || isProfile || 
                            category === 'Testimonial' || category === 'Physiotherapist'))) {
    return renderPlaceholderDiv();
  }

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
      style={imageStyle}
    />
  );
  
  // Helper function to render a colored div as placeholder
  function renderPlaceholderDiv() {
    // Get initials from alt text to display in the placeholder
    const initials = alt
      ? alt
          .split(' ')
          .map(word => word.charAt(0))
          .join('')
          .substring(0, 2)
          .toUpperCase()
      : category.substring(0, 2).toUpperCase();
    
    // Choose a background color based on the category
    const bgColorMap: Record<string, string> = {
      'Testimonial': '#D1D5DB',
      'Physiotherapist': '#E2E8F0',
      'default': '#F3F4F6'
    };
    
    const bgColor = bgColorMap[category] || bgColorMap.default;
    
    return (
      <div 
        style={{
          width: '100%',
          height: '100%',
          background: bgColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0A1A2F',
          fontSize: '14px',
          fontWeight: 500,
          borderRadius: isProfile ? '50%' : '4px'
        }}
      >
        {initials}
      </div>
    );
  }
} 