"use client";

import { NewsArticle } from "@/components/article";
import { NewsItemType } from "@/utils/types";
import { Loader2 } from "lucide-react";
import * as React from "react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import GetNextLiveArticles from "./getNext";

export default function Content({
  serverData,
  totalPages,
}: {
  serverData: NewsItemType[];
  totalPages: number;
}) {
  const [articles, setArticles] = useState<NewsItemType[]>(serverData);
  const { ref, inView, entry } = useInView();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    if (loading || !inView) return;
    setLoading(true);
    GetNextLiveArticles(page + 1, totalPages).then((res) => {
      if (!res) {
        setEnd(true);
        return;
      }

      setArticles((prev) => [...prev, ...res]);
      setLoading(false);
      setPage((prev) => prev + 1);
    });
  }, [inView]);

  return (
    <>
      <div className="w-full flex flex-row items-center justify-center gap-6 flex-wrap pb-5">
        {articles.map((item) => {
          if (item) return <NewsArticle key={item.id} newsProps={item} />;
        })}
      </div>
      {
        <Loader2
          ref={ref}
          className={`${
            end ? "hidden " : "block "
          }w-10 h-10 text-secondary animate-spin`}
        />
      }
    </>
  );
}
