import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Commission Your Artwork - Rainbow Drops | Custom Oil Paintings",
  description: "Commission a custom oil painting by artist Niharika. Bring your vision to life with personalized artwork including portraits, spiritual pieces, and unique compositions.",
  keywords: "commission art, custom oil painting, portrait commission, spiritual art, personalized artwork, Niharika artist",
  openGraph: {
    title: "Commission Your Artwork - Rainbow Drops | Custom Oil Paintings",
    description: "Commission a custom oil painting by artist Niharika. Bring your vision to life with personalized artwork including portraits, spiritual pieces, and unique compositions.",
    type: "website",
    url: "/commission",
    siteName: "Rainbow Drops",
    images: [
      {
        url: "/rainbow-drops-logo.svg",
        width: 1200,
        height: 630,
        alt: "Commission Custom Oil Paintings - Rainbow Drops by Niharika",
        type: "image/svg+xml",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commission Your Artwork - Rainbow Drops | Custom Oil Paintings",
    description: "Commission a custom oil painting by artist Niharika. Bring your vision to life with personalized artwork including portraits, spiritual pieces, and unique compositions.",
    images: ["/rainbow-drops-logo.svg"],
  },
  alternates: {
    canonical: "/commission",
  },
};

export default function CommissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
