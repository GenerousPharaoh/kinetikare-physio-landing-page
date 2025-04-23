'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Import ScrollHandlerWrapper with SSR disabled
const ScrollHandlerWrapper = dynamic(
  () => import('@/components/ScrollHandlerWrapper'),
  { ssr: false }
);

interface ClientScrollWrapperProps {
  children: React.ReactNode;
}

// Simple client component wrapper to use ScrollHandlerWrapper with SSR disabled
export default function ClientScrollWrapper({ children }: ClientScrollWrapperProps) {
  return <ScrollHandlerWrapper>{children}</ScrollHandlerWrapper>;
} 