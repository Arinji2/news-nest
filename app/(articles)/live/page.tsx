import WidthWrapper from "@/components/WidthWrapper";
import { InitPocketbase } from "@/utils/pocketbase";
import { NewsItemSchema } from "@/utils/schemas";
import Content from "./contents";
export default async function Page() {
  const pb = InitPocketbase();
  const data = await pb.collection("live").getList(1, 5);

  const totalPages = data.totalPages;

  const parsedData = data.items.map((item) => {
    return NewsItemSchema.parse(item);
  });

  return (
    <div className="w-full min-h-page flex flex-col items-center justify-start">
      <h1 className="text-mobileH1  xl:text-h1 text-primary">LIVE NEWS</h1>
      <WidthWrapper color="#" transparent>
        <div className="w-full h-full flex flex-col items-center justify-center pb-4">
          <Content serverData={parsedData} totalPages={totalPages} />
        </div>
      </WidthWrapper>
    </div>
  );
}
