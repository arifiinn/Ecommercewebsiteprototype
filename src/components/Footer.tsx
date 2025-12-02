import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white mb-4">Tentang BekasKita</h3>
            <p className="text-sm text-gray-400">
              Platform jual beli barang bekas terpercaya untuk jual beli lokal yang aman dan mudah.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>support@bekaskita.id</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Link Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#E07655] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#E07655] transition-colors">Cara Jual</a></li>
              <li><a href="#" className="hover:text-[#E07655] transition-colors">Tips Aman</a></li>
              <li><a href="#" className="hover:text-[#E07655] transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-[#E07655] transition-colors">Kebijakan Privasi</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white mb-4">Ikuti Kami</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E07655] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E07655] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#E07655] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          © 2025 BekasKita. Hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}