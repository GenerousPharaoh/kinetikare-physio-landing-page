#!/bin/bash

echo "🔧 Emergency error fix script running..."

# Force stop any Next.js processes
echo "⏹️ Stopping all Next.js processes..."
pkill -f "next" || true
sleep 2

# Delete build cache completely
echo "🧹 Clearing Next.js cache and build files..."
rm -rf .next
rm -rf node_modules/.cache

# Emergency clean CSS by removing imports that might be causing issues
echo "🛠️ Creating minimal CSS for emergency fix..."
cp app/globals.css app/globals.css.backup
echo "@tailwind base;
@tailwind components;
@tailwind utilities;" > app/globals.css

echo "📦 Running npm install to fix any dependency issues..."
npm install

echo "🚀 Starting Next.js in development mode with minimal configuration..."
echo "💻 Your site will be available at: http://localhost:3000"
echo "⚠️ This is a minimal version to fix the error - you'll need to gradually re-enable features"
npm run dev
