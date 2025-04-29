"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ClientParticleEffectWrapperProps {
  className?: string;
}

// Client-only particle effect component to avoid hydration issues
export default function ClientParticleEffectWrapper({ className = '' }: ClientParticleEffectWrapperProps) {
  // Generate particles only on the client side to prevent hydration mismatch
  const [particles, setParticles] = React.useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
  }>>([]);

  // Initialize particles after component mounts (client-side only)
  // Reduced particle count from 30 to 15 for better performance
  React.useEffect(() => {
    const clientParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5, // Slightly smaller particles
      duration: Math.random() * 15 + 10
    }));
    
    setParticles(clientParticles);
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-10 will-change-transform ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white opacity-30 will-change-transform"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            transform: 'translateZ(0)' // Force GPU acceleration
          }}
          initial={{ opacity: 0.1, scale: 1 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
            y: [0, -15, 0] // Reduced movement amount
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear" // Using linear for better performance than easeInOut
          }}
        />
      ))}
    </div>
  );
} 