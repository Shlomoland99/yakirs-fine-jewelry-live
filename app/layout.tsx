import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yakir's Fine Jewelry | Frost Yourself",
  description: "Timeless Radiance. Define yourself with radiance, class, and elegance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-black/60 backdrop-blur-sm border-b border-amber-900/30">
          <div className="text-xl font-serif tracking-widest text-amber-200">
            YAKIR'S FINE JEWELRY
          </div>
          <div className="flex gap-8 text-sm tracking-widest uppercase text-amber-100/80">
            <a href="/" className="hover:text-amber-300 transition">Home</a>
            <a href="/rings" target="_blank" className="hover:text-amber-300 transition">Rings</a>
            <a href="/bracelets" target="_blank" className="hover:text-amber-300 transition">Bracelets</a>
            <a href="/necklaces" target="_blank" className="hover:text-amber-300 transition">Necklaces</a>
            <a href="/earrings" target="_blank" className="hover:text-amber-300 transition">Earrings</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}