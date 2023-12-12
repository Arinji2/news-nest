"use client";

import WidthWrapper from "@/components/WidthWrapper";
import Button from "@/components/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import PcNavbar from "./pcNavbar";
import MobNavbar from "./mobNavbar";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  //hide navbar on scroll down
  useEffect(() => {
    let prevScrollpos = window.scrollY;
    window.onscroll = function () {
      let currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) setShowNavbar(true);
      else setShowNavbar(false);
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <nav
      className={cn(
        "w-full h-[100px] sticky top-0 z-10 overflow-hidden transition-all ease-menu-ease duration-500 bg-background border-b-2 border-secondary",
        {
          "-translate-y-full": !showNavbar,
        }
      )}
    >
      <WidthWrapper color="#" transparent>
        <PcNavbar />
        <MobNavbar />
      </WidthWrapper>
    </nav>
  );
}
