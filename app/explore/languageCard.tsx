import Link from "next/link";

interface LanguageCardProps {
  name: string;
  letter: string;
}

const LanguageCard = ({ name, letter }: LanguageCardProps) => {
  return (
    <Link
      href={`/language?name=${name.replace(" ", "-")}`}
      className=" group relative flex h-[170px] w-[170px] shrink-0 flex-col items-center justify-center  overflow-hidden rounded-lg  bg-[#000000] transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-red"
    >
      <h1 className="z-30  text-[50px] font-bold text-red transition-all duration-300 ease-in-out group-hover:text-[#000000]">
        {letter}
      </h1>
      <h1 className="z-30  text-[20px] font-medium text-white">{name}</h1>
    </Link>
  );
};

export default LanguageCard;
