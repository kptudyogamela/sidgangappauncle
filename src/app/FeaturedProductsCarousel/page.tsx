'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const products = [
  { title: 'Washers', image: '/Images/products/newprod/1.png' },
  { title: 'Washers', image: '/Images/products/newprod/2.png' },
  { title: 'Tie Rods ', image: '/Images/products/newprod/3.png' },
  { title: 'Tie Rods ', image: '/Images/products/newprod/4.png' },
  { title: 'Tie Rods ', image: '/Images/products/newprod/5.png' },
  { title: 'Tie Rods ', image: '/Images/products/newprod/6.png' },
  { title: 'Tie Rods ', image: '/Images/products/newprod/7.png' },
  { title: 'Construction Bolts ', image: '/Images/products/newprod/8.png' },
  { title: 'Construction Bolts ', image: '/Images/products/newprod/9.png' },
  { title: 'Construction Bolts ', image: '/Images/products/newprod/10.png' },
  { title: 'Construction Bolts ', image: '/Images/products/newprod/11.png' },
  { title: 'Corner Piece', image: '/Images/products/newprod/12.png' },
  { title: 'Corner Piece ', image: '/Images/products/newprod/13.png' },
  { title: 'Corner Piece ', image: '/Images/products/newprod/14.png' },
  { title: 'Corner Piece ', image: '/Images/products/newprod/15.png' },
  { title: 'Corner Piece ', image: '/Images/products/newprod/16.png' },
  { title: 'Corner Piece ', image: '/Images/products/newprod/17.png' },
  { title: 'Corner Piece ', image: '/Images/products/newprod/18.png' },
  { title: 'Corner Piece ', image: '/Images/products/newprod/19.png' },
  { title: 'Nuts ', image: '/Images/products/newprod/20.png' },
  { title: 'Nuts ', image: '/Images/products/newprod/21.png' },
  { title: 'Plain Bolt ', image: '/Images/products/newprod/22.png' },
  { title: 'Plain Bolt ', image: '/Images/products/newprod/23.png' },
  { title: 'Plain Bolt ', image: '/Images/products/newprod/24.png' },
  { title: 'Pipes ', image: '/Images/products/newprod/25.png' },
  { title: 'Pipes ', image: '/Images/products/newprod/26.png' },
  { title: 'Pipes ', image: '/Images/products/newprod/27.png' },
  { title: 'Cross Member ', image: '/Images/products/newprod/28.png' },
  { title: 'Cross Member ', image: '/Images/products/newprod/29.png' },
  { title: 'Cross Member ', image: '/Images/products/newprod/30.png' },
  { title: 'Cross Member ', image: '/Images/products/newprod/31.png' },
  { title: 'Assembly Parts ', image: '/Images/products/newprod/32.png' },
  { title: 'Assembly Parts ', image: '/Images/products/newprod/33.png' },
  { title: 'Hexagon Headed Bolt ', image: '/Images/products/newprod/34.png' },
  { title: 'Hexagon Headed Bolt ', image: '/Images/products/newprod/35.png' },
  { title: 'Hexagon Headed Bolt ', image: '/Images/products/newprod/36.png' },
  { title: 'Tubular Pipes', image: '/Images/products/newprod/37.png' },
  { title: 'Tubular Pipes', image: '/Images/products/newprod/38.png' },
  { title: 'Hook Stand SPG', image: '/Images/products/newprod/39.png' },
  { title: 'Hook Stand SPG', image: '/Images/products/newprod/40.png' },
  { title: 'Collar ', image: '/Images/products/newprod/41.png' },
  { title: 'Collar ', image: '/Images/products/newprod/42.png' },
  { title: 'Collar ', image: '/Images/products/newprod/43.png' },
  { title: 'Tubular Part - Tractor Parts ', image: '/Images/products/newprod/44.png' },
  { title: 'Tubular Part - Tractor Parts ', image: '/Images/products/newprod/45.png' },
  { title: 'Tubular Part - Automotive Parts ', image: '/Images/products/newprod/46.png' },
  { title: 'Tubular Part - Automotive Parts ', image: '/Images/products/newprod/47.png' },
  { title: 'Tubular Part - Automotive Parts ', image: '/Images/products/newprod/48.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/49.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/50.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/51.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/52.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/53.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/54.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/55.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/56.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/57.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/58.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/59.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/60.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/61.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/62.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/63.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/64.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/65.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/66.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/67.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/68.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/69.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/70.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/71.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/72.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/73.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/74.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/75.png' },
  { title: 'Laser Cutting and CNC Bending Parts', image: '/Images/products/newprod/76.png' },
  { title: 'Corner Piece', image: '/Images/products/1.png' },
  { title: 'Anchor Bolts', image: '/Images/products/2.png' },
  { title: 'Construction images - bolts', image: '/Images/products/con2.png' },
  { title: 'Headed Bolts', image: '/Images/products/3.png' },
  { title: 'Tubular parts', image: '/Images/products/tub2.png' },
  { title: 'Turned Parts', image: '/Images/products/4.png' },
  { title: 'Construction images - bolts ', image: '/Images/products/con3.png' },
  { title: 'Tubular Parts', image: '/Images/products/5.png' },
  { title: 'Assembly Parts', image: '/Images/products/6.png' },
  { title: 'Tubular parts', image: '/Images/products/tub3.png' },
  { title: 'Bolt Cushions', image: '/Images/products/7.png' },
  { title: 'Turned Parts', image: '/Images/products/tur2.png' },
  { title: 'CNC Bending Parts', image: '/Images/products/8.png' },
  { title: 'Tie Rods', image: '/Images/products/9.png' },
  { title: 'Construction images - bolts', image: '/Images/products/con1.png' }, ,
  { title: 'Tubular parts', image: '/Images/products/tub1.png' },
  { title: 'Turned Parts', image: '/Images/products/tur1.png' },

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
            {products?.map((product, idx) => (
              product ? (
                <div
                  key={idx}
                  className="min-w-[250px] max-w-sm bg-gray-50 rounded-xl shadow hover:shadow-lg transition p-4 text-center"
                >
                  <div className="w-full aspect-[4/3] relative rounded-md overflow-hidden bg-white flex items-center justify-center">
                    <Image
                      src={product.image || "/placeholder.png"}
                      alt={product.title || "Product Image"}
                      fill
                      className="object-contain p-2" // Keep image cleanly visible and padded
                    />
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-700">{product.title || "Untitled Product"}</h3>
                </div>
              ) : null
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
