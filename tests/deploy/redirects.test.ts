import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const root = process.cwd();
const redirects = readFileSync(`${root}/docs/seo/redirect-map.csv`, 'utf8');
const htaccess = readFileSync(`${root}/public/.htaccess`, 'utf8');
const deploy = readFileSync(`${root}/.github/workflows/deploy.yml`, 'utf8');
const quality = readFileSync(`${root}/.github/workflows/quality.yml`, 'utf8');

describe('production migration contract', () => {
  it('implements every approved path redirect as a one-hop 301', () => {
    for (const line of redirects.trim().split(/\r?\n/).slice(1)) {
      const [source, target, status] = line.split(',');
      if (!source.startsWith('/')) continue;
      expect(status).toBe('301');
      const ruleSource = source.replace(/^\//, '').replace('.', '\\.');
      expect(htaccess).toContain(`RewriteRule ^${ruleSource}$ https://innovacode.click${target} [R=301,L,NE]`);
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
    expect(deploy).toContain('PUBLIC_GTM_ID: ${{ vars.PUBLIC_GTM_ID }}');
    expect(deploy).toContain('PUBLIC_CONTACT_ENDPOINT: ${{ vars.PUBLIC_CONTACT_ENDPOINT }}');
    expect(deploy).toContain('npm run verify:build-config');
    expect(deploy).toContain('npm run verify:production');
    expect(deploy).toContain('node-version: "24"');
    expect(deploy).toContain('dangerous-clean-slate: false');
  });

  it('orders absolute legacy redirects before host normalization for one-hop combined requests', () => {
    const legacy = htaccess.indexOf('RewriteRule ^cotizador\\.html$ https://innovacode.click/cotizador/');
    const host = htaccess.indexOf('RewriteCond %{HTTPS} !=on [OR]');
    expect(legacy).toBeGreaterThan(0);
    expect(legacy).toBeLessThan(host);
  });

  it.each([['deploy', deploy], ['pull request', quality]])('builds dist before artifact-dependent tests in %s CI', (_name, workflow) => {
    expect(workflow.indexOf('npm run build')).toBeLessThan(workflow.indexOf('npm test'));
  });
});
