import Image from "next/image";
import CountryCard from "./CountryCard";
import LanguageCard from "./languageCard";

function Page() {
  return (
    <div className="h-fit w-full">
      <div className="flex h-[100svh] w-full flex-col items-center justify-center">
        <Image
          src={"/explore/explore.png"}
          alt="Newspapers"
          priority
          fill
          className="absolute -z-10 object-cover"
          quality={100}
        />
        <div className="absolute h-full w-full bg-black opacity-50 "></div>
        <h1 className="z-10 text-center text-[70px] font-bold text-white md:text-[120px]">
          Explore
        </h1>
        <h3 className="z-10 text-[20px] font-light text-[#FFFFFF] md:text-[30px]">
          Explore the World of News
        </h3>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-start bg-black md:h-[100svh]">
        <h1 className="mt-10 text-center text-[50px] font-bold text-red md:text-[90px]">
          By Country
        </h1>
        <div
          className="m-3 flex h-full w-full flex-row flex-wrap items-center justify-evenly gap-5 pl-7 pr-7"
          id="country"
        >
          <CountryCard name="India" image="/countries/india.svg" index={0} />
          <CountryCard
            name="Australia"
            image="/countries/australia.svg"
            index={1}
          />
          <CountryCard
            name="Belgium"
            image="/countries/belgium.svg"
            index={0}
          />
          <CountryCard name="France" image="/countries/france.svg" index={1} />
          <CountryCard
            name="Germany"
            image="/countries/germany.svg"
            index={0}
          />
          <CountryCard name="Japan" image="/countries/japan.svg" index={1} />
          <CountryCard
            name="New Zealand"
            image="/countries/new-zealand.svg"
            index={0}
          />

          <CountryCard name="Serbia" image="/countries/serbia.svg" index={1} />
          <CountryCard
            name="United Kingdom"
            image="/countries/united-kingdom.svg"
            index={0}
          />
          <CountryCard
            name="United States"
            image="/countries/united-states.svg"
            index={1}
          />
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-start bg-black md:h-[100svh]">
        <h1 className="mt-10 text-center text-[50px] font-bold text-red md:text-[90px]">
          By Language
        </h1>
        <div className="m-3 flex h-full w-full flex-row flex-wrap items-center justify-evenly gap-5 pl-7 pr-7">
          <LanguageCard name="English" letter="A" />
          <LanguageCard name="Arabic" letter="ب" />
          <LanguageCard name="German" letter="Ä" />
          <LanguageCard name="Spanish" letter="Æ" />
          <LanguageCard name="French" letter="Â" />
          <LanguageCard name="Italian" letter="Ã" />
          <LanguageCard name="Russian" letter="Я" />
          <LanguageCard name="Chinese" letter="Ā" />
        </div>
      </div>
    </div>
  );
}

export default Page;
