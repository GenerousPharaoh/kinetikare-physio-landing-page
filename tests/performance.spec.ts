import { test, expect } from '@playwright/test';

test.describe('Performance and Accessibility Tests', () => {
  test('should load homepage within reasonable time', async ({ page }) => {
    // Measure page load time
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    
    // Log the load time (helpful for CI/CD)
    console.log(`Homepage load time: ${loadTime}ms`);
    
    // Assert that the page loads within a reasonable time (e.g., 3 seconds)
    // This threshold can be adjusted based on your requirements
    expect(loadTime).toBeLessThan(3000);
    
    // Check that critical elements are visible quickly
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should have proper responsive behavior', async ({ page }) => {
    // Test desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    
    // Check that service cards are displayed in a grid on desktop
    const serviceCards = page.locator('.bg-white.p-6.rounded-lg.shadow-md');
    const desktopBoundingBoxes = await serviceCards.all().then(elements => 
      Promise.all(elements.map(el => el.boundingBox()))
    );
    
    // Check that cards are laid out horizontally (side by side) on desktop
    // This is a simplistic check assuming 3 cards
    if (desktopBoundingBoxes.length >= 2) {
      const firstCard = desktopBoundingBoxes[0];
      const secondCard = desktopBoundingBoxes[1];
      if (firstCard && secondCard) {
        expect(secondCard.x).toBeGreaterThan(firstCard.x);
      }
    }
    
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check that service cards are stacked on mobile
    const mobileBoundingBoxes = await serviceCards.all().then(elements => 
      Promise.all(elements.map(el => el.boundingBox()))
    );
    
    // Check that cards are stacked vertically on mobile
    // This is a simplistic check assuming 3 cards
    if (mobileBoundingBoxes.length >= 2) {
      const firstCard = mobileBoundingBoxes[0];
      const secondCard = mobileBoundingBoxes[1];
      if (firstCard && secondCard) {
        expect(secondCard.y).toBeGreaterThan(firstCard.y + firstCard.height - 5); // Allow 5px overlap
      }
    }
  });

  test('should have accessible form elements', async ({ page }) => {
    await page.goto('/');
    
    // Check if form inputs have proper labels
    const nameInput = page.locator('input[id="name"]');
    const nameLabel = page.locator('label[for="name"]');
    
    // Verify that labels exist and are associated with inputs
    await expect(nameLabel).toBeVisible();
    await expect(nameLabel).toHaveText(/full name/i);
    
    // Check email field
    const emailInput = page.locator('input[id="email"]');
    const emailLabel = page.locator('label[for="email"]');
    
    await expect(emailLabel).toBeVisible();
    await expect(emailLabel).toHaveText(/email/i);
    
    // Check message field
    const messageInput = page.locator('textarea[id="message"]');
    const messageLabel = page.locator('label[for="message"]');
    
    await expect(messageLabel).toBeVisible();
    await expect(messageLabel).toHaveText(/message/i);
  });
  
  test('should have appropriate image alt texts', async ({ page }) => {
    await page.goto('/');
    
    // Check if all images have alt text
    // This test will pass if either:
    // 1. All images have alt attributes
    // 2. Any images without alt attributes are decorative (role="presentation" or aria-hidden="true")
    
    const images = await page.locator('img').all();
    
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      const role = await img.getAttribute('role');
      const ariaHidden = await img.getAttribute('aria-hidden');
      
      const isDecorative = role === 'presentation' || ariaHidden === 'true';
      
      // Either the image should have alt text or be marked as decorative
      expect(alt !== null || isDecorative).toBeTruthy();
    }
  });
}); 