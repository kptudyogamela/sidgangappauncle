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
    title: "Hexagonal Head Profiled Bolt",
    description: "Hexagonal Head Profiled Bolt with a pointed tip, washer, and nut—used for easy alignment and secure fastening in structural or mechanical applications..",
    category: "Bolts",
    type: "Plain Bolt",
    images: [1, 2].map(i => `/Images/products/Bolts/${i}.png`)
  },
  {
    title: "Tie rods",
    description: "Tie rods in cable drums are high-strength steel rods used to hold the drum flanges together and support the central barrel. They maintain structural integrity during lifting, transport, and cable unwinding.",
    category: "Bolts",
    type: "Plain Bolt",
    images: [3, 4].map(i => `/Images/products/Bolts/${i}.png`)
  },


  {
    title: "Threaded Rod",
    description: "A cylindrical metal rod threaded along its entire length, used for fastening applications where adjustable length and high-strength joining are required. Common in construction, cable drums, machinery, and electrical assemblies.",
    category: "Bolts",
    type: "Construction Bolts",
    images: [5, 6, 7].map(i => `/Images/products/Bolts/${i}.png`)
  },
  {
    title: "Hexagonal headed Plain Bolts",
    description: "Standard bolts used for fastening in assemblies, Automobile industries and in construction buildings.",
    category: "Bolts",
    type: "Plain Bolt",
    images: [8, 9, 10].map(i => `/Images/products/Bolts/${i}.png`)
  },


  {
    title: "Hexagonal headed Plain Bolts",
    description: "Standard bolts used for fastening in assemblies, Automobile industries and in construction buildings.",
    category: "Bolts",
    type: "Plain Bolt",
    images: [11, 12, 13].map(i => `/Images/products/Bolts/${i}.png`)
  },
  {
    title: "Corner Bracket Piece",
    description: "Used for assembling metal frameworks,structural assemblies, frame construction, or machine supports. Mainly used in electrical enclosure body",
    category: "Corner",
    type: "Fabrication",
    images: [1, 2, 5, 6, 7, 8, 9, 10].map(i => `/Images/products/corner/${i}.png`)
  },

  {
    title: "Corner Bracket Piece",
    description: "Used for assembling metal frameworks,structural assemblies, frame construction, or machine supports. Mainly used in electrical enclosure body",
    category: "Services",
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
    title: "Laser cut and CNC Bending Part",
    description: "Parts used in Fabrication Industry.",
    category: "Services",
    type: "Corner Piece",
    images: [3, 4, 5, 6, 7, 8, 9, 10, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map(i => `/Images/products/Services/${i}.png`)
  }, {
    title: "Laser cut and CNC Bending Part",
    description: "Parts used in Fabrication Industry.",
    category: "Services",
    type: "Fabrication",
    images: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(i => `/Images/products/Services/${i}.png`)
  },
  {
    title: "Hook Stand SPG",
    description: " This is a rod which is parted, chamfered and turned, majorly used as automobile parts  .",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/1.png", "/Images/products/Automobile/12 (1).png", "/Images/products/Automobile/13 (1).png"]
  },
  {
    title: "Bush Insert",
    description: "A automobile part used in heavy vehicles.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/2.png", "/Images/products/Automobile/21.png"]
  },
  {
    title: "Rods",
    description: "Used in two wheeler .",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/47.png", "/Images/products/Automobile/48.png", "/Images/products/Automobile/49.png", "/Images/products/Automobile/50.png"]
  },
  {
    title: "Bolt RR Cushion",
    description: "Used in two wheeler .",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/5.png", "/Images/products/Automobile/18.png", "/Images/products/Automobile/19.png", "/Images/products/Automobile/20.png"]
  },
  {
    title: "Pipe RR Fork",
    description: "It includes both Tube, Rod and assembly operation.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/3.png", "/Images/products/Automobile/8.png", "/Images/products/Automobile/9.png"]
  },
  {
    title: "Pipe Pivot",
    description: "Provides protective covering for electrical cabinet enclosures.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/10.png", "/Images/products/Automobile/11.png", "/Images/products/Automobile/12.png"]
  },
  {
    title: "Tubular Parts",
    description: "Cutting, Chamfering, Secondary Operations and Plating on Tubes.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/13.png", "/Images/products/Automobile/14.png", "/Images/products/Automobile/15.png"]
  },
  {
    title: "Turned Parts",
    description: "Parting, Chamfering, Tapping, Threading, Step Operations, Milling, etc Operations on Rods.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/16.png", "/Images/products/Automobile/17.png"]
  },


  {
    title: "Tubular Parts - Tractor",
    description: "Tubular mechanical parts used in tractors and agricultural machinery.",
    category: "Tubular Parts",
    type: "Tubular Part - Tractor",
    images: [33, 34, 35].map(i => `/Images/products/Tubular/${i}.png`)
  },
  {
    title: "Bush Insert",
    description: "A automobile part used in heavy vehicles.",
    category: "Tubular Parts",
    type: "Fabrication",
    images: ["/Images/products/Automobile/2.png", "/Images/products/Automobile/21.png"]
  },
  {
    title: "Tubular Parts - Automotive",


    description: "Tubular mechanical parts used in automobile applications.",
    category: "Tubular Parts",
    type: "Tubular Part - Automotive",
    images: [3, 4, 5].map(i => `/Images/products/Tubular/${i}.png`)
  },
  {
    title: "Tubular Parts Cross Member",
    description: " Square Tube used in mechanical parts used in automotive applications.",
    category: "Tubular Parts",
    type: "Tubular Part - Automotive",
    images: [6, 7, 88, 99,].map(i => `/Images/products/Tubular/${i}.png`)
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
    images: [12, 17].map(i => `/Images/products/Tubular/${i}.png`)
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
    images: [41, 42, 13].map(i => `/Images/products/Tubular/${i}.png`)
  },


  {
    title: "Hexagonal Head Profile Bolts",
    description: "Components used in mechanical and industrial assemblies.",
    category: "Turned Parts",
    type: "Assembly Parts",
    images: [1, 2].map(i => `/Images/products/Turned/${i}.png`)
  },
  {
    title: "Tie Rods",
    description: "Tie rods in cable drums are high-strength steel rods used to hold the drum flanges together and support the central barrel. They maintain structural integrity during lifting, transport, and cable unwinding.",
    category: "Turned Parts",
    type: "Tie Rods",
    images: [3, 4, 5, 6, 7].map(i => `/Images/products/Turned/${i}.png`)
  },
  {
    title: "Construction Bolts",
    description: "Stand components used in scaffoldings or machinery fixtures.**",
    category: "Bolts",
    type: "Hook Stand SPG",
    images: [8, 9, 10, 11].map(i => `/Images/products/Turned/${i}.png`)
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
    description: "Two wheeler parts.",
    category: "Turned Parts",
    type: "Hook Stand SPG",
    images: [12, 13].map(i => `/Images/products/Turned/${i}.png`)
  },
  {
    title: "Collar",
    description: "Assembly parts, mainly a two wheeler components.",
    category: "Turned Parts",
    type: "Hook Stand SPG",
    images: [14, 15, 16].map(i => `/Images/products/Turned/${i}.png`)
  },
  {
    title: "Bush",
    description: "Bush.",
    category: "Turned Parts",
    type: "Hook Stand SPG",
    images: [17].map(i => `/Images/products/Turned/${i}.png`)
  },
  {
    title: "Hexagonal head Plain Bolts",
    description: "Standard bolts used for fastening in assemblies, Automobile industries and in construction buildings.",
    category: "Turned Parts",
    type: "Hook Stand SPG",
    images: [18, 19, 20].map(i => `/Images/products/Turned/${i}.png`)
  },
  {
    title: "Turned Parts",
    description: "Rods with process such as parting, Turning, chamfering, Threading, Tapping etc .",
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
