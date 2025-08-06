import Image from 'next/image';
import { Painting } from '@/data/paintings';

interface PaintingCardProps {
  painting: Painting;
  onClick?: () => void;
  onTagClick?: (tag: string) => void;
  selectedTags?: string[];
}

export default function PaintingCard({ painting, onClick, onTagClick, selectedTags = [] }: PaintingCardProps) {
  return (
    <div 
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] cursor-pointer break-inside-avoid border border-gray-100"
      onClick={onClick}
    >
      <div className="relative w-full overflow-hidden">
        <Image
          src={painting.image}
          alt={`${painting.title} - ${painting.medium} oil painting by Niharika, ${painting.size}, priced at ${painting.price}`}
          width={400}
          height={300}
          className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Price badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
          <span className="text-amber-700 font-bold text-sm">{painting.price}</span>
        </div>

        {/* View details overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-gray-800 font-medium text-sm">View Details</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-amber-700 transition-colors duration-300">
          {painting.title}
        </h3>
        <p className="text-gray-500 text-sm mb-1 font-medium">{painting.medium}</p>
        <p className="text-gray-400 text-sm mb-3">{painting.size}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {painting.tags.map((tag, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click
                onTagClick?.(tag);
              }}
              className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full border transition-all duration-200 ${
                selectedTags.includes(tag)
                  ? 'bg-amber-500 text-white border-amber-500 shadow-md'
                  : 'bg-gradient-to-r from-amber-100 to-amber-50 text-amber-800 border-amber-200 hover:from-amber-200 hover:to-amber-100 hover:border-amber-300'
              } ${onTagClick ? 'cursor-pointer hover:scale-105' : 'cursor-default'}`}
              disabled={!onTagClick}
            >
              {tag}
            </button>
          ))}
        </div>
        
        {/* Decorative line */}
        <div className="mt-2 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 w-0 group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  );
}
