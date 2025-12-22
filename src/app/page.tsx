
import Certification from "./Certification/Page";
import FeaturedProductsCarousel from "./FeaturedProductsCarousel/page";
import HeroSection from "./Herosection/page";
import Stats from "./Stats/page";
import Testimonials from "./Testimonial/page";
import TrustedByCarousel from "./Trustedby/page";
import VideoSection from "./VideoSection/page";

export default function Home() {
  return (
    <div >
      <VideoSection />
      <HeroSection />
      <Stats />
      <FeaturedProductsCarousel />
      <TrustedByCarousel />
      <Certification />
      <Testimonials />
    </div>
  );
}
