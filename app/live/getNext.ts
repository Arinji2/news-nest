"use server";
import { NewsItemSchema } from "@/utils/schemas";
import Pocketbase from "pocketbase";
export default async function GetNextLiveArticles(
  currentPage: number,
  totalPages: number
) {
  const pb = new Pocketbase("https://db-news.arinji.com/");
  console.log("currentPage", currentPage, "totalPages", totalPages);
  if (currentPage > totalPages) return;

  const data = await pb.collection("live").getList(currentPage, 5);

  console.log("data", data);
  const parsedData = data.items.map((item) => {
    return NewsItemSchema.parse(item);
  });
  return parsedData;
}
