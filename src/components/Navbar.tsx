import { Search, ShoppingCart, Heart, Menu, User, Upload, LayoutDashboard, MessageCircle, Users, LogOut } from 'lucide-react';
import logo from 'figma:asset/c78855508df436b37e3464618213afa8f61433ae.png';

interface NavbarProps {
  isLoggedIn: boolean;
  onNavigate: (page: string) => void;
  onLogoutClick: () => void;
}

export default function Navbar({ isLoggedIn, onNavigate, onLogoutClick }: NavbarProps) {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img src={logo} alt="BekasKita" className="h-10 w-10" />
            <span className="text-[#E07655]">BekasKita</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => onNavigate('home')}
              className="text-gray-700 hover:text-[#E07655] transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('products')}
              className="text-gray-700 hover:text-[#E07655] transition-colors"
            >
              Produk
            </button>
            <button 
              onClick={() => onNavigate('community')}
              className="text-gray-700 hover:text-[#E07655] transition-colors flex items-center gap-1"
            >
              <Users className="w-4 h-4" />
              Komunitas
            </button>
            
            {isLoggedIn && (
              <>
                <button 
                  onClick={() => onNavigate('upload')}
                  className="text-gray-700 hover:text-[#E07655] transition-colors flex items-center gap-1"
                >
                  <Upload className="w-4 h-4" />
                  Jual
                </button>
                <button 
                  onClick={() => onNavigate('dashboard')}
                  className="text-gray-700 hover:text-[#E07655] transition-colors flex items-center gap-1"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </button>
              </>
            )}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-[#E07655] transition-colors">
              <Heart className="w-6 h-6" />
            </button>
            
            {isLoggedIn ? (
              <>
                <button 
                  onClick={() => onNavigate('profile')}
                  className="text-gray-600 hover:text-[#E07655] transition-colors"
                >
                  <User className="w-6 h-6" />
                </button>
                <button 
                  onClick={onLogoutClick}
                  className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Keluar
                </button>
              </>
            ) : (
              <button 
                onClick={() => onNavigate('login')}
                className="px-4 py-2 bg-[#E07655] text-white rounded-lg hover:bg-[#D86645] transition-colors"
              >
                Masuk
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}