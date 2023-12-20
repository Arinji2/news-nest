"use client";

import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import { LoginButton } from "./buttons";

export default function PcNavbar({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <div className=" xl:flex hidden   flex-row items-center justify-center gap-2 w-full h-full">
      <Image width={172} height={95} src="/logo.svg" alt="Logo Image"></Image>
      <div className="w-full h-full flex flex-row items-center justify-center gap-[50px]">
        <Link href="/live" className="w-fit h-fit">
          <p className="text-text  text-h3">
            LIVE<span className="text-accent">.</span>
          </p>
        </Link>
        <p className="text-text  text-h3">
          DISCOVER<span className="text-accent">.</span>
        </p>
        <p className="text-text  text-h3">
          EXPLORE<span className="text-accent">.</span>
        </p>
      </div>
      <div className="w-fit h-full shrink-0 gap-3 flex flex-row items-center justify-center">
        {isLoggedIn ? <Button textOnly>DASHBOARD</Button> : <LoginButton />}
        <Button>GET STARTED</Button>
      </div>
    </div>
  );
}
