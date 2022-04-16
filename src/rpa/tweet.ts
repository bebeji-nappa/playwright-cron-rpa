import { expect, test } from "@playwright/test";
import { sleep } from "../sleep";

test.skip('Tweet', async ({ page }) => {
  await page.goto('https://twitter.com/');
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://twitter.com/i/flow/login' }*/),
    page.locator('[data-testid="loginButton"]').click()
  ]);
  await page.locator('input[name="text"]').click();
  await page.locator('input[name="text"]').fill(process.env.TWITTER_USERNAME);
  await page.locator('input[name="text"]').press('Enter');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill(process.env.TWITTER_PASSWORD);
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://twitter.com/home' }*/),
    page.locator('input[name="password"]').press('Enter')
  ]);
  
  await sleep(5000);

  await page.locator('[data-testid="tweetTextarea_0"] div').nth(2).click();
  await page.locator('[data-testid="tweetTextarea_0"] div').nth(2).fill("testだよ");
  await page.locator('[data-testid="tweetButtonInline"]').click();
});
