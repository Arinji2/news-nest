"use client";
import Button from "@/components/button";
import dynamic from "next/dynamic";
const GlobeComponent = dynamic(() => import("./globeComponent"), {
  ssr: false,
});

export default function Footer() {
  return (
    <section className="w-full h-fit  py-10 flex xl:flex-row flex-col  items-center justify-center">
      <div className="w-full h-fit flex flex-col items-center xl:items-start justify-center gap-4">
        <h2 className="text-h2 text-primary text-center">
          What are you waiting for?
        </h2>
        <h3 className="text-subtitle text-text text-left">
          Live. Discover. Explore.
        </h3>
        <Button>GET STARTED</Button>
      </div>
      <GlobeComponent />
    </section>
  );
}
