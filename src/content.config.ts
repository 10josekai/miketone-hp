import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['ノウハウ', 'リリース情報', '確定申告・会計']),
    tags: z.array(z.string()).optional(),
  }),
});

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    circle: z.string(),
    releaseDate: z.coerce.date(),
    dlsiteUrl: z.string().url(),
    thumbnail: z.string(),
    excerpt: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { blog, portfolio };
