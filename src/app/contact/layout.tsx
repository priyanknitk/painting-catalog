import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact - Rainbow Drops | Commission Oil Paintings",
  description: "Get in touch with artist Niharika for commissioned artwork, purchase inquiries, or general questions about oil paintings.",
  keywords: "contact artist, commission paintings, oil painting artist, Niharika contact, art commission",
  openGraph: {
    title: "Contact - Rainbow Drops | Commission Oil Paintings",
    description: "Get in touch with artist Niharika for commissioned artwork, purchase inquiries, or general questions about oil paintings.",
    type: "website",
    url: "https://rainbowdrops.vercel.app/contact",
    siteName: "Rainbow Drops",
    images: [
      {
        url: "/rainbow-drops-logo.svg",
        width: 1200,
        height: 630,
        alt: "Contact Rainbow Drops - Commission Oil Paintings by Niharika",
        type: "image/svg+xml",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Rainbow Drops | Commission Oil Paintings",
    description: "Get in touch with artist Niharika for commissioned artwork, purchase inquiries, or general questions about oil paintings.",
    images: ["/rainbow-drops-logo.svg"],
  },
  alternates: {
    canonical: "https://rainbowdrops.vercel.app/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
