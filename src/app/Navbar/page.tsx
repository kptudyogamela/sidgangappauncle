'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import TopBar from './Topbar';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [purchaseOpen, setPurchaseOpen] = useState(false); // ✅ Desktop dropdown
  const [mobilePurchaseOpen, setMobilePurchaseOpen] = useState(false); // ✅ Mobile dropdown
  const pathname = usePathname();

  const linkClass = (href: string) =>
    pathname === href
      ? 'text-red-600 font-semibold'
      : 'hover:text-gray-900';

  return (
    <>
      <TopBar />

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

          {/* ✅ DESKTOP NAV */}
          <nav className="hidden sm:flex space-x-5 text-base items-center">
            <Link href="/" className={linkClass('/')}>Home</Link>
            <Link href="/about" className={linkClass('/about')}>About</Link>
            <Link href="/products" className={linkClass('/products')}>Products</Link>
            {/* ✅ CLICK-BASED PURCHASE DROPDOWN (DESKTOP SAFE) */}
            <div className="relative">
              <button
                onClick={() => setPurchaseOpen(!purchaseOpen)}
                className="
      px-2 py-1 flex items-center gap-1
      hover:text-gray-900 transition-colors
    "
              >
                Purchase
                <span className="text-xs">{purchaseOpen ? '▲' : '▼'}</span>
              </button>

              {purchaseOpen && (
                <div className="absolute left-0 top-full mt-2 w-44 bg-white border rounded-md shadow-lg overflow-hidden z-50">
                  <Link
                    href="/products/mobile-stand"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setPurchaseOpen(false)}
                  >
                    Mobile Stand
                  </Link>

                  <Link
                    href="/products/shoe-rack"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setPurchaseOpen(false)}
                  >
                    Shoe Rack
                  </Link>
                </div>
              )}
            </div>


            <Link href="/services" className={linkClass('/services')}>Services</Link>
            <Link href="/businessplans" className={linkClass('/businessplans')}>Business Plans</Link>
            <Link href="/gallery" className={linkClass('/gallery')}>Gallery</Link>
            <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
            <Link href="/career" className={linkClass('/career')}>Career</Link>
          </nav>
        </div>

        {/* ✅ MOBILE MENU */}
        {menuOpen && (
          <div className="sm:hidden bg-white px-4 pb-4 shadow-md transition-all duration-300">
            <nav className="flex flex-col space-y-3 text-base">

              <Link href="/" onClick={() => setMenuOpen(false)} className={linkClass('/')}>Home</Link>
              <Link href="/about" onClick={() => setMenuOpen(false)} className={linkClass('/about')}>About</Link>
              <Link href="/products" onClick={() => setMenuOpen(false)} className={linkClass('/products')}>Products</Link>

              {/* ✅ FIXED MOBILE PURCHASE DROPDOWN */}
              <div>
                <button
                  onClick={() => setMobilePurchaseOpen(!mobilePurchaseOpen)}
                  className="w-full flex justify-between items-center hover:text-gray-900"
                >
                  Purchase
                  <span className="text-xs">
                    {mobilePurchaseOpen ? '▲' : '▼'}
                  </span>
                </button>

                {mobilePurchaseOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      href="/products/mobile-stand"
                      className="block text-sm hover:text-red-600"
                      onClick={() => {
                        setMenuOpen(false);
                        setMobilePurchaseOpen(false);
                      }}
                    >
                      Mobile Stand
                    </Link>

                    <Link
                      href="/products/shoe-rack"
                      className="block text-sm hover:text-red-600"
                      onClick={() => {
                        setMenuOpen(false);
                        setMobilePurchaseOpen(false);
                      }}
                    >
                      Shoe Rack
                    </Link>
                  </div>
                )}
              </div>




              <Link href="/services" onClick={() => setMenuOpen(false)} className={linkClass('/services')}>Services</Link>
              <Link href="/businessplans" onClick={() => setMenuOpen(false)} className={linkClass('/businessplans')}>Business Plans</Link>
              <Link href="/gallery" onClick={() => setMenuOpen(false)} className={linkClass('/gallery')}>Gallery</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className={linkClass('/contact')}>Contact</Link>
              <Link href="/career" onClick={() => setMenuOpen(false)} className={linkClass('/career')}>Career</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
