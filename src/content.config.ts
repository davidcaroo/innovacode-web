import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const common = {
  title: z.string().min(10),
  description: z.string().min(40),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  draft: z.boolean().default(false),
  image: z.string().startsWith('/'),
  intent: z.string().min(4),
  cta: z.string().min(4),
  related: z.array(z.string()).default([]),
};

const services = defineCollection({
  loader: glob({ base: './src/content/services', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    ...common,
    deliverables: z.array(z.string()).min(3),
  }),
});

const cases = defineCollection({
  loader: glob({ base: './src/content/cases', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    ...common,
    client: z.string().min(2),
    evidenceApproved: z.boolean(),
  }),
});

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    ...common,
    author: z.string().min(2),
    cluster: z.enum(['software', 'ia', 'automatizacion', 'web']),
  }),
});

export const collections = { services, cases, blog };
