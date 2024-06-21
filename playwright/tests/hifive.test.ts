import { test, expect } from '@playwright/test';

// Here we use directly async page bcz of something called fixture bleh bleh
test('Hifive Main Site', async ({ page }) => {
  await page.goto('https://hifivecommunity.com/');
  await page.goto('https://hifivecommunity.com/pricing');

  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Contact us' }).click();

  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('Harshil Tomar');

  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('harshil@hifivecommunity.com');

  await page.getByPlaceholder('Phone Number').click();
  await page.getByPlaceholder('Phone Number').fill('9958977078');
  
  await page.getByPlaceholder('Your Message').click();
  await page.getByPlaceholder('Your Message').fill('Testing playwright with Hifive');

  await page.waitForTimeout(5000);
});