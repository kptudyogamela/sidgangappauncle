"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

type StepSize = "2-Step" | "3-Step" | "4-Step" | "5-Step" | "4-Step-Double-Lock" | "5-Step-Double-Lock";

const PurchasePage = () => {
  const router = useRouter();

  const priceList: Record<StepSize, number> = {
    "2-Step": 3200,
    "3-Step": 3700,
    "4-Step": 4700,
    "5-Step": 5700,
    "4-Step-Double-Lock": 5000,
    "5-Step-Double-Lock": 6000,
  };

  const pairInfo: Record<
    StepSize,
    {
      pairs: number;
      dimensions: string[];
    }
  > = {
    "2-Step": {
      pairs: 6,
      dimensions: [
        `27.5" × 27" × 5.5"`,
        `27.5" × 19" × 5.5"`,
      ],
    },

    "3-Step": {
      pairs: 9,
      dimensions: [
        `40.5" × 27" × 5.5"`,
        `40.5" × 19" × 5.5"`,
      ],
    },

    "4-Step": {
      pairs: 12,
      dimensions: [
        `53.5" × 27" × 5.5"`,
        `53.5" × 19" × 5.5"`,
      ],
    },

    "4-Step-Double-Lock": {
      pairs: 12,
      dimensions: [`56" × 27" × 5.5"`],
    },

    "5-Step": {
      pairs: 15,
      dimensions: [
        `66.5" × 27" × 5.5"`,
        `66.5" × 19" × 5.5"`,
      ],
    },

    "5-Step-Double-Lock": {
      pairs: 15,
      dimensions: [`68" × 27" × 5.5"`],
    },
  };




  const product = {
    name: "MAC Powder-Coated Metal Shoe Rack",
    category: "Home Utility",
    rating: 4.8,
    colors: ["Gray", "Ivory", "Coffee-Brown", "Ivory-Gray"],
    sizes: Object.keys(priceList) as StepSize[],
    images: [
      "/Images/products/shoerack/91.jpeg",
      "/Images/products/shoerack/92.jpeg",
      "/Images/products/shoerack/93.jpeg",
      "/Images/products/shoerack/94.jpeg",
      "/Images/products/shoerack/95.jpeg",
      "/Images/products/shoerack/96.jpeg",
      "/Images/products/shoerack/14.jpg",
      "/Images/products/shoerack/16.jpg",
      "/Images/products/shoerack/17.jpg",
      // "/Images/products/shoerack/20.jpg",
      // "/Images/products/shoerack/22.jpg",
      // "/Images/products/shoerack/24.jpg",
      // "/Images/products/shoerack/8.png",
      // "/Images/products/shoerack/7.png",
      // "/Images/products/shoerack/10.png",
      "/Images/products/shoerack/3.png",
      "/Images/products/shoerack/9.png",
      "/Images/products/shoerack/6.png",
      "/Images/products/shoerack/12.png",
      "/Images/products/shoerack/4.png",
      // "/Images/products/shoerack/1.mp4"
    ],
    description: [
      "Durable powder-coated steel body for long life",
      "Tilt-out and lock-in mechanism for easy access",
      "Ventilation holes to prevent odor build-up",
      "Compact and space-saving design ideal for apartments",
      "Wall-mountable or free-standing installation options",
      "Waterproof and moisture-resistant finish",
      "Transportation and installation is extra charged",
    ],
  };

  const [thumbnail, setThumbnail] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<StepSize>(product.sizes[0]);

  const finalPrice = priceList[selectedSize]; // ✅ Type-safe now!

  const handleBuyNow = () => {
    router.push(
      `/checkout?product=${encodeURIComponent(
        product.name
      )}&price=${finalPrice}&color=${encodeURIComponent(
        selectedColor
      )}&size=${encodeURIComponent(selectedSize)}`
    );
  };

  const handleCall = () => {
    window.location.href = "tel:+9190082343224";
  };
  return (
    <div className="max-w-6xl mx-auto w-full px-4 py-6 text-[14px] leading-snug">
      {/* Breadcrumb */}
      <p className="text-gray-600 text-xs">
        <span>Home</span> / <span>Products</span> /{" "}
        <span>{product.category}</span> /{" "}
        <span className="text-red-500 font-medium">{product.name}</span>
      </p>

      <div className="flex flex-col md:flex-row gap-6 mt-4">
        {/* Image Section */}
        <div className="flex flex-col sm:flex-row gap-2">
          {/* Thumbnails */}
          <div className="flex sm:flex-col gap-2 overflow-auto max-h-[450px]">
            {product.images.map((img, index) => (
              <div
                key={index}
                onClick={() => setThumbnail(img)}
                className={`border rounded-md overflow-hidden cursor-pointer transition 
                ${thumbnail === img ? "border-red-500" : "border-gray-300"}`}
              >
                <img
                  src={img}
                  alt={`Rack view ${index + 1}`}
                  className="w-20 h-16 object-contain bg-white hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="border border-gray-300 rounded-md overflow-hidden flex justify-center items-center bg-gray-50 p-2">
            <img
              src={thumbnail}
              alt="Selected Metal Shoe Rack"
              className="w-full max-w-[400px] h-auto object-cover"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 md:ml-17">
          <h1 className="text-xl font-semibold text-gray-800 leading-tight">
            {product.name}
          </h1>

          {/* Ratings */}
          <div className="flex items-center gap-1 mt-1">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <svg
                  key={i}
                  width="16"
                  height="15"
                  viewBox="0 0 18 17"
                  fill={i < Math.round(product.rating) ? "#facc15" : "#d1d5db"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z" />
                </svg>
              ))}
            <p className="text-xs text-gray-600 ml-1">
              ({product.rating} / 5)
            </p>
          </div>

          {/* Price */}
          <div className="mt-3">
            <p className="text-2xl font-semibold text-red-600">₹{finalPrice}</p>
            <p className="text-gray-500 text-xs">
              (Transportation and installation Charges are not included)
            </p>
          </div>

          {/* Color Options */}
          <div className="mt-4">
            <p className="font-medium mb-1 text-sm">Select Color:</p>
            <div className="flex gap-2 flex-wrap">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`border px-5 mr-3 py-1.5 rounded-md text-xs ${selectedColor === color
                    ? "border-red-600 bg-red-50 text-red-600"
                    : "border-gray-300 hover:bg-gray-100"
                    }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size Options */}
          <div className="mt-4">
            <p className="font-medium mb-1 text-sm">Number of Steps (Tiers):</p>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border mr-3 px-5 py-1.5 rounded-md text-xs ${selectedSize === size
                    ? "border-red-600 bg-red-50 text-red-600"
                    : "border-gray-300 hover:bg-gray-100"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="mt-3 rounded-md border border-gray-200 bg-gray-50 p-3 text-sm">
              {/* Pairs */}
              <p className="text-gray-800 font-medium">
                Holds{" "}
                <span className="text-red-600 font-semibold">
                  {pairInfo[selectedSize].pairs}
                </span>{" "}
                pairs of shoes
              </p>

              {/* Dimensions */}
              <p className="mt-2 text-gray-700 font-medium">Dimensions:</p>
              <ul className="mt-1 space-y-0.5">
                {pairInfo[selectedSize].dimensions.map((dim, index) => (
                  <li
                    key={index}
                    className="text-blue-700 font-medium"
                  >
                    • {dim}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Description */}
          <div className="mt-5">
            <p className="text-base font-medium mb-1">Key Features</p>
            <ul className="list-disc ml-4 text-gray-600 text-s space-y-0.5">
              {product.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={handleCall}
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md text-sm"
            >
              📞 Call for Enquiry
            </button>
            <button
              onClick={handleBuyNow}
              className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md text-sm"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Product Video */}
      <div className="mt-10 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Product Demo Video
        </h2>

        <video
          className="w-full md:w-[600px] h-52 md:h-[320px] mx-auto rounded-md shadow-sm"
          src="/Images/products/shoerack/1.mp4"
          controls
          muted
          autoPlay
          loop
          playsInline
        />
      </div>

    </div>
  );
};

export default PurchasePage;
