import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "EEE Technoverse 2026",
  description: "National Level EEE Tech Event at ADUST",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Sticky Navbar */}
        <Navbar />

        {/* Main content offset for fixed navbar */}
        <main className="pt-20 min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
