import { useState } from 'react';
import { Search, SlidersHorizontal, Grid3x3, List, MapPin } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { mockProducts } from '../data/mockData';

interface ProductListingPageProps {
  onProductClick: (productId: number) => void;
}

export default function ProductListingPage({ onProductClick }: ProductListingPageProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['all', 'Elektronik', 'Furniture', 'Fashion', 'Olahraga', 'Buku'];

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-4">Semua Produk</h1>
          <p className="text-gray-600">Menampilkan {mockProducts.length} hasil</p>
        </div>

        {/* Search and Filters Bar */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text"
                placeholder="Cari produk..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-[#E07655] transition-colors"
              />
            </div>

            {/* Filter Button */}
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2 justify-center"
            >
              <SlidersHorizontal className="w-5 h-5" />
              Filter
            </button>

            {/* Sort */}
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-[#E07655] transition-colors cursor-pointer"
            >
              <option value="popularity">Paling Populer</option>
              <option value="price-low">Harga: Rendah ke Tinggi</option>
              <option value="price-high">Harga: Tinggi ke Rendah</option>
              <option value="nearest">Lokasi Terdekat</option>
              <option value="newest">Terbaru</option>
            </select>

            {/* View Toggle */}
            <div className="hidden md:flex gap-2 bg-gray-100 p-1 rounded-lg">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Category Filter */}
              <div>
                <label className="text-gray-900 mb-3 block">Kategori</label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-4 h-4 text-[#E07655]"
                      />
                      <span className="text-gray-700 capitalize">{category === 'all' ? 'Semua' : category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="text-gray-900 mb-3 block">Rentang Harga</label>
                <div className="space-y-4">
                  <input 
                    type="range"
                    min="0"
                    max="20000000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex items-center gap-3">
                    <input 
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-24 px-3 py-2 border border-gray-200 rounded-lg"
                      placeholder="Min"
                    />
                    <span className="text-gray-500">s/d</span>
                    <input 
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-24 px-3 py-2 border border-gray-200 rounded-lg"
                      placeholder="Maks"
                    />
                  </div>
                </div>
              </div>

              {/* Location Filter */}
              <div>
                <label className="text-gray-900 mb-3 block">Lokasi</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="text"
                    placeholder="Masukkan kota atau kode pos"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-[#E07655] transition-colors"
                  />
                </div>
                <div className="mt-3">
                  <label className="text-gray-700 mb-2 block text-sm">Jarak (km)</label>
                  <input 
                    type="range"
                    min="1"
                    max="100"
                    defaultValue="25"
                    className="w-full"
                  />
                  <p className="text-sm text-gray-500 mt-1">Dalam radius 25 km</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6 pt-6 border-t border-gray-200">
              <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                Reset Filter
              </button>
              <button className="px-6 py-2 bg-[#E07655] text-white rounded-lg hover:bg-[#D86645] transition-colors">
                Terapkan Filter
              </button>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}>
          {mockProducts.map((product) => (
            <ProductCard 
              key={product.id}
              {...product}
              onClick={onProductClick}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-12">
          <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            Sebelumnya
          </button>
          <button className="px-4 py-2 bg-[#E07655] text-white rounded-lg">
            1
          </button>
          <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            2
          </button>
          <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            3
          </button>
          <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            Selanjutnya
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}