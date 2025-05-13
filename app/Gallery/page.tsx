'use client';

import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function GalleryPage() {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const galleryItems = [
    {
      title: "Raw Material Storage Area",
      subtitle: "RM Storage Rack",
      description: "Receiving Inspection is done in the area.",
      image: "Images/gal/1.JPG",
    },
    {
      title: "SPM Cutting Area",
      subtitle: "Cross Member",
      description: "Tube cross cutting SPM Cutting machine.",
      image: "Images/gal/2.JPG",
    },
    {
      title: "Office",
      subtitle: "CEO Desk",
      description: "Perfectly maintained Files in Rack System.",
      image: "Images/gal/3.JPG",
    },
    {
      title: "Shop Floor",
      subtitle: "Unit-1",
      description: "Traub Machines, Soco Cutting Machines, Soco Chamfering Machine, WIP Area and Inspection area viewed from Office .",
      image: "Images/gal/4.JPG",
    },
    {
      title: "Soco Cutting Machine",
      subtitle: "Rod and Tube Cuting SPM machine",
      description: "Operator operating SOCO cutting machine.",
      image: "Images/gal/5.JPG",
    },
    {
      title: "In-Process inspection",
      subtitle: "Team quality Check",
      description: "Team with Quality head and CEO checking for the quality of the produced products conducting In-Process Inspection.",
      image: "Images/gal/6.JPG",
    },
    {
      title: "Team",
      subtitle: "Group",
      description: "MAC team.",
      image: "Images/gal/7.JPG",
    },
    {
      title: "Training",
      subtitle: "Employee Training",
      description: "Every 6 months employee training is conducted.",
      image: "Images/gal/8.JPG",
    },
    {
      title: "Quality Check",
      subtitle: "Dimension",
      description: "Dimensions of the product is checked with reference to the customer drawings.",
      image: "Images/gal/9.JPG",
    },
    {
      title: "Shop Floor",
      subtitle: "Unit-1",
      description: "WIP, Traub Machines, SOCO cutting Machine, SOCO Chamfering machine.",
      image: "Images/gal/10.JPG",
    },
    {
      title: "SOCO Chamfering Machine",
      subtitle: "Chamfetring Application",
      description: "Operator placing chamfering parts.",
      image: "Images/gal/11.JPG",
    },
    {
      title: "Storage Bins",
      subtitle: "Bins",
      description: "Perfectly organised storage bins.",
      image: "Images/gal/12.JPG",
    },
    {
      title: "New Team",
      subtitle: "Team at 2025",
      description: "Team at 2025.",
      image: "Images/gal/13.JPG",
    },
    {
      title: "Loading and Unloading area",
      subtitle: "View from Unit-2 ",
      description: "Raw material storage area, Loading Unloading Area, Bin Storage area.",
      image: "Images/gal/14.JPG",
    },
    {
      title: "Unit-1",
      subtitle: "Shop Floor",
      description: "Well organized Unit1, a look from entrance.",
      image: "Images/gal/15.JPG",
    },
    {
      title: "Delete",
      subtitle: "",
    },
    {
      title: "Delete",
    },
    {
      title: "Shop Floor",
      subtitle: "Unit 1",
      description: ".",
      image: "Images/gal/18.JPG",
    },
    {
      title: "Team",
      subtitle: "Team with Customer",
      description: ".",
      image: "Images/gal/19.JPG",
    },
    {
      title: "Storage Bins",
      subtitle: "Bins",
      description: "Storage bins organised based on the sizes and colour.",
      image: "Images/gal/20.JPG",
    },
    {
      title: "Team",
      subtitle: "Snack time",
      description: "Team at snack area.",
      image: "Images/gal/21.JPG",
    },
    {
      title: "Heavy Duty Support",
      subtitle: "Corner Brackets",
      description: "Corner brackets that deliver high-load support for metal frames.",
      image: "Images/gal/22.JPG",
    },
    {
      title: "Celebration",
      subtitle: "team celebration",
      description: "Teams spirit.",
      image: "Images/gal/23.JPG",
    },
    {
      title: "Welding and Final Inspection Area",
      subtitle: "Unit-2",
      description: "Final Inspection and Welding Area of Corner Piece.",
      image: "Images/gal/24.JPG",
    },
    {
      title: "Unit-2",
      subtitle: "Unit-2 Shop Floor",
      description: "Inspection Area and Welding Area.",
      image: "Images/gal/25.JPG",
    },
    {
      title: "Unit-2",
      subtitle: "Unit-2 Shop Floor",
      description: "Team in production of Corner Piece.",
      image: "Images/gal/26.JPG",
    },
    {
      title: "In-Process Inspection Process ",
      subtitle: "Final Goods",
      description: "WIP .",
      image: "Images/gal/27.JPG",
    },
    {
      title: "In-Process",
      subtitle: "WIP",
      description: "Work in process.",
      image: "Images/gal/28.JPG",
    },


    {
      title: "Thread Rolling Machine",
      subtitle: "Threading",
      description: "Threading done for Bolts.",
      image: "Images/gal/31.jpg",
    },
    {
      title: "Corner Piece Production",
      subtitle: "Unit-2",
      description: "Lean Concept implemented for Corner Piece Production.",
      image: "Images/gal/32.jpg",
    },
    {
      title: "Unit-1",
      subtitle: "WIP",
      description: "Shop Floor.",
      image: "Images/gal/33.jpg",
    },
    {
      title: "Laser-Cutting Machine",
      subtitle: "Firest Piece",
      description: "Sir holding the first in the sample production of the Laser Cutting Machine.",
      image: "Images/gal/34.jpg",
    },
    {
      title: "Inauguration",
      subtitle: "Laser-Cutting Machine",
      description: "Inauguration with Pooja for Laser Cutting machine.",
      image: "Images/gal/35.jpg",
    },
    {
      title: "Delete",
      subtitle: "Parts Management",
      description: "Barcode-based inventory system streamlining the workflow.",
      image: "Images/gal/36.jpg",
    },
    {
      title: "Delete",
      subtitle: "Production Line",
      description: "Continuous assembly belts for high-volume component fitting.",
      image: "Images/gal/37.jpg",
    },
    {
      title: " Delete",
      subtitle: "Part Identification",
      description: "Laser marking for permanent and readable component IDs.",
      image: "Images/gal/38.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/39.jpg",
    },
    {
      title: "",
      subtitle: "",
      description: ".",
      image: "Images/gal/40.png",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/41.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/42.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/43.JPG",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/44.JPG",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/45.JPG",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/46.JPG",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/47.JPG",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/48.JPG",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/49.JPG",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/50.JPG",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/51.JPG",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/52.JPG",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/53.JPG",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/54.JPG",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/55.JPG",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/56.JPG",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/57.JPG",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/58.JPG",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/59.JPG",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/60.JPG",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/61.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/62.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/63.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/64.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/65.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/66.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/67.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/68.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/69.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/70.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/71.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/72.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/73.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/74.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/75.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/76.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/77.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/78.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/79.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/80.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/81.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/82.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/83.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/84.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/85.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/86.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/87.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/88.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/89.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/90.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/91.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/92.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/93.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/94.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/95.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/96.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/97.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/98.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/99.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/100.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/101.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/102.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/103.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/104.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/105.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/106.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/107.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/108.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/109.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/110.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/111.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/112.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/113.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/114.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/115.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/116.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/117.jpg",
    },
    {
      title: "New Image",
      subtitle: "New Team",
      description: "Precision thread cutting for secure nut and bolt fitting.",
      image: "Images/gal/118.jpg",
    },


  ];



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
            <div key={idx} className="lg:w-1/3 sm:w-1/2 p-4">


              <div
                className="group relative h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
                onClick={() => setModalImage(item.image)}
              >
                <img
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  src={item.image}
                />
                <div className="px-8 py-10 relative z-10 w-full bg-white/90 backdrop-blur border-4 border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-600 mb-1">
                    {item.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {item.title}
                  </h1>
                  <p className="leading-relaxed">{item.description}</p>
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
          <img
            src={modalImage}
            alt="Full View"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg animate-zoomIn"
          />
        </div>
      )}

    </section>
  );
}
