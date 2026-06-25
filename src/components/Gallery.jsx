import React, { useState } from 'react';
import navbarBg from '../assets/navbar-bg.webp';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('Wedding Resorts & Banquet Halls');

  const categories = [
    'Wedding Resorts & Banquet Halls',
    'Hotels',
    'Restaurant Design',
    'Landscape Design',
    'SPA Interior Design',
    'Office Design',
    'Construction & Consulting',
    'Fiber Products',
    'PEB Building',
    'Automation',
    'Ceiling Acoustics',
  ];

  return (
    <section
      id="gallery"
      className="py-10 font-sans"
      style={{
        backgroundImage: `url(${navbarBg})`,
        backgroundSize: 'auto',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-12 bg-[#D9118A] shrink-0"></div>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase leading-none tracking-tight">
            <span className="text-zinc-500 block text-sm font-semibold tracking-widest mb-0.5">OUR</span>
            <span className="text-[#D9118A]">GALLERY</span>
          </h2>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-sm text-xs sm:text-sm font-medium border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#D9118A] text-white border-[#D9118A]'
                  : 'bg-transparent text-zinc-800 border-[#D9118A] hover:bg-[#D9118A] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
