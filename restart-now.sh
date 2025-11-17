#!/bin/bash
# Run this script with: './restart-now.sh'
# Make this script executable with: chmod +x restart-now.sh
# Run it with: ./restart-now.sh

echo "🔄 Starting the full clean restart process for your website..."

# Stop any running Next.js processes
echo "⏹️ Stopping any running Next.js processes..."
pkill -f "next dev" || true

# Clear Next.js cache completely
echo "🧹 Clearing Next.js cache completely..."
rm -rf .next
rm -rf node_modules/.cache

# Reset any uncommitted changes in case of issues
echo "♻️ Ensuring all files are properly written..."
sleep 2

# Clear browser caches (optional message for user)
echo "🌐 TIP: You may need to clear your browser cache or use incognito mode to see all styling changes"

# Restart the development server
echo "🚀 Starting Next.js development server with fresh styles..."
echo "💻 Your site will be available at: http://localhost:3000"
npm run dev
