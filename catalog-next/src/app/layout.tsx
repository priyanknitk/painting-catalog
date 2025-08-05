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
  title: "Rainbow Drops - Oil Paintings by Niharika",
  description: "Discover beautiful oil paintings by artist Niharika. A collection of spiritual, portrait, and contemporary artworks.",
  keywords: "oil paintings, art, artist, Niharika, paintings, gallery, artwork",
  authors: [{ name: "Niharika" }],
  openGraph: {
    title: "Rainbow Drops - Oil Paintings by Niharika",
    description: "Discover beautiful oil paintings by artist Niharika. A collection of spiritual, portrait, and contemporary artworks.",
    type: "website",
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
