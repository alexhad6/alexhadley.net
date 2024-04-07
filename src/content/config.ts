import { z, defineCollection } from "astro:content";

const sections = defineCollection({
  type: "content",
  schema: z.object({}),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    sortOrder: z.number(),
    title: z.string(),
    url: z.string().optional(),
    githubUrl: z.string().optional(),
  }),
});

export const collections = { sections, projects };
