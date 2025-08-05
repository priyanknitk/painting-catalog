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

  if (!isOpen || !painting) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image */}
          <div className="relative h-[400px] md:h-[500px] w-full">
            <Image
              src={painting.image}
              alt={painting.title}
              fill
              className="object-contain rounded-t-lg"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>

          {/* Details */}
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{painting.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-gray-600"><span className="font-semibold">Medium:</span> {painting.medium}</p>
                <p className="text-gray-600"><span className="font-semibold">Size:</span> {painting.size}</p>
                <p className="text-amber-700 text-xl font-bold"><span className="font-semibold text-gray-600">Price:</span> {painting.price}</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed">{painting.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
