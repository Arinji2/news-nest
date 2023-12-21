import { z } from "zod";
import { NewsItemSchema, SavedItemSchema } from "./schemas";
export interface Article {
  headline: string;
  image: string;
  url: string;
  newsGroup: string;
}

export type NewsItemType = z.infer<typeof NewsItemSchema>;
export type SavedItemType = z.infer<typeof SavedItemSchema>;
