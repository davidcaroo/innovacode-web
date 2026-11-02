import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

const htmlFiles = (directory: string): string[] =>
  readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? htmlFiles(path) : path.endsWith('.html') ? [path] : [];
  });

const routeExists = (href: string) => {
  const path = href.replace(/[?#].*$/, '');
  if (path === '/') return existsSync('dist/index.html');
  const relative = path.replace(/^\//, '').replace(/\/$/, '');
  return existsSync(join('dist', relative, 'index.html')) || existsSync(join('dist', relative));
};

describe('internal links', () => {
  it('uses crawlable anchors that resolve to generated routes', () => {
    const broken: string[] = [];
    for (const file of htmlFiles('dist')) {
      const html = readFileSync(file, 'utf8');
      for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
        const href = match[1];
        if (!href.startsWith('/') || href.startsWith('//') || href.startsWith('/#')) continue;
        if (!routeExists(href)) broken.push(`${file} -> ${href}`);
      }
    }
    expect(broken).toEqual([]);
  });
});
