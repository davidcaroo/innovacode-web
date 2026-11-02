import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const root = process.cwd();
const redirects = readFileSync(`${root}/docs/seo/redirect-map.csv`, 'utf8');
const htaccess = readFileSync(`${root}/public/.htaccess`, 'utf8');
const deploy = readFileSync(`${root}/.github/workflows/deploy.yml`, 'utf8');

describe('production migration contract', () => {
  it('implements every approved path redirect as a one-hop 301', () => {
    for (const line of redirects.trim().split(/\r?\n/).slice(1)) {
      const [source, target, status] = line.split(',');
      if (!source.startsWith('/')) continue;
      expect(status).toBe('301');
      const escaped = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      expect(htaccess).toContain(`RedirectMatch 301 ^${escaped}$ ${target}`);
    }
  });

  it('forces HTTPS and the canonical non-www host without redirect loops', () => {
    expect(htaccess).toContain('RewriteCond %{HTTPS} !=on [OR]');
    expect(htaccess).toContain('RewriteCond %{HTTP_HOST} ^www\\.innovacode\\.click$ [NC]');
    expect(htaccess).toContain('RewriteRule ^ https://innovacode.click%{REQUEST_URI} [R=301,L]');
  });

  it('deploys only a fully validated immutable build artifact', () => {
    expect(deploy).toContain('needs: quality');
    expect(deploy).toContain('actions/download-artifact@v4');
    expect(deploy).toContain('npm run verify:production');
    expect(deploy).toContain('node-version: "24"');
    expect(deploy).toContain('dangerous-clean-slate: false');
  });
});
