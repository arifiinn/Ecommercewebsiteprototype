import { useState } from 'react';
import { Home, List, MessageCircle, Users, User, Upload, LayoutDashboard, LogOut } from 'lucide-react';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ChatPage from './pages/ChatPage';
import CommunityChatPage from './pages/CommunityChatPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ProfilePage from './pages/ProfilePage';
import UploadProductPage from './pages/UploadProductPage';
import SellerDashboardPage from './pages/SellerDashboardPage';
import Navbar from './components/Navbar';
import LogoutModal from './components/LogoutModal';

type Page = 'home' | 'products' | 'product-detail' | 'chat' | 'community' | 'register' | 'login' | 'forgot-password' | 'profile' | 'upload' | 'dashboard';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [selectedChatSeller, setSelectedChatSeller] = useState<any | null>(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowLogoutModal(false);
    setCurrentPage('home');
  };

  const handleProductClick = (productId: number) => {
    setSelectedProductId(productId);
    setCurrentPage('product-detail');
  };

  const handleChatWithSeller = (seller: any) => {
    setSelectedChatSeller(seller);
    setCurrentPage('chat');
  };

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        isLoggedIn={isLoggedIn} 
        onNavigate={navigateTo}
        onLogoutClick={() => setShowLogoutModal(true)}
      />
      
      <main>
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={navigateTo}
            onProductClick={handleProductClick}
          />
        )}
        {currentPage === 'products' && (
          <ProductListingPage onProductClick={handleProductClick} />
        )}
        {currentPage === 'product-detail' && (
          <ProductDetailPage 
            productId={selectedProductId}
            onChatWithSeller={handleChatWithSeller}
            onNavigate={navigateTo}
          />
        )}
        {currentPage === 'chat' && (
          <ChatPage seller={selectedChatSeller} />
        )}
        {currentPage === 'community' && (
          <CommunityChatPage onProductClick={handleProductClick} />
        )}
        {currentPage === 'register' && (
          <RegisterPage onNavigate={navigateTo} />
        )}
        {currentPage === 'login' && (
          <LoginPage 
            onLogin={handleLogin}
            onNavigate={navigateTo}
          />
        )}
        {currentPage === 'forgot-password' && (
          <ForgotPasswordPage onNavigate={navigateTo} />
        )}
        {currentPage === 'profile' && (
          <ProfilePage 
            isLoggedIn={isLoggedIn}
            onNavigate={navigateTo}
            onProductClick={handleProductClick}
          />
        )}
        {currentPage === 'upload' && (
          <UploadProductPage 
            isLoggedIn={isLoggedIn}
            onNavigate={navigateTo}
          />
        )}
        {currentPage === 'dashboard' && (
          <SellerDashboardPage 
            isLoggedIn={isLoggedIn}
            onNavigate={navigateTo}
            onProductClick={handleProductClick}
          />
        )}
      </main>

      {showLogoutModal && (
        <LogoutModal 
          onConfirm={handleLogout}
          onCancel={() => setShowLogoutModal(false)}
        />
      )}
    </div>
  );
}
