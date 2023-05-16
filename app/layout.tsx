"use client";

import Image from "next/image";
import "./globals.css";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "300", "400", "100", "500", "700", "900"],
});

export const metadata = {
  title: "News Nest",
  description: "Discover. Explore. Stay Informed.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scroll, setScroll] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <html lang="en">
      <body className={roboto.className}>
        {nav ? (
          <div className="fixed top-0 z-[900] flex h-[100vh] w-full translate-y-0 flex-col items-center justify-start bg-[#000000] transition-all duration-500 ease-in-out">
            <div className="flex h-[120px] w-full flex-row items-center justify-start">
              <Link
                href="/"
                className="flex h-full w-[90%] flex-col items-center justify-center md:w-[20%]"
              >
                <Image
                  src={"/logo.svg"}
                  width={150}
                  height={150}
                  alt="Logo"
                  className="object-fit "
                />
              </Link>
              <FontAwesomeIcon
                icon={faBars as IconProp}
                className="absolute right-5 block h-[40px] w-[40px] text-white md:hidden"
                onClick={() => {
                  setNav(!nav);
                }}
              />
            </div>
            <div className="mt-20 flex h-fit w-full flex-col items-center justify-center gap-20">
              <Link href={"/discover"}>
                <div className="group flex w-fit flex-col items-center justify-center text-[35px] font-medium text-white hover:cursor-pointer">
                  Discover
                  <div className="h-[4px] w-full origin-left scale-x-0 bg-transparent transition-all duration-500 ease-in-out group-hover:scale-x-100 group-hover:bg-white"></div>
                </div>
              </Link>
              <Link href={"/explore"}>
                <div className="group flex w-fit flex-col items-center justify-center text-[35px] font-medium text-white hover:cursor-pointer">
                  Explore
                  <div className="h-[4px] w-full origin-left scale-x-0 bg-transparent transition-all duration-500 ease-in-out group-hover:scale-x-100 group-hover:bg-white"></div>
                </div>
              </Link>
              <Link href={"/informed"}>
                <div className="group flex w-fit flex-col items-center justify-center text-[35px] font-medium text-white hover:cursor-pointer">
                  Informed
                  <div className="h-[4px] w-full origin-left scale-x-0 bg-transparent transition-all duration-500 ease-in-out group-hover:scale-x-100 group-hover:bg-white"></div>
                </div>
              </Link>
              <Link
                href={"/login"}
                className="absolute bottom-5 border-2 border-red bg-red p-3 pl-5 pr-5 text-[20px] font-bold text-white transition-all duration-500 ease-in-out hover:cursor-pointer hover:bg-white hover:text-red"
              >
                Login
              </Link>
            </div>
          </div>
        ) : (
          <div className="fixed top-0 flex h-[100svh] w-full -translate-y-full flex-col items-center justify-center transition-all duration-300 ease-in-out"></div>
        )}
        <div
          className={`${scroll ? "bg-[#000000] " : "bg-transparent "} ${
            nav ? "hidden " : "block "
          } fixed top-0 z-[1000] flex h-[120px] w-full  flex-row items-center justify-start md:justify-between `}
        >
          <Link
            href="/"
            className="flex h-full w-[90%] flex-col items-center justify-center md:w-[20%]"
          >
            <Image
              src={"/logo.svg"}
              width={150}
              height={150}
              alt="Logo"
              className="object-fit "
            />
          </Link>
          <FontAwesomeIcon
            icon={faBars as IconProp}
            className="absolute right-5 block h-[40px] w-[40px] text-white md:hidden"
            onClick={() => {
              setNav(!nav);
            }}
          />

          <div className="hidden h-full w-[60%] flex-row items-center justify-center gap-20 md:flex">
            <Link href={"/discover"}>
              <div className="group flex w-fit flex-col items-center justify-center text-[35px] font-medium text-white hover:cursor-pointer">
                Discover
                <div className="h-[4px] w-full origin-left scale-x-0 bg-transparent transition-all duration-500 ease-in-out group-hover:scale-x-100 group-hover:bg-white"></div>
              </div>
            </Link>
            <Link href={"/explore"}>
              <div className="group flex w-fit flex-col items-center justify-center text-[35px] font-medium text-white hover:cursor-pointer">
                Explore
                <div className="h-[4px] w-full origin-left scale-x-0 bg-transparent transition-all duration-500 ease-in-out group-hover:scale-x-100 group-hover:bg-white"></div>
              </div>
            </Link>
            <Link href={"/informed"}>
              <div className="group flex w-fit flex-col items-center justify-center text-[35px] font-medium text-white hover:cursor-pointer">
                Informed
                <div className="h-[4px] w-full origin-left scale-x-0 bg-transparent transition-all duration-500 ease-in-out group-hover:scale-x-100 group-hover:bg-white"></div>
              </div>
            </Link>
          </div>
          <div className="hidden h-full w-[20%] flex-col items-center justify-center md:flex">
            <Link
              href={"/login"}
              className=" border-2 border-red bg-red p-3 pl-5 pr-5 text-[20px] font-bold text-white transition-all duration-500 ease-in-out hover:cursor-pointer hover:bg-white hover:text-red"
            >
              Login
            </Link>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
