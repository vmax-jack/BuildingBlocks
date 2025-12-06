import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    category: z.string(), // 例如：交通工具、建築、人物
    tags: z.array(z.string()), // 例如：['樂高', '科技組', '2023']
    publishDate: z.string().transform((str) => new Date(str)),
    description: z.string(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};