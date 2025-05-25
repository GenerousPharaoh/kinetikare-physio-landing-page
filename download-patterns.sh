#!/bin/bash

# Directory to save patterns
DIR="physiotherapy-next/public/images/patterns"

# Ensure directory exists
mkdir -p "$DIR"

# Download pattern files
curl -o "$DIR/carbon-fiber.png" "https://www.toptal.com/designers/subtlepatterns/uploads/carbon_fibre.png"
curl -o "$DIR/carbon-fiber-small.png" "https://www.toptal.com/designers/subtlepatterns/uploads/carbon_fibre_v2.png"
curl -o "$DIR/dark-leather.png" "https://www.toptal.com/designers/subtlepatterns/uploads/dark_leather.png"
curl -o "$DIR/subtle-carbon.png" "https://www.toptal.com/designers/subtlepatterns/uploads/subtle_carbon.png"
curl -o "$DIR/subtle-white-carbon.png" "https://www.toptal.com/designers/subtlepatterns/uploads/white_carbon.png"

echo "Pattern files downloaded successfully." 