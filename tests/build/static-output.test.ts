import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import { describe, expect, it } from 'vitest';

const readOutput = (path: string) => readFile(resolve('dist', path), 'utf8');
const textContent = (html: string) => html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

describe('static Astro output', () => {
  it.each(['index.html', '404.html'])('emits %s', async (path) => {
    await expect(readOutput(path)).resolves.toContain('<!DOCTYPE html>');
  });

  it('renders the home content in Spanish without depending on JavaScript', async () => {
    const html = await readOutput('index.html');

    expect(html).toContain('<html lang="es-CO"');
    expect(html).toContain('<main');
    expect(textContent(html)).toContain('Software que convierte retos empresariales en resultados');
    expect(html.match(/<h1\b/g)).toHaveLength(1);
  });

  it('renders a useful 404 with one heading', async () => {
    const html = await readOutput('404.html');

    expect(html).toContain('Página no encontrada');
    expect(html.match(/<h1\b/g)).toHaveLength(1);
  });
});
