import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white">
              EEE Technoverse 2026
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              A flagship technical and cultural fest organized by the
              Department of Electrical and Electronic Engineering, ADUST.
              Bringing innovation, competition, and creativity together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              
              <li><Link href="https://eee-technoverse-2026-snowy.vercel.app/rules" className="hover:text-white">Rules & Guidelines</Link></li>
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Event Information
            </h4>
            <ul className="space-y-3 text-sm">
              <li>📅 16–17 January 2026</li>
              <li>📍 ADUST Campus, Dhaka</li>
              <li>🎓 Organized by Dept. of EEE</li>
              <li>📝 Registration: Check Segments</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>📧 eee@adust.edu.bd, +880 1621-480052 </li>
              <li>🌐 Department of EEE, ADUST</li>
              <li>
                🔗 <a
                  href="https://www.facebook.com/eeeadust"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Facebook Page
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} EEE Technoverse · Department of EEE, ADUST.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
