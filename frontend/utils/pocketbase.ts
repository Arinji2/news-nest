import Pocketbase from "pocketbase";
export function InitPocketbase() {
  const pb = new Pocketbase("https://db-news.arinji.com/");
  return pb;
}
