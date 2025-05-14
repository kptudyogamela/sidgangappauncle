'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Product {
  title: string;
  description: string;
  category: string;
  type: string;
  images: string[];
}

const groupedProducts: Product[] = [
  {
    title: "Plain Bolts",
    description: "Standard bolts used for fastening in assemblies, Automobile industries and in construction buildings.",
    category: "Bolts",
    type: "Plain Bolt",
    images: [1, 2].map(i => `/Images/products/Bolts/${i}.png`)
  },
  {
    title: "Plain Bolts",
    description: "Standard bolts used for fastening in assemblies, Automobile industries and in construction buildings.",
    category: "Bolts",
    type: "Plain Bolt",
    images: [3, 4].map(i => `/Images/products/Bolts/${i}.png`)
  },

  {
    title: "Construction Bolts",
    description: "Bolts used in heavy construction projects to hold components together securely and helps in strength of the buildings.",
    category: "Bolts",
    type: "Construction Bolts",
    images: [5, 6, 7].map(i => `/Images/products/Bolts/${i}.png`)
  },
  {
    title: "Plain Bolts",
    description: "Standard bolts used for fastening in assemblies, Automobile industries and in construction buildings.",
    category: "Bolts",
    type: "Plain Bolt",
    images: [8, 9, 10].map(i => `/Images/products/Bolts/${i}.png`)
  },

  {
    title: "Plain Bolts",
    description: "Standard bolts used for fastening in assemblies, Automobile industries and in construction buildings.",
    category: "Bolts",
    type: "Plain Bolt",
    images: [11, 12, 13].map(i => `/Images/products/Bolts/${i}.png`)
  },
  {
    title: "Corner Bracket Piece",
    description: "Used for assembling metal frameworks; provides angular support in structural and fabrication works.",
    category: "Corner",
    type: "Fabrication",
    images: [1, 2, 5, 6, 7, 8, 9, 10].map(i => `/Images/products/corner/${i}.png`)
  },

  {
    title: "Washers",
    description: "Flat washers used in mechanical assemblies to distribute load and reduce wear.",
    category: "Services",
    type: "Washer",
    images: [1, 2].map(i => `/Images/products/Services/${i}.png`)
  },
  {
    title: "Corner Bracket Piece",
    description: "Used for assembling metal frameworks, in electrical enclosure bodies it provides angular support in structural and fabrication works.",
    category: "Services",
    type: "Corner Piece",
    images: [3, 4, 5, 6, 7, 8, 9, 10, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map(i => `/Images/products/Services/${i}.png`)
  }, {
    title: "Corner Bracket Piece",
    description: "Used for assembling metal frameworks, in electrical enclosure bodies it provides angular support in structural and fabrication works.",
    category: "Services",
    type: "Fabrication",
    images: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(i => `/Images/products/Services/${i}.png`)
  },
  {
    title: "Wall Mounting Bracket",
    description: "Supports enclosure mounting on vertical surfaces in electrical and mechanical assemblies.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/1.png", "/Images/products/Automobile/2.png"]
  },
  {
    title: "Support Frame",
    description: "Used in equipment housing to provide rigid structural support.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/3.png", "/Images/products/Automobile/4.png"]
  },
  {
    title: "Angle Connector",
    description: "Provides angular support and joint reinforcement in sheet metal assemblies.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/5.png", "/Images/products/Automobile/6.png"]
  },
  {
    title: "Mounting Plate",
    description: "Used to mount components securely inside electrical enclosures.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/7.png", "/Images/products/Automobile/8.png", "/Images/products/Automobile/9.png"]
  },
  {
    title: "Enclosure Cover",
    description: "Provides protective covering for electrical cabinet enclosures.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/10.png", "/Images/products/Automobile/11.png", "/Images/products/Automobile/12.png"]
  },
  {
    title: "Cable Entry Frame",
    description: "Frame for guiding and securing cables into electrical panels or cabinets.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/13.png", "/Images/products/Automobile/14.png", "/Images/products/Automobile/15.png"]
  },
  {
    title: "Support Foot",
    description: "Base component used to support or elevate structures.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/16.png", "/Images/products/Automobile/17.png"]
  },

  {
    title: "Tubular Parts - Tractor",
    description: "Tubular mechanical parts used in tractors and agricultural machinery.",
    category: "Tubular Parts",
    type: "Tubular Part - Tractor",
    images: [1, 2].map(i => `/Images/products/Tubular/${i}.png`)
  },
  {
    title: "Tubular Parts - Automotive",
    description: "Tubular mechanical parts used in automotive applications.",
    category: "Tubular Parts",
    type: "Tubular Part - Automotive",
    images: [3, 4, 5].map(i => `/Images/products/Tubular/${i}.png`)
  },
  {
    title: "Tubular Parts - Automotive",
    description: "Tubular mechanical parts used in automotive applications.",
    category: "Tubular Parts",
    type: "Tubular Part - Automotive",
    images: [6, 7, 8, 9,].map(i => `/Images/products/Tubular/${i}.png`)
  },
  {
    title: "Tubular Pipes",
    description: "Cylindrical pipes used in mechanical frameworks and systems.",
    category: "Tubular Parts",
    type: "Tubular Pipes",
    images: [10, 11].map(i => `/Images/products/Tubular/${i}.png`)
  },
  {
    title: "Tubular Pipes",
    description: "Cylindrical pipes used in mechanical frameworks and systems.",
    category: "Tubular Parts",
    type: "Tubular Pipes",
    images: [12, 13].map(i => `/Images/products/Tubular/${i}.png`)
  },
  {
    title: "Tubular Pipes",
    description: "Cylindrical pipes used in mechanical frameworks and systems.",
    category: "Tubular Parts",
    type: "Tubular Pipes",
    images: [14, 15, 16].map(i => `/Images/products/Tubular/${i}.png`)
  },
  {
    title: "Tubular Pipes",
    description: "Cylindrical pipes used in mechanical frameworks and systems.",
    category: "Tubular Parts",
    type: "Tubular Pipes",
    images: [12, 13].map(i => `/Images/products/Tubular/${i}.png`)
  },

  {
    title: "Assembly Parts",
    description: "Components used in mechanical and industrial assemblies.",
    category: "Turned Parts",
    type: "Assembly Parts",
    images: [1, 2].map(i => `/Images/products/Turned/${i}.png`)
  },
  {
    title: "Tie Rods",
    description: "Structural rods used in Cable drums to support tension.",
    category: "Turned Parts",
    type: "Tie Rods",
    images: [3, 4, 5, 6, 7].map(i => `/Images/products/Turned/${i}.png`)
  },
  {
    title: "Hook Stand SPG",
    description: "Stand components used in scaffoldings or machinery fixtures.",
    category: "Turned Parts",
    type: "Hook Stand SPG",
    images: [8, 9, 10, 11].map(i => `/Images/products/Turned/${i}.png`)
  },
  {
    title: "Hook Stand SPG",
    description: "Stand components used in scaffoldings or machinery fixtures.",
    category: "Turned Parts",
    type: "Hook Stand SPG",
    images: [12, 13].map(i => `/Images/products/Turned/${i}.png`)
  },
  {
    title: "Hook Stand SPG",
    description: "Stand components used in scaffoldings or machinery fixtures.",
    category: "Turned Parts",
    type: "Hook Stand SPG",
    images: [14, 15, 16].map(i => `/Images/products/Turned/${i}.png`)
  },
  {
    title: "Hook Stand SPG",
    description: "Stand components used in scaffoldings or machinery fixtures.",
    category: "Turned Parts",
    type: "Hook Stand SPG",
    images: [17].map(i => `/Images/products/Turned/${i}.png`)
  },
  {
    title: "Hook Stand SPG",
    description: "Stand components used in scaffoldings or machinery fixtures.",
    category: "Turned Parts",
    type: "Hook Stand SPG",
    images: [18, 19, 20].map(i => `/Images/products/Turned/${i}.png`)
  },
  {
    title: "Hook Stand SPG",
    description: "Stand components used in scaffoldings or machinery fixtures.",
    category: "Turned Parts",
    type: "Hook Stand SPG",
    images: [21, 22].map(i => `/Images/products/Turned/${i}.png`)
  },
];

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
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={currentImage}
                      alt={product.title}
                      fill
                      style={{ objectFit: "contain" }}
                      className="rounded transition-opacity duration-500"
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
