import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./Footer/page";
import ShoeRackBar from "../components/ShoeRackBar"
import Navbar from "./Navbar/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maruthi Auto Component",
  description: "maruthiautocomponent",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png", // ✅ Make sure logo file is lowercase
  },
  openGraph: {
    title: "Maruthi Auto Component",
    description: "Precision Engineering",
    url: "https://maruthiautocomponent.com",
    images: [
      {
        url: "https://maruthiautocomponent.com/logo.png", // ✅ Logo image
        width: 1200,
        height: 630,
        alt: "High-precision automotive component by Maruthi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maruthi Auto Component",
    description: "Precision Engineering",
    images: ["https://maruthiautocomponent.com/logo.png"], // ✅ Use logo or brand OG image
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
              "name": "Maruthi Auto Component",
              "alternateName": [
                "maruthi component peenya",
                "maruthi auto component peenya",
                "Maruthi Auto Component Peenya",
                "MaruthiAutoComponent",
                "Maruthi Auto",
                "Maruthi Auto Peenya",
                "maruthi auto peenya",
                "Maruthi Auto Parts",
                "Maruthi Component Peenya"
              ],
              "url": "https://maruthiautocomponent.com",
              "description": "Precision Engineering and Auto Component",
              "logo": "https://maruthiautocomponent.com/logo.png",
              "sameAs": [
                "https://www.linkedin.com/company/maruthi-auto-component",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <ShoeRackBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
