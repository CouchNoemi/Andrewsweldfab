import React from 'react';

const projects = [
  {
    title: "Custom Metal Fabrication",
    image: "https://images.pexels.com/photos/159358/pexels-photo-159358.jpeg",
    description: "Precision metal fabrication for industrial applications"
  },
  {
    title: "Welding Services",
    image: "https://images.pexels.com/photos/159306/construction-welder-welding-industrial-159306.jpeg",
    description: "Professional welding services for all your needs"
  },
  {
    title: "CNC Machining",
    image: "https://images.pexels.com/photos/159358/pexels-photo-159358.jpeg",
    description: "High-precision CNC machining for complex parts"
  },
  {
    title: "Metal Structures",
    image: "https://images.pexels.com/photos/159306/construction-welder-welding-industrial-159306.jpeg",
    description: "Custom metal structures and frameworks"
  },
  {
    title: "Sheet Metal Work",
    image: "https://images.pexels.com/photos/159358/pexels-photo-159358.jpeg",
    description: "Expert sheet metal fabrication and forming"
  },
  {
    title: "Metal Finishing",
    image: "https://images.pexels.com/photos/159306/construction-welder-welding-industrial-159306.jpeg",
    description: "Professional metal finishing and surface treatment"
  },
  {
    title: "Custom Railings",
    image: "https://images.pexels.com/photos/159358/pexels-photo-159358.jpeg",
    description: "Design and fabrication of custom metal railings"
  },
  {
    title: "Industrial Equipment",
    image: "https://images.pexels.com/photos/159306/construction-welder-welding-industrial-159306.jpeg",
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
              <div className="relative h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
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