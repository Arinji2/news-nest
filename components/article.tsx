import { cn } from "@/utils/cn";
import { ClassArray } from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function Article({
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
  return (
    <Link href={link} className="w-fit h-fit">
      <article
        className={cn(
          "w-[325px] h-[600px] rounded-lg overflow-hidden group bg-background flex flex-col relative items-center justify-end",
          className
        )}
      >
        <Image
          src={image}
          fill
          alt={title}
          sizes="600px"
          className="absolute object-cover group-hover:scale-125 transition-all ease-in-out duration-1000 group-hover:translate-x-10"
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
