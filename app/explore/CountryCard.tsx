import Image from "next/image";
import Link from "next/link";

interface CountryCardProps {
  name: string;
  image: string;
  index: number;
}

const CountryCard = ({ name, image, index }: CountryCardProps) => {
  var black = true;
  if (index === 0) black = false;
  return (
    <Link
      href={`/country?name=${name.replace(" ", "-")}`}
      className={`${
        black ? "bg-[#000000] " : "bg-red "
      } group relative flex h-[170px] w-[170px] shrink-0 flex-col items-center justify-start gap-10 overflow-hidden rounded-lg  hover:cursor-pointer`}
    >
      <Image
        src={image}
        alt={name}
        width={70}
        height={70}
        quality={100}
        className="z-10 mt-5 object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
      />

      <h1 className="z-30 mb-5 text-[20px] font-bold text-white">{name}</h1>
    </Link>
  );
};

export default CountryCard;
