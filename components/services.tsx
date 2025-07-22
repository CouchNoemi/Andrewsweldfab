"use client";

import React, { useState } from "react";
import Image from "next/image";
import ServicesData from "@/data/services.json";
import Link from "next/link";

function Services() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const handleServiceClick = (id: string) => {
    setSelectedServiceId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="bg-[#222] p-10 space-y-10">
      <h1 className="text-2xl sm:text-5xl font-bold text-white text-center">
        Services
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ServicesData.map((s) => (
          <Link href={`/services/${s.id}`} key={s.id}>
            <div
              className={`group rounded-md overflow-hidden relative aspect-square cursor-pointer transform transition-all duration-300 hover:shadow-lg bg-amber-100 ${selectedServiceId === s.id ? "ring-4 ring-blue-400" : ""
                }`}
              onClick={() => handleServiceClick(s.id)}
            >
              <Image
                src={s.products[0].image}
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
          </Link>
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
