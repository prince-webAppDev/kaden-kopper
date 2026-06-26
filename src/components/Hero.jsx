import React, { useState, useEffect } from 'react';
import img1 from '../assets/heroSectionBackgrond/img1.webp';
import img2 from '../assets/heroSectionBackgrond/img2.webp';
import img3 from '../assets/heroSectionBackgrond/img3.jfif';
import img4 from '../assets/heroSectionBackgrond/img4.jfif';
import img5 from '../assets/heroSectionBackgrond/img5.jfif';
import img6 from '../assets/heroSectionBackgrond/img6.jfif';
import img7 from '../assets/heroSectionBackgrond/img7.jfif';

const Hero = () => {
  const slides = [
    { img: img1, id: 0 },
    { img: img2, id: 1 },
    { img: img3, id: 2 },
    { img: img4, id: 3 },
    { img: img5, id: 4 },
    { img: img6, id: 5 },
    { img: img7, id: 6 },
  ];

  // Extended slides array to achieve smooth infinite looping without reverse-sliding jumps
  const extendedSlides = [
    slides[slides.length - 1], // Slide 7 (index 0 for cloning)
    ...slides,                 // Slide 1 to 7 (index 1 to 7)
    slides[0],                 // Slide 1 (index 8 for cloning)
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Start on the first actual slide
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Typing effect state for first image (id: 0)
  const words = ['Apartment', 'House', 'Plaza'];
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect logic for "Apartment", "House", "Plaza"
  useEffect(() => {
    let timer;
    const activeWord = words[wordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, 100);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) => activeWord.slice(0, prev.length + 1));
      }, 150);
    }

    // Determine state changes (finished typing or finished deleting)
    if (!isDeleting && currentText === activeWord) {
      timer = setTimeout(() => setIsDeleting(true), 2000); // Pause on fully typed word
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length); // Cycle to next word
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex]);

  // Auto-advance carousel slides
  useEffect(() => {
    const timer = setInterval(() => {
      if (document.hidden) return; // Pause carousel if page is in background to prevent out-of-bounds errors
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Safety guard to prevent going out of bounds (e.g. if transition events are missed/throttled)
  useEffect(() => {
    if (currentIndex >= extendedSlides.length) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    } else if (currentIndex < 0) {
      setIsTransitioning(false);
      setCurrentIndex(slides.length);
    }
  }, [currentIndex, extendedSlides.length, slides.length]);

  // Handle wrap-around transitions seamlessly
  const handleTransitionEnd = () => {
    if (currentIndex === extendedSlides.length - 1) {
      setIsTransitioning(false); // Disable animation
      setCurrentIndex(1);       // Teleport to original Slide 1
    } else if (currentIndex === 0) {
      setIsTransitioning(false); // Disable animation
      setCurrentIndex(slides.length); // Teleport to original Slide 7
    }
  };

  // Re-enable transition rules after the layout updates from reset-jump
  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  const handleIndicatorClick = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index + 1);
  };

  return (
    <div className="relative h-[42.5vh] sm:h-[85vh] w-full overflow-hidden bg-zinc-950 font-sans">
      {/* Slides Container */}
      <div
        className={`absolute inset-0 flex ${
          isTransitioning ? 'transition-transform duration-1000 ease-in-out' : 'transition-none'
        }`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedSlides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            {/* Subtle Dark Overlay to help white text readability on bright images */}
            <div className="absolute inset-0 bg-black/15 z-10" />
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover object-top"
            />

            {/* Hero Content Overlay (placed inside each slide so that it slides with the image) */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 px-4 sm:px-6 lg:px-8">
              {slide.id === 0 ? (
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white max-w-6xl leading-tight mb-6 tracking-wide drop-shadow-[0_3px_5px_rgba(0,0,0,0.8)] [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)]">
                  Welcome to Kaden Kopper <span className="text-white">{currentText}</span>
                  <span className="font-light animate-pulse ml-1 text-white">|</span>
                </h1>
              ) : (
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white max-w-6xl leading-tight mb-6 tracking-wide drop-shadow-[0_3px_5px_rgba(0,0,0,0.8)] [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)]">
                  KADEN KOPPERS INDIA PVT. LTD.
                </h1>
              )}

              {/* Semi-transparent description box */}
              <div className="hidden lg:block bg-white/80 backdrop-blur-[1px] py-4 px-6 sm:px-10 md:px-16 max-w-6xl w-11/12 border border-white/10 shadow-lg">
                <p className="text-zinc-950 text-xs sm:text-sm md:text-base lg:text-lg font-serif italic font-medium leading-relaxed">
                  The expertise area of KADEN KOPPERS is to provide full satisfactory services to our customers on single platforms with good quality products and prompt services at their door.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2.5 z-30">
        {slides.map((_, index) => {
          let isActive = false;
          if (currentIndex === 0) {
            isActive = index === slides.length - 1;
          } else if (currentIndex === extendedSlides.length - 1) {
            isActive = index === 0;
          } else {
            isActive = index === currentIndex - 1;
          }

          return (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`w-7 h-[2px] transition-all duration-300 cursor-pointer ${
                isActive ? 'bg-white opacity-100 scale-x-110' : 'bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
