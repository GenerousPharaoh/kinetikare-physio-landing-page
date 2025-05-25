import { test, expect } from '@playwright/test';

test.describe('Navigation and Routes Tests', () => {
  test('should navigate to all main routes correctly', async ({ page }) => {
    // Start at the homepage
    await page.goto('/');
    
    // Check if we're on the homepage
    await expect(page).toHaveURL('/');
    
    // Navigate to About page and check URL
    await page.goto('/about');
    await expect(page).toHaveURL('/about');
    
    // Navigate to Services page and check URL
    await page.goto('/services');
    await expect(page).toHaveURL('/services');
    
    // Navigate to FAQ page and check URL
    await page.goto('/faq');
    await expect(page).toHaveURL('/faq');
    
    // Navigate to Success Stories page and check URL
    await page.goto('/success-stories');
    await expect(page).toHaveURL('/success-stories');
    
    // Navigate to Blog page and check URL
    await page.goto('/blog');
    await expect(page).toHaveURL('/blog');
  });
  
  test('should show 404 page for non-existent routes', async ({ page }) => {
    // Navigate to a non-existent page
    await page.goto('/non-existent-page');
    
    // Check if we're on the 404 page
    await expect(page.locator('h1, h2')).toContainText(['404', 'Not Found']);
  });
  
  test('should navigate between pages using header links', async ({ page }) => {
    // Start at the homepage
    await page.goto('/');
    
    // Find and click on About link in the header
    // This test assumes your header has links to these pages
    // Adjust selectors if your header structure is different
    const header = page.locator('header');
    
    // Try to find and click the About link if it exists
    const aboutLink = header.getByText('About', { exact: false });
    if (await aboutLink.count() > 0) {
      await aboutLink.click();
      await expect(page).toHaveURL('/about');
    }
    
    // Try to navigate back to home
    const homeLink = page.locator('header').getByText('Home', { exact: false });
    if (await homeLink.count() > 0) {
      await homeLink.click();
      await expect(page).toHaveURL('/');
    }
  });
  
  test('should load blog post pages correctly', async ({ page }) => {
    // Go to the main blog page
    await page.goto('/blog');
    
    // Check a specific blog post route if it exists
    // This is a common pattern in Next.js - dynamic routes
    await page.goto('/blog/understanding-low-back-pain');
    await expect(page).toHaveURL('/blog/understanding-low-back-pain');
    
    // The content should load correctly
    // Check for relevant content that should be on this specific blog post
    // This is just a basic check - adjust according to your actual content
    await expect(page.locator('body')).not.toContainText('404');
  });
}); 