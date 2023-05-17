import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  name: string;
  image: string;
  index: string;
}

const CategoryCard = ({ name, image, index }: CategoryCardProps) => {
  return (
    <Link
      href={`/category/${name.toLowerCase().replace(" ", "-")}`}
      className="group relative flex h-[200px] w-[90vw] shrink-0 flex-col items-center justify-start overflow-hidden rounded-lg text-center hover:cursor-pointer md:h-[300px] md:items-start"
    >
      <Image
        src={image}
        alt={name}
        quality={100}
        fill
        priority
        loading="eager"
        className="absolute z-10 object-cover object-center transition-all duration-300 ease-in-out group-hover:scale-110"
      />
      <div className="absolute z-20 h-full w-full bg-black opacity-50"></div>
      <h1 className="z-30 mt-10 text-[30px] font-bold text-white md:ml-10 md:text-[40px]">
        {`${index}. ${name}`}
      </h1>
      <div className="flex h-fit w-full flex-col items-center justify-center md:w-[80%]">
        <p className="z-30  mt-20 text-[13px] font-medium text-white md:text-[30px]">
          Articles based on {name} News, around the world
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
