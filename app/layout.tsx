import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Everett DuPen — American Sculptor, 1912–2005",
    template: "%s — Everett DuPen",
  },
  description:
    "The life and complete works of Everett DuPen (1912–2005), American figurative sculptor and University of Washington professor — bronze, wood, stone, and drawings.",
  metadataBase: new URL("https://www.everettdupen.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Everett DuPen — American Sculptor",
    title: "Everett DuPen — American Sculptor, 1912–2005",
    description:
      "The life and complete works of Everett DuPen (1912–2005), American figurative sculptor and University of Washington professor.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Family Group, walnut carving by Everett DuPen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Everett DuPen — American Sculptor, 1912–2005",
    description:
      "The life and complete works of Everett DuPen (1912–2005), American figurative sculptor and University of Washington professor.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48 64x64" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..600&family=Hanken+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
