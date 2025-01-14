"use client";
import { cn } from "@/utils/cn";
import { NewsItemType } from "@/utils/types";
import useImage from "@/utils/useImage";
import { HelpCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import SaveButton from "./saveButton";

export function HeroArticle({
  link,
  image,
  title,
  source,
  className,
}: {
  link: string;
  image: string;
  title: string;
  source: string;
  className?: React.HTMLAttributes<HTMLAnchorElement>["className"];
}) {
  const { imageProps, parentRef } = useImage();
  return (
    <Link href={link} className="w-fit h-fit">
      <article
        ref={parentRef}
        className={cn(
          "w-[325px] h-[600px] rounded-lg overflow-hidden group bg-background flex flex-col relative items-center justify-end",
          className,
        )}
      >
        <LazyLoadImage
          src={image}
          alt={title}
          sizes="600px"
          width={imageProps.width}
          height={imageProps.height}
          className="absolute object-cover  max-w-none h-full"
          effect="blur"
        />
        <div className="w-full h-full absolute bg-overlay z-10"></div>
        <div className="w-full h-[120px]  px-3 flex flex-col items-start justify-center gap-2 bg-overlay z-20">
          <p className="text-body text-text w-full text-left line-clamp-2">
            {title}
          </p>
          <p className="text-body text-accent w-full text-left truncate uppercase">
            {source}
          </p>
        </div>
      </article>
    </Link>
  );
}

export function NewsArticle({
  newsProps,
  className,
  hideIcons,
  category,
  link,
  saved,
}: {
  newsProps: NewsItemType;
  hideIcons?: boolean;
  className?: React.HTMLAttributes<HTMLAnchorElement>["className"];
  link?: string;
  saved?: boolean;

  category: string;
}) {
  const [savedState, setSavedState] = useState(saved ?? false);
  const { imageProps, parentRef } = useImage();
  return (
    <div className="w-fit h-fit relative">
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-fit z-20 p-4 backdrop-blur-sm flex flex-row items-center gap-3 justify-end",
          null,
          {
            hidden: hideIcons,
          },
        )}
      >
        <SaveButton
          setSaved={setSavedState}
          saved={savedState}
          article={newsProps}
          category={category}
        />
        <Link href={`/${category}/${newsProps.id}`} target="_blank">
          <HelpCircle className="w-6 h-6 text-accent" />
        </Link>
      </div>
      <Link
        href={link ? link : newsProps.url}
        target="_blank"
        className="w-fit h-fit"
      >
        <article
          ref={parentRef}
          className={cn(
            "w-full md:w-[325px] h-[70svh] md:h-[600px] shrink-0  rounded-lg overflow-hidden group bg-background flex flex-col relative items-center justify-end",
            className,
          )}
        >
          <LazyLoadImage
            src={newsProps.urlToImage ? newsProps.urlToImage : "/logo.png"}
            alt={newsProps.title}
            sizes="600px"
            width={imageProps.width}
            height={imageProps.height}
            className=" object-cover max-w-none h-full"
            effect="blur"
          />

          <div className="w-full h-full absolute bg-overlay z-10"></div>

          <div className="w-full h-[120px]  px-3 flex flex-col items-start justify-center gap-2 bg-overlay z-20">
            <p className="text-body text-text w-full text-left line-clamp-2">
              {newsProps.title}
            </p>
            <p className="text-body text-accent w-full text-left truncate uppercase">
              {newsProps.author ? newsProps.author : "Unknown"}
            </p>
          </div>
        </article>
      </Link>
    </div>
  );
}

export function NewsArticleLoader() {
  return (
    <div className="w-fit h-fit relative">
      <article className="w-full md:w-[325px] h-[70svh] md:h-[600px]  rounded-lg overflow-hidden group bg-black flex flex-col relative items-center justify-center">
        <Loader2 className="w-[200px] h-[200px] animate-spin text-secondary" />
      </article>
    </div>
  );
}
