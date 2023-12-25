"use server";
import { InitPocketbase } from "@/utils/pocketbase";
import { NewsItemSchema } from "@/utils/schemas";
export default async function GetNextArticles(
  currentPage: number,
  totalPages: number,
  category: string,
  filter?: string
) {
  const pb = InitPocketbase();
  if (currentPage > totalPages) return;

  const data = await pb.collection(category).getList(currentPage, 5, {
    sort: "-created",
    filter: filter ? `category = "${filter}"` : undefined,
  });

  const parsedData = data.items.map((item) => {
    return NewsItemSchema.parse(item);
  });
  return parsedData;
}
