# KH Physiotherapy Website

This is a modern physiotherapy website built with Next.js, React, and Tailwind CSS.

## Troubleshooting Design Issues

If you're experiencing design issues with the website, follow these steps to fix them:

### Quick Fix

Run the following commands in your terminal:

```bash
# Navigate to the project directory
cd /Users/kareemhassanein/Desktop/code/physiotherapy-next

# Make the fix script executable
chmod +x apply-and-restart.sh

# Run the fix script
./apply-and-restart.sh
```

This will automatically:
1. Apply all necessary CSS fixes
2. Fix image positioning issues
3. Ensure service cards display correctly
4. Add debug scripts for runtime fixes
5. Restart the development server

### Fixing Hydration Issues

If you're seeing React hydration errors in the console, run:

```bash
# Navigate to the project directory
cd /Users/kareemhassanein/Desktop/code/physiotherapy-next

# Make the hydration fix script executable
chmod +x fix-hydration.sh

# Run the hydration fix script
./fix-hydration.sh
```

This script will:
1. Apply fixes to components with hydration mismatches
2. Add specialized client-side scripts to fix remaining issues
3. Clear the Next.js cache to ensure clean hydration
4. Restart the development server

### Manual Fix Steps

If the quick fix doesn't resolve the issues, you can perform the following steps manually:

1. **Check for rendering issues**:
   ```bash
   node scripts/debug-render.js
   ```
   This will analyze your code and identify potential issues.

2. **Apply general rendering fixes**:
   ```bash
   node scripts/apply-fixes.js
   ```
   This script will create and update necessary CSS and component files.

3. **Fix hydration issues specifically**:
   - Edit `components/sections/HeroSection.tsx` to remove complex animations
   - Edit `components/MobileBottomNav.tsx` to simplify the framer-motion animations
   - Add the hydration-fix.js script to the layout

4. **Restart the development server**:
   ```bash
   npm run dev
   ```

5. **Check the browser console** for any remaining errors.

## Common Issues and Solutions

### React Hydration Errors

If you see error messages like "Hydration failed because the initial UI does not match what was rendered on the server":

- Remove complex animations, especially from framer-motion
- Ensure all CSS values match between server and client renders
- Use inline styles for critical positioning instead of classes
- Add the hydration-fix.js script to fix mismatches in the browser

### Image Positioning Issues

If images appear to be missing or incorrectly positioned:

- Ensure parent containers of `<Image fill>` components have `position: relative`
- Add appropriate `width="auto"` or `height="auto"` to images with aspect ratio issues

### Service Cards Not Displaying

If service cards are empty or not visible:

- Check for CSS animations that might be keeping elements hidden
- Ensure the cards have proper z-index and visibility settings
- Replace framer-motion animations with simpler CSS transitions

### CSS Conflicts

If the CSS styling is inconsistent:

- The site has over 200 `!important` declarations which may cause conflicts
- The critical CSS files override problematic styles
- Check for competing CSS rules in the browser inspector

## Development Workflow

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Make changes to the code.

4. The changes will be reflected automatically in the browser.

## Production Deployment

To build for production:

```bash
npm run build
npm start
```

This will generate an optimized production build of the website.
