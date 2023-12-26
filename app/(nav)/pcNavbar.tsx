"use client";

import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import { LoginButton } from "./buttons";

export default function PcNavbar({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <div className=" xl:flex hidden   flex-row items-center justify-center gap-2 w-full h-full">
      <Link className="w-fit h-fit" href="/">
        <Image width={172} height={95} src="/logo.svg" alt="Logo Image" />
      </Link>
      <div className="w-full h-full flex flex-row items-center justify-center gap-[50px]">
        <Link href="/live" className="w-fit h-fit">
          <p className="text-text  text-h3">
            LIVE<span className="text-accent">.</span>
          </p>
        </Link>
        <Link href="/discover" className="w-fit h-fit">
          <p className="text-text  text-h3">
            DISCOVER<span className="text-accent">.</span>
          </p>
        </Link>
        <Link href="/explore" className="w-fit h-fit">
          <p className="text-text  text-h3">
            EXPLORE<span className="text-accent">.</span>
          </p>
        </Link>
      </div>
      <div className="w-fit h-full shrink-0 gap-3 flex flex-row items-center justify-center">
        {isLoggedIn ? (
          <Link className="w-fit h-fit" href="/dashboard">
            <Button textOnly>DASHBOARD</Button>
          </Link>
        ) : (
          <LoginButton />
        )}
        <Button>GET STARTED</Button>
      </div>
    </div>
  );
}
