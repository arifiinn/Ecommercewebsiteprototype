import { useState } from 'react';
import { Upload, X, MapPin } from 'lucide-react';
import Footer from '../components/Footer';

interface UploadProductPageProps {
  isLoggedIn: boolean;
  onNavigate: (page: string) => void;
}

export default function UploadProductPage({ isLoggedIn, onNavigate }: UploadProductPageProps) {
  const [images, setImages] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    price: '',
    condition: 'new',
    description: '',
    location: ''
  });

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h2 className="text-gray-900 mb-4">Please Login</h2>
          <p className="text-gray-600 mb-6">You need to be logged in to upload products</p>
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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setImages([...images, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle product upload
    onNavigate('profile');
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Upload Product</h1>
          <p className="text-gray-600">Fill in the details to list your product</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-8">
          {/* Image Upload */}
          <div className="mb-8">
            <label className="text-gray-900 mb-3 block">Product Images</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {images.map((image, index) => (
                <div key={index} className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img src={image} alt={`Upload ${index + 1}`} className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
              
              {images.length < 8 && (
                <label className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-emerald-500 transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mb-2" />
                  <span className="text-sm text-gray-600">Upload Image</span>
                  <input 
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>
            <p className="text-sm text-gray-500">You can upload up to 8 images. First image will be the cover.</p>
          </div>

          {/* Product Title */}
          <div className="mb-6">
            <label className="text-gray-900 mb-2 block">Product Title</label>
            <input 
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              placeholder="e.g., Modern Leather Sofa"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-emerald-500 transition-colors"
              required
            />
          </div>

          {/* Category and Condition */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-gray-900 mb-2 block">Category</label>
              <select 
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                required
              >
                <option value="">Select Category</option>
                <option value="electronics">Electronics</option>
                <option value="furniture">Furniture</option>
                <option value="fashion">Fashion</option>
                <option value="sports">Sports</option>
                <option value="books">Books</option>
                <option value="home">Home & Garden</option>
              </select>
            </div>

            <div>
              <label className="text-gray-900 mb-2 block">Condition</label>
              <select 
                value={formData.condition}
                onChange={(e) => setFormData({...formData, condition: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                required
              >
                <option value="new">New</option>
                <option value="like-new">Like New</option>
                <option value="used">Used - Good</option>
                <option value="fair">Used - Fair</option>
              </select>
            </div>
          </div>

          {/* Price */}
          <div className="mb-6">
            <label className="text-gray-900 mb-2 block">Price</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input 
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                placeholder="0.00"
                className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-emerald-500 transition-colors"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="text-gray-900 mb-2 block">Description</label>
            <textarea 
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              placeholder="Describe your product in detail..."
              rows={6}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-emerald-500 transition-colors resize-none"
              required
            />
          </div>

          {/* Location */}
          <div className="mb-8">
            <label className="text-gray-900 mb-2 block">Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                placeholder="City, State"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-emerald-500 transition-colors"
                required
              />
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => onNavigate('profile')}
              className="flex-1 px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-lg hover:border-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Publish Listing
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
