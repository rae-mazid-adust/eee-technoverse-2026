"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [segmentsOpen, setSegmentsOpen] = useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/eee-technoverse-logo-white.png"
            alt="EEE Technoverse 2026"
            width={170}
            height={60}
            priority
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-yellow-400">Home</Link>
          <Link href="/about" className="hover:text-yellow-400">About</Link>

          {/* Desktop Segments Dropdown */}
          <div className="relative group">
            <span className="cursor-pointer font-medium text-yellow-400">
              Segments ▾
            </span>

            <div className="absolute left-0 top-full mt-2 w-64 bg-white text-black rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              <Link
                href="/segments/university"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                🎓 University Level
              </Link>
              <Link
                href="/segments/college"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                🧠 College / Polytechnic Level
              </Link>
            </div>
          </div>

          <Link href="/rules" className="hover:text-yellow-400">Rules</Link>
          <Link href="/gallery" className="hover:text-yellow-400">Gallery</Link>
          <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU PANEL */}
      {mobileOpen && (
        <div className="md:hidden bg-black border-t border-gray-700 px-6 py-4 space-y-4">

          <Link href="/" onClick={() => setMobileOpen(false)} className="block">
            Home
          </Link>

          <Link href="/about" onClick={() => setMobileOpen(false)} className="block">
            About
          </Link>

          {/* Mobile Segments Dropdown */}
          <button
            onClick={() => setSegmentsOpen(!segmentsOpen)}
            className="w-full text-left font-medium text-yellow-400"
          >
            Segments ▾
          </button>

          {segmentsOpen && (
            <div className="pl-4 space-y-2">
              <Link
                href="/segments/university"
                onClick={() => setMobileOpen(false)}
                className="block"
              >
                🎓 University Level
              </Link>
              <Link
                href="/segments/college"
                onClick={() => setMobileOpen(false)}
                className="block"
              >
                🧠 College / Polytechnic Level
              </Link>
            </div>
          )}

          <Link href="/rules" onClick={() => setMobileOpen(false)} className="block">
            Rules
          </Link>

          <Link href="/gallery" onClick={() => setMobileOpen(false)} className="block">
            Gallery
          </Link>

          <Link href="/contact" onClick={() => setMobileOpen(false)} className="block">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
