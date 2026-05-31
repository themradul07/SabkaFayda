import React from 'react';
import { BeakerIcon, Shirt, Smartphone, Sofa,  } from 'lucide-react';

const categories = [
  {
    id: 'fashion',
    name: 'Fashion & Lifestyle',
    href: '#fashion',
    icon: Shirt,
  },
  {
    id: 'electronics',
    name: 'Electronics',
    href: '#electronics',
    icon: Smartphone,
  },
  {
    id: 'home',
    name: 'Home & Living',
    href: '#home',
    icon: Sofa,
  },
  {
    id: 'kids',
    name: 'Kids & Toys',
    href: '#kids',
    icon: BeakerIcon, // Lucide's Bear icon closely matches the teddy motif
  },
];

export default function CategoryNavigation() {
  return (
    <nav className="w-full bg-white py-6 px-4 border-b border-gray-100">
      <div className="max-w-4xl mx-auto">
        <ul className="grid grid-cols-4 gap-2 sm:gap-6 justify-center items-start">
          {categories.map((category) => {
            const IconComponent = category.icon;
            
            return (
              <li key={category.id} className="text-center">
                <a 
                  href={category.href} 
                  className="group flex flex-col items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-2"
                >
                  {/* Soft-tinted icon container matching the image background */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#f4fbf7] rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-105 group-hover:bg-[#ebf7f0] shadow-sm group-hover:shadow">
                    <IconComponent 
                      className="w-7 h-7 sm:w-8 sm:h-8 text-slate-700 stroke-[1.5] transition-colors duration-200 group-hover:text-emerald-700" 
                    />
                  </div>
                  
                  {/* Category text label */}
                  <span className="mt-3 text-xs sm:text-sm font-semibold text-slate-900 tracking-wide block max-w-[90px] sm:max-w-none leading-tight transition-colors duration-200 group-hover:text-emerald-700">
                    {category.name}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}