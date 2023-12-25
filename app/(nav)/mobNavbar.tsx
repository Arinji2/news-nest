"use client";
import Button from "@/components/button";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useState, useEffect } from "react";
import { LoginButton } from "./buttons";

export default function MobNavbar({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [active, setActive] = useState(false);
  const [prevState, setPrevState] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [active]);

  useEffect(() => {
    if (prevState === 0) setPrevState(isLoggedIn ? 1 : 2);
    if (prevState === 2 && isLoggedIn) {
      setPrevState(1);
      setActive(false);
    }
  }, [isLoggedIn]);

  return (
    <>
      <div className=" xl:hidden flex   flex-row items-center justify-between gap-2 w-full h-full">
        <Image
          width={152}
          height={75}
          src="/logo.svg"
          quality={100}
          priority
          alt="Logo Image"
          className="object-contain"
        ></Image>
        <div
          className="relative  flex h-[50px] w-[50px] z-[2000] flex-col items-center justify-center gap-1 xl:hidden"
          onClick={() => {
            setActive(!active);
          }}
        >
          <div
            className={`${
              active ? "top-4 -rotate-45 " : "top-2 rotate-0 "
            }bg-text absolute right-0 h-[4px] w-[37px] transition-all duration-500 ease-in-out`}
          ></div>
          <div
            className={`${
              active ? "opacity-0 " : "opacity-100 "
            } absolute right-0 top-4 h-[4px] w-[37px] bg-text delay-100`}
          ></div>
          <div
            className={`${
              active ? "top-4 rotate-45 " : "top-6 rotate-0 "
            }bg-text absolute right-0 h-[4px] w-[37px] transition-all duration-500 ease-in-out`}
          ></div>
        </div>
      </div>
      <div
        className={cn(
          "fixed top-0 left-0 w-full h-[100svh]  z-[1000] flex flex-col items-center justify-end transition-all ease-[cubic-bezier(0.215, 0.61, 0.355, 1)] bg-background duration-500 will-change-transform -translate-y-full",
          {
            "translate-y-0": active,
          }
        )}
      >
        <div className="h-[calc(100%-100px)] w-[90%] flex flex-col items-start justify-end py-5 gap-6">
          <div className="w-full h-fit flex flex-col items-start justify-center gap-4">
            <Link href="/live" className="w-fit h-fit">
              <p className="text-text text-h2">
                LIVE<span className="text-accent">.</span>
              </p>
            </Link>
            <Link href="/discover" className="w-fit h-fit">
              <p className="text-text text-h2">
                DISCOVER<span className="text-accent">.</span>
              </p>
            </Link>
            <p className="text-text text-h2">
              EXPLORE<span className="text-accent">.</span>
            </p>
          </div>
          <div className="w-full h-fit mt-auto gap-3 flex flex-row items-center justify-start">
            {isLoggedIn ? <Button textOnly>DASHBOARD</Button> : <LoginButton />}
            <Button>GET STARTED</Button>
          </div>
        </div>
      </div>
    </>
  );
}
