#!/bin/bash

# auto-git-sync.sh - Automatically commit and push changes when files are modified
# Make this script executable: chmod +x auto-git-sync.sh
# Run it in the background: ./auto-git-sync.sh &

# Repository directory - current directory by default
REPO_DIR="."
BRANCH="main"
CHECK_INTERVAL=10  # Check for changes every 10 seconds

cd "$REPO_DIR"
echo "Starting auto-git-sync for $(pwd) (Branch: $BRANCH)"
echo "Press Ctrl+C to stop"

while true; do
    # Check if there are any changes
    if [[ -n $(git status --porcelain) ]]; then
        # Get current timestamp
        TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")
        
        echo "Changes detected at $TIMESTAMP"
        
        # Stage all changes
        git add .
        
        # Commit changes with timestamp
        git commit -m "Auto-update: $TIMESTAMP"
        
        # Push changes to remote
        git push origin $BRANCH
        
        echo "Changes pushed successfully"
    else
        echo "No changes detected at $(date "+%Y-%m-%d %H:%M:%S")"
    fi
    
    # Wait before checking again
    sleep $CHECK_INTERVAL
done 