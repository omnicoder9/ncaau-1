import { test, expect } from '@playwright/test';

test.describe('Dark / Light Mode Toggle', () => {

  test('defaults to dark mode', async ({ page }) => {
    await page.goto('http://localhost:3000/index.html');

    const theme = await page.evaluate(() =>
      document.documentElement.getAttribute('data-bs-theme')
    );

    expect(theme).toBe('dark');
  });

  test('toggles to light mode and persists across pages', async ({ page }) => {
    await page.goto('http://localhost:3000/index.html');

    // Click toggle
    await page.click('#themeToggle');

    // Verify theme switched
    let theme = await page.evaluate(() =>
      document.documentElement.getAttribute('data-bs-theme')
    );
    expect(theme).toBe('light');

    // Navigate to another page
    await page.goto('http://localhost:3000/aboutus.html');

    // Verify persisted
    theme = await page.evaluate(() =>
      document.documentElement.getAttribute('data-bs-theme')
    );
    expect(theme).toBe('light');
  });

  test('icon matches theme', async ({ page }) => {
    await page.goto('http://localhost:3000/index.html');

    const iconClass = await page.locator('#themeToggle i').getAttribute('class');
    expect(iconClass).toContain('sun'); // dark mode shows sun

    await page.click('#themeToggle');

    const newIconClass = await page.locator('#themeToggle i').getAttribute('class');
    expect(newIconClass).toContain('moon'); // light mode shows moon
  });

  test('theme persists after refresh', async ({ page }) => {
    await page.goto('http://localhost:3000/index.html');
    await page.click('#themeToggle');

    await page.reload();

    const theme = await page.evaluate(() =>
      document.documentElement.getAttribute('data-bs-theme')
    );
    expect(theme).toBe('light');
  });

});
