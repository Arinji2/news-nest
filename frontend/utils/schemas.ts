import { z } from "zod";
const parseDateString = (dateString: string): Date => new Date(dateString);

export const NewsItemSchema = z.object({
  id: z.string(),
  author: z.nullable(z.string()),
  title: z.string(),
  description: z.string(),
  url: z.string().url(),

  urlToImage: z.string().nullable(),

  publishedAt: z
    .string()

    .transform(parseDateString),
});

export const NewsItemsSchema = z.array(NewsItemSchema);

export const SavedItemSchema = z.object({
  id: z.string(),
  articleID: z.string(),
  articleCategory: z.string(),
  created: z.string().transform(parseDateString),
});

export const SavedItemsSchema = z.array(SavedItemSchema);
