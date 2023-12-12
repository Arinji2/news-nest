import Button from "@/components/button";
import Image from "next/image";

export default function PcNavbar() {
  return (
    <div className=" xl:flex hidden   flex-row items-center justify-center gap-2 w-full h-full">
      <Image width={172} height={95} src="/logo.svg" alt="Logo Image"></Image>
      <div className="w-full h-full flex flex-row items-center justify-center gap-[50px]">
        <p className="text-text  text-h3">
          LIVE<span className="text-accent">.</span>
        </p>
        <p className="text-text  text-h3">
          DISCOVER<span className="text-accent">.</span>
        </p>
        <p className="text-text  text-h3">
          EXPLORE<span className="text-accent">.</span>
        </p>
      </div>
      <div className="w-fit h-full shrink-0 gap-3 flex flex-row items-center justify-center">
        <Button textOnly>LOGIN</Button>
        <Button>GET STARTED</Button>
      </div>
    </div>
  );
}
