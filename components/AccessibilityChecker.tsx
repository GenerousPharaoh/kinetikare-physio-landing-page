'use client';

import { useEffect, useState } from 'react';

/**
 * AccessibilityChecker - A development component that runs basic accessibility checks
 * Only include this component in development mode, not in production.
 */
export default function AccessibilityChecker() {
  const [issues, setIssues] = useState<Array<{ element: string; issue: string }>>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return;

    const checkAccessibility = () => {
      const newIssues: Array<{ element: string; issue: string }> = [];

      // Check for images without alt text
      document.querySelectorAll('img').forEach((img) => {
        if (!img.hasAttribute('alt')) {
          newIssues.push({
            element: `<img src="${img.src?.substring(0, 30)}...">`,
            issue: 'Image missing alt text',
          });
        }
      });

      // Check for buttons without accessible names
      document.querySelectorAll('button').forEach((button) => {
        if (!button.textContent?.trim() && !button.getAttribute('aria-label') && !button.getAttribute('title')) {
          newIssues.push({
            element: `<button>${button.outerHTML.substring(0, 30)}...</button>`,
            issue: 'Button without accessible name',
          });
        }
      });

      // Check for proper heading hierarchy
      let previousLevel = 0;
      document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((heading) => {
        const level = parseInt(heading.tagName.substring(1));
        
        // Headings should not skip levels going down (h1 -> h3 is not allowed, but h2 -> h1 is ok for new sections)
        if (previousLevel > 0 && level > previousLevel && level - previousLevel > 1) {
          newIssues.push({
            element: `<${heading.tagName}>${heading.textContent?.substring(0, 30) || ''}...</${heading.tagName}>`,
            issue: `Heading level skipped from h${previousLevel} to h${level}`,
          });
        }
        
        previousLevel = level;
      });

      // Check for proper color contrast (simplified version)
      document.querySelectorAll('p, span, div, a, button, h1, h2, h3, h4, h5, h6').forEach((element) => {
        const style = window.getComputedStyle(element);
        const backgroundColor = style.backgroundColor;
        const color = style.color;
        
        // Very simplified check - a proper check would need to calculate contrast ratios
        if (backgroundColor === 'rgba(0, 0, 0, 0)' || backgroundColor === 'transparent') {
          // Skip elements with transparent backgrounds
          return;
        }
        
        if (backgroundColor === color) {
          newIssues.push({
            element: `<${element.tagName.toLowerCase()}>${element.textContent?.substring(0, 30) || ''}...</${element.tagName.toLowerCase()}>`,
            issue: 'Text color matches background color',
          });
        }
      });

      setIssues(newIssues);
    };

    // Run checks after page load
    setTimeout(checkAccessibility, 2000);
  }, []);

  if (process.env.NODE_ENV !== 'development' || issues.length === 0) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: isVisible ? '10px' : '-10px',
        right: '10px',
        backgroundColor: '#ffee00',
        color: '#000',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        zIndex: 9999,
        maxWidth: '400px',
        maxHeight: isVisible ? '500px' : '40px',
        overflow: 'auto',
        transition: 'all 0.3s ease',
        opacity: isVisible ? 1 : 0.8,
      }}
    >
      <button
        onClick={() => setIsVisible(!isVisible)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold',
          width: '100%',
          textAlign: 'left',
          padding: '0',
        }}
      >
        {isVisible ? 'Hide' : 'Show'} Accessibility Issues ({issues.length})
      </button>
      
      {isVisible && (
        <div style={{ marginTop: '10px' }}>
          <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>
            Detected {issues.length} potential accessibility issues:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            {issues.map((issue, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>
                <strong>{issue.issue}</strong>
                <br />
                <code style={{ fontSize: '12px', backgroundColor: '#eee', padding: '2px 4px' }}>
                  {issue.element}
                </code>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: '10px', fontSize: '12px' }}>
            Note: This is a simplified checker. Use professional tools like axe or Lighthouse for thorough audits.
          </p>
        </div>
      )}
    </div>
  );
} 