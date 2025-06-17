import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maruthi Auto Components",
  description: "maruthiautocomponents",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png", // ✅ Make sure logo file is lowercase
  },
  openGraph: {
    title: "Maruthi Auto Components",
    description: "Precision Engineering",
    url: "https://maruthiautocomponents.com",
    images: [
      {
        url: "https://maruthiautocomponents.com/logo.png", // ✅ Logo image
        width: 1200,
        height: 630,
        alt: "High-precision automotive components by Maruthi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maruthi Auto Components",
    description: "Precision Engineering",
    images: ["https://maruthiautocomponents.com/logo.png"], // ✅ Use logo or brand OG image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Structured Data (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Maruthi Auto Components",
              "alternateName": [
                "maruthi components peenya",
                "maruthi auto components peenya",
                "Maruthi Auto Components Peenya",
                "MaruthiAutoComponents",
                "Maruthi Auto",
                "Maruthi Auto Peenya",
                "maruthi auto peenya",
                "Maruthi Auto Parts",
                "Maruthi Components Peenya"
              ],
              "url": "https://maruthiautocomponents.com",
              "description": "Precision Engineering and Auto Components",
              "logo": "https://maruthiautocomponents.com/logo.png",
              "sameAs": [
                "https://www.linkedin.com/company/maruthi-auto-components",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
