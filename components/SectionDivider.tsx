import React from 'react';

interface SectionDividerProps {
  variant?: 'line' | 'gradient' | 'dots';
}

export default function SectionDivider({ variant = 'gradient' }: SectionDividerProps) {
  if (variant === 'line') {
    return (
      <div className="relative h-px w-full max-w-3xl mx-auto my-6 md:my-12">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-[#B08D57]/20 to-transparent" />
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="relative flex justify-center items-center gap-2 my-4 md:my-10">
        <div className="w-1.5 h-1.5 rounded-full bg-[#B08D57]/40" />
        <div className="w-2 h-2 rounded-full bg-[#B08D57]/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#B08D57]/40" />
      </div>
    );
  }

  // Default: gradient
  return (
    <div className="relative h-10 md:h-20 overflow-visible flex items-center my-2 md:my-6">
      <div className="absolute left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-[#B08D57]/15 to-transparent" />
    </div>
  );
}
