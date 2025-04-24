import React from 'react';

interface PatternBackgroundProps {
  className?: string;
  color?: string;
  opacity?: number;
  pattern?: 'dots' | 'grid';
}

export default function PatternBackground({
  className = '',
  color = 'currentColor',
  opacity = 0.05,
  pattern = 'dots',
}: PatternBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${
        pattern === 'dots' ? 'pattern-dots' : ''
      } ${className}`}
      style={{
        opacity,
        color,
      }}
      aria-hidden="true"
    />
  );
} 