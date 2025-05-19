'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const products = [
  { title: 'Tie Rods', image: '/Images/products/newprod/7.png' },
  { title: 'Corner Piece', image: '/Images/products/newprod/79.png' },
  { title: 'Tubular Part - Automotive Parts', image: '/Images/products/newprod/46.png' },
  { title: 'Construction Bolts', image: '/Images/products/newprod/8.png' },
  { title: 'Plain Bolt', image: '/Images/products/newprod/23.png' },
  { title: 'Hexagon Headed Bolt', image: '/Images/products/newprod/36.png' },
  { title: 'Pipes', image: '/Images/products/newprod/26.png' },
  { title: 'Cross Member', image: '/Images/products/newprod/28.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/71.png' },
  { title: 'Assembly Parts', image: '/Images/products/newprod/32.png' },
  { title: 'Hexagon Headed Bolt', image: '/Images/products/newprod/34.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/55.png' },
  { title: 'Hexagon Headed Bolt', image: '/Images/products/newprod/35.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/68.png' },
  { title: 'Hook Stand SPG', image: '/Images/products/newprod/39.png' },
  { title: 'Collar', image: '/Images/products/newprod/43.png' },
  { title: 'Assembly Parts', image: '/Images/products/newprod/33.png' },
  { title: 'Tubular Part - Tractor Parts', image: '/Images/products/newprod/44.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/56.png' },
  { title: 'Corner Piece', image: '/Images/products/newprod/78.png' }
];

export default function FeaturedProductsCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 1000, stopOnInteraction: false })]
  );

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="sm:text-3xl text-2xl font-bold text-gray-900 mb-4">Featured Products</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            A glimpse into our core offerings — trusted, tested, and tailored to meet the evolving needs of top-tier 1 & 2 manufacturers.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="min-w-[250px] max-w-sm bg-gray-50 rounded-xl shadow hover:shadow-lg transition p-4 text-center"
              >
                <div className="w-full aspect-[4/3] relative rounded-md overflow-hidden bg-white flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <h3 className="mt-4 font-semibold text-gray-700">{product.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
