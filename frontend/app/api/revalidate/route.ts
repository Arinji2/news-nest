import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const key = searchParams.get("key");
  if (!key) {
    return new Response("Missing key", { status: 400 });
  }

  if (key === process.env.REVALIDATE_KEY) {
    revalidatePath("/", "layout");
    return new Response("OK", { status: 200 });
  }

  return new Response("Invalid key", { status: 403 });
}
