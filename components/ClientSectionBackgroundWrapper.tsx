"use client";

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

// Import with ssr: false inside this client component (which is allowed)
const SectionBackground = dynamic(
  () => import('@/components/SectionBackground'),
  { ssr: false }
);

interface ClientSectionBackgroundWrapperProps {
  bgVariant?: 'primary' | 'subtle' | 'light' | 'white' | 'dark' | 'transparent' | 'gradient';
  children?: ReactNode;
}

export default function ClientSectionBackgroundWrapper({ bgVariant, children }: ClientSectionBackgroundWrapperProps) {
  return <SectionBackground bgVariant={bgVariant}>{children || <div />}</SectionBackground>;
} 