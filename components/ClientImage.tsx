'use client';

import Image, { ImageProps } from 'next/image';

// This is a client component wrapper for next/image
// It resolves the "Cannot access Image.propTypes on the server" error
// that happens with Next.js 13.5+ and newer
export default function ClientImage(props: ImageProps) {
  return <Image {...props} />;
} 