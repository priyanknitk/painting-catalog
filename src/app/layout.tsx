import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rainbowdrops.vercel.app'),
  title: {
    default: "Rainbow Drops - Oil Paintings by Niharika",
    template: "%s | Rainbow Drops"
  },
  description: "Discover beautiful oil paintings by artist Niharika. A collection of spiritual, portrait, and contemporary artworks.",
  keywords: "oil paintings, art, artist, Niharika, paintings, gallery, artwork",
  authors: [{ name: "Niharika" }],
  creator: "Niharika",
  publisher: "Rainbow Drops",
  icons: {
    icon: [
      { url: "/rainbow-drops-logo.svg" },
      { url: "/rainbow-drops-logo.svg", sizes: "32x32", type: "image/svg+xml" },
    ],
    shortcut: "/rainbow-drops-logo.svg",
    apple: [
      { url: "/rainbow-drops-logo.svg" },
      { url: "/rainbow-drops-logo.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Rainbow Drops - Oil Paintings by Niharika",
    description: "Discover beautiful oil paintings by artist Niharika. A collection of spiritual, portrait, and contemporary artworks.",
    type: "website",
    url: "/",
    siteName: "Rainbow Drops",
    images: [
      {
        url: "/rainbow-drops-logo.svg",
        width: 1200,
        height: 630,
        alt: "Rainbow Drops - Art by Niharika Logo",
        type: "image/svg+xml",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rainbow Drops - Oil Paintings by Niharika",
    description: "Discover beautiful oil paintings by artist Niharika. A collection of spiritual, portrait, and contemporary artworks.",
    images: ["/rainbow-drops-logo.svg"],
    creator: "@niharika_art",
    site: "@rainbow_drops_art",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  category: "Art & Culture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/rainbow-drops-logo.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/rainbow-drops-logo.svg" />
        <link rel="apple-touch-icon" href="/rainbow-drops-logo.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
