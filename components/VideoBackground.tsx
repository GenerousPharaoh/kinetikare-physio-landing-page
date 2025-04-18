"use client";

import { useEffect, useRef, useState } from 'react';

interface VideoBackgroundProps {
  src: string;
  fallbackImage?: string;
  className?: string;
  overlayClassName?: string;
}

export default function VideoBackground({
  src,
  fallbackImage,
  className = '',
  overlayClassName = ''
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isForward = useRef<boolean>(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Run once on mount
    checkMobile();
    
    // Set up resize listener
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set initial properties - SLOWED DOWN
    video.playbackRate = 0.5; // Changed from 1.0
    video.muted = true;
    
    // Only set up enhanced playback on non-mobile devices
    if (!isMobile) {
      // Handle loading
      const handleCanPlay = () => {
        setIsLoaded(true);
        video.play().catch(error => console.error("Video autoplay failed:", error));
      };
      
      // Create a timeupdate event handler for reverse playback
      const handleTimeUpdate = () => {
        // If we're playing forward and near the end, switch to backward
        if (isForward.current && video.currentTime >= video.duration - 0.1) {
          isForward.current = false;
          video.playbackRate = -0.5; // Play in reverse - Changed from -1.0
        } 
        // If we're playing backward and near the start, switch to forward
        else if (!isForward.current && video.currentTime <= 0.1) {
          isForward.current = true;
          video.playbackRate = 0.5; // Play forward - Changed from 1.0
        }
      };

      // Set up event listeners
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('timeupdate', handleTimeUpdate);
      
      // Handle video loading error
      video.addEventListener('error', () => {
        console.error("Video failed to load");
        // You could set a fallback image here if needed
      });

      return () => {
        // Clean up event listeners
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
    } else {
      // For mobile, use simpler loop method to save resources
      video.loop = true;
      video.play().catch(error => console.error("Video autoplay failed on mobile:", error));
      setIsLoaded(true);
    }
  }, [isMobile]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Overlay for text readability */}
      <div className={`absolute inset-0 bg-slate-deep/70 z-10 ${overlayClassName}`}></div>
      
      {/* Fallback image that shows until video loads */}
      {fallbackImage && !isLoaded && (
        <img 
          src={fallbackImage} 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      
      {/* Video element */}
      <video 
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        playsInline
        autoPlay
        muted
        loop={isMobile} // Only loop on mobile, otherwise we handle it manually
        preload="auto"
        poster={fallbackImage}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
} 