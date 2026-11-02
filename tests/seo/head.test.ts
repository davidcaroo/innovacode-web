import { readFile } from 'node:fs/promises';

import { describe, expect, it } from 'vitest';

import { buildCanonical } from '../../src/lib/seo';

const count = (html: string, pattern: RegExp) => html.match(pattern)?.length ?? 0;

describe('SEO head output', () => {
  it('normalizes canonicals and removes query strings and fragments', () => {
    expect(buildCanonical('/servicios?utm_source=test#detalle').href).toBe(
      'https://innovacode.click/servicios/',
    );
    expect(buildCanonical('/').href).toBe('https://innovacode.click/');
  });

  it.each([
    ['dist/index.html', 'index, follow'],
    ['dist/404.html', 'noindex, follow'],
  ])('emits one coherent metadata set in %s', async (path, robots) => {
    const html = await readFile(path, 'utf8');
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    const ogUrl = html.match(/<meta property="og:url" content="([^"]+)"/)?.[1];

    expect(count(html, /<title>/g)).toBe(1);
    expect(count(html, /<meta name="description"/g)).toBe(1);
    expect(count(html, /<link rel="canonical"/g)).toBe(1);
    expect(canonical).toMatch(/^https:\/\/innovacode\.click\//);
    expect(ogUrl).toBe(canonical);
    expect(html).toContain(`<meta name="robots" content="${robots}">`);
    expect(html).toContain('<meta property="og:image:width" content="1200">');
    expect(html).toContain('<meta property="og:image:height" content="630">');
    expect(html).not.toContain('name="keywords"');
  });
});
