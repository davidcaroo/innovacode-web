import { describe, expect, it } from 'vitest';

import { siteConfig } from '../../src/config/site';

describe('siteConfig', () => {
  it('uses a secure canonical site URL', () => {
    const url = new URL(siteConfig.siteUrl);

    expect(url.protocol).toBe('https:');
    expect(url.hash).toBe('');
    expect(url.search).toBe('');
    expect(url.pathname).toBe('/');
  });

  it('only exposes a valid E.164 phone when confirmed', () => {
    expect(siteConfig.phone === null || /^\+[1-9]\d{7,14}$/.test(siteConfig.phone)).toBe(true);
  });

  it('only exposes a valid email when confirmed', () => {
    expect(
      siteConfig.email === null || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(siteConfig.email),
    ).toBe(true);
  });

  it('only exposes absolute social profile URLs', () => {
    for (const profile of Object.values(siteConfig.social)) {
      if (profile !== null) {
        expect(new URL(profile).protocol).toBe('https:');
      }
    }
  });

  it('does not publish unverified analytics identifiers', () => {
    expect(siteConfig.gtmId).toBeNull();
    expect(siteConfig.ga4Id).toBeNull();
  });
});
