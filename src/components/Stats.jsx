import React from 'react';
import abcBg from '../assets/abc.webp';

const Stats = () => {
  return (
    <section className="w-full relative">
      
      {/* Top Header Band with White Background */}
      <div className="bg-white py-8 md:py-12 px-4 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-kalam text-3xl sm:text-4xl md:text-[42px] font-bold text-black tracking-wide uppercase italic mb-3">
            KADEN KOPPERS INDIA PVT. LTD.
          </h2>
          <p className="text-zinc-900 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed font-sans">
            We keep building good relationships with clients and ensure a great impression. We have a time-bound Client Support System.
          </p>
        </div>
      </div>

      {/* Main Stats Banner with abc.webp Background */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat py-20 md:py-24"
        style={{ backgroundImage: `url(${abcBg})` }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            
            {/* Stat 1: Employees */}
            <div className="flex flex-col items-center">
              <div className="border border-white w-[72px] h-[72px] rounded-md flex items-center justify-center mb-4 transition-transform hover:scale-105 duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <span className="text-3xl sm:text-4xl md:text-[45px] font-sans font-bold text-white block mb-1">
                1200
              </span>
              <span className="text-xs sm:text-sm text-white font-semibold uppercase tracking-wider">
                + EMPLOYEES
              </span>
            </div>

            {/* Stat 2: Location */}
            <div className="flex flex-col items-center">
              <div className="border border-white w-[72px] h-[72px] rounded-md flex items-center justify-center mb-4 transition-transform hover:scale-105 duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <span className="text-3xl sm:text-4xl md:text-[45px] font-sans font-bold text-white block mb-1">
                22
              </span>
              <span className="text-xs sm:text-sm text-white font-semibold uppercase tracking-wider">
                + LOCATION
              </span>
            </div>

            {/* Stat 3: Social Reach */}
            <div className="flex flex-col items-center">
              <div className="border border-white w-[72px] h-[72px] rounded-md flex items-center justify-center mb-4 transition-transform hover:scale-105 duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <span className="text-3xl sm:text-4xl md:text-[45px] font-sans font-bold text-white block mb-1">
                50M
              </span>
              <span className="text-xs sm:text-sm text-white font-semibold uppercase tracking-wider">
                + SOCIAL REACH
              </span>
            </div>

            {/* Stat 4: Happy Customers */}
            <div className="flex flex-col items-center">
              <div className="border border-white w-[72px] h-[72px] rounded-md flex items-center justify-center mb-4 transition-transform hover:scale-105 duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" strokeLinecap="round" strokeWidth="3" />
                  <line x1="15" y1="9" x2="15.01" y2="9" strokeLinecap="round" strokeWidth="3" />
                </svg>
              </div>
              <span className="text-3xl sm:text-4xl md:text-[45px] font-sans font-bold text-white block mb-1">
                140000
              </span>
              <span className="text-xs sm:text-sm text-white font-semibold uppercase tracking-wider">
                + HAPPY CUSTOMERS
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Floating Social Icons Bar on the Right (matches the screenshot placement) */}
      <div className="fixed right-0 top-[20%] md:top-[25%] z-50 flex flex-col gap-2 bg-transparent pointer-events-auto mr-1 sm:mr-2">
        <a 
          href="https://www.facebook.com/Kadenkoppers2020/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#E20074] border border-white/20 hover:bg-[#c60065] text-white flex items-center justify-center shadow-md transition-transform hover:scale-110 duration-200"
          aria-label="Facebook"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
          </svg>
        </a>
        <a 
          href="https://www.instagram.com/kadenkoppers/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#E20074] border border-white/20 hover:bg-[#c60065] text-white flex items-center justify-center shadow-md transition-transform hover:scale-110 duration-200"
          aria-label="Instagram"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/>
          </svg>
        </a>
        <a 
          href="https://youtube.com/@kadenkoppers?si=JrdjROd51BQFgxEF" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#E20074] border border-white/20 hover:bg-[#c60065] text-white flex items-center justify-center shadow-md transition-transform hover:scale-110 duration-200"
          aria-label="YouTube"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.507 9.388.507 9.388.507s7.517 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
        <a 
          href="https://www.kadenkoppers.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#E20074] border border-white/20 hover:bg-[#c60065] text-white flex items-center justify-center shadow-md transition-transform hover:scale-110 duration-200"
          aria-label="Twitter"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
      </div>

    </section>
  );
};

export default Stats;
