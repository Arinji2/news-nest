"use server";
import { InitPocketbase } from "@/utils/pocketbase";
import { NewsItemSchema } from "@/utils/schemas";
import Pocketbase from "pocketbase";
export default async function GetNextArticles(
  currentPage: number,
  totalPages: number,
  category: string
) {
  const pb = InitPocketbase();
  if (currentPage > totalPages) return;

  const data = await pb.collection(category).getList(currentPage, 5, {
    sort: "-created",
  });

  const parsedData = data.items.map((item) => {
    return NewsItemSchema.parse(item);
  });
  return parsedData;
}
