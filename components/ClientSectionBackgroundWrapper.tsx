"use client";

import dynamic from 'next/dynamic';

// Import with ssr: false inside this client component (which is allowed)
const SectionBackground = dynamic(
  () => import('@/components/SectionBackground'),
  { ssr: false }
);

interface ClientSectionBackgroundWrapperProps {
  variant?: 'subtle-lines' | 'clean';
}

export default function ClientSectionBackgroundWrapper({ variant }: ClientSectionBackgroundWrapperProps) {
  return <SectionBackground variant={variant} />;
} 