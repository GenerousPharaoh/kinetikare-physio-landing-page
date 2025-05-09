#!/bin/bash

# Apply fixes and restart the development server
# This script applies all fixes and restarts the server in one command

# Color codes for terminal output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${MAGENTA}===== Applying fixes and restarting server =====${NC}"

# Step 1: Apply the fixes
echo -e "${CYAN}Running the apply-fixes.js script...${NC}"
node scripts/apply-fixes.js

# Step 2: Restart the development server
echo -e "${CYAN}Restarting the Next.js development server...${NC}"
npm run dev
