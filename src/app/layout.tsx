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
  metadataBase: new URL("https://www.maruthiautocomponent.com"),

  title: {
    default: "Maruthi Auto Components | Precision Automotive Components",
    template: "%s | Maruthi Auto Components",
  },

  description:
    "Maruthi Auto Components is a manufacturer of precision automotive components, tubular and turned parts, bolts, laser-cut and CNC-bent components in Peenya, Bangalore.",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: "/logo.png",
  },

  openGraph: {
    title: "Maruthi Auto Components | Precision Automotive Components",
    description:
      "Manufacturer of precision automotive components, tubular and turned parts, bolts, laser-cut and CNC-bent components.",
    url: "https://www.maruthiautocomponent.com/",
    siteName: "Maruthi Auto Components",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Maruthi Auto Components",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Maruthi Auto Components",
    description:
      "Precision automotive components and engineering solutions.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
