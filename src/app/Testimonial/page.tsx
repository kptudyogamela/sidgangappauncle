'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import CustomVideoPlayer from './CustomVideoPlayer';

const testimonialsData = [
  {
    name: "Vinod Raheja",
    role: "Vice President, Nahars Engineering",
    message:
      "In *Maruthi Auto Components* all team members always work as a family & produce all products 100% Defect Free. Ensure In-Time Supply Chain to all their customers. Keep It Up !!!.",
    image: "/Images/testimonials/5.jpg",
  },
  {
    name: "VENU",
    role: "Assistant Manager, Indo Auto Tech Ltd",
    message:
      "We’ve been working with MAC for over 13 years now. Their commitment to zero-defect delivery and on-time production is unmatched.",
    image: "/Images/testimonials/6.png",
  },
  {
    name: "ANAND",
    role: "Director, Sourcing and Procurement, Rittal India Ltd",
    message:
      "We are pleased to present Maruthi Auto Components with a Certificate of Appreciation for their consistent quality, reliability, and professional service.",
    image: "/Images/testimonials/2.jpg",
  },
  {
    name: "GIRISH",
    role: "General Manager, Quality, Rittal India Ltd",
    message: "We’ve been working with MAC for over 06 years now.",
    image: "/Images/testimonials/3.jpg",
  },
  {
    name: "MAHESHA",
    role: "Deputy General Manager, Metal Man, Hosur",
    message:
      "From foundation bolts to custom assemblies, MAC has always delivered high-precision components that meet specifications.",
    image: "/Images/testimonials/4.jpg",
  },
  {
    name: "Kumar MD",
    role: "General Manager, Operations, Balmer Lawrie Van Leer Ltd",
    message:
      "I sincerely appreciate Maruthi Auto Components' commitment to lean manufacturing. It's clearly driving greater efficiency, improving quality, and reducing waste—positioning the company as a leader in process optimization. Truly commendable!",
    image: "/Images/testimonials/10.jpg",
  },
  {
    name: "Vishweshwara Prasad",
    role: "General Manager, JHY Industries.",
    message:
      "Maruthi Auto Components' lean manufacturing approach is fostering significant efficiency improvements and positioning the company as an industry leader in process optimization.",
    image: "/Images/testimonials/9.jpg",
  },

  {
    name: "Prashanth Nadiger",
    role: "Executive Director, Modutec Ready Panels Pvt. Ltd.",
    message:
      "Good manufacturing facility prioritizes precision and excellence, driven by a customer-centric team dedicated to delivering exceptional products and services.",
    image: "/Images/testimonials/modu.png",
  },

  {
    name: "Vinod Raheja",
    role: "Vice President, Nahars Engineering",
    message:
      "In *Maruthi Auto Components* all team members always work as a family & produce all products 100% Defect Free. Ensure In-Time Supply Chain to all their customers. Keep It Up !!!.",
    image: "/Images/testimonials/5.jpg",
  },
  {
    name: "VENU",
    role: "Assistant Manager, Indo Auto Tech Ltd",
    message:
      "We’ve been working with MAC for over 13 years now. Their commitment to zero-defect delivery and on-time production is unmatched.",
    image: "/Images/testimonials/6.png",
  },
  {
    name: "ANAND",
    role: "Director, Sourcing and Procurement, Rittal India Ltd",
    message:
      "We are pleased to present Maruthi Auto Components with a Certificate of Appreciation for their consistent quality, reliability, and professional service.",
    image: "/Images/testimonials/2.jpg",
  },
  {
    name: "GIRISH",
    role: "General Manager, Quality, Rittal India Ltd",
    message: "Overall good performance handling of complicated products.",
    image: "/Images/testimonials/3.jpg",
  },
  {
    name: "MAHESHA",
    role: "Deputy General Manager, Metal Man, Hosur",
    message:
      "From foundation bolts to custom assemblies, MAC has always delivered high-precision components that meet specifications.",
    image: "/Images/testimonials/4.jpg",
  },
  {
    name: "Kumar MD",
    role: "General Manager, Operations, Balmer Lawrie Van Leer Ltd",
    message:
      "I sincerely appreciate Maruthi Auto Components' commitment to lean manufacturing. It's clearly driving greater efficiency, improving quality, and reducing waste—positioning the company as a leader in process optimization. Truly commendable!",
    image: "/Images/testimonials/10.jpg",
  },
  {
    name: "Vishweshwara Prasad",
    role: "General Manager, JHY Industries.",
    message:
      "Maruthi Auto Components' lean manufacturing approach is fostering significant efficiency improvements and positioning the company as an industry leader in process optimization.",
    image: "/Images/testimonials/9.jpg",
  },
  {
    name: "Prashanth Nadiger",
    role: "Executive Director, Modutec Ready Panels Pvt. Ltd.",
    message:
      "Good manufacturing facility prioritizes precision and excellence, driven by a customer-centric team dedicated to delivering exceptional products and services.",
    image: "/Images/testimonials/modu.png",
  },
];

const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  return (
    <section className="text-gray-600 body-font bg-gray-50">
      <div className="container px-4 md:px-6 py-10 mx-auto">
        <div className="text-center mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Testimonials
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Hear directly from our clients and partners about their experience with MAC — from our
            precision-driven processes to our commitment to quality, reliability, and long-term collaboration.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>

        {/* Video container */}
        <div className="w-full mb-10">
          <CustomVideoPlayer
            src="/Images/videos/1.mp4"
            title="Foreign Delegate Testimonial"
          />
          <p className="text-sm text-gray-600 mt-4 text-center">
            {/* Video testimonial from our international partner. */}
          </p>
        </div>

        {/* Carousel below the video */}
        <div
          className="overflow-hidden -mt-20"  // negative margin-top to overlap on video
          ref={emblaRef}
        >
          <div className="flex gap-6 pr-6">
            {testimonialsData.map((item, index) => (
              <div
                key={index}
                className="min-w-[90%] sm:min-w-[70%] md:min-w-[50%] lg:min-w-[33.33%] xl:min-w-[33.33%] bg-white shadow-md rounded-lg p-6"
              >
                <div className="text-center">
                  <Image
                    alt={item.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 mb-4 object-cover rounded-full border-2 border-gray-200 mx-auto"
                    src={item.image}
                  />
                  <p className="text-sm text-gray-700">{item.message}</p>
                  <span className="inline-block h-1 w-10 rounded bg-red-500 mt-4 mb-2" />
                  <h2 className="text-gray-900 font-semibold text-sm">{item.name}</h2>
                  <p className="text-gray-500 text-xs">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
};

export default Testimonials;
