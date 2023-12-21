export const dynamic = "force-dynamic";
import WidthWrapper from "@/components/WidthWrapper";
import { NewsArticle, NewsArticleLoader } from "@/components/article/article";
import { InitPocketbase } from "@/utils/pocketbase";
import { NewsItemSchema, SavedItemsSchema } from "@/utils/schemas";
import { SavedItemType } from "@/utils/types";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function Page() {
  const token = cookies().get("token");
  if (!token) notFound();
  const pb = InitPocketbase();
  pb.authStore.save(token.value);
  let user;
  try {
    const locUser = await pb.collection("users").authRefresh();
    user = locUser;
  } catch (e) {
    notFound();
  }

  const savedData = await pb.collection("saved").getFullList({
    filter: `savedBy = "${user.record.id}"`,
  });

  const parsedSavedData = SavedItemsSchema.safeParse(savedData);
  if (!parsedSavedData.success) notFound();

  return (
    <div className="w-full min-h-page flex flex-col items-center justify-start">
      <h1>Dashboard</h1>
      <WidthWrapper color="#" transparent>
        <div className="w-full flex flex-row items-center justify-center gap-6 flex-wrap pb-5">
          {parsedSavedData.data.map((article) => {
            return (
              <Suspense key={article.id} fallback={<NewsArticleLoader />}>
                <DashboardArticle articleData={article} token={token.value} />
              </Suspense>
            );
          })}
        </div>
      </WidthWrapper>
    </div>
  );
}

async function DashboardArticle({
  articleData,
  token,
}: {
  articleData: SavedItemType;
  token: string;
}) {
  const pb = InitPocketbase();
  pb.authStore.save(token);

  const rawData = await pb
    .collection(articleData.articleCategory)
    .getOne(articleData.articleID);

  const parsedData = NewsItemSchema.safeParse(rawData);
  if (!parsedData.success) notFound();

  return (
    <NewsArticle
      newsProps={parsedData.data}
      category={articleData.articleCategory}
    />
  );
}
