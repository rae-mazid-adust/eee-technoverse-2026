"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-3 flex items-center justify-between sticky top-0 z-50">

      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/images/eee-technoverse-logo-white.png"
          alt="EEE Technoverse 2026"
          width={120}
          height={120}
          priority
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">

        <Link href="/" className="hover:text-yellow-400">
          Home
        </Link>

        <Link href="/about" className="hover:text-yellow-400">
          About
        </Link>

        {/* ✅ SEGMENTS DROPDOWN — FIXED */}
        <div className="relative group">

          {/* Trigger */}
          <span className="cursor-pointer font-medium text-yellow-400">
            Segments ▾
          </span>

          {/* Dropdown */}
          <div
            className="
              absolute left-0 top-full
              mt-2 w-64
              bg-white text-black
              rounded-lg shadow-xl
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-200
            "
          >
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

        <Link href="/rules" className="hover:text-yellow-400">
          Rules
        </Link>

        <Link href="/gallery" className="hover:text-yellow-400">
          Gallery
        </Link>

        <Link href="/contact" className="hover:text-yellow-400">
          Contact
        </Link>

      </div>
    </nav>
  );
}
