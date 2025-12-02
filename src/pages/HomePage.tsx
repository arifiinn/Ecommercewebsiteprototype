import { Search, Smartphone, Sofa, Shirt, Dumbbell, BookOpen, Home as HomeIcon } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import Footer from '../components/Footer';
import { mockProducts } from '../data/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onProductClick: (productId: number) => void;
}

export default function HomePage({ onNavigate, onProductClick }: HomePageProps) {
  const categories = [
    { name: 'Elektronik', icon: Smartphone, count: 1234 },
    { name: 'Furniture', icon: Sofa, count: 856 },
    { name: 'Fashion', icon: Shirt, count: 2341 },
    { name: 'Olahraga', icon: Dumbbell, count: 645 },
    { name: 'Buku', icon: BookOpen, count: 432 },
    { name: 'Rumah & Taman', icon: HomeIcon, count: 987 },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E07655] to-[#D86645] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-white mb-4">Jual Beli Barang Bekas Mudah & Aman</h1>
              <p className="text-orange-50 mb-8 text-lg">
                Temukan penawaran menarik dari penjual terpercaya di sekitar Anda. Bergabunglah dengan ribuan pengguna BekasKita hari ini.
              </p>
              
              {/* Search Bar */}
              <div className="bg-white rounded-xl p-2 flex items-center gap-2 shadow-lg">
                <Search className="w-5 h-5 text-gray-400 ml-2" />
                <input 
                  type="text"
                  placeholder="Cari produk, kategori..."
                  className="flex-1 px-2 py-3 outline-none text-gray-900"
                />
                <button className="px-6 py-3 bg-[#E07655] text-white rounded-lg hover:bg-[#D86645] transition-colors">
                  Cari
                </button>
              </div>

              <div className="flex gap-6 mt-8 text-orange-50">
                <div>
                  <p className="text-3xl text-white mb-1">10K+</p>
                  <p className="text-sm">Listing Aktif</p>
                </div>
                <div>
                  <p className="text-3xl text-white mb-1">5K+</p>
                  <p className="text-sm">Pengguna</p>
                </div>
                <div>
                  <p className="text-3xl text-white mb-1">50+</p>
                  <p className="text-sm">Kota</p>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHNob3BwaW5nJTIwb25saW5lfGVufDF8fHx8MTc2NDA3ODk1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Shopping"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-gray-900">Kategori Populer</h2>
          <button 
            onClick={() => onNavigate('products')}
            className="text-[#E07655] hover:text-[#D86645]"
          >
            Lihat Semua
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <CategoryCard 
              key={category.name}
              name={category.name}
              icon={category.icon}
              count={category.count}
              onClick={() => onNavigate('products')}
            />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-gray-900">Produk Pilihan</h2>
          <button 
            onClick={() => onNavigate('products')}
            className="text-[#E07655] hover:text-[#D86645]"
          >
            Lihat Semua
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProducts.slice(0, 4).map((product) => (
            <ProductCard 
              key={product.id}
              {...product}
              onClick={onProductClick}
            />
          ))}
        </div>
      </section>

      {/* Recommended Products */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-8">Rekomendasi untuk Anda</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockProducts.slice(2, 6).map((product) => (
              <ProductCard 
                key={product.id}
                {...product}
                onClick={onProductClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-[#E07655] to-[#D86645] rounded-2xl p-12 text-center text-white">
          <h2 className="text-white mb-4">Mulai Jual Hari Ini</h2>
          <p className="text-orange-50 mb-8 max-w-2xl mx-auto">
            Ubah barang bekas Anda menjadi uang tunai. Pasang iklan gratis dan jangkau ribuan pembeli potensial.
          </p>
          <button 
            onClick={() => onNavigate('upload')}
            className="px-8 py-4 bg-white text-[#E07655] rounded-lg hover:bg-gray-100 transition-colors"
          >
            Pasang Iklan Sekarang
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}