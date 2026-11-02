import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const routes = ['/', '/servicios/desarrollo-web/', '/contacto/', '/cotizador/', '/politica-privacidad/'];

for (const route of routes) {
  test(`${route} has no serious accessibility violations`, async ({ page }) => {
    await page.goto(route);
    const reject = page.getByRole('button', { name: 'Rechazar' });
    if (await reject.isVisible()) await reject.click();
    const results = await new AxeBuilder({ page }).analyze();
    const blocking = results.violations.filter((violation) => ['serious', 'critical'].includes(violation.impact ?? ''));
    expect(blocking).toEqual([]);
  });
}

test('keyboard users can skip navigation', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Rechazar' }).click();
  await page.reload();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Saltar al contenido' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#contenido')).toBeFocused();
});

test('reduced-motion preference removes decorative transitions', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const transition = await page.locator('.card').first().evaluate((element) => getComputedStyle(element).transitionDuration);
  expect(transition).toBe('0s');
});
