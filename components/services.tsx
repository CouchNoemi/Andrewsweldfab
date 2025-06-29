"use client";

import React, { useState } from "react";
import flatBedImg from "@/assets/images/basic-flat.jpg";
import Image, { StaticImageData } from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ServicesData from "@/data/services.json";

// Remove the hardcoded services array. Data will be loaded from JSON.

// Dummy colored slides for each service
const serviceSlides: Record<string, string[]> = {
  "flat-beds": [
    "bg-red-500",
    "bg-red-300",
    "bg-red-700",
    "bg-orange-500",
    "bg-pink-500",
    "bg-yellow-500",
  ],
  "metal-fabrications": [
    "bg-blue-500",
    "bg-blue-300",
    "bg-blue-700",
    "bg-cyan-500",
    "bg-indigo-500",
    "bg-sky-500",
  ],
  "press-repair": [
    "bg-green-500",
    "bg-green-300",
    "bg-green-700",
    "bg-emerald-500",
    "bg-lime-500",
    "bg-teal-500",
  ],
};


function Services() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const handleServiceClick = (id: string) => {
    setSelectedServiceId((prev) => (prev === id ? null : id));
  };

  const selectedSlides = selectedServiceId ? serviceSlides[selectedServiceId] : [];

  return (
    <section id="services" className="bg-[#222] p-10 space-y-10">
      <h1 className="text-2xl sm:text-5xl font-bold text-white text-center">
        Services
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ServicesData.map((s) => (
          <div
            key={s.id}
            className={`group rounded-md overflow-hidden relative aspect-square cursor-pointer transform transition-all duration-300 hover:shadow-lg ${selectedServiceId === s.id ? "ring-4 ring-blue-400" : ""
              }`}
            onClick={() => handleServiceClick(s.id)}
          >
            <Image
              src={flatBedImg}
              alt={s.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 bg-gradient-to-t w-full h-[50%] from-black to-transparent text-white flex flex-col justify-end p-4 transition-all duration-300">
              <h2 className="text-xl transition-all duration-300 group-hover:text-2xl group-hover:font-bold">
                {s.title}
              </h2>
              <p className="opacity-50 text-sm transition-all duration-300 group-hover:opacity-100 group-hover:text-base">
                {s.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* {selectedServiceId && (
        <div className="max-w-5xl mx-auto">
          <Carousel className="relative w-full">
            <CarouselContent>
              {selectedSlides.map((color, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex items-center justify-center h-64 rounded-md"
                >
                  <div className={`w-full h-full ${color} rounded-lg`} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="w-[90%] xl:w-full mx-auto absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
              <div className="pointer-events-auto">
                <CarouselPrevious />
              </div>
              <div className="pointer-events-auto">
                <CarouselNext />
              </div>
            </div>
          </Carousel>
        </div>
      )} */}
    </section>
  );
}

export default Services;
