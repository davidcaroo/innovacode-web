import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const read = (path: string) => readFileSync(`${process.cwd()}/${path}`, 'utf8');

describe('organic growth operating system', () => {
  it('defines at least 12 dated editorial actions across the four service clusters', () => {
    const rows = read('docs/seo/editorial-calendar.csv').trim().split(/\r?\n/);
    expect(rows[0]).toBe('publish_date,cluster,content_type,working_title,target_url,intent,author,reviewer,evidence_required,primary_cta,status');
    expect(rows.slice(1).length).toBeGreaterThanOrEqual(12);
    for (const cluster of ['custom-software', 'business-ai', 'process-automation', 'web-development']) {
      expect(rows.some((row) => row.includes(`,${cluster},`))).toBe(true);
    }
  });

  it('measures qualified business outcomes and defines scale gates', () => {
    const review = read('docs/seo/monthly-review-template.md');
    for (const requirement of ['Leads orgánicos cualificados', 'canibalización', 'Core Web Vitals', 'Gate de escalamiento', 'Decisiones']) {
      expect(review).toContain(requirement);
    }
  });
});
