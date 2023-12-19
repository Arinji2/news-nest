"use server";
import { cookies } from "next/headers";
export async function AppendCookie(key: string, value: string) {
  cookies().set(key, value);
}
