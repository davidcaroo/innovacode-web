import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const files = [];
const collect = async (directory) => {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await collect(path);
    else if (/\.(?:html|js)$/.test(entry.name)) files.push(path);
  }
};

await collect('dist');
const artifact = (await Promise.all(files.map((file) => readFile(file, 'utf8')))).join('\n');
const checks = [
  ['PUBLIC_GTM_ID', process.env.PUBLIC_GTM_ID, /^GTM-[A-Z0-9]+$/],
  ['PUBLIC_WHATSAPP_NUMBER', process.env.PUBLIC_WHATSAPP_NUMBER, /^\d{8,15}$/],
];

for (const [name, value, pattern] of checks) {
  if (!value) continue;
  if (!pattern.test(value)) throw new Error(`${name} has an invalid format`);
  if (!artifact.includes(value)) throw new Error(`${name} is configured but absent from dist`);
}

const endpoint = process.env.PUBLIC_CONTACT_ENDPOINT;
if (endpoint) {
  const url = new URL(endpoint);
  if (url.protocol !== 'https:') throw new Error('PUBLIC_CONTACT_ENDPOINT must use HTTPS');
  if (!artifact.includes(endpoint)) throw new Error('PUBLIC_CONTACT_ENDPOINT is configured but absent from dist');
}

console.log('Build-time public configuration verified.');
