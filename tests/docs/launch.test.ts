import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const read = (path: string) => readFileSync(`${process.cwd()}/${path}`, 'utf8');

describe('launch operations documentation', () => {
  it('covers ownership, backup, rollback, Search Console and monitoring', () => {
    const runbook = read('docs/seo/launch-runbook.md');
    for (const requirement of [
      'Responsable',
      'Respaldo',
      'Rollback',
      'Search Console',
      'sitemap-index.xml',
      '72 horas',
      '28 días',
      'GTM',
      'GA4',
    ]) expect(runbook).toContain(requirement);
  });

  it('provides an evidence log with status, date, owner and proof', () => {
    const log = read('docs/seo/post-launch-log.md');
    expect(log).toContain('| Control | Estado | Responsable | Fecha | Evidencia |');
    expect(log).toContain('URL Inspection');
    expect(log).toContain('Core Web Vitals');
  });
});
