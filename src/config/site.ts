export type SiteConfig = {
  name: string;
  legalName: string | null;
  siteUrl: string;
  locale: 'es-CO';
  phone: string | null;
  email: string | null;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: 'CO';
  } | null;
  social: {
    linkedin: string | null;
    instagram: string | null;
    facebook: string | null;
    x: string | null;
  };
  gtmId: `GTM-${string}` | null;
  ga4Id: `G-${string}` | null;
};

/**
 * Public identity used across metadata, structured data and conversion UI.
 * Values that conflict in the legacy site remain null until the owner confirms them.
 */
export const siteConfig: SiteConfig = {
  name: 'InnovaCode Solutions',
  legalName: null,
  siteUrl: 'https://innovacode.click/',
  locale: 'es-CO',
  phone: null,
  email: null,
  address: null,
  social: {
    linkedin: null,
    instagram: null,
    facebook: null,
    x: null,
  },
  gtmId: null,
  ga4Id: null,
};
