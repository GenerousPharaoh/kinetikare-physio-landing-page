#!/bin/bash
# PERMANENT FIX for webpack error - NO temporary workarounds
# Run with: chmod +x permanent-fix.sh && ./permanent-fix.sh

echo "🔧 Applying PERMANENT webpack error fix..."

# Stop any running processes
echo "⏹️ Stopping Next.js..."
pkill -f "next" || true
sleep 2

# Clear cache
echo "🧹 Clearing Next.js cache..."
rm -rf .next
rm -rf node_modules/.cache

# Create a proper ClientWrapper that doesn't reference ClientComponentsWrapper
echo "✅ Creating fixed ClientWrapper.tsx..."
cat > app/ClientWrapper.tsx << 'EOF'
'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Suspense } from 'react';

// Direct implementation to fix webpack error
// All styling preserved by using the same structure

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

# Ensure consistent styling is used throughout the site
echo "🎨 Ensuring consistent styling across the site..."

# Move the background.css to a safe location to ensure it loads properly
if [ -f "styles/background.css" ]; then
  mkdir -p styles/core
  cp styles/background.css styles/core/site-background.css
  
  # Update globals.css to use the relocated file
  sed -i.bak 's|@import '\''../styles/background.css'\''|@import '\''../styles/core/site-background.css'\''|g' app/globals.css
fi

echo "🚀 Starting Next.js with PERMANENT fix in place..."
echo "💻 Your site will be available at: http://localhost:3000"
npm run dev
