import { useState } from 'react';
import { Mail, Lock, LogIn, Chrome } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
  onNavigate: (page: string) => void;
}

export default function LoginPage({ onLogin, onNavigate }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 px-4 py-12">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-[#E07655] to-[#D86645] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <LogIn className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-gray-900 mb-2">Selamat Datang</h1>
          <p className="text-gray-600">Masuk ke akun Anda</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="text-gray-900 mb-2 block">Alamat Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="budi@example.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-[#E07655] transition-colors"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-gray-900 mb-2 block">Kata Sandi</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-[#E07655] transition-colors"
                  required
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-sm text-gray-600">Ingat saya</span>
              </label>
              <button 
                type="button"
                onClick={() => onNavigate('forgot-password')}
                className="text-sm text-[#E07655] hover:underline"
              >
                Lupa Kata Sandi?
              </button>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full py-3 bg-[#E07655] text-white rounded-lg hover:bg-[#D86645] transition-colors"
            >
              Masuk
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-sm text-gray-500">atau</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Google Login */}
          <button className="w-full py-3 border-2 border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            <Chrome className="w-5 h-5" />
            Masuk dengan Google
          </button>

          {/* Register Link */}
          <p className="text-center text-gray-600 mt-6">
            Belum punya akun?{' '}
            <button 
              onClick={() => onNavigate('register')}
              className="text-[#E07655] hover:underline"
            >
              Daftar
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
