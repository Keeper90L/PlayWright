import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();

  const page = await context.newPage();
  await page.goto('https://apps.powerapps.com');

  // 👇 You login manually here again
  console.log('Log in manually, then press Enter...');
  await new Promise((resolve) => process.stdin.once('data', resolve));

  await context.storageState({ path: 'auth.json' });

  console.log('✅ auth.json saved');

  await browser.close();
})();
``;
