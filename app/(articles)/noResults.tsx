"use client";

import Button from "@/components/button";
import { useRouter } from "next/navigation";

export default function NoResults() {
  const router = useRouter();
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <h2 className="text-h2 text-text">No articles found, try again later!</h2>
      <Button onClick={() => router.back()}>Go Back</Button>
    </div>
  );
}
