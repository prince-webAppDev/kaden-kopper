import React from 'react';
import placeholderImage from '../assets/aboutus.webp';

const About = () => {
  return (
    <section id="about" className="py-4 bg-white text-zinc-900 font-sans overflow-hidden">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 items-center">
          
          {/* Visual Showcase (Image side) */}
          <div className="overflow-hidden shadow-lg border border-zinc-150">
            <img 
              src={placeholderImage} 
              alt="Who We Are - Kaden Koppers Showcase" 
              className="w-full h-auto max-h-[480px] object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-start gap-3">
              {/* Pink vertical line accent */}
              <div className="w-1.5 h-12 bg-[#D9118A] shrink-0"></div>
              <div>
                <span className="text-zinc-500 font-medium tracking-wider text-xs uppercase block">
                  ABOUT US
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#D9118A] uppercase leading-tight">
                  WHO WE ARE
                </h2>
              </div>
            </div>
            
            <div className="text-zinc-800 space-y-4 text-sm sm:text-[15px] leading-relaxed">
              <p>
                <strong>KADEN KOPPERS INDIA PVT. LTD.</strong> is a B&K Group Company and a fully dedicated team of professionals who are well-qualified in their area of expertise and having professional experience more than 20 years in the construction industry.
              </p>
              <p>
                The expertise area of <strong>KADEN KOPPERS</strong> is to provide full satisfactory services to <strong>KADEN KOPPERS</strong> customers on single platforms with good quality products and prompt services at their door.
              </p>
              <p>
                <strong>KADEN KOPPERS</strong> deals with multi-brands with multi-product services in the building material and construction industry. <strong>KADEN KOPPERS</strong> team of professionals has expertise in wedding resorts & banquets, Hotels, Farm houses, office space, residences, Retail, food chains, and various Infrastructure projects.
              </p>
              <p>
                Qualified masters of India's Interior Designing Company <strong>"KADEN KOPPERS"</strong> perform high finishing and fit-out works. We own innovative and traditional technologies and comply with as India and international standards of all building codes and fire prevention rules based on technical and architectural documentation. Our Wedding venues and all other projects follow all vastu parameters by our expert team of consultant.
              </p>
            </div>

            <div className="pt-2">
              <a 
                href="#contact" 
                className="text-[#D9118A] hover:text-[#b80e72] font-semibold text-sm transition-colors hover:underline"
              >
                Read more...
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

