import React from "react";
import services from "@/data/services.json";
import Image from "next/image";
import Link from "next/link";

export default function ServicePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = React.use(params);
    const service = services.find(s => s.id === id);

    if (!service) return <div className="text-center py-20">Service not found</div>;

    return (
        <div className="bg-black">
            <div className="container mx-auto text-white min-h-screen px-6 md:px-12 2xl:px-0 py-10 pt-48">
                <h1 className="text-4xl font-bold mb-2">{service.title}</h1>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl">{service.description}</p>

                {/* Filters and Sort */}
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">Filter:</span>
                        <select className="bg-gray-900 border border-gray-700 px-3 py-1 rounded">
                            <option>Find Plans For Your Truck</option>
                            {/* Add dynamic filters here if needed */}
                        </select>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">Sort by:</span>
                        <select className="bg-gray-900 border border-gray-700 px-3 py-1 rounded">
                            <option>Best selling</option>
                            {/* Add other sort options here if needed */}
                        </select>
                    </div>
                    <div className="">{service.products.length} products</div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {service.products.map(product => {
                        const productId = product.title.toLowerCase().replace(/[^a-z0-9]/g, '-');
                        return (
                            <Link
                                key={product.title}
                                href={`/services/${id}/${productId}`}
                                className="flex flex-col cursor-pointer bg-white text-black rounded shadow overflow-hidden hover:scale-[1.01] transition-transform"
                            >
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={500}
                                    height={500}
                                    className="w-full h-56 object-contain bg-white"
                                />
                                <div className="p-4 bg-gray-100 flex-1">
                                    <h2 className="text-md font-semibold">{product.title}</h2>
                                    <p className="text-sm text-gray-700 mt-1">From ${product.price.toFixed(2)} USD</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
