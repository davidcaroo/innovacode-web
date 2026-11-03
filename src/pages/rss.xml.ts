import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site?: URL }) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
  );

  return rss({
    title: 'Recursos de InnovaCode Solutions',
    description: 'Guías prácticas sobre software, inteligencia artificial, automatización y desarrollo web.',
    site: context.site ?? new URL('https://innovacode.click/'),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/recursos/${post.id}/`,
    })),
  });
}
