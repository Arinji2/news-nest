import Button from "@/components/button";
import Image from "next/image";

export default function Discover() {
  return (
    <section className="w-full h-full  py-10 flex flex-col overflow-hidden items-center justify-center">
      <div className="w-full h-full flex flex-col items-center justify-center gap-8">
        <div className="w-full h-fit flex flex-col items-start justify-center gap-4">
          <h2 className="text-h2 text-primary">DISCOVER</h2>
          <h3 className="text-subtitle text-text text-left">
            Enhance your choices by discovering new news sources
          </h3>
          <Button inverse>VIEW MORE</Button>
        </div>
        <div className="w-full  h-fit flex group/parent flex-row items-center justify-start gap-4 rounded-lg  overflow-hidden py-4 ">
          <div className=" flex flex-row  group-hover/parent:pause animate-infinite-scroll items-center justify-start  gap-4">
            <Card name="Sports" image="/home/discover-1.png" />
            <Card name="Tech" image="/home/discover-2.png" />
            <Card name="Science" image="/home/discover-3.png" />
            <Card name="Comedy" image="/home/discover-4.png" />
            <Card name="Money" image="/home/discover-5.png" />
          </div>
          <div
            aria-hidden={true}
            className=" no-scrollbar flex flex-row group-hover/parent:pause  animate-infinite-scroll items-center justify-start  gap-4"
          >
            <Card name="Sports" image="/home/discover-1.png" />
            <Card name="Tech" image="/home/discover-2.png" />
            <Card name="Science" image="/home/discover-3.png" />
            <Card name="Comedy" image="/home/discover-4.png" />
            <Card name="Money" image="/home/discover-5.png" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ name, image }: { name: string; image: string }) {
  return (
    <div className="w-[440px] h-[230px] group overflow-hidden shrink-0 rounded-lg bg-background flex flex-row items-center justify-center">
      <div className="w-[50%] h-full flex flex-col items-center justify-end gap-6 pb-4">
        <p className="text-text text-h2 uppercase">{name}</p>
        <Button>DISCOVER</Button>
      </div>
      <div className="w-[50%] relative h-full flex flex-col items-center justify-end gap-6 pb-4">
        <Image
          src={image}
          fill
          sizes="220px"
          alt="Discover 1"
          className="absolute object-cover"
        />
        <div className="w-full h-full group-hover:opacity-0 transition-all ease-in-out duration-700 absolute bg-overlay top-0 left-0 z-10"></div>
      </div>
    </div>
  );
}
