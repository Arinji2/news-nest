"use client";

import WidthWrapper from "@/components/WidthWrapper";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";
import MobNavbar from "./mobNavbar";
import PcNavbar from "./pcNavbar";

export default function Navbar({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let prevScrollpos = window.scrollY;
    window.onscroll = function () {
      let currentScrollPos = window.scrollY;
      if (currentScrollPos < 100) return;

      if (
        window.innerHeight + Math.round(window.scrollY) + 1 >=
        document.body.offsetHeight
      )
        setShowNavbar(true);
      else if (prevScrollpos > currentScrollPos) setShowNavbar(true);
      else setShowNavbar(false);
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <nav
      className={cn(
        "w-full h-[100px] sticky top-0 z-[500] overflow-hidden transition-all ease-menu-ease duration-500 bg-background border-b-2 border-secondary",
        {
          "-translate-y-full": !showNavbar,
        }
      )}
    >
      <WidthWrapper color="#" transparent>
        <PcNavbar isLoggedIn={isLoggedIn} />
        <MobNavbar isLoggedIn={isLoggedIn} />
      </WidthWrapper>
    </nav>
  );
}
