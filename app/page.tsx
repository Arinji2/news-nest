import WidthWrapper from "@/components/WidthWrapper";
import Button from "@/components/button";
import Image from "next/image";

import Link from "next/link";
export const metadata = {
  title: "News Nest",
  description: "Discover. Explore. Stay Informed.",
};

export default async function Home() {
  return (
    <div className="w-full h-fit md:h-page bg-background flex flex-col items-center justify-center">
      <WidthWrapper color="#" transparent>
        <div className="w-full h-fit flex flex-col md:flex-row gap-8 items-center justify-center mt-3 xl:mt-0">
          <div className="w-full h-fit flex flex-col items-center xl:items-start justify-center gap-6">
            <div className="w-fit h-fit flex flex-col items-center xl:items-start justify-center">
              <h1 className="text-text text-center md:text-tabletH1 text-mobileH1 xl:text-h1 -m-3">
                Discover.
              </h1>
              <h1 className="text-text text-center md:text-tabletH1 text-mobileH1 xl:text-h1 -m-3">
                Explore.
              </h1>
              <h1 className="text-text text-center md:text-tabletH1 text-mobileH1 xl:text-h1 -m-3">
                Stay Informed.
              </h1>
            </div>
            <h4 className="text-text text-opacity-50 text-subtitle text-center xl:text-left">
              Your latest news on your fingertips.
            </h4>
            <Button>START EXPLORING</Button>
          </div>
          <div className="xl:w-[800px] max-w-[500px] w-full  xl:max-h-none max-h-[350px] xl:aspect-auto aspect-[3/4] relative  xl:h-full h-fit flex flex-col items-center justify-start xl:justify-center">
            <Image
              src="/home/hero.png"
              fill
              alt="Hero Image"
              className="object-contain xl:object-center xl:scale-110 object-top"
            />
          </div>
        </div>
      </WidthWrapper>
    </div>
  );
}
