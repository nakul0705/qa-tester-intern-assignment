import { test, expect } from '@playwright/test';

const BASE_URL = 'https://www.saucedemo.com/';
const VALID_USERNAME = 'standard_user';
const PASSWORD = 'secret_sauce';

test.describe('SauceDemo - Login Tests', () => {

  test('TC-001 - Login with valid credentials', async ({ page }) => {
    await page.goto(BASE_URL);

    await page.locator('[data-test="username"]').fill(VALID_USERNAME);
    await page.locator('[data-test="password"]').fill(PASSWORD);
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
  });

  test('TC-002 - Login with invalid username', async ({ page }) => {
    await page.goto(BASE_URL);

    await page.locator('[data-test="username"]').fill('invalid_user');
    await page.locator('[data-test="password"]').fill(PASSWORD);
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

  test('TC-007 - Login with locked-out user', async ({ page }) => {
    await page.goto(BASE_URL);

    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill(PASSWORD);
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toContainText(
      'locked out'
    );
  });

});