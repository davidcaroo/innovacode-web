import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.route('https://www.googletagmanager.com/gtm.js**', (route) =>
    route.fulfill({ status: 200, contentType: 'application/javascript', body: '' }),
  );
});

test('defaults Google consent to denied before GTM and stores a rejection', async ({ page, context }) => {
  await page.goto('/');
  await expect(page.getByRole('dialog', { name: /preferencias de privacidad/i })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Rechazar' })).toBeFocused();

  const initialConsent = await page.evaluate(() =>
    (window.dataLayer ?? []).map((entry) => Array.from(entry as unknown as ArrayLike<unknown>)).find((entry) => entry[0] === 'consent' && entry[1] === 'default'),
  );
  expect(initialConsent?.[2]).toMatchObject({ analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
  expect(await page.locator('script[src*="googletagmanager.com/gtm.js"]').count()).toBe(1);

  await page.getByRole('button', { name: 'Rechazar' }).click();
  await expect(page.getByRole('dialog', { name: /preferencias de privacidad/i })).toBeHidden();
  expect(await page.evaluate(() => localStorage.getItem('innovacode-consent-v1'))).toContain('denied');
  expect((await context.cookies()).filter((cookie) => cookie.name.startsWith('_ga'))).toEqual([]);
});

test('keeps keyboard focus inside the consent dialog and restores the opener', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('innovacode-consent-v1', '{"analytics_storage":"denied"}'));
  await page.goto('/');
  const opener = page.getByRole('button', { name: /configurar cookies/i });
  await opener.focus();
  await opener.click();
  await page.getByRole('link', { name: /leer la política/i }).focus();
  await page.keyboard.press('Shift+Tab');
  await expect(page.getByRole('button', { name: 'Aceptar todo' })).toBeFocused();
  await page.getByRole('button', { name: 'Rechazar' }).click();
  await expect(opener).toBeFocused();
});

test('accepts analytics and lets the user revoke the choice', async ({ page }) => {
  await page.goto('/contacto/');
  await page.getByRole('button', { name: 'Aceptar todo' }).click();

  const accepted = await page.evaluate(() =>
    (window.dataLayer ?? []).map((entry) => Array.from(entry as unknown as ArrayLike<unknown>)).findLast((entry) => entry[0] === 'consent' && entry[1] === 'update'),
  );
  expect(accepted?.[2]).toMatchObject({ analytics_storage: 'granted', ad_storage: 'granted' });

  await page.getByRole('button', { name: /configurar cookies/i }).click();
  await page.getByRole('button', { name: 'Rechazar' }).click();
  const revoked = await page.evaluate(() =>
    (window.dataLayer ?? []).map((entry) => Array.from(entry as unknown as ArrayLike<unknown>)).findLast((entry) => entry[0] === 'consent' && entry[1] === 'update'),
  );
  expect(revoked?.[2]).toMatchObject({ analytics_storage: 'denied', ad_storage: 'denied' });
});
