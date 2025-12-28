import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-black fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* LOGO ONLY */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/eee-technoverse-logo-white.png"
            alt="EEE Technoverse 2026 Logo"
            width={120}   // 👈 Bigger logo
            height={120}
            priority
            className="object-contain"
          />
        </Link>

        {/* NAV LINKS */}
        <div className="space-x-4 text-sm md:text-base text-white">
          <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link href="/about" className="hover:text-yellow-400 transition">About</Link>
          <Link href="/segments" className="hover:text-yellow-400 transition">Segments</Link>
          <Link href="/rulebook" className="hover:text-yellow-400 transition">Rules</Link>
          <Link href="/register" className="hover:text-yellow-400 transition">Register</Link>
          <Link href="/gallery" className="hover:text-yellow-400 transition">Gallery</Link>
          <Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link>
        </div>

      </div>
    </nav>
  );
}
