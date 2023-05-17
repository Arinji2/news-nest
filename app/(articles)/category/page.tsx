import { handleCategoryDataFetch } from "@/utils/fetchFunctions";

import Card from "@/app/Article";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const category = searchParams.category;

  const data = await handleCategoryDataFetch(category.toLowerCase());

  return (
    <div className="flex h-fit w-full flex-col items-center justify-start bg-black">
      <h1 className="z-10 mt-56 text-center text-[50px] font-bold text-white md:text-[100px]">
        Articles on <span className="text-red">{category}</span>
      </h1>
      <div className="z-10 flex h-full w-full shrink-0 flex-row flex-wrap items-center justify-evenly gap-y-5">
        {data.data.map((article: any) => (
          <Card
            headline={article.title}
            image={article.image}
            url={article.url}
            newsGroup={article.author}
            key={article.url}
          />
        ))}
      </div>
    </div>
  );
}
