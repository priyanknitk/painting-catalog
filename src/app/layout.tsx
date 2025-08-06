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
  description: "Discover beautiful oil paintings by artist Niharika. A collection of spiritual, portrait, and contemporary artworks. Commission custom paintings and explore unique artistic expressions.",
  keywords: [
    "oil paintings",
    "art gallery",
    "artist Niharika",
    "spiritual art",
    "portrait paintings", 
    "contemporary art",
    "custom paintings",
    "commission art",
    "handmade paintings",
    "canvas art",
    "fine art",
    "Indian artist",
    "art collection",
    "original paintings"
  ],
  authors: [{ name: "Niharika", url: "https://rainbowdrops.vercel.app" }],
  creator: "Niharika",
  publisher: "Rainbow Drops",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/rainbow-drops-logo.svg", type: "image/svg+xml" },
      { url: "/rainbow-drops-logo.svg", sizes: "32x32", type: "image/svg+xml" },
    ],
    shortcut: "/rainbow-drops-logo.svg",
    apple: [
      { url: "/rainbow-drops-logo.svg", type: "image/svg+xml" },
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
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  category: "Art & Culture",
  classification: "Art Gallery",
  other: {
    "google-site-verification": "add-your-google-site-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ArtGallery",
    "name": "Rainbow Drops",
    "description": "A collection of beautiful oil paintings by artist Niharika featuring spiritual, portrait, and contemporary artworks",
    "url": "https://rainbowdrops.vercel.app",
    "logo": "https://rainbowdrops.vercel.app/rainbow-drops-logo.svg",
    "image": "https://rainbowdrops.vercel.app/rainbow-drops-logo.svg",
    "founder": {
      "@type": "Person",
      "name": "Niharika",
      "jobTitle": "Oil Painter",
      "description": "Professional oil painter specializing in spiritual and portrait artwork"
    },
    "artMedium": "Oil Painting",
    "artworkLocation": "Gallery",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Oil Paintings Collection",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "VisualArtwork",
            "name": "Original Oil Paintings",
            "artMedium": "Oil on Canvas",
            "creator": "Niharika"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Commission Paintings",
            "description": "Personalized oil paintings commissioned to client specifications"
          }
        }
      ]
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": "https://rainbowdrops.vercel.app/contact"
    }
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#b45309" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="icon" href="/rainbow-drops-logo.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/rainbow-drops-logo.svg" />
        <link rel="apple-touch-icon" href="/rainbow-drops-logo.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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
