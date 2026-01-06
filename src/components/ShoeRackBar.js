"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import Link from "next/link";

/* Light / Dark background detection */
const isLightColor = (l = 55) => l > 60;

export default function ShoeRackBar() {
  const [gradientPos, setGradientPos] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  /* Gradient animation */
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setGradientPos((p) => (p + 1) % 360);
    }, 60);
    return () => clearInterval(id);
  }, [isPaused]);

  /* Hide on scroll */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsVisible(!(y > lastScrollY && y > 80));
      setLastScrollY(y);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  const lightBg = isLightColor();
  const textColor = lightBg ? "#1f2937" : "#ffffff";
  const ctaBg = lightBg ? "#ffffff" : "#111827";
  const ctaText = lightBg ? "#dc2626" : "#ffffff";

  return (
    <div
      className={`sticky top-[52px] z-40 w-full transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
      style={{
        background: `linear-gradient(90deg,
          hsl(${gradientPos},80%,50%) 0%,
          hsl(${(gradientPos + 25) % 360},85%,55%) 50%,
          hsl(${(gradientPos + 60) % 360},90%,50%) 100%)`,
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
        {/* Text */}
        <div
          className="flex items-center gap-2 text-center sm:text-left text-sm sm:text-base font-semibold leading-snug"
          style={{ color: textColor }}
        >
          <Sparkles
            className="w-4 h-4 flex-shrink-0 animate-pulse"
            style={{ color: lightBg ? "#f59e0b" : "#fde047" }}
          />
          <span>
            Manufacturer of Precision Automotive Components – Tubular & Turned
            Parts, Laser Cutting, Fabrication, Electrical Enclosure Corner
            Joints, Chemical and Plain Bolts
          </span>
        </div>

        {/* CTA */}
        <Link
          href="/products"
          className="mt-1 sm:mt-0 font-semibold px-4 py-1.5 rounded-full shadow text-xs sm:text-sm whitespace-nowrap"
          style={{
            backgroundColor: ctaText,
            color: ctaBg,
          }}
        >
          Explore
        </Link>
      </div>
    </div>
  );
}
