import { describe, expect, it } from 'vitest';

import {
  articleSchema,
  breadcrumbSchema,
  organizationSchema,
  serializeJsonLd,
  serviceSchema,
  websiteSchema,
} from '../../src/lib/seo';

describe('structured data', () => {
  it('publishes only confirmed organization data', () => {
    const schema = organizationSchema();

    expect(schema['@type']).toBe('Organization');
    expect(schema.url).toBe('https://innovacode.click/');
    expect(schema).not.toHaveProperty('address');
    expect(schema).not.toHaveProperty('telephone');
    expect(schema).not.toHaveProperty('sameAs');
    expect(schema).not.toHaveProperty('aggregateRating');
  });

  it('builds supported schema types with canonical URLs', () => {
    expect(websiteSchema()['@type']).toBe('WebSite');
    expect(serviceSchema({ name: 'Automatización', description: 'Procesos conectados.', path: '/servicios/automatizacion-procesos/' }).url)
      .toBe('https://innovacode.click/servicios/automatizacion-procesos/');
    expect(articleSchema({ headline: 'Guía', description: 'Una guía útil.', path: '/recursos/guia/', datePublished: '2026-11-01' })['@type'])
      .toBe('Article');
  });

  it('requires visible breadcrumb labels and canonical paths', () => {
    expect(() => breadcrumbSchema([{ name: '', path: '/servicios/' }])).toThrow(/name/i);
    expect(() => breadcrumbSchema([{ name: 'Servicios', path: 'https://other.test/' }])).toThrow(/path/i);
  });

  it('escapes script-closing sequences when serialized', () => {
    const serialized = serializeJsonLd({ '@context': 'https://schema.org', name: '</script><script>' });

    expect(serialized).not.toContain('</script>');
    expect(JSON.parse(serialized)).toHaveProperty('name', '</script><script>');
  });
});
