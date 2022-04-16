import { expect, test } from "@playwright/test";
import { sleep } from "../sleep";

test('Go to Playwright web site', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await sleep(3000);
});
