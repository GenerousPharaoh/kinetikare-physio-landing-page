"use client";

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

// Import with ssr: false inside this client component (which is allowed)
const SectionBackground = dynamic(
  () => import('@/components/SectionBackground'),
  { ssr: false }
);

interface ClientSectionBackgroundWrapperProps {
  variant?: 'light' | 'subtle' | 'accent' | 'primary' | 'neutral' | 'premium' | 'premium-light' | 'premium-dark' | 'none';
  children?: ReactNode;
}

export default function ClientSectionBackgroundWrapper({ variant, children }: ClientSectionBackgroundWrapperProps) {
  return <SectionBackground variant={variant}>{children || <div />}</SectionBackground>;
} 