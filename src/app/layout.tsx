// app/layout.tsx or app/layout.js
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
  description: "Precision Engineering",
  openGraph: {
    title: "Maruthi Auto Components",
    description: "Precision Engineering",
    url: "https://sidgangappauncle-a2rb.vercel.app/",
    images: [
      {
        url: "https://sidgangappauncle-a2rb.vercel.app//favicon.ico",
        width: 1200,
        height: 630,
        alt: "OG Image Alt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maruthi Auto Components",
    description: "Precision Engineering",
    images: ["https://sidgangappauncle-a2rb.vercel.app//favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
