#!/bin/bash
# Fix webpack error while preserving site styling & design
# Run with: chmod +x fix-webpack-error.sh && ./fix-webpack-error.sh

echo "🔄 Starting focused webpack error fix..."

# Stop any running Next.js processes
echo "⏹️ Stopping any running Next.js processes..."
pkill -f "next dev" || true
sleep 2

# Clear Next.js cache specifically targeting webpack
echo "🧹 Clearing Next.js cache..."
rm -rf .next
rm -rf node_modules/.cache

# Restore original globals.css if backup exists
if [ -f "app/globals.css.backup" ]; then
  echo "🔄 Restoring original globals.css..."
  cp app/globals.css.backup app/globals.css
fi

# Fix the webpack error by simplifying ClientWrapper
echo "🔧 Updating ClientWrapper component..."
cat > app/ClientWrapper.tsx << 'EOF'
'use client';

import React from 'react';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
EOF

# Update layout.tsx to fix potential reference issues
echo "🔧 Updating layout.tsx to fix webpack reference..."
cat > app/layout.tsx << 'EOF'
import { Inter, Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';
import React from 'react';
import { Metadata } from 'next';
import ClientWrapper from './ClientWrapper';

// Font configurations
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap'
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  title: 'Kareem Hassanein Physiotherapy',
  description: 'Professional physiotherapy services in Burlington, Ontario.',
  icons: {
    icon: [
      { url: '/favicon.svg' }
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${montserrat.variable}`}>
      <body className="antialiased pb-16 md:pb-0 overflow-x-hidden bg-background glow-effect-subtle">
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
EOF

echo "🚀 Starting Next.js development server..."
echo "💻 Your site will be available at: http://localhost:3000"
echo "⚠️ This fix addresses the webpack error while preserving your styling"
npm run dev
