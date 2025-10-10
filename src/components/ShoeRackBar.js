"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import Link from "next/link"; // ✅ import Link

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
      className={`sticky top-[50px] z-40 w-full text-white shadow-md transition-all duration-500 ease-in-out ${
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <span className="flex items-center gap-2 text-lg sm:text-xl font-semibold drop-shadow-md">
          <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" /> Now
          Manufacturing Premium Shoe Racks!
        </span>

        <span className="hidden sm:inline text-base drop-shadow-sm">
          Available in multiple <strong>sizes</strong> & <strong>colors</strong>{" "}
          — durable, elegant, and space-saving.
        </span>

        {/* ✅ Replaced <a> with Next.js <Link> */}
        <Link
          href="/purchase"
          className="relative bg-white text-red-600 font-semibold px-4 py-1 rounded-full shadow hover:bg-gray-100 transition text-sm sm:text-base"
        >
          Explore
          <span className="absolute inset-0 rounded-full bg-red-500/30 blur-md opacity-0 animate-pulse-glow pointer-events-none"></span>
        </Link>
      </div>

      {/* Glow animation */}
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
