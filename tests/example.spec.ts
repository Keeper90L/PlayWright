import { test, expect } from '@playwright/test';

test.use({
  storageState: 'C:\\PlaywrightSandbox\\auth.json',
});

test('test', async ({ page }) => {
  await page.goto(
    //Paste URL here. 
    ''
  );
  //These sample steps will probably not work on your app. 
  await page
    .locator('iframe[name="fullscreen-app-host"]')
    .contentFrame()
    .getByRole('button', { name: 'Power Automate' })
    .click();
  await page
    .locator('iframe[name="fullscreen-app-host"]')
    .contentFrame()
    .locator('div:nth-child(7) > .fui-Field > .___1orgxbe > .fui-Combobox')
    .click();
  await page
    .locator('iframe[name="fullscreen-app-host"]')
    .contentFrame()
    .getByRole('option', { name: 'EPAM Learn' })
    .click();

  const frame = page.frameLocator('iframe[name="fullscreen-app-host"]');

  await expect(
    frame.getByText("You don't have permission to view flows in this environment.")
  ).toBeVisible();
});
