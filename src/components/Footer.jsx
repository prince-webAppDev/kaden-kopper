import React from 'react';
import kadenLogo from '../assets/kadenlogo.webp';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#fffcf5] text-zinc-800 font-sans border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Left Side: Company Info */}
            <div className="space-y-6 max-w-lg">
              <img src={kadenLogo} alt="Kaden Koppers" className="h-16 object-contain" />
              <p className="text-zinc-700 text-sm leading-relaxed">
                KADEN KOPPERS INDIA PVT. LTD. is a B&K Group Company and a fully dedicated team of professionals who are well-qualified in their area of expertise and having professional experience more than 20 years.
              </p>
            </div>

            {/* Right Side: Contact Us */}
            <div>
              <div className="mb-6">
                <h4 className="text-xl font-medium text-zinc-900 inline-block pb-1 border-b-2 border-[#D9118A]">
                  Contact Us
                </h4>
              </div>
              <ul className="space-y-5 text-sm text-zinc-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-zinc-800 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>
                    108, First Floor, DLF Galleria Mall, Mayur Vihar,<br />
                    Phase-1 Extention, Near Metro Mayur Vihar<br />
                    Extention, New Delhi - 110091
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-zinc-800 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+919311826565" className="text-[#D9118A] hover:underline font-medium">
                    +91-9311826565
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-zinc-800 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <a href="mailto:info@kadenkoppers.com" className="text-[#D9118A] hover:underline font-medium">
                    info@kadenkoppers.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lower Footer */}
        <div className="bg-white py-4 border-t border-zinc-100 shadow-[inset_0_4px_10px_rgba(0,0,0,0.02)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-zinc-600 gap-4 text-center sm:text-left">
            <p>
              © Copyright 2026 - All Rights Reserved. <span className="text-[#D9118A]">♥</span> KADEN KOPPERS.
            </p>
            <p>
              Developed by :{' '}
              <a 
                href="https://www.ambeytech.in" 
                target="_blank" 
                rel="noreferrer" 
                className="text-[#D9118A] hover:underline font-medium"
              >
                www.ambeytech.in
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 left-6 z-50">
        <a 
          href="https://api.whatsapp.com/send?phone=9311826565" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center justify-center w-[60px] h-[60px] bg-[#25D366] text-white rounded-full shadow-xl hover:scale-105 hover:bg-[#20b858] transition-all"
          aria-label="WhatsApp"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={scrollToTop}
          className="flex items-center justify-center w-[48px] h-[48px] bg-[#D9118A] text-white rounded-sm shadow-xl hover:scale-105 hover:bg-[#b00d70] transition-all"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 9l7-7 7 7" className="opacity-50" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Footer;
