'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { groupedProducts } from './Prdoductsdata';

const categories = ["All", ...new Set(groupedProducts.map((p) => p.category))];

export default function ProductsClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get('filter') || 'All';

  const [filter, setFilter] = useState(initialFilter);
  const [carouselIndices, setCarouselIndices] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    setFilter(initialFilter);
  }, [initialFilter]);

  const filteredProducts =
    filter === "All"
      ? groupedProducts
      : groupedProducts.filter(
        (p) => p.category.toLowerCase().trim() === filter.toLowerCase().trim()
      );

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndices((prevIndices) => {
        const newIndices = { ...prevIndices };
        filteredProducts.forEach((product, idx) => {
          const currentIndex = prevIndices[idx] ?? 0;
          newIndices[idx] = (currentIndex + 1) % product.images.length;
        });
        return newIndices;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [filteredProducts]);

  function ProductCard({ product, currentIndex }: { product: typeof groupedProducts[0], currentIndex: number }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const currentImage = product.images[currentIndex];

    return (
      <Card className="hover:shadow-lg transition-shadow duration-300 relative">
        <CardContent className="p-4">
          <div
            className="relative w-full h-48 mb-4 select-none flex items-center justify-center rounded overflow-hidden"
            onContextMenu={(e) => e.preventDefault()}
          >
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                <svg
                  className="animate-spin h-8 w-8 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              </div>
            )}

            {currentImage && (
              <Image
                src={currentImage}
                alt={product.title}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                style={{ objectFit: "contain" }}
                className={`rounded pointer-events-none select-none transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                draggable={false}
                loading="lazy"
                onLoadingComplete={() => setImageLoaded(true)}
                priority={false}
                placeholder="blur"
              // blurDataURL="/placeholder.png"
              />
            )}
          </div>

          <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
          <p className="text-sm text-gray-500 mt-2">{product.description}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <section className="py-16 bg-white relative">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Our Products & Capabilities</h2>
          <p className="text-gray-600 mt-4">
            Specializing in high-precision automotive components and fabricated parts, MAC delivers zero-defect manufacturing solutions tailored to customer specifications with superior quality and consistency.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => {
                setFilter(category);
                router.push(`/Products?filter=${encodeURIComponent(category)}`);
              }}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product, idx) => {
            const currentIndex = carouselIndices[idx] ?? 0;
            return <ProductCard key={product.title + idx} product={product} currentIndex={currentIndex} />;
          })}
        </div>
      </div>
    </section>
  );
}
