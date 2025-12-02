import { useState } from 'react';
import { Heart, Share2, Flag, MapPin, Star, Clock, MessageCircle, ShoppingCart } from 'lucide-react';
import Footer from '../components/Footer';
import { mockProducts } from '../data/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface ProductDetailPageProps {
  productId: number | null;
  onChatWithSeller: (seller: any) => void;
  onNavigate: (page: string) => void;
}

export default function ProductDetailPage({ productId, onChatWithSeller, onNavigate }: ProductDetailPageProps) {
  const product = mockProducts.find(p => p.id === productId) || mockProducts[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <button onClick={() => onNavigate('home')} className="hover:text-[#E07655]">Beranda</button>
          <span>/</span>
          <button onClick={() => onNavigate('products')} className="hover:text-[#E07655]">Produk</button>
          <span>/</span>
          <span className="text-gray-900">{product.title}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images Section */}
          <div>
            {/* Main Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-4">
              <ImageWithFallback 
                src={product.images?.[selectedImage] || product.image}
                alt={product.title}
                className="w-full aspect-square object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`rounded-lg overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-[#E07655]' : ''
                    }`}
                  >
                    <ImageWithFallback 
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full aspect-square object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-gray-900 mb-2">{product.title}</h1>
                <div className="flex items-center gap-3 text-gray-600">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                    {product.condition}
                  </span>
                  <span className="text-sm">{product.category}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    isWishlisted ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
                <button className="w-10 h-10 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <h2 className="text-[#E07655] mb-6">Rp {product.price.toLocaleString('id-ID')}</h2>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-600 mb-8 p-4 bg-gray-50 rounded-lg">
              <MapPin className="w-5 h-5" />
              <span>{product.location}</span>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-gray-900 mb-3">Deskripsi</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Seller Card */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="text-gray-900 mb-4">Informasi Penjual</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300">
                  <ImageWithFallback 
                    src={product.seller.avatar}
                    alt={product.seller.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">{product.seller.name}</h4>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>{product.seller.rating} rating</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>Bergabung {product.seller.joined}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MessageCircle className="w-4 h-4" />
                  <span>Respon dalam {product.seller.responseTime}</span>
                </div>
              </div>
              <button 
                onClick={() => onChatWithSeller(product.seller)}
                className="w-full px-6 py-3 bg-[#E07655] text-white rounded-lg hover:bg-[#D86645] transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat dengan Penjual
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 px-6 py-4 bg-[#E07655] text-white rounded-lg hover:bg-[#D86645] transition-colors flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Beli Sekarang
              </button>
              <button className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors">
                Tawar
              </button>
            </div>

            {/* Report */}
            <button className="w-full mt-4 text-gray-500 hover:text-red-600 transition-colors flex items-center justify-center gap-2 text-sm">
              <Flag className="w-4 h-4" />
              Laporkan iklan ini
            </button>
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-20">
          <h2 className="text-gray-900 mb-8">Produk Serupa</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockProducts.slice(0, 4).map((p) => (
              <div 
                key={p.id}
                onClick={() => window.scrollTo(0, 0)}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="aspect-square">
                  <ImageWithFallback 
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-gray-900 mb-2 line-clamp-2">{p.title}</h3>
                  <p className="text-[#E07655] mb-2">Rp {p.price.toLocaleString('id-ID')}</p>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{p.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}