"use client";

import WidthWrapper from "@/components/WidthWrapper";
import Button from "@/components/button";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
    });
  }, []);
  return (
    <nav className="w-full h-[100px] overflow-hidden bg-background border-b-2 border-secondary">
      <WidthWrapper color="#" transparent>
        <div className="  flex flex-row items-center justify-center gap-2 w-full h-full">
          <Image
            width={172}
            height={95}
            src="/logo.svg"
            alt="Logo Image"
          ></Image>
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
      </WidthWrapper>
    </nav>
  );
}
