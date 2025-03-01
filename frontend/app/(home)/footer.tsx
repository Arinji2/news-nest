"use client";
import Button from "@/components/button";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="w-full  h-page flex flex-col items-center z-20 justify-center">
      <div className="w-full h-full flex flex-col items-center justify-center gap-7">
        <h2 className="text-h2 text-primary text-center">
          What are you waiting for?
        </h2>
        <h3 className="text-subtitle text-text text-center">
          Live. Discover. Explore.
        </h3>
        <Link href="/live" className="w-fit h-fit">
          <Button>GET STARTED</Button>
        </Link>
      </div>
    </section>
  );
}
