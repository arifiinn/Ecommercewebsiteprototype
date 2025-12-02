import { TrendingUp, Eye, Package, DollarSign, Bell, MoreVertical } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Footer from '../components/Footer';

interface SellerDashboardPageProps {
  isLoggedIn: boolean;
  onNavigate: (page: string) => void;
  onProductClick: (productId: number) => void;
}

export default function SellerDashboardPage({ isLoggedIn, onNavigate, onProductClick }: SellerDashboardPageProps) {
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h2 className="text-gray-900 mb-4">Please Login</h2>
          <p className="text-gray-600 mb-6">You need to be logged in to view the dashboard</p>
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

  const monthlySalesData = [
    { month: 'Jun', sales: 4200 },
    { month: 'Jul', sales: 5100 },
    { month: 'Aug', sales: 4800 },
    { month: 'Sep', sales: 6200 },
    { month: 'Oct', sales: 7100 },
    { month: 'Nov', sales: 8500 }
  ];

  const weeklyViewsData = [
    { day: 'Mon', views: 245 },
    { day: 'Tue', views: 312 },
    { day: 'Wed', views: 289 },
    { day: 'Thu', views: 401 },
    { day: 'Fri', views: 378 },
    { day: 'Sat', views: 456 },
    { day: 'Sun', views: 423 }
  ];

  const products = [
    { id: 1, name: 'Modern Leather Sofa', status: 'Active', views: 342, price: 899, date: 'Nov 20, 2025' },
    { id: 2, name: 'Vintage Camera', status: 'Active', views: 198, price: 450, date: 'Nov 18, 2025' },
    { id: 3, name: 'Designer Watch', status: 'Sold', views: 512, price: 1200, date: 'Nov 15, 2025' },
    { id: 4, name: 'Gaming Laptop', status: 'Active', views: 287, price: 1500, date: 'Nov 12, 2025' },
    { id: 5, name: 'Wooden Dining Table', status: 'Draft', views: 0, price: 750, date: 'Nov 10, 2025' }
  ];

  const notifications = [
    { id: 1, message: 'New message from buyer about "Modern Leather Sofa"', time: '5m ago', unread: true },
    { id: 2, message: 'Your listing "Vintage Camera" was viewed 15 times today', time: '1h ago', unread: true },
    { id: 3, message: 'Price drop suggestion for "Gaming Laptop"', time: '3h ago', unread: false },
    { id: 4, message: 'New review received (5 stars)', time: '1d ago', unread: false }
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Seller Dashboard</h1>
          <p className="text-gray-600">Track your sales and manage your listings</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-emerald-600" />
              </div>
              <span className="text-emerald-600 text-sm flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +12%
              </span>
            </div>
            <p className="text-gray-600 mb-1">Total Sales</p>
            <p className="text-2xl text-gray-900">$8,500</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-blue-600 text-sm flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +8%
              </span>
            </div>
            <p className="text-gray-600 mb-1">Total Views</p>
            <p className="text-2xl text-gray-900">2,504</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <p className="text-gray-600 mb-1">Active Listings</p>
            <p className="text-2xl text-gray-900">3</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-orange-600 text-sm flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +15%
              </span>
            </div>
            <p className="text-gray-600 mb-1">Conversion Rate</p>
            <p className="text-2xl text-gray-900">3.2%</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Monthly Sales Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-gray-900 mb-6">Monthly Sales</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlySalesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="sales" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  dot={{ fill: '#10b981', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Weekly Views Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-gray-900 mb-6">Weekly Product Views</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyViewsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="views" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Products Table and Notifications */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Products Table */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-900">My Products</h3>
                <button 
                  onClick={() => onNavigate('upload')}
                  className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm"
                >
                  Add Product
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs text-gray-600">Product</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-600">Status</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-600">Views</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-600">Price</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-600">Date</th>
                    <th className="px-6 py-3 text-left text-xs text-gray-600"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <p className="text-gray-900">{product.name}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          product.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                          product.status === 'Sold' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {product.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{product.views}</td>
                      <td className="px-6 py-4 text-gray-900">${product.price}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{product.date}</td>
                      <td className="px-6 py-4">
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Notifications Panel */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-900">Notifications</h3>
                <Bell className="w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {notifications.map((notification) => (
                <div 
                  key={notification.id}
                  className={`p-4 hover:bg-gray-50 cursor-pointer ${
                    notification.unread ? 'bg-emerald-50' : ''
                  }`}
                >
                  <p className="text-sm text-gray-900 mb-1">{notification.message}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-200 text-center">
              <button className="text-sm text-emerald-600 hover:text-emerald-700">
                View All Notifications
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
