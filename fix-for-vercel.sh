#!/bin/bash
# Vercel deployment fix script

# Output info
echo "🚀 Starting Vercel deployment fix process..."

# Create a backup of problematic files
echo "📂 Creating backups of key files..."
mkdir -p .vercel-backup
[ -f app/ClientWrapper.tsx ] && cp app/ClientWrapper.tsx .vercel-backup/

# Modify ClientWrapper to ensure it works with Vercel's environment
echo "🔧 Fixing ClientWrapper.tsx imports..."
cat > app/ClientWrapper.tsx << 'EOF'
"use client";

// Import React 19 compatibility patch first
import '../components/react19-compat';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import { AnimatePresence } from 'framer-motion';

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <div key={pathname}>
          {children}
        </div>
      </AnimatePresence>
      <Footer />
      <CookieBanner />
    </>
  );
};

export default ClientWrapper;
EOF

echo "✅ Fixes applied successfully!"
echo "🏗️ Ready to build for Vercel deployment"

# Run the build if the BUILD_NOW environment variable is set
if [ "$BUILD_NOW" = "true" ]; then
  echo "🔄 Starting build process..."
  npm run build
fi 