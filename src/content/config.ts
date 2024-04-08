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
    imageName: z.string().optional(),
    url: z.string().url().optional(),
    pypiUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    tools: z.object({}).catchall(z.string().url()).optional(),
  }),
});

export const collections = { sections, projects };
