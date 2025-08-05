import Image from 'next/image';
import { Painting } from '@/data/paintings';

interface PaintingCardProps {
  painting: Painting;
  onClick?: () => void;
}

export default function PaintingCard({ painting, onClick }: PaintingCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer break-inside-avoid"
      onClick={onClick}
    >
      <div className="relative w-full">
        <Image
          src={painting.image}
          alt={painting.title}
          width={400}
          height={300}
          className="w-full h-auto object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{painting.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{painting.medium}</p>
        <p className="text-gray-600 text-sm mb-2">{painting.size}</p>
        <p className="text-amber-700 font-medium text-lg">{painting.price}</p>
      </div>
    </div>
  );
}
