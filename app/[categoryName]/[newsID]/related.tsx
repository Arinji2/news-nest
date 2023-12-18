import WidthWrapper from "@/components/WidthWrapper";
import { NewsArticle } from "@/components/article";
import { NewsItemsSchema } from "@/utils/schemas";
import Image from "next/image";
import Pocketbase from "pocketbase";

export default async function Related({
  categoryName,
  newsID,
}: {
  categoryName: string;
  newsID: string;
}) {
  const pb = new Pocketbase("https://db-news.arinji.com/");

  const data = await pb.collection(categoryName as string).getList(1, 2, {
    filter: `id != "${newsID}"`,
  });
  const parsedData = NewsItemsSchema.parse(data.items);

  return (
    <div className="h-fit py-4 w-full bg-secondary flex flex-col items-center justify-center">
      <WidthWrapper color="#8C1B44" transparent>
        <h2 className="text-h2 text-text text-center">RELATED ARTICLES</h2>
        <div className="w-full h-full flex flex-wrap flex-row items-center justify-center gap-6 ">
          {parsedData.map((item) => (
            <NewsArticle
              hideIcons
              link={`/${categoryName}/${item.id}`}
              category={categoryName}
              className="md:w-[525px] h-[30svh] md:h-[300px] "
              newsProps={item}
              key={item.id}
            />
          ))}
        </div>
      </WidthWrapper>
    </div>
  );
}
