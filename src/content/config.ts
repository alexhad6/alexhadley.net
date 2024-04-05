import { z, defineCollection } from "astro:content";

const sections = defineCollection({
  type: "content",
  schema: z.object({}),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    url: z.string().optional(),
    githubUrl: z.string(),
  }),
});

export const collections = { sections, projects };
