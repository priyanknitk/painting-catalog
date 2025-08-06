'use client';

import { useState, useMemo } from 'react';
import { paintings, Painting } from '@/data/paintings';
import PaintingCard from '@/components/PaintingCard';
import PaintingModal from '@/components/PaintingModal';

export default function Gallery() {
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'title' | 'price' | 'newest'>('newest');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handlePaintingClick = (painting: Painting) => {
    setSelectedPainting(painting);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPainting(null);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearAllFilters = () => {
    setSelectedTags([]);
  };

  // Get all unique tags from paintings
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    paintings.forEach(painting => {
      painting.tags.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, []);

  // Filter and sort paintings
  const filteredAndSortedPaintings = useMemo(() => {
    // First filter by tags
    let filtered = paintings;
    if (selectedTags.length > 0) {
      filtered = paintings.filter(painting => 
        selectedTags.some(tag => painting.tags.includes(tag))
      );
    }

    // Then sort
    switch (sortBy) {
      case 'title':
        return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
      case 'price':
        return [...filtered].sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[₹,]/g, ''));
          const priceB = parseInt(b.price.replace(/[₹,]/g, ''));
          return priceA - priceB;
        });
      case 'newest':
      default:
        return [...filtered].reverse(); // Assuming higher IDs are newer
    }
  }, [selectedTags, sortBy]);

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
          <div className="max-w-4xl mx-auto mt-8 space-y-6">
            <div className="max-w-md mx-auto">
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
            
            {/* Selected Tags Display */}
            {selectedTags.length > 0 && (
              <div className="text-center">
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <span className="text-gray-700 font-medium">Filtered by:</span>
                  {selectedTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                    >
                      {tag}
                      <button
                        onClick={() => handleTagClick(tag)}
                        className="hover:bg-amber-600 rounded-full p-1 transition-colors duration-200"
                        aria-label={`Remove ${tag} filter`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </span>
                  ))}
                  <button
                    onClick={clearAllFilters}
                    className="text-gray-500 hover:text-gray-700 text-sm font-medium underline transition-colors duration-200 ml-2"
                  >
                    Clear all filters
                  </button>
                </div>
              </div>
            )}
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
                {filteredAndSortedPaintings.length} painting{filteredAndSortedPaintings.length !== 1 ? 's' : ''} 
                {selectedTags.length > 0 ? ' matching filters' : ' in collection'}
              </p>
            </div>
          </div>
          
          {filteredAndSortedPaintings.length === 0 ? (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No paintings found</h3>
                <p className="text-gray-500 mb-6">
                  No paintings match your selected filters. Try removing some tags or browse all paintings.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-3 bg-amber-500 text-white rounded-full font-medium hover:bg-amber-600 transition-colors duration-200"
                >
                  Show All Paintings
                </button>
              </div>
            </div>
          ) : (
            <div className="masonry-grid">
              {filteredAndSortedPaintings.map((painting, index) => (
                <div 
                  key={painting.id} 
                  className="masonry-item animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <PaintingCard
                    painting={painting}
                    onClick={() => handlePaintingClick(painting)}
                    onTagClick={handleTagClick}
                    selectedTags={selectedTags}
                  />
                </div>
              ))}
            </div>
          )}
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
          columns: 1;
          column-gap: 2rem;
          column-fill: balance;
        }
        
        .masonry-item {
          break-inside: avoid;
          margin-bottom: 2rem;
          display: inline-block;
          width: 100%;
        }

        @media (min-width: 640px) {
          .masonry-grid {
            columns: 2;
          }
        }

        @media (min-width: 1024px) {
          .masonry-grid {
            columns: 3;
          }
        }

        @media (min-width: 1440px) {
          .masonry-grid {
            columns: 4;
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
