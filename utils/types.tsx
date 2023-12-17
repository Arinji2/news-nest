import { z } from "zod";
import { NewsItemSchema } from "./schemas";
export interface Article {
  headline: string;
  image: string;
  url: string;
  newsGroup: string;
}

export type NewsItemType = z.infer<typeof NewsItemSchema>;
