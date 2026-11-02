import { readFile } from 'node:fs/promises';

import { describe, expect, it } from 'vitest';

describe('production headers', () => {
  it('defines browser security headers for static hosting', async () => {
    const headers = await readFile('public/_headers', 'utf8');
    expect(headers).toContain('Content-Security-Policy:');
    expect(headers).toContain('X-Content-Type-Options: nosniff');
    expect(headers).toContain('Referrer-Policy: strict-origin-when-cross-origin');
    expect(headers).toContain('Permissions-Policy:');
  });

  it('configures Apache 404, compression and immutable assets', async () => {
    const htaccess = await readFile('public/.htaccess', 'utf8');
    expect(htaccess).toContain('ErrorDocument 404 /404.html');
    expect(htaccess).toContain('mod_deflate.c');
    expect(htaccess).toContain('immutable');
    expect(htaccess).toContain('Content-Security-Policy');
  });
});
