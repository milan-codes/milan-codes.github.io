import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    tags: z.array(z.string().min(1)).min(1),
    pubDate: z.date(),
    draft: z.boolean(),
  }),
});

const announcementCollection = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/announcements",
  }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    show: z.boolean(),
  }),
});

export const collections = {
  blog: blogCollection,
  announcements: announcementCollection,
};
