import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    category: z.string(),
    services: z.array(z.string()),
    description: z.string(),
    featuredImage: z.string().optional(),
    galleryImages: z.array(z.string()).optional(),
    videoEmbedUrl: z.string().optional(),
    videoEmbeds: z.array(z.object({
      id: z.string(),
      title: z.string(),
      ratio: z.string().optional(),
      caption: z.string().optional(),
    })).optional(),
    testimonial: z.object({
      quote: z.string(),
      author: z.string()
    }).optional()
  })
});

export const collections = {
  projects: projectsCollection,
};
