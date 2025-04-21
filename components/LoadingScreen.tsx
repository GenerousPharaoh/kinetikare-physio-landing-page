"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface LoadingScreenProps {
  isFadingOut?: boolean;
}

export default function LoadingScreen({ isFadingOut = false }: LoadingScreenProps) {
  const [isComplete, setIsComplete] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const [pyramidFormed, setPyramidFormed] = useState(false);
  
  useEffect(() => {
    // Set the pyramid as formed after the animation completes
    const pyramidTimer = setTimeout(() => {
      setPyramidFormed(true);
    }, 1500);
    
    // Handle external fade out signal
    if (isFadingOut) {
      setIsComplete(true);
      setTimeout(() => {
        setShouldRender(false);
      }, 800);
    }
    
    return () => {
      clearTimeout(pyramidTimer);
    };
  }, [isFadingOut]);

  if (!shouldRender) return null;

  return (
    <motion.div
      key="loading-screen"
      className="fixed inset-0 flex items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: isComplete ? 0 : 1,
      }}
      exit={{ opacity: 0 }}
      transition={{ 
        duration: 1.5,
        ease: "easeInOut" 
      }}
      style={{ 
        pointerEvents: isComplete ? 'none' : 'auto',
        background: 'linear-gradient(to bottom, #0a0f1c, #111827)',
      }}
    >
      {/* Simple subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Simple gradient accents */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-primary-500/5 rounded-full blur-[100px]" />
      
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Container for premium pyramid */}
        <div className="relative" style={{ width: "320px", height: "200px" }}>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: isComplete ? 0 : 1, 
              scale: isComplete ? 0.8 : 1,
              transition: { 
                duration: isComplete ? 0.8 : 1, 
                ease: "easeOut" 
              }
            }}
          >
            {/* NEW PREMIUM SINGLE-STROKE TRIANGLE */}
            <svg
              width="320"
              height="320"
              viewBox="0 0 320 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute"
              style={{ top: "-40px", left: "0" }}
              overflow="visible"
            >
              {/* Single-stroke triangle with enhanced premium gold gradient */}
              <motion.path
                d="M160,80 L30,220 L290,220 Z"
                fill="none"
                stroke="url(#enhancedGoldGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0.5 }}
                animate={{ 
                  pathLength: 1,
                  opacity: isComplete ? 0 : 1,
                  filter: "drop-shadow(0 0 6px rgba(229, 199, 107, 0.4))",
                  transition: { 
                    duration: isComplete ? 0.6 : 2.0, 
                    ease: "easeOut" 
                  }
                }}
                style={{ 
                  filter: "drop-shadow(0 0 6px rgba(229, 199, 107, 0.4))" 
                }}
              />

              {/* Ultra-premium gold gradients */}
              <defs>
                <linearGradient id="enhancedGoldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E5C76B" />
                  <stop offset="20%" stopColor="#F6DA6E" />
                  <stop offset="35%" stopColor="#FFF2A0" />
                  <stop offset="50%" stopColor="#FFFAD1" />
                  <stop offset="65%" stopColor="#FFF2A0" />
                  <stop offset="80%" stopColor="#F6DA6E" />
                  <stop offset="100%" stopColor="#E5C76B" />
                </linearGradient>
                
                {/* Filter for extra glow */}
                <filter id="goldGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
            </svg>

            {/* Enhanced glimmer effect at corners - keep the 3 dots you like */}
            {pyramidFormed && !isComplete && (
              <svg
                width="320"
                height="320"
                viewBox="0 0 320 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute"
                style={{ top: "-40px", left: "0" }}
                overflow="visible"
              >
                {/* Top corner premium glimmer */}
                <motion.circle
                  cx="160" 
                  cy="80" 
                  r="6"
                  fill="#FFFFFF"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1.8, 0],
                    filter: "blur(1px) drop-shadow(0 0 8px rgba(255, 255, 255, 0.9))",
                    transition: { 
                      duration: 1.2, 
                      ease: "easeOut",
                      times: [0, 0.4, 1],
                      repeat: Infinity,
                      repeatDelay: 3
                    }
                  }}
                  style={{ filter: "blur(1px) drop-shadow(0 0 8px rgba(255, 255, 255, 0.9))" }}
                />
                
                {/* Bottom left corner premium glimmer */}
                <motion.circle
                  cx="30" 
                  cy="220" 
                  r="6"
                  fill="#FFFFFF"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1.8, 0],
                    filter: "blur(1px) drop-shadow(0 0 8px rgba(255, 255, 255, 0.9))",
                    transition: { 
                      duration: 1.2, 
                      ease: "easeOut",
                      delay: 0.4,
                      times: [0, 0.4, 1],
                      repeat: Infinity,
                      repeatDelay: 3
                    }
                  }}
                  style={{ filter: "blur(1px) drop-shadow(0 0 8px rgba(255, 255, 255, 0.9))" }}
                />
                
                {/* Bottom right corner premium glimmer */}
                <motion.circle
                  cx="290" 
                  cy="220" 
                  r="6"
                  fill="#FFFFFF"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1.8, 0],
                    filter: "blur(1px) drop-shadow(0 0 8px rgba(255, 255, 255, 0.9))",
                    transition: { 
                      duration: 1.2, 
                      ease: "easeOut",
                      delay: 0.8,
                      times: [0, 0.4, 1],
                      repeat: Infinity,
                      repeatDelay: 3
                    }
                  }}
                  style={{ filter: "blur(1px) drop-shadow(0 0 8px rgba(255, 255, 255, 0.9))" }}
                />
                
                {/* Premium glimmer that moves along the entire triangle path */}
                <motion.circle
                  className="absolute"
                  r="5"
                  fill="#FFFFFF"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0, 0.95, 0],
                    pathOffset: [0, 1],
                    transition: { 
                      duration: 3.5,
                      delay: 1.2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 1.5
                    }
                  }}
                  style={{
                    offsetPath: "path('M160 80 L30 220 L290 220 Z')",
                    filter: "drop-shadow(0 0 6px rgba(255, 255, 255, 0.8))"
                  }}
                />
              </svg>
            )}
          </motion.div>
        </div>
        
        {/* KINETIKARE text with ultra-premium styling */}
        <motion.div
          className="mt-2 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ 
            opacity: isComplete ? 0 : 1,
            y: isComplete ? -5 : 0,
            transition: { 
              duration: isComplete ? 0.6 : 0.8, 
              delay: isComplete ? 0 : 1.7, 
              ease: "easeOut" 
            }
          }}
        >
          <motion.h1 
            className="text-6xl font-extrabold font-heading tracking-[0.2em]"
            animate={{
              textShadow: isComplete ? "none" : [
                "0 0 10px rgba(229, 199, 107, 0.2)", 
                "0 0 20px rgba(229, 199, 107, 0.6)", 
                "0 0 10px rgba(229, 199, 107, 0.2)"
              ]
            }}
            transition={{ duration: 3.5, repeat: isComplete ? 0 : Infinity, ease: "easeInOut" }}
          >
            <span className="bg-gradient-to-r from-[#E5C76B] via-[#FFFAD1] to-[#E5C76B] text-transparent bg-clip-text bg-size-200 animate-gradient-x">KINETIKARE</span>
          </motion.h1>
        </motion.div>

        {/* Ultra-premium slogan with enhanced glass effect */}
        <motion.div
          className="mt-4 text-center w-full max-w-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: isComplete ? 0 : 1, 
            y: isComplete ? 5 : 0,
            transition: { 
              duration: isComplete ? 0.6 : 0.6, 
              delay: isComplete ? 0 : 2.0, 
              ease: "easeOut" 
            }
          }}
        >
          <div className="relative mx-auto inline-flex justify-center w-full">
            <div className="px-10 py-4 rounded-full relative bg-black/50 backdrop-blur-xl border border-primary-700/30 shadow-2xl text-center inline-block">
              <p className="text-white text-xl font-medium tracking-wider whitespace-nowrap">
                <motion.span 
                  className="text-accent font-heading font-semibold"
                  animate={{ 
                    opacity: isComplete ? 0 : [0.8, 1, 0.8],
                    background: isComplete ? 'none' : [
                      'linear-gradient(90deg, #E5C76B 0%, #F6DA6E 100%)',
                      'linear-gradient(90deg, #F6DA6E 0%, #FFFAD1 100%)',
                      'linear-gradient(90deg, #E5C76B 0%, #F6DA6E 100%)'
                    ],
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: isComplete ? 0 : Infinity, 
                    ease: "easeInOut" 
                  }}
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    background: 'linear-gradient(90deg, #E5C76B 0%, #F6DA6E 100%)'
                  }}
                >
                  The Science
                </motion.span>{' '}
                <span className="relative z-10">of Recovery,{' '}</span>
                <motion.span 
                  className="text-accent font-heading font-semibold ml-1"
                  animate={{ 
                    opacity: isComplete ? 0 : [0.8, 1, 0.8],
                    background: isComplete ? 'none' : [
                      'linear-gradient(90deg, #E5C76B 0%, #F6DA6E 100%)',
                      'linear-gradient(90deg, #F6DA6E 0%, #FFFAD1 100%)',
                      'linear-gradient(90deg, #E5C76B 0%, #F6DA6E 100%)'
                    ],
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                  transition={{ 
                    duration: 3, 
                    delay: isComplete ? 0 : 1.5, 
                    repeat: isComplete ? 0 : Infinity, 
                    ease: "easeInOut" 
                  }}
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    background: 'linear-gradient(90deg, #E5C76B 0%, #F6DA6E 100%)'
                  }}
                >
                  The Art
                </motion.span>{' '}
                <span className="relative z-10">of Care</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}