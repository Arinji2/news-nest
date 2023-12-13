import Article from "@/components/article";
import Button from "@/components/button";
import Image from "next/image";

export default function Explore() {
  return (
    <section className="w-full h-full md:h-page  py-10 flex flex-col overflow-hidden items-center justify-center relative">
      <Image
        src="/home/explore.png"
        fill
        alt="Map"
        className="absolute top-0 left-0 object-contain"
      />
      <div className="w-full h-full flex flex-col-reverse xl:flex-row items-center justify-center gap-6 md:gap-10 z-10">
        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
          <Card name="India" pop={1.42} unit="B" />
          <Card name="China" pop={1.41} unit="B" />
          <Card name="Usa" pop={340} unit="M" />
          <Card name="Russia" pop={143} unit="M" />
        </div>
        <div className="w-full h-fit flex flex-col items-center xl:items-start justify-center gap-4">
          <h2 className="text-h2 text-primary">EXPLORE</h2>
          <h3 className="text-subtitle text-text text-center xl:text-left">
            Explore countries and their{" "}
            <br className="xl:inline-block hidden" /> worlds.
          </h3>
          <Button>VIEW MORE</Button>
        </div>
      </div>
    </section>
  );
}

function Card({
  name,
  pop,
  unit,
}: {
  name: string;
  pop: number;
  unit: string;
}) {
  return (
    <article className="bg-[#727272] bg-opacity-20 w-full xl:min-w-[700px] px-6 md:py-0 py-6 h-[300px] md:h-[120px] flex flex-col md:flex-row items-center justify-end gap-10">
      <div className="w-full flex flex-col items-center md:items-end justify-center ">
        <p className="text-center md:text-right text-h2 uppercase text-text">
          {name}
        </p>
      </div>
      <div className="md:hidden block h-2px w-[80%] border-2 border-white border-dashed"></div>
      <div className="w-full md:w-[60%] h-full flex flex-col md:flex-row items-center justify-end gap-8">
        <div className="md:block hidden h-[80%] w-[2px] border-2 border-white border-dashed"></div>
        <div className="w-fit h-full flex flex-row items-center justify-center gap-2">
          <p className="text-text text-subtitle">POPULATION:</p>
          <p className="text-text text-subtitle">
            {pop}
            <span className="text-accent">{unit}</span>
          </p>
        </div>
        <Button inverse>EXPLORE</Button>
      </div>
    </article>
  );
}
