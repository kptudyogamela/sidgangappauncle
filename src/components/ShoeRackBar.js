"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function ShoeRackBar() {
  const [gradientPos, setGradientPos] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Animate gradient shimmer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setGradientPos((pos) => (pos + 1) % 360);
    }, 60);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Smart hide/reveal on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`sticky top-[52px] z-40 w-full text-white shadow-md transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
      style={{
        background: `linear-gradient(90deg,
          hsl(${(gradientPos + 0) % 360}, 80%, 50%) 0%,
          hsl(${(gradientPos + 25) % 360}, 85%, 55%) 50%,
          hsl(${(gradientPos + 60) % 360}, 90%, 50%) 100%)`,
        filter: "brightness(1.05)",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2 flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-2 sm:gap-4">
        {/* ✅ Main Text */}
        <span className="flex items-center justify-center gap-2 text-sm sm:text-lg font-semibold drop-shadow-md leading-tight">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 animate-pulse" />
          We Manufacture Shoe Racks & Mobile Stand!
        </span>

        {/* ✅ Hidden on very small screens, visible after sm */}
        <span className="hidden sm:inline text-sm sm:text-base drop-shadow-sm">
          Available in multiple <strong>sizes</strong> & <strong>colors</strong>{" "}
          — durable, elegant & space-saving.
        </span>

        {/* ✅ Mobile-friendly CTA */}
        <Link
          href="/purchase"
          className="relative mt-1 sm:mt-0 bg-white text-red-600 font-semibold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full shadow hover:bg-gray-100 transition text-xs sm:text-base"
        >
          Explore
          <span className="absolute inset-0 rounded-full bg-red-500/30 blur-md opacity-0 animate-pulse-glow pointer-events-none"></span>
        </Link>
      </div>

      {/* ✅ Glow animation */}
      <style jsx>{`
        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
