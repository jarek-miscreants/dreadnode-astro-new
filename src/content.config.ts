import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const research = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/research" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["Blog", "Paper", "Talk", "Code"]),
    tags: z.array(z.string()).default([]),
    date: z.coerce.date().optional(),
    author: z.string().optional(),
    url: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { research };
