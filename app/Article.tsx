import { FC } from "react";
import Image from "next/image";
import type { Article } from "../utils/types";
import Link from "next/link";

const Card: FC<Article> = ({ headline, image, newsGroup, url }) => {
  headline = headline.replace(/&#039;/g, "'");
  return (
    <Link
      href={url}
      className="group relative flex h-[300px] w-[90vw] shrink-0 flex-col items-start justify-end gap-5 overflow-hidden rounded-lg md:h-[480px] md:w-[380px]"
    >
      <Image
        src={image !== null ? image : "/logo.svg"}
        alt={headline}
        fill
        className={`${
          image !== null ? "object-cover " : "object-contain "
        }absolute transition-all duration-300 ease-in-out group-hover:scale-125 `}
        quality={100}
      />
      <div className="absolute h-full w-full bg-black opacity-50"></div>
      <h1 className="z-10 ml-2 mr-2 line-clamp-2 text-[12px] font-bold text-white md:text-[15px]">
        {headline}
      </h1>
      <h2 className="z-10 mb-5 ml-2 mr-2  line-clamp-1 text-[20px] font-medium text-[#FF5858]">
        By: {newsGroup}
      </h2>
    </Link>
  );
};

export default Card;
