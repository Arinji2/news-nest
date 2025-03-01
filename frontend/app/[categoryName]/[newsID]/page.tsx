import WidthWrapper from "@/components/WidthWrapper";
import Button from "@/components/button";
import { InitPocketbase } from "@/utils/pocketbase";
import { NewsItemSchema, SavedItemSchema } from "@/utils/schemas";
import { NewsItemType, SavedItemType } from "@/utils/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import Related from "./related";
import { cookies } from "next/headers";
import SaveButton from "./saveButton";

export default async function Page({
  params,
}: {
  params: { categoryName: string | undefined; newsID: string | undefined };
}) {
  if (!params.categoryName || !params.newsID) notFound();
  let articleData = {} as NewsItemType;
  let savedData = {} as SavedItemType;
  const pb = InitPocketbase();
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

  const hasCookie = cookies().get("token")?.value;
  if (hasCookie) {
    try {
      pb.authStore.save(hasCookie);
      await pb.collection("users").authRefresh();
      const savedRawData = await pb
        .collection("saved")
        .getFirstListItem(
          `savedBy = "${pb.authStore.model?.id}" && articleID = "${articleData.id}"`,
        );
      const parsedSavedData = SavedItemSchema.safeParse(savedRawData);
      if (parsedSavedData.success) {
        savedData = parsedSavedData.data;
      }
    } catch (e) {}
  }

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
              <SaveButton
                saved={hasCookie ? (savedData ? true : false) : null}
                articleData={articleData}
                category={params.categoryName}
              />
              <Button>VIEW SOURCE</Button>
            </div>
          </div>
        </div>
      </WidthWrapper>
      <Related categoryName={params.categoryName} newsID={params.newsID} />
    </div>
  );
}
