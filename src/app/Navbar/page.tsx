'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import TopBar from './Topbar';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // ✅ Get current path

  // Helper function to apply active class
  const linkClass = (href) =>
    pathname === href
      ? 'text-red-600 font-semibold' // Active
      : 'hover:text-gray-900';

  return (
    <>
      {/* Top Strip */}
      <TopBar />

      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow text-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between py-3">

          {/* Logo */}
          <Link href="/" className="text-gray-900 font-bold text-xl whitespace-nowrap">
            Maruthi Auto Components
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="sm:hidden text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex space-x-5 text-base">
            <Link href="/" className={linkClass('/')}>Home</Link>
            <Link href="/about" className={linkClass('/about')}>About</Link>
            <Link href="/products" className={linkClass('/products')}>Products</Link>
            <Link href="/services" className={linkClass('/services')}>Services</Link>
            <Link href="/businessplans" className={linkClass('/businessplans')}>Business Plans</Link>
            <Link href="/gallery" className={linkClass('/gallery')}>Gallery</Link>
            <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
            <Link href="/career" className={linkClass('/career')}>Career</Link>
          </nav>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="sm:hidden bg-white px-4 pb-4 shadow-md animate-slide-down">
            <nav className="flex flex-col space-y-3 text-base">
              <Link href="/" onClick={() => setMenuOpen(false)} className={linkClass('/')}>Home</Link>
              <Link href="/about" onClick={() => setMenuOpen(false)} className={linkClass('/about')}>About</Link>
              <Link href="/products" onClick={() => setMenuOpen(false)} className={linkClass('/products')}>Products</Link>
              <Link href="/services" onClick={() => setMenuOpen(false)} className={linkClass('/services')}>Services</Link>
              <Link href="/businessplans" onClick={() => setMenuOpen(false)} className={linkClass('/businessplans')}>Business Plans</Link>
              <Link href="/gallery" onClick={() => setMenuOpen(false)} className={linkClass('/gallery')}>Gallery</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className={linkClass('/contact')}>Contact</Link>
              <Link href="/career" onClick={() => setMenuOpen(false)} className={linkClass('/career')}>Career</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Slide Animation */}
      <style jsx>{`
        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
