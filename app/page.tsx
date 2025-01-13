import WidthWrapper from "@/components/WidthWrapper";
import Image from "next/image";

import Hero from "./(home)/hero";
import Live from "./(home)/live";
import Discover from "./(home)/discover";
import Explore from "./(home)/explore";
import Footer from "./(home)/footer";

export default async function Home() {
  return (
    <div className="w-full h-fit  bg-background flex flex-col items-center justify-start">
      <div className="w-full h-full  flex flex-col items-center justify-start gap-10 md:gap-20">
        <WidthWrapper color="#" transparent>
          <Hero />
        </WidthWrapper>
        <WidthWrapper color="#0A1110">
          <Live />
        </WidthWrapper>
        <WidthWrapper color="#8A1838">
          <Discover />
        </WidthWrapper>
        <WidthWrapper color="#" transparent>
          <Explore />
        </WidthWrapper>

        <div className="w-full h-page relative">
          <Image
            src="/home/footer.webp"
            fill
            className="object-cover absolute object-center "
            alt="Fighter Plane taking off"
            sizes="100vw"
            quality={50}
          />
          <div className="w-full h-full bg-background bg-opacity-95 xl:bg-opacity-80 xl:backdrop-blur-[5px] absolute top-0 left-0 z-10"></div>
          <WidthWrapper color="#" transparent>
            <Footer />
          </WidthWrapper>
        </div>
      </div>
    </div>
  );
}
