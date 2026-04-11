import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const sections = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/sections" }),
  schema: z.object({}),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    sortOrder: z.number(),
    title: z.string(),
    imageName: z.string().optional(),
    url: z.url().optional(),
    pypiUrl: z.url().optional(),
    githubUrl: z.url().optional(),
    tools: z.object({}).catchall(z.url()).optional(),
  }),
});

export const collections = { sections, projects };
