"use server";

import { InitPocketbase } from "@/utils/pocketbase";
import { NewsItemType } from "@/utils/types";
import { revalidatePath, revalidateTag, unstable_cache } from "next/cache";
import { cookies } from "next/headers";

export default async function SaveArticleAction(
  saved: boolean,
  article: NewsItemType,
  category: string
) {
  try {
    const token = cookies().get("token")?.value!;
    const pb = InitPocketbase();
    pb.authStore.save(token);
    await pb.collection("users").authRefresh();
    if (saved) {
      const record = await pb
        .collection("saved")
        .getFirstListItem(`articleID = "${article.id}"`);
      await pb.collection("saved").delete(record.id);
    } else {
      await pb.collection("saved").create({
        savedBy: pb.authStore.model!.id,
        articleCategory: category,
        articleID: article.id,
      });
    }

    revalidatePath("/dashboard");
    revalidatePath(`/${category}`);
    revalidatePath(`/${category}/${article.id}`);
    return !saved;
  } catch (e) {
    console.log(e);
    return null;
  }
}
