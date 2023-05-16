import Image from "next/image";
import CountryCard from "./CountryCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import CategoryCard from "./CategoryCard";

function Page() {
  return (
    <div className="h-fit w-full">
      <div className="flex h-[100svh] w-full flex-col items-center justify-center">
        <Image
          src={"/discover/discover.png"}
          alt="Newspapers"
          priority
          fill
          className="absolute -z-10 object-cover"
          quality={100}
        />
        <div className="absolute h-full w-full bg-black opacity-50 "></div>
        <h1 className="z-10 text-center text-[70px] font-bold text-white md:text-[120px]">
          Discover
        </h1>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-start bg-black ">
        <h1 className="mt-10 text-center text-[50px] font-bold text-red md:text-[90px]">
          By Country
        </h1>
        <div className="mb-5 flex h-full w-full shrink-0 flex-row items-center justify-start gap-5 overflow-x-auto pl-5 pr-5 md:ml-0 md:mr-0 md:justify-evenly">
          <CountryCard name="India" image="/discover/india.png" />
          <CountryCard name="United States" image="/discover/usa.png" />
          <CountryCard name="United Kingdom" image="/discover/uk.png" />
          <div className="group flex h-[350px] w-[60px] flex-col items-center justify-center rounded-lg bg-red transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-white md:h-[400px]">
            <FontAwesomeIcon
              icon={faPlus as IconProp}
              className="h-[40px] w-[40px] text-white transition-all duration-300 ease-in-out group-hover:text-red"
            />
          </div>
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-start bg-black md:h-[40vh] ">
        <h1 className="mt-10 text-center text-[50px] font-bold text-red md:text-[90px]">
          By Keyword
        </h1>
        <div className="flex h-fit w-[95%] flex-row items-center justify-center gap-4 border-4 border-white bg-black">
          <input
            className="m-3 h-[40px] w-[90%]   bg-black p-1 text-[20px] font-medium text-white outline-none md:p-3 md:text-[30px]"
            type="text"
            placeholder="Explore the World..."
          />
          <FontAwesomeIcon
            icon={faSearch as IconProp}
            className="mr-3 h-[20px] w-[20px] text-red md:h-[40px] md:w-[40px]"
          />
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-start bg-black ">
        <h1 className="mt-10 text-center text-[50px] font-bold text-red md:text-[90px]">
          By Category
        </h1>
        <div className="mb-5 flex flex-col items-center justify-center gap-5">
          <CategoryCard
            name="General"
            image="/discover/general.png"
            index="1"
          />
          <CategoryCard
            name="Entertainment"
            image="/discover/entertainment.png"
            index="2"
          />
          <CategoryCard
            name="Business"
            image="/discover/business.png"
            index="3"
          />
          <CategoryCard name="Health" image="/discover/health.png" index="4" />
          <CategoryCard
            name="Science"
            image="/discover/science.png"
            index="5"
          />
          <CategoryCard name="Sports" image="/discover/sports.png" index="6" />
          <CategoryCard
            name="Technology"
            image="/discover/technology.png"
            index="7"
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
