'use client';

import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { galleryItems } from './galleryData';
import Image from 'next/image';

export default function GalleryPage() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            MAC Factory & Process Gallery
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            A glimpse into the infrastructure, production, and people that power
            Maruthi Auto Components.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap -m-4">
          {galleryItems.map((item, idx) => (
            <div key={idx} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div
                className="group relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
                onClick={() => setModalImage(item.image ?? null)}
              >
                <Image
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  src={item.image}
                  fill
                  loading="lazy"
                />
                <div className="px-4 py-6 sm:px-8 sm:py-10 relative z-10 w-full bg-white/90 backdrop-blur border-4 border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-600 mb-1">
                    {item.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {item.title}
                  </h1>
                  <p className="leading-relaxed text-xs sm:text-sm">{item.description}</p>
                </div>
              </div>
            </div>


          ))}
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center animate-fadeIn">
          <button
            onClick={() => setModalImage(null)}
            className="absolute top-6 right-6 text-white text-4xl hover:text-red-400 transition"
            aria-label="Close"
          >
            <IoClose />
          </button>
          <div className="relative w-[90vw] h-[90vh] max-w-5xl max-h-[90%]">
            <Image
              src={modalImage}
              alt="Full View"
              fill
              className="rounded-lg shadow-lg object-contain animate-zoomIn"
              unoptimized // optional: only if images are hosted outside your domain or dynamic
            />
          </div>
        </div>
      )}

    </section>
  );
}
