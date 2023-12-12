"use client";

import WidthWrapper from "@/components/WidthWrapper";
import Button from "@/components/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import PcNavbar from "./pcNavbar";
import MobNavbar from "./mobNavbar";

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
        <PcNavbar />
        <MobNavbar />
      </WidthWrapper>
    </nav>
  );
}
