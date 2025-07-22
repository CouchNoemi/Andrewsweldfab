import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: "Custom Metal Fabrication",
    image: "",
    description: "Precision metal fabrication for industrial applications"
  },
  {
    title: "Welding Services",
    image: "",
    description: "Professional welding services for all your needs"
  },
  {
    title: "CNC Machining",
    image: "",
    description: "High-precision CNC machining for complex parts"
  },
  {
    title: "Metal Structures",
    image: "",
    description: "Custom metal structures and frameworks"
  },
  {
    title: "Sheet Metal Work",
    image: "",
    description: "Expert sheet metal fabrication and forming"
  },
  {
    title: "Metal Finishing",
    image: "",
    description: "Professional metal finishing and surface treatment"
  },
  {
    title: "Custom Railings",
    image: "",
    description: "Design and fabrication of custom metal railings"
  },
  {
    title: "Industrial Equipment",
    image: "",
    description: "Manufacturing and repair of industrial equipment"
  }
];

function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <div className="relative h-48 bg-black">
                {/* <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="w-full h-full object-cover"
                /> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 