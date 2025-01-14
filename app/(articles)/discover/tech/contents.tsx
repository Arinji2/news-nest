"use client";

import { NewsArticle } from "@/components/article/article";
import { NewsItemType, SavedItemType } from "@/utils/types";
import { Loader2 } from "lucide-react";
import * as React from "react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import GetNextArticles from "../../getNext";

export default function Content({
  serverData,
  totalPages,
  savedData,
}: {
  serverData: NewsItemType[];
  totalPages: number;
  savedData: SavedItemType[];
}) {
  const [articles, setArticles] = useState<NewsItemType[]>(serverData);
  const { ref, inView, entry } = useInView();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    if (loading || !inView) return;
    setLoading(true);
    GetNextArticles(page + 1, totalPages, "category", "technology").then(
      (res) => {
        if (!res) {
          setEnd(true);
          return;
        }

        setArticles((prev) => [...prev, ...res]);
        setLoading(false);
        setPage((prev) => prev + 1);
      },
    );
  }, [inView, loading, page, totalPages]);

  return (
    <>
      <div className="w-full flex flex-row items-center justify-center gap-6 flex-wrap pb-5">
        {articles.map((item) => {
          if (item) {
            const isSaved = savedData.find((savedItem) => {
              return savedItem.articleID === item.id;
            });
            return (
              <NewsArticle
                saved={isSaved ? true : false}
                category="category"
                key={item.id}
                newsProps={item}
              />
            );
          }
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
