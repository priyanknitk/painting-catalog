import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Art Gallery - Rainbow Drops | Oil Paintings by Niharika",
  description: "Browse our complete collection of oil paintings. Each piece represents hours of passionate work, bringing together traditional techniques with contemporary vision.",
  keywords: "art gallery, oil paintings, Niharika, artwork collection, paintings for sale",
  openGraph: {
    title: "Art Gallery - Rainbow Drops | Oil Paintings by Niharika",
    description: "Browse our complete collection of oil paintings. Each piece represents hours of passionate work, bringing together traditional techniques with contemporary vision.",
    type: "website",
    url: "https://rainbowdrops.vercel.app/gallery",
    siteName: "Rainbow Drops",
    images: [
      {
        url: "/rainbow-drops-logo.svg",
        width: 1200,
        height: 630,
        alt: "Rainbow Drops Art Gallery - Oil Paintings by Niharika",
        type: "image/svg+xml",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Art Gallery - Rainbow Drops | Oil Paintings by Niharika",
    description: "Browse our complete collection of oil paintings. Each piece represents hours of passionate work, bringing together traditional techniques with contemporary vision.",
    images: ["/rainbow-drops-logo.svg"],
  },
  alternates: {
    canonical: "https://rainbowdrops.vercel.app/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
