import Button from "@/components/button";
import { NewsItemSchema } from "@/utils/schemas";
import { NewsItemType } from "@/utils/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import Pocketbase from "pocketbase";
import Related from "./related";
import WidthWrapper from "@/components/WidthWrapper";

export default async function Page({
  params,
}: {
  params: { categoryName: string | undefined; newsID: string | undefined };
}) {
  if (!params.categoryName || !params.newsID) notFound();
  let articleData = {} as NewsItemType;
  const pb = new Pocketbase("https://db-news.arinji.com/");
  try {
    const data = await pb.collection(params.categoryName).getOne(params.newsID);
    const parsedData = NewsItemSchema.parse(data);
    articleData = parsedData as NewsItemType;
  } catch (e) {
    notFound();
  }
  const date = () => {
    const date = new Date(articleData.publishedAt);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <WidthWrapper color="#" transparent>
        <div className="w-full  h-page pt-3 flex flex-col xl:flex-row items-end gap-x-6 justify-start">
          <div className="w-full xl:max-h-[900px] xl:w-[50%] h-full relative rounded-md overflow-hidden">
            <div className="w-full h-full absolute bg-overlay z-10"></div>
            <Image
              className="w-full h-full object-cover"
              src={
                articleData.urlToImage ? articleData.urlToImage : "/logo.svg"
              }
              alt={articleData.title}
              fill
            />
          </div>

          <div className="w-full xl:w-[50%] h-full py-5 flex flex-col items-start px-3 gap-10 justify-end">
            <h1 className="text-h2 text-secondary text-left line-clamp-2">
              {articleData.title}
            </h1>
            <p className="text-body text-text text-left text-opacity-70 line-clamp-2">
              {articleData.description}
            </p>
            <p className="text-body text-primary text-center uppercase">
              By: {articleData.author ? articleData.author : "Unknown"}
            </p>
            <p className="text-body text-primary text-center uppercase">
              {date()}
            </p>
            <div className="w-full h-fit flex flex-row items-center justify-start gap-5">
              <Button inverse>SAVE ARTICLE</Button>
              <Button>VIEW SOURCE</Button>
            </div>
          </div>
        </div>
      </WidthWrapper>
      <Related categoryName={params.categoryName} newsID={params.newsID} />
    </div>
  );
}
