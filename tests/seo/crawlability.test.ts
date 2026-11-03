import { readFile } from 'node:fs/promises';

import { describe, expect, it } from 'vitest';

describe('crawl artifacts', () => {
  it('lists only canonical, indexable page URLs', async () => {
    const sitemap = await readFile('dist/sitemap-0.xml', 'utf8');
    const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

    expect(urls.length).toBeGreaterThan(10);
    expect(new Set(urls).size).toBe(urls.length);
    for (const url of urls) {
      expect(url).toMatch(/^https:\/\/innovacode\.click\//);
      expect(url).not.toMatch(/[?#]/);
      expect(url).not.toContain('/404');
      expect(url).not.toContain('cotizador.html');
    }
  });

  it('points robots.txt at the generated sitemap index without crawl-delay rules', async () => {
    const robots = await readFile('dist/robots.txt', 'utf8');

    expect(robots).toContain('User-agent: *');
    expect(robots).toContain('Allow: /');
    expect(robots).toContain('Sitemap: https://innovacode.click/sitemap-index.xml');
    expect(robots.toLowerCase()).not.toContain('crawl-delay');
  });

  it('publishes an RSS feed for public resources', async () => {
    const rss = await readFile('dist/rss.xml', 'utf8');

    expect(rss).toContain('<rss');
    expect(rss).toContain('https://innovacode.click/recursos/');
    expect(rss.match(/<item>/g)?.length).toBe(4);
  });
});
