import WidthWrapper from "@/components/WidthWrapper";
import Button from "@/components/button";
import Image from "next/image";

import Link from "next/link";
import Hero from "./(home)/hero";
import Live from "./(home)/live";
export const metadata = {
  title: "News Nest",
  description: "Discover. Explore. Stay Informed.",
};

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
      </div>
    </div>
  );
}
