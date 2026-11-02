import process from 'node:process';

const argumentIndex = process.argv.indexOf('--base-url');
const configuredBase = argumentIndex >= 0 ? process.argv[argumentIndex + 1] : process.env.PRODUCTION_URL;
const baseUrl = new URL(configuredBase || 'https://innovacode.click');
const expectedHost = baseUrl.host;
const routes = [
  '/',
  '/servicios/',
  '/servicios/desarrollo-web/',
  '/recursos/',
  '/cotizador/',
  '/contacto/',
  '/politica-privacidad/',
];

const failures = [];

for (const route of routes) {
  const url = new URL(route, baseUrl);
  try {
    const response = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(15_000) });
    const body = await response.text();
    const canonical = body.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)/i)?.[1];
    if (!response.ok) failures.push(`${route}: HTTP ${response.status}`);
    if (response.url !== url.href) failures.push(`${route}: terminó en ${response.url}`);
    if (!canonical || new URL(canonical).host !== expectedHost) failures.push(`${route}: canonical ausente o externo`);
  } catch (error) {
    failures.push(`${route}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

for (const asset of ['/robots.txt', '/sitemap-index.xml']) {
  try {
    const response = await fetch(new URL(asset, baseUrl), { signal: AbortSignal.timeout(15_000) });
    if (!response.ok) failures.push(`${asset}: HTTP ${response.status}`);
  } catch (error) {
    failures.push(`${asset}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

if (failures.length > 0) {
  console.error(`Verificación de producción fallida:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}

console.log(`Producción verificada: ${routes.length} páginas y 2 archivos de rastreo.`);
