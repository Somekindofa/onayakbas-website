import { defineCollection, z } from 'astro:content';

const paintings = defineCollection({
  type: 'data',
  schema: z.object({
    image: z.string(),
    year:  z.number().int().min(1960).max(2030),
    title: z.string().optional(),
  }),
});

const articles = defineCollection({
  type: 'data',
  schema: z.object({
    lang:         z.enum(['en', 'fr', 'tr']),
    title:        z.string(),
    author:       z.string(),
    description:  z.string(),
    link:         z.string().optional(),
    external_url: z.string().optional(),
  }),
});

const media = defineCollection({
  type: 'data',
  schema: z.object({
    type:        z.enum(['youtube', 'local']),
    youtube_url: z.string().optional(),
    video_file:  z.string().optional(),
    label:       z.string(),
  }),
});

const bio = defineCollection({
  type: 'data',
  schema: z.object({
    portrait: z.string().optional(),
    solo_exhibitions:  z.array(z.object({ year: z.string(), venue: z.string() })),
    group_exhibitions: z.array(z.object({ year: z.string(), venue: z.string() })),
    art_fairs:         z.array(z.object({ year: z.string(), venue: z.string() })),
    awards:            z.array(z.object({ year: z.string(), venue: z.string() })),
  }),
});

export const collections = { paintings, articles, media, bio };
