"use client";

import React from 'react';
import BackgroundTextureClient from './BackgroundTextureClient';

interface ClientBackgroundWrapperProps {
  opacity?: number;
  zIndex?: number;
}

export default function ClientBackgroundWrapper({
  opacity = 0.02,
  zIndex = -10,
}: ClientBackgroundWrapperProps) {
  return (
    <BackgroundTextureClient opacity={opacity} zIndex={zIndex} />
  );
} 