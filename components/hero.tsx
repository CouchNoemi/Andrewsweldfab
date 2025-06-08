import React from "react";
import hero from "@/assets/images/hero.jpeg";
import Button from "./button";

function Hero() {
  return (
    <div
      className="flex items-center justify-center h-[60vh] md:h-[70vh] w-full  bg-fixed bg-cover bg-center relative text-white p-10"
      style={{
        backgroundImage: `url(${hero.src})`,
      }}
    >
      <div className="absolute z-0 inset-0 w-full h-full bg-black opacity-60" />
      <div className="relative z-10 flex flex-col items-center gap-4">
        <h1 className="text-2xl sm:text-5xl font-bold">
          Quality You Can Trust
        </h1>
        <div className="text-center">
          <h2>Need Expert Welding & Fabrication?</h2>
          <p>Contact us today for a custom quote and fast turnaround.</p>
        </div>
        <Button className="min-w-[200px]">Get a Quote</Button>
      </div>
    </div>
  );
}

export default Hero;
