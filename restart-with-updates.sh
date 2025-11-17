#!/bin/bash
# Make this script executable with: chmod +x restart-with-updates.sh
# Run it with: ./restart-with-updates.sh

# Stop any running Next.js processes
echo "Stopping any running Next.js processes..."
pkill -f "next dev" || true

# Clear Next.js cache completely
echo "Clearing Next.js cache..."
rm -rf .next
rm -rf node_modules/.cache

# Clear browser caches (optional message for user)
echo "NOTE: Please clear your browser cache or use incognito mode to see all styling changes"

# Restart the development server
echo "Starting Next.js development server with fresh styles..."
npm run dev
