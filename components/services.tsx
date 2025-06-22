import React from "react";
import flatBedImg from "@/assets/images/basic-flat.jpg";
import Image, { StaticImageData } from "next/image";

const services: {
  id: string;
  title: string;
  description: string;
  img: StaticImageData;
}[] = [
  {
    id: "flat-beds",
    title: "Flat Beds",
    description: "High-precision with great welds.",
    img: flatBedImg,
  },
  {
    id: "metal-fabrications",
    title: "Metal Fabrication",
    description: "Custom metal structures built to your specifications.",
    img: flatBedImg,
  },
  {
    id: "press-repair",
    title: "Press Repair",
    description: "Expert repair services to minimize downtime.",
    img: flatBedImg,
  },
];
function Services() {
  return (
    <section id="services" className="bg-[#222] p-10 space-y-10">
      <h1 className="text-2xl sm:text-5xl font-bold text-white text-center">
        Services
      </h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s) => (
          <div key={s.id} className="group rounded-md overflow-hidden relative aspect-square cursor-pointer transform transition-all duration-300 hover:shadow-lg">
            <Image 
              src={s.img} 
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
    </section>
  );
}

export default Services;
