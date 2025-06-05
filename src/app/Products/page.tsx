'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { groupedProducts } from './Prdoductsdata';

const types = ["All", ...new Set(groupedProducts.map((p) => p.category))];

export default function Products() {
  const [filter, setFilter] = useState("All");
  const [carouselIndices, setCarouselIndices] = useState<{ [key: number]: number }>({});

  const filtered = filter === "All"
    ? groupedProducts
    : groupedProducts.filter((p) => p.category === filter);

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndices(prevIndices => {
        const newIndices = { ...prevIndices };
        filtered.forEach((product, index) => {
          const current = prevIndices[index] || 0;
          newIndices[index] = (current + 1) % product.images.length;
        });
        return newIndices;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [filtered]);

  return (
    <section className="py-16 bg-white relative">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Products & Capabilities</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Specializing in high-precision auto components and fabricated parts, MAC delivers zero-defect manufacturing solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {types.map((type) => (
            <Button
              key={type}
              variant={filter === type ? "default" : "outline"}
              onClick={() => setFilter(type)}
            >
              {type}
            </Button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((product, idx) => {
            const currentIndex = carouselIndices[idx] || 0;
            const currentImage = product.images[currentIndex];

            return (
              <Card key={idx} className="hover:shadow-lg transition">
                <CardContent className="p-4">
                  <div
                    className="relative w-full h-48 mb-4 select-none"
                    onContextMenu={(e) => e.preventDefault()}
                  >
                    <Image
                      src={currentImage}
                      alt={product.title}
                      fill
                      style={{ objectFit: "contain" }}
                      className="rounded transition-opacity duration-500 pointer-events-none select-none"
                      onContextMenu={(e) => e.preventDefault()}
                      draggable={false}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                  <p className="text-sm text-gray-500 mt-2">{product.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}