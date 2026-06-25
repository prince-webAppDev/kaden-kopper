import React from 'react';
import img1 from '../assets/products/1.webp';
import img2 from '../assets/products/2.webp';
import img3 from '../assets/products/3.webp';
import img4 from '../assets/products/4.webp';
import img5 from '../assets/products/5.webp';
import img6 from '../assets/products/6.webp';
import img7 from '../assets/products/7.webp';
import img8 from '../assets/products/8.webp';
import img9 from '../assets/products/9.webp';
import img10 from '../assets/products/10.webp';
import img11 from '../assets/products/11.webp';

const Products = () => {
  const productsList = [
    { name: 'Wedding Resorts & Banquet Halls', img: img1 },
    { name: 'Hotels', img: img2 },
    { name: 'Restaurant Design', img: img3 },
    { name: 'Landscape Design', img: img4 },
    { name: 'SPA Interior Design', img: img5 },
    { name: 'Office Design', img: img6 },
    { name: 'Construction & Consulting', img: img7 },
    { name: 'Fiber Products', img: img8 },
    { name: 'PEB Building', img: img9 },
    { name: 'Automation', img: img10 },
    { name: 'Ceiling Acoustics', img: img11 },
  ];

  return (
    <section id="products" className="py-12 bg-[#F9FAFB] text-zinc-900 font-sans">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8 px-4 md:px-8">
        {/* Pink vertical accent line */}
        <div className="w-1.5 h-12 bg-[#D9118A] shrink-0"></div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D9118A] uppercase leading-none tracking-tight">
          OUR<br />PRODUCTS
        </h2>
      </div>

      {/* Full-width Product Rows */}
      <div className="flex flex-col w-full">
        {productsList.map((product, index) => (
          <div 
            key={index}
            className="group relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px] overflow-hidden cursor-pointer border-b border-white/5"
          >
            {/* Image Container with hidden overflow */}
            <div className="w-full h-full overflow-hidden">
              <img 
                src={product.img} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-105"
              />
            </div>
            
            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
            
            {/* Info Overlay (Positioned bottom-left) */}
            <div className="absolute bottom-8 left-6 md:left-12 z-20 flex flex-col items-start select-none">
              <h3 className="text-white text-lg sm:text-2xl md:text-3xl font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-transform duration-700 ease-out group-hover:-translate-y-3">
                {product.name}
              </h3>
              <a 
                href="#contact"
                className="mt-2 bg-[#D9118A] hover:bg-[#b80e72] text-white font-semibold text-xs uppercase tracking-wider px-5 py-2.5 transition-all duration-700 ease-out transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Products;
