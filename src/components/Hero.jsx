import React, { useState, useEffect } from 'react';
import img1 from '../assets/heroSectionBackgrond/img1.webp';
import img2 from '../assets/heroSectionBackgrond/img2.webp';
import img3 from '../assets/heroSectionBackgrond/img3.jfif';
import img4 from '../assets/heroSectionBackgrond/img4.jfif';
import img5 from '../assets/heroSectionBackgrond/img5.jfif';
import img6 from '../assets/heroSectionBackgrond/img6.jfif';
import img7 from '../assets/heroSectionBackgrond/img7.jfif';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [img1, img2, img3, img4, img5, img6, img7];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[85vh] w-full overflow-hidden bg-zinc-950 font-sans">
      {/* Slides Background */}
      {slides.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Subtle Dark Overlay to help white text readability on bright images */}
          <div className="absolute inset-0 bg-black/15 z-10" />
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover object-top transform scale-100"
          />
        </div>
      ))}

      {/* Static Hero Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white max-w-6xl leading-tight mb-6 tracking-wide drop-shadow-[0_3px_5px_rgba(0,0,0,0.8)] [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)]">
          KADEN KOPPERS INDIA PVT. LTD.
        </h1>
        
        {/* Semi-transparent description box */}
        <div className="bg-white/80 backdrop-blur-[1px] py-4 px-6 sm:px-10 md:px-16 max-w-6xl w-11/12 border border-white/10 shadow-lg">
          <p className="text-zinc-950 text-xs sm:text-sm md:text-base lg:text-lg font-serif italic font-medium leading-relaxed">
            The expertise area of KADEN KOPPERS is to provide full satisfactory services to our customers on single platforms with good quality products and prompt services at their door.
          </p>
        </div>
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2.5 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-7 h-[2px] transition-all duration-300 cursor-pointer ${
              index === currentSlide ? 'bg-white opacity-100 scale-x-110' : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
