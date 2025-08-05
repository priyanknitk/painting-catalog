'use client';

import { useState } from 'react';
import { paintings, Painting } from '@/data/paintings';
import PaintingCard from '@/components/PaintingCard';
import PaintingModal from '@/components/PaintingModal';
import type { Metadata } from 'next';

// Note: Since this is a client component, we'll handle meta tags in layout.tsx
// For dynamic meta tags per page, we'd need to convert to server component

export default function Gallery() {
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePaintingClick = (painting: Painting) => {
    setSelectedPainting(painting);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPainting(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Art Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our complete collection of oil paintings. Each piece represents hours of 
            passionate work, bringing together traditional techniques with contemporary vision.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600 text-center">
              {paintings.length} paintings in collection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paintings.map((painting) => (
              <PaintingCard
                key={painting.id}
                painting={painting}
                onClick={() => handlePaintingClick(painting)}
              />
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
    </div>
  );
}
