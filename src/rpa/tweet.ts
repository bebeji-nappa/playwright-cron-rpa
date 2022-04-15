import { expect, test } from "@playwright/test";
import { sleep } from "../sleep";

test('Tweet', async ({ page }) => {
  // Go to https://twitter.com/
  await page.goto('https://twitter.com/');
  // Click [data-testid="loginButton"] div:has-text("ログイン")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://twitter.com/i/flow/login' }*/),
    page.locator('[data-testid="loginButton"]').click()
  ]);
  // Click input[name="text"]
  await page.locator('input[name="text"]').click();
  // Fill input[name="text"]
  await page.locator('input[name="text"]').fill(process.env.TWITTER_USERNAME);
  await page.locator('input[name="text"]').press('Enter');
  // Click input[name="password"]
  await page.locator('input[name="password"]').click();
  // Fill input[name="password"]
  await page.locator('input[name="password"]').fill(process.env.TWITTER_PASSWORD);
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://twitter.com/home' }*/),
    page.locator('input[name="password"]').press('Enter')
  ]);

  await sleep(5000);

  // Click [data-testid="tweetTextarea_0"] div >> nth=2
  await page.locator('[data-testid="tweetTextarea_0"] div').nth(2).click();
  await page.locator('[data-testid="tweetTextarea_0"] div').nth(2).fill("testだよ");
  // Click [data-testid="tweetButtonInline"]
  await page.locator('[data-testid="tweetButtonInline"]').click();
});
