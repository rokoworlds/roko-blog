import {glob} from 'astro/loaders';
import {z, defineCollection} from "astro:content";

const blog = defineCollection({
    loader: glob({pattern: '**/[^_]*.md', base: "./src/content/blog"}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
    })
});

const projects = defineCollection({
    loader: glob({pattern: '**/[^_]*.md', base: "./src/content/projects"}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
    })
});



export const collections = {blog, projects};