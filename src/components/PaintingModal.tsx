'use client';

import Image from 'next/image';
import { Painting } from '@/data/paintings';
import { useEffect } from 'react';

interface PaintingModalProps {
  painting: Painting | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PaintingModal({ painting, isOpen, onClose }: PaintingModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleInquire = () => {
    // Create a mailto link or navigate to contact page
    window.location.href = '/contact';
  };

  const handleShare = async () => {
    if (!painting) return;
    
    const shareData = {
      title: painting.title,
      text: `Check out this beautiful painting: ${painting.title} - ${painting.price}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(`${painting.title} - ${painting.price} - ${window.location.href}`);
        // You could add a toast notification here
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.log('Error sharing:', err);
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(`${painting.title} - ${painting.price} - ${window.location.href}`);
        alert('Link copied to clipboard!');
      } catch (clipboardErr) {
        console.log('Clipboard error:', clipboardErr);
      }
    }
  };

  if (!isOpen || !painting) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 bg-white/10 backdrop-blur-sm text-white rounded-full p-3 hover:bg-white/20 transition-all duration-200 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
            {/* Image Section */}
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
              <div className="relative w-full h-full max-h-[500px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={painting.image}
                  alt={painting.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Details Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-between overflow-y-auto">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">{painting.title}</h2>
                
                {/* Price Badge */}
                <div className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full text-xl font-bold mb-8 shadow-lg">
                  <span className="mr-2">💰</span>
                  {painting.price}
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 gap-4 mb-8">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🎨</span>
                      <div>
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Medium</p>
                        <p className="text-lg font-semibold text-gray-900">{painting.medium}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">📏</span>
                      <div>
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Dimensions</p>
                        <p className="text-lg font-semibold text-gray-900">{painting.size}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="mr-2">📖</span>
                    About this Artwork
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{painting.description}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
                <button 
                  onClick={handleInquire}
                  className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center justify-center"
                >
                  <span className="mr-2">💌</span>
                  Inquire About This Piece
                </button>
                <button 
                  onClick={handleShare}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center"
                >
                  <span className="mr-2">🔗</span>
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
