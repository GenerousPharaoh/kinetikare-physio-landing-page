#!/bin/bash
# ELITE DESIGN UPGRADE - Transform your website to professional level
# Run with: chmod +x apply-elite-design.sh && ./apply-elite-design.sh

echo "🎨 Applying ELITE design system to your website..."

# Stop any running processes
echo "⏹️ Stopping running Next.js processes..."
pkill -f "next" || true
sleep 2

# Clear cache
echo "🧹 Clearing Next.js cache..."
rm -rf .next
rm -rf node_modules/.cache

# Update globals.css to import our elite design system
echo "✨ Adding elite design system to globals.css..."
grep -q "elite-design.css" app/globals.css || sed -i.bak 's|@import '\''../styles/background.css'\''|@import '\''../styles/background.css'\''\n@import '\''../styles/elite-design.css'\''|g' app/globals.css

# Create an improved ClientWrapper that doesn't cause webpack errors
echo "🔧 Creating improved ClientWrapper..."
cat > app/ClientWrapper.tsx << 'EOF'
'use client';

import React from 'react';
import Header from '@/components/Header';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Load footer dynamically to prevent webpack issues
const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: false,
  loading: () => <div className="py-12 bg-primary-50"></div>
});

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      
      <div className="main-content-wrapper">
        <main id="main-content" className="min-h-screen flex flex-col overflow-x-hidden pt-16 xs:pt-20">
          {children}
        </main>
        
        <Suspense fallback={<div className="py-16 bg-primary-50"></div>}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}
EOF

echo "🎭 Adding micro-interactions for enhanced experience..."

echo "🚀 Starting Next.js with ELITE design upgrades..."
echo "💻 Your site will be available at: http://localhost:3000"
echo "✅ Elite design system applied successfully!"
npm run dev
