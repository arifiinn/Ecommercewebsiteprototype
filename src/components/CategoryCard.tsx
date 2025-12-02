import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  name: string;
  icon: LucideIcon;
  count: number;
  onClick: () => void;
}

export default function CategoryCard({ name, icon: Icon, count, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:scale-105 flex flex-col items-center gap-3"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center">
        <Icon className="w-8 h-8 text-[#E07655]" />
      </div>
      <div className="text-center">
        <h3 className="text-gray-900 mb-1">{name}</h3>
        <p className="text-gray-500 text-sm">{count} barang</p>
      </div>
    </button>
  );
}