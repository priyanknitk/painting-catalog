'use client';

import { useState, useMemo } from 'react';
import { paintings, Painting } from '@/data/paintings';
import PaintingCard from '@/components/PaintingCard';
import PaintingModal from '@/components/PaintingModal';

// Note: Since this is a client component, metadata should be handled in layout or moved to a server component wrapper

export default function Gallery() {
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'title' | 'price' | 'newest'>('newest');

  const handlePaintingClick = (painting: Painting) => {
    setSelectedPainting(painting);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPainting(null);
  };

  // Sort paintings
  const sortedPaintings = useMemo(() => {
    switch (sortBy) {
      case 'title':
        return [...paintings].sort((a, b) => a.title.localeCompare(b.title));
      case 'price':
        return [...paintings].sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[₹,]/g, ''));
          const priceB = parseInt(b.price.replace(/[₹,]/g, ''));
          return priceA - priceB;
        });
      case 'newest':
      default:
        return [...paintings].reverse(); // Assuming higher IDs are newer
    }
  }, [sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50">
      {/* Header */}
      <section className="relative bg-white shadow-sm border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-orange-50 opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-amber-700 bg-clip-text text-transparent mb-6">
            Art Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Explore our complete collection of oil paintings. Each piece represents hours of 
            passionate work, bringing together traditional techniques with contemporary vision.
          </p>
          
          {/* Filter Bar */}
          <div className="max-w-md mx-auto mt-8">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'title' | 'price' | 'newest')}
              className="w-full px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent shadow-sm text-gray-700 bg-white/80 backdrop-blur-sm font-medium"
            >
              <option value="newest">Newest First</option>
              <option value="title">Sort by Title</option>
              <option value="price">Sort by Price</option>
            </select>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg border border-gray-100">
              <div className="h-2 w-2 bg-amber-500 rounded-full mr-3 animate-pulse"></div>
              <p className="text-gray-600 font-medium">
                {sortedPaintings.length} painting{sortedPaintings.length !== 1 ? 's' : ''} in collection
              </p>
            </div>
          </div>
          
          <div className="masonry-grid">
            {sortedPaintings.map((painting, index) => (
              <div 
                key={painting.id} 
                className="masonry-item animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <PaintingCard
                  painting={painting}
                  onClick={() => handlePaintingClick(painting)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <PaintingModal
        painting={selectedPainting}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <style jsx>{`
        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          align-items: start;
        }
        
        .masonry-item {
          width: 100%;
        }

        @media (min-width: 640px) {
          .masonry-grid {
            grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          }
        }

        @media (min-width: 1024px) {
          .masonry-grid {
            grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          }
        }

        @media (min-width: 1200px) {
          .masonry-grid {
            grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          }
        }

        @media (min-width: 1600px) {
          .masonry-grid {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
