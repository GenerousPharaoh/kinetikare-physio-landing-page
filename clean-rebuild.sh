#!/bin/bash
# Make this script executable with: chmod +x clean-rebuild.sh

# Stop any running next dev processes
echo "Stopping any running Next.js development processes..."
pkill -f "next dev" || true

# Remove the .next directory to clear cache
echo "Clearing Next.js cache..."
rm -rf .next

# Remove any other potential cache directories
echo "Clearing additional caches..."
rm -rf node_modules/.cache

# Restart the development server
echo "Starting development server with fresh cache..."
npm run dev
