"use client";

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  fill?: boolean;
  sizes?: string;
  quality?: number;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  fill = false,
  sizes,
  quality = 85,
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  // Try to use WebP version if available
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  // Handle image error by falling back to original
  const handleError = () => {
    if (imgSrc !== src) {
      setImgSrc(src); // Fallback to original format
    }
  };

  const imageProps = fill
    ? { fill: true, sizes: sizes || '100vw' }
    : { width: width || 800, height: height || 600 };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <Image
        {...imageProps}
        src={imgSrc.startsWith('/') ? imgSrc : `/${imgSrc}`}
        alt={alt}
        priority={priority}
        quality={quality}
        onError={handleError}
        onLoad={() => setIsLoading(false)}
        className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      />
    </div>
  );
}

// Hook to use WebP with fallback
export function useWebPFallback(originalSrc: string) {
  const [src, setSrc] = useState(originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
  
  const handleError = () => {
    setSrc(originalSrc); // Fallback to original
  };
  
  return { src, handleError };
}