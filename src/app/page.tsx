import Image from "next/image";
import Link from "next/link";
import { paintings } from "@/data/paintings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rainbow Drops - Oil Paintings by Niharika | Art Gallery",
  description: "Discover beautiful oil paintings by artist Niharika. Explore our collection of spiritual, portrait, and contemporary artworks. Commission custom paintings.",
  keywords: "oil paintings, art gallery, artist Niharika, spiritual art, portrait paintings, contemporary art, custom paintings, commission art",
  openGraph: {
    title: "Rainbow Drops - Oil Paintings by Niharika",
    description: "Discover beautiful oil paintings by artist Niharika. Explore our collection of spiritual, portrait, and contemporary artworks.",
    url: "/",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const featuredPaintings = paintings.slice(0, 3);

  // Schema markup for featured artworks
  const artworkSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Featured Oil Paintings",
    "description": "Featured collection of oil paintings by artist Niharika",
    "numberOfItems": featuredPaintings.length,
    "itemListElement": featuredPaintings.map((painting, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "VisualArtwork",
        "name": painting.title,
        "description": painting.description,
        "artMedium": painting.medium,
        "artworkSurface": "Canvas",
        "width": painting.size,
        "creator": {
          "@type": "Person",
          "name": "Niharika"
        },
        "image": `https://rainbowdrops.vercel.app${painting.image}`,
        "offers": {
          "@type": "Offer",
          "price": painting.price.replace(/[₹,]/g, ''),
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        }
      }
    }))
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(artworkSchema) }}
      />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Rainbow Drops
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            A vibrant collection of oil paintings by <span className="font-semibold text-amber-700">Niharika</span>
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover the beauty of hand-crafted oil paintings that capture emotions, 
            spirituality, and the essence of life through vivid colors and masterful technique.
          </p>
          <Link 
            href="/gallery"
            className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors shadow-lg hover:shadow-xl"
            aria-label="Explore our complete oil paintings gallery"
          >
            Explore Gallery
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About the Artist</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Welcome to Rainbow Drops, where art comes alive through the passionate brushstrokes of Niharika. 
                Each painting in this collection is a testament to the power of oil on canvas, 
                creating vivid narratives that speak to the soul.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From spiritual themes to captivating portraits, every piece is meticulously crafted 
                with attention to detail, color harmony, and emotional depth. 
                Discover a world where traditional techniques meet contemporary vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Featured Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A glimpse into the diverse range of artistic expressions in our collection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPaintings.map((painting) => (
              <article key={painting.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={painting.image}
                    alt={`${painting.title} - ${painting.medium} oil painting by Niharika featuring ${painting.description.toLowerCase()}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{painting.title}</h3>
                  <p className="text-gray-600 text-sm mb-2" itemProp="artMedium">{painting.medium}</p>
                  <p className="text-gray-700 text-sm line-clamp-3" itemProp="description">{painting.description}</p>
                  <div className="mt-3 text-amber-700 font-bold" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    <span itemProp="price">{painting.price}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/gallery"
              className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View All Paintings
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-amber-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience Art That Speaks
          </h2>
          <p className="text-xl text-amber-100 mb-8 leading-relaxed">
            Each painting tells a unique story. Let these masterpieces transform your space 
            and inspire your daily life with their beauty and meaning.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-amber-700 px-8 py-4 rounded-lg text-lg font-medium transition-colors shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
