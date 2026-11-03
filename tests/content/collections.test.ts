import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { basename, extname, join } from 'node:path';

import matter from 'gray-matter';
import { describe, expect, it } from 'vitest';

type Entry = { collection: string; slug: string; data: Record<string, unknown> };

const collections = ['services', 'cases', 'blog'];

const readEntries = (): Entry[] =>
  collections.flatMap((collection) => {
    const directory = join('src', 'content', collection);
    return readdirSync(directory)
      .filter((file) => ['.md', '.mdx'].includes(extname(file)))
      .map((file) => ({
        collection,
        slug: basename(file, extname(file)),
        data: matter(readFileSync(join(directory, file), 'utf8')).data,
      }));
  });

describe('content collections', () => {
  it('defines the four launch services', () => {
    const serviceSlugs = readEntries().filter((entry) => entry.collection === 'services').map((entry) => entry.slug);

    expect(serviceSlugs.sort()).toEqual([
      'automatizacion-procesos',
      'desarrollo-software-a-medida',
      'desarrollo-web',
      'inteligencia-artificial',
    ]);
  });

  it('has unique slugs, complete metadata and existing images', () => {
    const entries = readEntries();
    const keys = entries.map((entry) => `${entry.collection}:${entry.slug}`);

    expect(new Set(keys).size).toBe(keys.length);
    for (const { data } of entries) {
      expect(String(data.title ?? '').length).toBeGreaterThan(10);
      expect(String(data.description ?? '').length).toBeGreaterThan(40);
      expect(String(data.intent ?? '').length).toBeGreaterThan(3);
      expect(String(data.cta ?? '').length).toBeGreaterThan(3);
      expect(existsSync(join('public', String(data.image).replace(/^\//, '')))).toBe(true);
    }
  });

  it('does not publish future entries or unapproved case evidence', () => {
    const now = new Date('2026-11-01T23:59:59-05:00');
    for (const entry of readEntries()) {
      const publishedAt = new Date(String(entry.data.publishedAt));
      if (entry.data.draft !== true) expect(publishedAt.getTime()).toBeLessThanOrEqual(now.getTime());
      if (entry.collection === 'cases' && entry.data.draft !== true) {
        expect(entry.data.evidenceApproved).toBe(true);
      }
    }
  });

  it('only relates entries that exist in the same collection', () => {
    const entries = readEntries();
    for (const entry of entries) {
      const available = new Set(entries.filter((candidate) => candidate.collection === entry.collection).map((candidate) => candidate.slug));
      for (const related of (entry.data.related as string[] | undefined) ?? []) {
        expect(available.has(related), `${entry.collection}:${entry.slug} -> ${related}`).toBe(true);
      }
    }
  });
});
