"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import services from "@/data/services.json";
import { Button } from "@/components/ui/button";

export default function ProductDetailPage({ 
    params 
}: { 
    params: Promise<{ id: string; productId: string }> 
}) {
    const { id, productId } = React.use(params);
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    // Find the service and product
    const service = services.find(s => s.id === id);
    const product = service?.products.find(p => 
        p.title.toLowerCase().replace(/[^a-z0-9]/g, '-') === productId
    );

    if (!service || !product) {
        return (
            <div className="bg-black min-h-screen flex items-center justify-center">
                <div className="text-white text-center">
                    <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
                    <p className="text-gray-400">The product you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    // Combine main image with media array for gallery
    const allImages = [product.image, ...product.media.filter(img => img)];

    const handleQuantityChange = (newQuantity: number) => {
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    const handleBuyNow = () => {
        const subject = `Product Inquiry: ${product.title}`;
        const body = `
Hello,

I'm interested in purchasing the following product:

Product: ${product.title}
Price: $${product.price.toFixed(2)} USD
Quantity: ${quantity}
Service: ${service.title}
Product Link: ${window.location.href}

Please provide me with more information about this product and how to proceed with the purchase.

Thank you!
        `;
        
        const mailtoLink = `mailto:andrewsweldfabrication@gmail.com,noemicouch@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard! You can now share it with others.');
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = window.location.href;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert('Link copied to clipboard! You can now share it with others.');
        }
    };

    return (
        <div className="bg-black min-h-screen pt-20">
            <div className="container mx-auto px-4 py-8 pt-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Section - Product Images */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="relative aspect-square bg-white rounded-lg overflow-hidden">
                            <Image
                                src={allImages[selectedImage]}
                                alt={product.title}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Thumbnail Images */}
                        <div className="grid grid-cols-4 gap-2">
                            {allImages.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative aspect-square bg-white rounded-lg overflow-hidden border-2 transition-all ${
                                        selectedImage === index 
                                            ? 'border-blue-500' 
                                            : 'border-gray-300 hover:border-gray-400'
                                    }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`${product.title} - View ${index + 1}`}
                                        fill
                                        className="object-contain"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Section - Product Details */}
                    <div className="text-white space-y-6">
                        {/* Service Name Link */}
                        <div className="text-sm">
                            <Link 
                                href={`/services/${id}`}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                ← Back to {service.title}
                            </Link>
                        </div>

                        {/* Product Title */}
                        <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
                            {product.title}
                        </h1>

                        {/* Price */}
                        <div className="text-2xl font-semibold">
                            ${product.price.toFixed(2)} USD
                        </div>

                        {/* Payment Installments */}
                        <div className="text-sm text-gray-300">
                            Pay in 4 interest-free installments of ${(product.price / 4).toFixed(2)} with{" "}
                            <span className="font-semibold">shop</span> Pay{" "}
                            <a href="#" className="text-blue-400 hover:underline">Learn more</a>
                        </div>

                        {/* File Options */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">
                                .dxf CNC Files For Plasma Tables
                            </label>
                            <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white">
                                <option>No Thanks</option>
                                <option>Add CNC Files (+$50.00)</option>
                            </select>
                        </div>

                        {/* Quantity Selector */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Quantity</label>
                            <div className="flex items-center border border-gray-700 rounded-lg w-32 justify-between">
                                <button
                                    onClick={() => handleQuantityChange(quantity - 1)}
                                    className="px-3 py-2 text-gray-400 hover:text-white transition-colors"
                                >
                                    -
                                </button>
                                <div>
                                    {quantity}
                                </div>
                                <button
                                    onClick={() => handleQuantityChange(quantity + 1)}
                                    className="px-3 py-2 text-gray-400 hover:text-white transition-colors"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Action Button */}
                        <div className="space-y-3">
                            <Button 
                                onClick={handleBuyNow}
                                variant="accent"
                                className="w-full"
                            >
                                Get Quote For This Product
                            </Button>
                        </div>

                        {/* Product Description */}
                        <div className="space-y-4 pt-6 border-t border-gray-700">
                            {product.description.map((paragraph, index) => (
                                <p key={index} className="text-gray-300 leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Share Option */}
                        <div className="pt-4 border-t border-gray-700">
                            <button 
                                onClick={handleShare}
                                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                            >
                                <span>Share</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

