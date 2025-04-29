'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Direct import with no loading state
const ClientComponentsWrapper = dynamic(() => import('@/components/ClientComponentsWrapper'), {
  ssr: false
});

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  // No scroll handlers, no animations, just render the children
  return <ClientComponentsWrapper>{children}</ClientComponentsWrapper>;
} 