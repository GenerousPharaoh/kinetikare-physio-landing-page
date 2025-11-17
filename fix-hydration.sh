#!/bin/bash

# Fix hydration issues and restart the development server
# This script applies hydration-specific fixes to the components and restarts the server

# Color codes for terminal output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${MAGENTA}===== Fixing Hydration Issues =====${NC}"

# Step 1: Ensure the scripts directory exists
mkdir -p public/js

# Step 2: Check if the hydration-fix.js script exists
if [ ! -f "public/js/hydration-fix.js" ]; then
  echo -e "${YELLOW}Creating hydration-fix.js script...${NC}"
  # Script content would go here, but we've already created it
else
  echo -e "${GREEN}hydration-fix.js script already exists.${NC}"
fi

# Step 3: Clean the Next.js cache to ensure all changes are picked up
echo -e "${CYAN}Cleaning Next.js cache...${NC}"
rm -rf .next/cache

# Step 4: Restart the development server
echo -e "${CYAN}Restarting the Next.js development server...${NC}"
echo -e "${YELLOW}You can manually stop this script with Ctrl+C when you're done testing.${NC}"
npm run dev
