import { siteConfig } from '../config/site';

type SchemaBase = {
  '@context': 'https://schema.org';
  '@type': string;
  [key: string]: unknown;
};

export const buildCanonical = (pathname: string): URL => {
  const parsed = new URL(pathname, siteConfig.siteUrl);
  parsed.hash = '';
  parsed.search = '';
  const hasExtension = /\/[^/]+\.[a-z0-9]+$/i.test(parsed.pathname);
  if (parsed.pathname !== '/' && !hasExtension && !parsed.pathname.endsWith('/')) {
    parsed.pathname += '/';
  }
  return parsed;
};

const compact = <T extends Record<string, unknown>>(value: T): T =>
  Object.fromEntries(
    Object.entries(value).filter(([, entry]) => entry !== null && entry !== undefined && entry !== ''),
  ) as T;

export const organizationSchema = (): SchemaBase => {
  const socialProfiles = Object.values(siteConfig.social).filter(
    (profile): profile is string => profile !== null,
  );
  return compact({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: buildCanonical('/').href,
    logo: new URL('/android-chrome-512x512.png', siteConfig.siteUrl).href,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: siteConfig.address
      ? { '@type': 'PostalAddress', ...siteConfig.address }
      : null,
    sameAs: socialProfiles.length > 0 ? socialProfiles : null,
  });
};

export const websiteSchema = (): SchemaBase => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: buildCanonical('/').href,
  inLanguage: siteConfig.locale,
  publisher: { '@type': 'Organization', name: siteConfig.name },
});

export const serviceSchema = (input: {
  name: string;
  description: string;
  path: string;
}): SchemaBase => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: input.name,
  description: input.description,
  url: buildCanonical(input.path).href,
  provider: { '@type': 'Organization', name: siteConfig.name, url: buildCanonical('/').href },
  areaServed: { '@type': 'Country', name: 'Colombia' },
});

export const articleSchema = (input: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}): SchemaBase =>
  compact({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.headline,
    description: input.description,
    url: buildCanonical(input.path).href,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    inLanguage: siteConfig.locale,
    publisher: { '@type': 'Organization', name: siteConfig.name },
  });

export const breadcrumbSchema = (
  items: Array<{ name: string; path: string }>,
): SchemaBase => {
  if (items.some((item) => !item.name.trim())) {
    throw new Error('Breadcrumb name cannot be empty');
  }
  if (items.some((item) => /^https?:\/\//i.test(item.path))) {
    throw new Error('Breadcrumb path must be site-relative');
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: buildCanonical(item.path).href,
    })),
  };
};

export const serializeJsonLd = (schema: Record<string, unknown> | Record<string, unknown>[]): string =>
  JSON.stringify(schema).replace(/</g, '\\u003C').replace(/>/g, '\\u003E');
