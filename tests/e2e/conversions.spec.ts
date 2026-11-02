import { expect, test } from '@playwright/test';

test('the quote calculator is keyboard operable and updates the total', async ({ page }) => {
  await page.goto('/cotizador/');
  await page.waitForFunction(() => document.querySelector('astro-island')?.hasAttribute('ssr') === false);
  await expect(page.getByRole('heading', { level: 1, name: /cotiza/i })).toBeVisible();

  await page.getByRole('radio', { name: /Página Web Informativa/i }).check();
  await page.getByLabel('Secciones adicionales').fill('2');
  await page.getByRole('checkbox', { name: /mantenimiento/i }).check();

  await expect(page.getByTestId('quote-total-cop')).toHaveText('$2.000.000 COP');
  await expect(page.getByTestId('quote-total-usd')).toHaveText('$545 USD');
  await expect(page.getByRole('link', { name: /solicitar esta cotización/i })).toHaveAttribute('href', /^https:\/\/wa\.me\//);
});

test('the contact form confirms a successful lead without exposing PII in the URL', async ({ page }) => {
  let payload: Record<string, unknown> | undefined;
  await page.route('**/webhook/contacto-web-lead', async (route) => {
    payload = route.request().postDataJSON();
    await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ status: 'success' }) });
  });

  await page.goto('/contacto/');
  await page.waitForFunction(() => document.querySelector('astro-island')?.hasAttribute('ssr') === false);
  await page.getByLabel('Nombre').fill('Persona de prueba');
  await page.getByLabel('Email').fill('persona@example.com');
  await page.getByLabel('Empresa').fill('Empresa de prueba');
  await page.getByLabel('Mensaje').fill('Necesitamos automatizar la recepción de solicitudes comerciales.');
  await page.getByRole('checkbox', { name: /autorizo/i }).check();
  await page.getByRole('button', { name: /enviar solicitud/i }).click();

  await expect(page.getByRole('status')).toContainText('Recibimos tu solicitud');
  expect(payload).toMatchObject({ nombre: 'Persona de prueba', email: 'persona@example.com' });
  expect(page.url()).not.toContain('persona@example.com');
});
