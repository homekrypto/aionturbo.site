import { test, expect } from '@playwright/test';

test.describe('Dropdown Menu Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3001/en');
  });

  test('Services dropdown should appear on hover and disappear on mouse leave', async ({ page }) => {
    // Find the Services button
    const servicesButton = page.locator('nav button:has-text("Services")');
    await expect(servicesButton).toBeVisible();

    // Hover over Services button
    await servicesButton.hover();

    // Check that dropdown appears
    const servicesDropdown = page.locator('div:has-text("All Services")');
    await expect(servicesDropdown).toBeVisible();

    // Move mouse away
    await page.mouse.move(0, 0);

    // Wait for dropdown to disappear
    await expect(servicesDropdown).not.toBeVisible({ timeout: 1000 });
  });

  test('Solutions dropdown should appear on hover and disappear on mouse leave', async ({ page }) => {
    // Find the Solutions button
    const solutionsButton = page.locator('nav button:has-text("Solutions")');
    await expect(solutionsButton).toBeVisible();

    // Hover over Solutions button
    await solutionsButton.hover();

    // Check that dropdown appears
    const solutionsDropdown = page.locator('div:has-text("All Solutions")');
    await expect(solutionsDropdown).toBeVisible();

    // Move mouse away
    await page.mouse.move(0, 0);

    // Wait for dropdown to disappear
    await expect(solutionsDropdown).not.toBeVisible({ timeout: 1000 });
  });

  test('Products dropdown should appear on hover and disappear on mouse leave', async ({ page }) => {
    // Find the Products button
    const productsButton = page.locator('nav button:has-text("Products")');
    await expect(productsButton).toBeVisible();

    // Hover over Products button
    await productsButton.hover();

    // Check that dropdown appears
    const productsDropdown = page.locator('div:has-text("All Products")');
    await expect(productsDropdown).toBeVisible();

    // Move mouse away
    await page.mouse.move(0, 0);

    // Wait for dropdown to disappear
    await expect(productsDropdown).not.toBeVisible({ timeout: 1000 });
  });

  test('Dropdown should stay open when moving mouse over it', async ({ page }) => {
    const servicesButton = page.locator('nav button:has-text("Services")');
    await servicesButton.hover();

    const servicesDropdown = page.locator('div:has-text("All Services")');
    await expect(servicesDropdown).toBeVisible();

    // Move mouse to dropdown
    await servicesDropdown.hover();

    // Dropdown should still be visible
    await expect(servicesDropdown).toBeVisible();

    // Wait a bit more to ensure it doesn't disappear
    await page.waitForTimeout(500);
    await expect(servicesDropdown).toBeVisible();
  });

  test('Dropdown links should be clickable', async ({ page }) => {
    const servicesButton = page.locator('nav button:has-text("Services")');
    await servicesButton.hover();

    const servicesDropdown = page.locator('div:has-text("All Services")');
    await expect(servicesDropdown).toBeVisible();

    // Click on "All Services" link
    const allServicesLink = page.locator('a:has-text("All Services")');
    await allServicesLink.click();

    // Should navigate to services page
    await expect(page).toHaveURL(/.*\/en\/services$/);
  });
});
