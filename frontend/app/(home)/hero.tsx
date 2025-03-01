import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full h-full md:h-page  flex flex-col items-center justify-center">
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
          <Link href="/live" className="w-fit h-fit">
            <Button>START EXPLORING</Button>
          </Link>
        </div>
        <div className="xl:w-[800px] max-w-[500px] w-full  xl:max-h-none max-h-[350px] xl:aspect-auto aspect-[3/4] relative  xl:h-full h-fit flex flex-col items-center justify-start xl:justify-center">
          <Image
            src="/home/hero.webp"
            fill
            priority
            sizes="(min-width: 1280px) 800px, 500px"
            alt="Hero Image"
            className="object-contain xl:object-center xl:scale-110 object-top"
          />
        </div>
      </div>
    </section>
  );
}
