"use server";

import { revalidateTag } from "next/cache";

export async function revalidateHelperTag(tag: string) {
  revalidateTag(tag);
}
