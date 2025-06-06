'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import TopBar from './Topbar';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Strip */}
      <TopBar />


      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow text-gray-600">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-3 sm:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center text-gray-900 font-bold text-xl">
            Maruthi Auto Components
          </Link>

          {/* Hamburger for mobile */}
          <button
            className="sm:hidden text-gray-800 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex space-x-5 text-base">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <Link href="/About" className="hover:text-gray-900">About Us</Link>
            <Link href="/Products" className="hover:text-gray-900">Products</Link>
            <Link href="/Services" className="hover:text-gray-900">Services</Link>
            <Link href="/Businessplans" className="hover:text-gray-900">Business Plans</Link>
            <Link href="/Gallery" className="hover:text-gray-900">Gallery</Link>
            <Link href="/Contact" className="hover:text-gray-900">Contact</Link>
            <Link href="/Career" className="hover:text-gray-900">Career</Link>
          </nav>

          {/* CTA - only on desktop */}
          {/* <Link href="/" className="hidden sm:inline-flex">
            <button className="ml-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm">
              Get a Quote
            </button>
          </Link> */}
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="sm:hidden bg-white px-4 pb-4 shadow-md animate-slide-down">
            <nav className="flex flex-col space-y-3 text-base">
              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/About" onClick={() => setMenuOpen(false)}>About Us</Link>
              <Link href="/Products" onClick={() => setMenuOpen(false)}>Products</Link>
              <Link href="/Services" onClick={() => setMenuOpen(false)}>Services</Link>
              <Link href="/Businessplans" onClick={() => setMenuOpen(false)}>Business Plans</Link>
              <Link href="/Gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
              <Link href="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link>
              <Link href="/Career" onClick={() => setMenuOpen(false)}>Career</Link>

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
