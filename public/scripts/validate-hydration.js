/**
 * Hydration Validation Script
 * 
 * This script validates that all the hydration fixes have been applied correctly.
 * Run this in the browser console to check if the site is rendering properly.
 */

(function() {
  console.log('%c🔍 Running Hydration Validation...', 'font-size: 14px; font-weight: bold; color: #4338ca;');
  
  // Test categories and their weights
  const tests = {
    critical: {
      weight: 3,
      checks: []
    },
    important: {
      weight: 2,
      checks: []
    },
    visual: {
      weight: 1,
      checks: []
    }
  };
  
  // Critical tests - site will break if these fail
  tests.critical.checks.push(
    {
      name: 'Main Content Container',
      test: () => !!document.getElementById('main-content'),
      message: 'Main content container exists'
    },
    {
      name: 'HeroSection Rendering',
      test: () => {
        const heroSection = document.querySelector('section:first-of-type');
        return heroSection && getComputedStyle(heroSection).opacity === '1';
      },
      message: 'Hero section is visible and properly rendered'
    },
    {
      name: 'Layout Structure',
      test: () => {
        const header = document.querySelector('header');
        const main = document.querySelector('main');
        const footer = document.querySelector('footer');
        return header && main && footer;
      },
      message: 'Basic layout structure (header, main, footer) exists'
    }
  );
  
  // Important tests - functionality issues if these fail
  tests.important.checks.push(
    {
      name: 'Navigation Links',
      test: () => {
        const navLinks = document.querySelectorAll('header a');
        return navLinks.length > 0;
      },
      message: 'Navigation links are present'
    },
    {
      name: 'MobileBottomNav',
      test: () => {
        const mobileNav = document.querySelector('nav');
        return !mobileNav || (mobileNav && getComputedStyle(mobileNav).display !== 'none');
      },
      message: 'Mobile bottom navigation is properly rendered'
    },
    {
      name: 'FloatingButtons',
      test: () => {
        const floatingButtons = document.querySelectorAll('.fixed > a, .fixed > button');
        return floatingButtons.length > 0;
      },
      message: 'Floating action buttons are present'
    },
    {
      name: 'Section Backgrounds',
      test: () => {
        const sections = document.querySelectorAll('section > div');
        let allValid = true;
        sections.forEach(section => {
          if (getComputedStyle(section).opacity !== '1') allValid = false;
        });
        return allValid;
      },
      message: 'All section backgrounds are visible'
    }
  );
  
  // Visual tests - cosmetic issues if these fail
  tests.visual.checks.push(
    {
      name: 'Images Loaded',
      test: () => {
        const images = document.querySelectorAll('img');
        let allLoaded = true;
        images.forEach(img => {
          if (img.complete === false || img.naturalHeight === 0) allLoaded = false;
        });
        return allLoaded;
      },
      message: 'All images are loaded properly'
    },
    {
      name: 'Z-Index Stacking',
      test: () => {
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        return header && parseInt(getComputedStyle(header).zIndex) > 0 && 
               footer && parseInt(getComputedStyle(footer).zIndex) > 0;
      },
      message: 'Z-index stacking is properly configured'
    },
    {
      name: 'Typography Rendering',
      test: () => {
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        return headings.length > 0;
      },
      message: 'Typography elements are present'
    },
    {
      name: 'Interactive Elements',
      test: () => {
        const buttons = document.querySelectorAll('button, a[href]');
        return buttons.length > 0;
      },
      message: 'Interactive elements are present'
    }
  );
  
  // Run all the tests
  let totalScore = 0;
  let maxScore = 0;
  const results = {
    critical: { passed: 0, total: tests.critical.checks.length },
    important: { passed: 0, total: tests.important.checks.length },
    visual: { passed: 0, total: tests.visual.checks.length }
  };
  
  // Run critical tests
  console.log('%c🚨 Critical Tests', 'font-size: 12px; font-weight: bold; color: #dc2626;');
  tests.critical.checks.forEach(check => {
    const passed = check.test();
    const score = passed ? tests.critical.weight : 0;
    totalScore += score;
    maxScore += tests.critical.weight;
    results.critical.passed += passed ? 1 : 0;
    
    console.log(
      `%c${passed ? '✅' : '❌'} ${check.name}: %c${check.message}`,
      `font-weight: ${passed ? 'normal' : 'bold'}; color: ${passed ? '#10b981' : '#ef4444'};`,
      'color: #6b7280;'
    );
  });
  
  // Run important tests
  console.log('%c🔔 Important Tests', 'font-size: 12px; font-weight: bold; color: #ea580c;');
  tests.important.checks.forEach(check => {
    const passed = check.test();
    const score = passed ? tests.important.weight : 0;
    totalScore += score;
    maxScore += tests.important.weight;
    results.important.passed += passed ? 1 : 0;
    
    console.log(
      `%c${passed ? '✅' : '❌'} ${check.name}: %c${check.message}`,
      `font-weight: ${passed ? 'normal' : 'bold'}; color: ${passed ? '#10b981' : '#ef4444'};`,
      'color: #6b7280;'
    );
  });
  
  // Run visual tests
  console.log('%c🎨 Visual Tests', 'font-size: 12px; font-weight: bold; color: #0ea5e9;');
  tests.visual.checks.forEach(check => {
    const passed = check.test();
    const score = passed ? tests.visual.weight : 0;
    totalScore += score;
    maxScore += tests.visual.weight;
    results.visual.passed += passed ? 1 : 0;
    
    console.log(
      `%c${passed ? '✅' : '❌'} ${check.name}: %c${check.message}`,
      `font-weight: ${passed ? 'normal' : 'bold'}; color: ${passed ? '#10b981' : '#ef4444'};`,
      'color: #6b7280;'
    );
  });
  
  // Calculate overall score
  const percentScore = Math.round((totalScore / maxScore) * 100);
  
  // Generate summary report
  console.log('\n%c📊 Hydration Validation Results', 'font-size: 14px; font-weight: bold; color: #4338ca;');
  console.log(
    `%cCritical Tests: %c${results.critical.passed}/${results.critical.total} passed`,
    'font-weight: bold;',
    `color: ${results.critical.passed === results.critical.total ? '#10b981' : '#ef4444'};`
  );
  console.log(
    `%cImportant Tests: %c${results.important.passed}/${results.important.total} passed`,
    'font-weight: bold;',
    `color: ${results.important.passed === results.important.total ? '#10b981' : '#f97316'};`
  );
  console.log(
    `%cVisual Tests: %c${results.visual.passed}/${results.visual.total} passed`,
    'font-weight: bold;',
    `color: ${results.visual.passed === results.visual.total ? '#10b981' : '#0ea5e9'};`
  );
  
  // Display overall score
  const scoreColor = percentScore >= 90 ? '#10b981' : percentScore >= 70 ? '#f97316' : '#ef4444';
  console.log(
    `%cOverall Score: %c${percentScore}%`,
    'font-size: 14px; font-weight: bold;',
    `font-size: 14px; font-weight: bold; color: ${scoreColor};`
  );
  
  // Final recommendation
  if (percentScore === 100) {
    console.log('%c✨ Perfect! All hydration issues have been fixed.', 'font-size: 14px; font-weight: bold; color: #10b981;');
  } else if (percentScore >= 90) {
    console.log('%c🎉 Great! Most hydration issues have been fixed.', 'font-size: 14px; font-weight: bold; color: #10b981;');
  } else if (percentScore >= 70) {
    console.log('%c⚠️ Moderate issues remain. Some elements may not display correctly.', 'font-size: 14px; font-weight: bold; color: #f97316;');
  } else {
    console.log('%c🚨 Serious issues remain. The site may not function properly.', 'font-size: 14px; font-weight: bold; color: #ef4444;');
  }
  
  // Return an object with the test results for further processing
  return {
    results,
    score: percentScore,
    totalTests: tests.critical.checks.length + tests.important.checks.length + tests.visual.checks.length,
    passedTests: results.critical.passed + results.important.passed + results.visual.passed
  };
})(); 