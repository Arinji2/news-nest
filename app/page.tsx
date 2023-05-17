import Image from "next/image";

import Card from "./Article";
import { getCurrentDate, getPrevDate } from "@/utils/helperFunctions";
import Link from "next/link";
export const metadata = {
  title: "News Nest",
  description: "Discover. Explore. Stay Informed.",
};
export default async function Home() {
  const handleDataFetch = async () => {
    const date = getCurrentDate();
    const prev = getPrevDate();

    const res = await fetch(
      `http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASTACK_API}&limit=3&countries=in&date=${prev},${date}&sort=published_desc`,
      { next: { revalidate: 180 } }
    );

    const data = await res.json();

    return data;
  };
  const dataJSON = await handleDataFetch();
  return (
    <div className="h-fit w-full">
      <div className="flex h-[100svh] w-full flex-col items-center justify-center">
        <Image
          src={"/hero.png"}
          fill
          alt="Newspapers"
          quality={100}
          priority
          className="absolute -z-20 object-cover"
        />
        <div className="absolute -z-10 h-full w-full bg-[#1E1E1E] opacity-50" />
        <h1 className="text-center text-[70px] font-bold text-white md:text-[120px]">
          News Nest
        </h1>
        <h3 className="text-[20px] font-light text-[#FFFFFF] md:text-[30px]">
          Discover. Explore. Stay Informed.
        </h3>
        <Link
          href="/discover"
          className="absolute bottom-10 border-4 border-red bg-red p-3 text-[20px] font-bold transition-all duration-300 ease-in-out hover:bg-white hover:text-red"
        >
          Start Discovering
        </Link>
      </div>
      <div className="bg flex h-fit w-full flex-col items-center justify-start bg-black">
        <h1 className="mt-10 text-center text-[50px] font-bold text-red md:text-[90px]">
          Live News
        </h1>
        <div className="mb-5 flex h-full w-full shrink-0 flex-row flex-wrap items-center justify-evenly gap-y-5">
          <Card
            headline={dataJSON.data[0].title}
            image={dataJSON.data[0].image}
            newsGroup={dataJSON.data[0].source}
            url={dataJSON.data[0].url}
          />
          <Card
            headline={dataJSON.data[1].title}
            image={dataJSON.data[1].image}
            newsGroup={dataJSON.data[1].source}
            url={dataJSON.data[1].url}
          />
          <Card
            headline={dataJSON.data[2].title}
            image={dataJSON.data[2].image}
            newsGroup={dataJSON.data[2].source}
            url={dataJSON.data[2].url}
          />
        </div>
      </div>
    </div>
  );
}
