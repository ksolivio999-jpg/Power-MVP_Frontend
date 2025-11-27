import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test('should display login page', async ({ page }) => {
    await page.goto('http://localhost:3000/auth/login');
    
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
    await expect(page.getByPlaceholder('you@example.com')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
  });

  test('should display register page', async ({ page }) => {
    await page.goto('http://localhost:3000/auth/register');
    
    await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
    await expect(page.getByPlaceholder('John Doe')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Create Account' })).toBeVisible();
  });
});

test.describe('Public Pages', () => {
  test('should display home page', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    await expect(page.getByText('PowerMap')).toBeVisible();
  });

  test('should access public view without authentication', async ({ page }) => {
    await page.goto('http://localhost:3000/public-view/test-123');
    
    await expect(page.getByText('Public View')).toBeVisible();
    await expect(page.getByText('This page is accessible without authentication')).toBeVisible();
  });
});
