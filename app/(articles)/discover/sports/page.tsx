import WidthWrapper from "@/components/WidthWrapper";
import { InitPocketbase } from "@/utils/pocketbase";
import { NewsItemSchema, SavedItemsSchema } from "@/utils/schemas";
import Content from "./contents";
import { cookies } from "next/headers";
import { SavedItemType } from "@/utils/types";
export default async function Page() {
  const isLoggedIn = cookies().get("token")?.value;
  const allSavedArticles: SavedItemType[] = [];
  if (isLoggedIn) {
    try {
      const pb = InitPocketbase();
      pb.authStore.save(isLoggedIn);
      await pb.collection("users").authRefresh();
      const savedData = await pb.collection("saved").getFullList({
        filter: `savedBy = "${pb.authStore.model?.id}"`,
      });
      const parsedSavedData = SavedItemsSchema.safeParse(savedData);
      if (parsedSavedData.success) {
        allSavedArticles.push(...parsedSavedData.data);
      }
    } catch (e) {}
  }
  const pb = InitPocketbase();
  const data = await pb.collection("category").getList(1, 5, {
    filter: `category = "sports"`,
    sort: "-created",
  });

  const totalPages = data.totalPages;

  const parsedData = data.items.map((item) => {
    return NewsItemSchema.parse(item);
  });

  return (
    <div className="w-full min-h-page flex flex-col items-center justify-start">
      <h1 className="text-mobileH1  xl:text-h1 text-primary">SPORTS NEWS</h1>
      <WidthWrapper color="#" transparent>
        <div className="w-full h-full flex flex-col items-center justify-center pb-4">
          <Content
            savedData={allSavedArticles}
            serverData={parsedData}
            totalPages={totalPages}
          />
        </div>
      </WidthWrapper>
    </div>
  );
}
