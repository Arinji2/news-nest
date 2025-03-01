import WidthWrapper from "@/components/WidthWrapper";
import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full min-h-page flex flex-col items-center justify-start">
      <h1 className="text-mobileH1  xl:text-h1 text-primary">EXPLORE NEWS</h1>
      <WidthWrapper color="#" transparent>
        <div className="w-full h-full grid xl:grid-cols-2 grid-cols-1 gap-6 pb-3">
          <FeaturedCountryCard name="INDIA" image="india" link="in" start />
          <FeaturedCountryCard name="USA" image="usa" link="us" />
          <FeaturedCountryCard name="CHINA" image="china" link="cn" start />
          <FeaturedCountryCard name="CANADA" image="canada" link="ca" />
          <FeaturedCountryCard name="RUSSIA" image="russia" link="ru" start />
          <FeaturedCountryCard name="SOUTH AFRICA" image="sa" link="sa" start />
        </div>
      </WidthWrapper>
    </div>
  );
}

function FeaturedCountryCard({
  name,
  image,
  link,
  start,
}: {
  name: string;
  image: string;
  link: string;
  start?: boolean;
}) {
  return (
    <div
      className={`${
        start ? "items-center xl:items-start " : "items-center xl:items-end "
      }w-full h-fit  flex flex-col items-start justify-center`}
    >
      <article className="w-full h-[420px] md:h-[210px] bg-[#727272] bg-opacity-25 rounded-sm overflow-hidden flex flex-col md:flex-row items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center gap-3 h-full border-b-2 md:border-0 md:border-r-2 border-white border-dashed">
          <h2 className="text-h2 text-white">{name}</h2>
          <Link href={`/explore/${link}`}>
            <Button className="w-[90px]">VIEW</Button>
          </Link>
        </div>

        <div className="w-full relative flex flex-col items-center justify-center h-full border-t-2 md:border-0 md:border-l-2 border-white border-dashed">
          <Image
            src={`/explore/${image}.webp`}
            className="object-cover"
            fill
            sizes="100vw"
            alt={name}
          />
        </div>
      </article>
    </div>
  );
}
