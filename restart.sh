#!/bin/bash
# Make this script executable with: chmod +x restart.sh

# Stop any running Next.js processes
echo "Stopping any running Next.js processes..."
pkill -f "next dev" || true

# Clear Next.js cache
echo "Clearing Next.js cache..."
rm -rf .next
rm -rf node_modules/.cache

# Restart the development server
echo "Starting Next.js development server..."
npm run dev
