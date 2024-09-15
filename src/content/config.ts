import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    tags: z.array(z.string().min(1)).min(1),
    pubDate: z.date(),
    draft: z.boolean(),
  }),
});

const announcementCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    tags: z.array(z.string().min(1)).min(1),
    pubDate: z.date(),
    draft: z.boolean(),
  }),
});

export const collections = {
  blog: blogCollection,
  announcements: announcementCollection,
};
