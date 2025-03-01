export const dynamic = "force-dynamic";
import WidthWrapper from "@/components/WidthWrapper";
import { NewsArticle, NewsArticleLoader } from "@/components/article/article";
import Button from "@/components/button";
import { InitPocketbase } from "@/utils/pocketbase";
import { NewsItemSchema, SavedItemsSchema } from "@/utils/schemas";
import { SavedItemType } from "@/utils/types";
import { cookies } from "next/headers";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
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
    redirect("/");
  }

  const savedData = await pb.collection("saved").getFullList({
    filter: `savedBy = "${user.record.id}"`,
  });

  const parsedSavedData = SavedItemsSchema.safeParse(savedData);
  if (!parsedSavedData.success) redirect("/");

  return (
    <div className="w-full min-h-page flex flex-col items-center justify-start">
      <h1>Dashboard</h1>
      <WidthWrapper color="#" transparent>
        {parsedSavedData.data.length === 0 && (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-h2 text-secondary font-bold">
              No Saved Articles!
            </h1>
            <Link href="/live" className="w-fit h-fit">
              <Button textOnly className="text-lg text-gray-500">
                Save articles to read them later
              </Button>
            </Link>
          </div>
        )}
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
      saved={true}
      newsProps={parsedData.data}
      category={articleData.articleCategory}
    />
  );
}
