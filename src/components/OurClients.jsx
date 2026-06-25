import React, { useState, useEffect, useRef } from 'react';
import logo1 from '../assets/our-clients/1.webp';
import logo2 from '../assets/our-clients/2.webp';
import logo3 from '../assets/our-clients/3.webp';
import logo4 from '../assets/our-clients/4.webp';
import logo5 from '../assets/our-clients/5.webp';
import logo6 from '../assets/our-clients/6.webp';
import logo7 from '../assets/our-clients/7.webp';
import logo8 from '../assets/our-clients/8.webp';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

const OurClients = () => {
  // We duplicate the logos array to achieve seamless infinite loop
  const extendedLogos = [...logos, ...logos, ...logos];
  
  // Start at index of second set (logos.length = 8)
  const [currentIndex, setCurrentIndex] = useState(logos.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const transitionRef = useRef(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      transitionRef.current = true;
      setCurrentIndex((prev) => prev + 1);
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex >= logos.length * 2) {
      // Reached the third set, jump back to second set silently
      setIsTransitioning(false);
      transitionRef.current = false;
      setCurrentIndex(currentIndex - logos.length);
    } else if (currentIndex < logos.length) {
      // Reached the first set, jump to second set silently
      setIsTransitioning(false);
      transitionRef.current = false;
      setCurrentIndex(currentIndex + logos.length);
    }
  };

  return (
    <section className="bg-white py-12 border-b border-zinc-100 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          
          {/* Title block */}
          <div className="flex items-start gap-3 shrink-0 self-start">
            {/* Thick vertical pink bar */}
            <div className="w-[10px] h-12 bg-[#D9118A] rounded-sm"></div>
            
            <div className="flex flex-col">
              <span className="text-zinc-500 font-sans text-xs tracking-widest font-bold uppercase leading-none mb-1">
                OUR
              </span>
              <span className="text-[#D9118A] font-sans text-xl sm:text-2xl font-black tracking-wider uppercase leading-none">
                CLIENTS
              </span>
            </div>
          </div>

          {/* Carousel Viewport Container */}
          <div className="w-full overflow-hidden py-2">
            <div 
              className="flex client-carousel-track"
              style={{
                transform: `translateX(calc(-1 * var(--currentIndex) * (100% / var(--visible-items))))`,
                transition: isTransitioning ? 'transform 0.4s ease-in-out' : 'none',
                '--currentIndex': currentIndex,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedLogos.map((logo, idx) => (
                <div 
                  key={idx}
                  className="shrink-0 p-2 sm:p-3"
                  style={{
                    width: 'calc(100% / var(--visible-items))',
                  }}
                >
                  <div className="bg-white border border-zinc-200/80 rounded-md p-4 w-full aspect-[4/3] flex items-center justify-center shadow-sm hover:shadow-md hover:border-zinc-300 transition-all duration-300">
                    <img 
                      src={logo} 
                      alt={`Client logo ${(idx % logos.length) + 1}`} 
                      className="max-h-full max-w-full object-contain pointer-events-none" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurClients;