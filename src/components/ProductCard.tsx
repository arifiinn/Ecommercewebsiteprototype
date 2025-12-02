import { Heart, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  location: string;
  image: string;
  condition?: string;
  onClick: (id: number) => void;
}

export default function ProductCard({ id, title, price, location, image, condition, onClick }: ProductCardProps) {
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onClick(id)}
    >
      <div className="relative aspect-square">
        <ImageWithFallback 
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <button 
          className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
        {condition && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-emerald-600 text-white rounded-full text-xs">
            {condition}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <p className="text-[#E07655] mb-2">Rp {price.toLocaleString('id-ID')}</p>
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}