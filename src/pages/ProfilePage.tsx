import { useState } from 'react';
import { Edit2, MapPin, Phone, Mail, Star, Package, Heart, ShoppingBag } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { mockProducts } from '../data/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface ProfilePageProps {
  isLoggedIn: boolean;
  onNavigate: (page: string) => void;
  onProductClick: (productId: number) => void;
}

export default function ProfilePage({ isLoggedIn, onNavigate, onProductClick }: ProfilePageProps) {
  const [activeTab, setActiveTab] = useState<'listings' | 'wishlist' | 'orders'>('listings');

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h2 className="text-gray-900 mb-4">Please Login</h2>
          <p className="text-gray-600 mb-6">You need to be logged in to view your profile</p>
          <button 
            onClick={() => onNavigate('login')}
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  const userListings = mockProducts.slice(0, 3);
  const userWishlist = mockProducts.slice(3, 6);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-300 relative">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <button className="absolute bottom-2 right-2 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors">
                  <Edit2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-gray-900 mb-2">John Smith</h1>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="text-gray-700">4.8 rating</span>
                    <span className="text-gray-500">(24 reviews)</span>
                  </div>
                </div>
                <button 
                  onClick={() => {/* Edit profile */}}
                  className="px-4 py-2 border-2 border-gray-200 text-gray-700 rounded-lg hover:border-gray-300 transition-colors flex items-center gap-2"
                >
                  <Edit2 className="w-4 h-4" />
                  Edit Profile
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>New York, NY</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-5 h-5" />
                  <span>john@example.com</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
                <div>
                  <p className="text-2xl text-emerald-600 mb-1">28</p>
                  <p className="text-gray-600">Total Sales</p>
                </div>
                <div>
                  <p className="text-2xl text-emerald-600 mb-1">3</p>
                  <p className="text-gray-600">Active Listings</p>
                </div>
                <div>
                  <p className="text-2xl text-emerald-600 mb-1">2y</p>
                  <p className="text-gray-600">Member Since</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab('listings')}
                className={`flex-1 px-6 py-4 flex items-center justify-center gap-2 transition-colors ${
                  activeTab === 'listings'
                    ? 'border-b-2 border-emerald-600 text-emerald-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Package className="w-5 h-5" />
                My Listings
              </button>
              <button
                onClick={() => setActiveTab('wishlist')}
                className={`flex-1 px-6 py-4 flex items-center justify-center gap-2 transition-colors ${
                  activeTab === 'wishlist'
                    ? 'border-b-2 border-emerald-600 text-emerald-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Heart className="w-5 h-5" />
                Wishlist
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`flex-1 px-6 py-4 flex items-center justify-center gap-2 transition-colors ${
                  activeTab === 'orders'
                    ? 'border-b-2 border-emerald-600 text-emerald-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                Order History
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'listings' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-gray-900">My Listings</h2>
                  <button 
                    onClick={() => onNavigate('upload')}
                    className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Add New Listing
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {userListings.map((product) => (
                    <ProductCard 
                      key={product.id}
                      {...product}
                      onClick={onProductClick}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div>
                <h2 className="text-gray-900 mb-6">Wishlist</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {userWishlist.map((product) => (
                    <ProductCard 
                      key={product.id}
                      {...product}
                      onClick={onProductClick}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div>
                <h2 className="text-gray-900 mb-6">Order History</h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((order) => (
                    <div key={order} className="bg-gray-50 rounded-lg p-6 flex items-center gap-6">
                      <div className="w-20 h-20 bg-gray-300 rounded-lg overflow-hidden">
                        <ImageWithFallback 
                          src={mockProducts[order - 1].image}
                          alt="Product"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-900 mb-1">{mockProducts[order - 1].title}</h3>
                        <p className="text-gray-600 text-sm mb-2">Order #{1000 + order} • Nov {20 + order}, 2025</p>
                        <p className="text-emerald-600">${mockProducts[order - 1].price}</p>
                      </div>
                      <div className="text-right">
                        <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                          Delivered
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
