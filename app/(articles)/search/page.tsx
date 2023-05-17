import { handleSearchDataFetch } from "@/utils/fetchFunctions";

import Card from "@/app/Article";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const keywords = searchParams.keywords;

  const data = await handleSearchDataFetch(keywords);

  return (
    <div className="flex h-fit min-h-[100svh] w-full flex-col items-center justify-start bg-black">
      <h1 className="z-10 mt-56 text-center text-[70px] font-bold text-white md:text-[100px]">
        Search Results
      </h1>
      <div className="z-10 flex h-full w-full shrink-0 flex-row flex-wrap items-center justify-evenly gap-y-5">
        {data.data.length > 0 ? (
          data.data.map((article: any) => (
            <Card
              headline={article.title}
              image={article.image}
              url={article.url}
              newsGroup={article.author}
              key={article.url}
            />
          ))
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center">
            <h1 className="text-[40px] font-bold text-red">No Results Found</h1>
          </div>
        )}
      </div>
    </div>
  );
}
