import { test, expect } from '@playwright/test';

test.describe('Homepage Tests', () => {
  test('should display the homepage with correct sections', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/');
    
    // Check if the page title contains correct text
    await expect(page.locator('h1')).toContainText('Professional Physiotherapy Services');
    
    // Check if hero section is rendered
    await expect(page.locator('section:has-text("Professional Physiotherapy Services")')).toBeVisible();
    
    // Check if services section is rendered
    await expect(page.locator('section[id="services"]')).toBeVisible();
    await expect(page.locator('section[id="services"] h2')).toContainText('Our Services');
    
    // Verify service cards exist
    const serviceCards = page.locator('.bg-white.p-6.rounded-lg.shadow-md');
    await expect(serviceCards).toHaveCount(3);
    
    // Check if specific services are listed
    await expect(page.getByText('Sports Rehabilitation')).toBeVisible();
    await expect(page.getByText('Pain Management')).toBeVisible();
    await expect(page.getByText('Post-Surgery Recovery')).toBeVisible();
    
    // Check if about section is rendered
    await expect(page.locator('section[id="about"]')).toBeVisible();
    await expect(page.locator('section[id="about"] h2')).toContainText('About Us');
    
    // Check if contact section is rendered
    await expect(page.locator('section[id="contact"]')).toBeVisible();
    await expect(page.locator('section[id="contact"] h2')).toContainText('Contact Us');
    
    // Check if the contact form is rendered
    await expect(page.locator('form')).toBeVisible();
    await expect(page.locator('input[id="name"]')).toBeVisible();
    await expect(page.locator('input[id="email"]')).toBeVisible();
    await expect(page.locator('textarea[id="message"]')).toBeVisible();
  });
  
  test('should have working "Book Appointment" button', async ({ page }) => {
    await page.goto('/');
    
    // Click the Book Appointment button
    await page.getByText('Book Appointment').click();
    
    // Verify that it scrolls to the contact section (anchor link)
    await expect(page.locator('section[id="contact"]')).toBeInViewport();
  });
  
  test('should have valid form inputs', async ({ page }) => {
    await page.goto('/');
    
    // Fill in the contact form
    await page.locator('input[id="name"]').fill('Test User');
    await page.locator('input[id="email"]').fill('test@example.com');
    await page.locator('textarea[id="message"]').fill('This is a test message');
    
    // Verify the form input values
    await expect(page.locator('input[id="name"]')).toHaveValue('Test User');
    await expect(page.locator('input[id="email"]')).toHaveValue('test@example.com');
    await expect(page.locator('textarea[id="message"]')).toHaveValue('This is a test message');
  });
}); 