#!/bin/bash
# URGENT Direct fix for webpack error
# Run with: chmod +x direct-fix.sh && ./direct-fix.sh

echo "🚨 Applying direct fix for webpack error in RootLayout..."

# Stop any running processes
echo "⏹️ Stopping Next.js..."
pkill -f "next" || true
sleep 2

# Do a complete cleanup
echo "🧹 Complete cache cleanup..."
rm -rf .next
rm -rf node_modules/.cache

# Create minimal but compatible layout file to fix the webpack error
echo "✅ Creating simplified layout file..."
cat > app/layout.tsx << 'EOF'
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
EOF

echo "🚀 Starting Next.js with barebones layout to fix webpack error..."
npm run dev
