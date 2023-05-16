import Image from "next/image";
import Link from "next/link";

interface CountryCardProps {
  name: string;
  image: string;
}

const CountryCard = ({ name, image }: CountryCardProps) => {
  return (
    <Link
      href={`/explore/${name.toLowerCase().replace(" ", "-")}`}
      className="group relative flex h-[350px] w-[250px] shrink-0 flex-col items-center justify-center overflow-hidden rounded-lg hover:cursor-pointer md:h-[400px] md:w-[300px]"
    >
      <Image
        src={image}
        alt={name}
        fill
        quality={100}
        className="absolute z-10 object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
      />
      <div className="absolute z-20 h-full w-full bg-black opacity-50"></div>
      <h1 className="z-30 text-[30px] font-bold text-white md:text-[40px]">
        {name}
      </h1>
    </Link>
  );
};

export default CountryCard;
