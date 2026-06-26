import React, { useState } from 'react';
import navbarBg from '../assets/navbar-bg.webp';
import kadenLogo from '../assets/kadenlogo.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = (menuName) => {
    if (activeDropdown === menuName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menuName);
    }
  };

  const productLinks = [
    { name: 'Wedding Resorts & Banquet Halls', href: '#' },
    { name: 'Hotels', href: '#' },
    { name: 'Restaurant Design', href: '#' },
    { name: 'Landscape Design', href: '#' },
    { name: 'SPA Interior Design', href: '#' },
    { name: 'Office Design', href: '#' },
    { name: 'Construction & Consulting', href: '#' },
    { name: 'Fiber Products', href: '#' },
    { name: 'PEB Building', href: '#' },
    { name: 'Automation', href: '#' },
    { name: 'Ceiling Acoustics', href: '#' },
  ];

  const serviceLinks = [
    { name: 'MEP', href: '#' },
    { name: 'Fabrication', href: '#' },
    { name: 'Construction & Renovation', href: '#' },
  ];

  const otherServiceLinks = [
    { name: 'Interior', href: '#' },
    { name: 'Exterior', href: '#' },
    { name: 'Swimming Pool Design', href: '#' },
  ];

  const galleryLinks = [
    { name: 'Wedding Resorts & Banquet Halls', href: '#' },
    { name: 'Hotels', href: '#' },
    { name: 'Restaurant Design', href: '#' },
    { name: 'Landscape Design', href: '#' },
    { name: 'SPA Interior Design', href: '#' },
    { name: 'Office Design', href: '#' },
  ];

  // Shared nav link class — normal state
  const navLinkClass =
    'text-black hover:text-white hover:bg-[#D9118A] transition-colors px-3 py-1.5 rounded-sm text-sm font-medium';

  // Shared dropdown button class
  const dropdownBtnClass =
    'flex items-center gap-1 text-black hover:text-white hover:bg-[#D9118A] transition-colors px-3 py-1.5 rounded-sm text-sm font-medium focus:outline-none';

  return (
    <header
      style={{
        backgroundImage: `url(${navbarBg})`,
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
      }}
      className="text-black sticky top-0 z-50 shadow-md border-b border-zinc-200 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 relative">

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:static lg:translate-x-0 lg:translate-y-0 flex-shrink-0">
            <img
              src={kadenLogo}
              alt="Kaden Koppers Logo"
              className="h-18 sm:h-20 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            <a href="#" className={navLinkClass}>Home</a>
            <a href="#" className={navLinkClass}>About Us</a>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className={dropdownBtnClass}>
                Products
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full mt-1 w-64 bg-white border border-gray-200 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {productLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-5 py-3 text-black hover:bg-[#D9118A] hover:text-white transition-colors text-[13px] border-b border-gray-100 last:border-b-0"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className={dropdownBtnClass}>
                Services
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full mt-1 w-56 bg-white border border-gray-200 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {serviceLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-5 py-3 text-black hover:bg-[#D9118A] hover:text-white transition-colors text-[13px] border-b border-gray-100 last:border-b-0"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Other Services Dropdown */}
            <div className="relative group">
              <button className={dropdownBtnClass}>
                Other Services
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full mt-1 w-56 bg-white border border-gray-200 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {otherServiceLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-5 py-3 text-black hover:bg-[#D9118A] hover:text-white transition-colors text-[13px] border-b border-gray-100 last:border-b-0"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Gallery Dropdown */}
            <div className="relative group">
              <button className={dropdownBtnClass}>
                Gallery
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 top-full mt-1 w-64 bg-white border border-gray-200 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {galleryLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-5 py-3 text-black hover:bg-[#D9118A] hover:text-white transition-colors text-[13px] border-b border-gray-100 last:border-b-0"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <a href="#" className={navLinkClass}>Clients</a>
            <a href="#" className={navLinkClass}>Blog</a>
            <a href="#" className={navLinkClass}>Careers</a>
            <a href="#" className="text-[#D9118A] hover:text-white hover:bg-[#D9118A] transition-colors px-3 py-1.5 rounded-sm text-sm font-medium">Pricing</a>
            <a href="#" className="bg-[#D9118A] hover:bg-[#b80e72] text-white font-semibold px-4 py-2 rounded-sm transition-colors text-sm ml-1">Contact Us</a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-white hover:bg-[#D9118A] focus:outline-none p-2 rounded transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          style={{
            backgroundImage: `url(${navbarBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className="lg:hidden border-t border-zinc-200 px-4 py-4 space-y-1 shadow-xl max-h-[85vh] overflow-y-auto"
        >
          <a href="#" className="block py-2 px-3 text-black hover:text-white hover:bg-[#D9118A] rounded font-medium transition-colors">Home</a>
          <a href="#" className="block py-2 px-3 text-black hover:text-white hover:bg-[#D9118A] rounded font-medium transition-colors">About Us</a>

          {/* Mobile: Products */}
          <div>
            <button
              onClick={() => handleDropdownToggle('products')}
              className="flex items-center justify-between w-full py-2 px-3 text-black hover:text-white hover:bg-[#D9118A] rounded font-medium transition-colors"
            >
              Products
              <svg className={`w-4 h-4 transform transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'products' && (
              <div className="ml-4 mt-1 bg-white border border-gray-200 rounded shadow-md">
                {productLinks.map((link) => (
                  <a key={link.name} href={link.href} className="block px-4 py-2.5 text-black hover:bg-[#D9118A] hover:text-white transition-colors text-xs border-b border-gray-100 last:border-b-0">
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Mobile: Services */}
          <div>
            <button
              onClick={() => handleDropdownToggle('services')}
              className="flex items-center justify-between w-full py-2 px-3 text-black hover:text-white hover:bg-[#D9118A] rounded font-medium transition-colors"
            >
              Services
              <svg className={`w-4 h-4 transform transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'services' && (
              <div className="ml-4 mt-1 bg-white border border-gray-200 rounded shadow-md">
                {serviceLinks.map((link) => (
                  <a key={link.name} href={link.href} className="block px-4 py-2.5 text-black hover:bg-[#D9118A] hover:text-white transition-colors text-xs border-b border-gray-100 last:border-b-0">
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Mobile: Other Services */}
          <div>
            <button
              onClick={() => handleDropdownToggle('other-services')}
              className="flex items-center justify-between w-full py-2 px-3 text-black hover:text-white hover:bg-[#D9118A] rounded font-medium transition-colors"
            >
              Other Services
              <svg className={`w-4 h-4 transform transition-transform ${activeDropdown === 'other-services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'other-services' && (
              <div className="ml-4 mt-1 bg-white border border-gray-200 rounded shadow-md">
                {otherServiceLinks.map((link) => (
                  <a key={link.name} href={link.href} className="block px-4 py-2.5 text-black hover:bg-[#D9118A] hover:text-white transition-colors text-xs border-b border-gray-100 last:border-b-0">
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Mobile: Gallery */}
          <div>
            <button
              onClick={() => handleDropdownToggle('gallery')}
              className="flex items-center justify-between w-full py-2 px-3 text-black hover:text-white hover:bg-[#D9118A] rounded font-medium transition-colors"
            >
              Gallery
              <svg className={`w-4 h-4 transform transition-transform ${activeDropdown === 'gallery' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'gallery' && (
              <div className="ml-4 mt-1 bg-white border border-gray-200 rounded shadow-md">
                {galleryLinks.map((link) => (
                  <a key={link.name} href={link.href} className="block px-4 py-2.5 text-black hover:bg-[#D9118A] hover:text-white transition-colors text-xs border-b border-gray-100 last:border-b-0">
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#" className="block py-2 px-3 text-black hover:text-white hover:bg-[#D9118A] rounded font-medium transition-colors">Clients</a>
          <a href="#" className="block py-2 px-3 text-black hover:text-white hover:bg-[#D9118A] rounded font-medium transition-colors">Blog</a>
          <a href="#" className="block py-2 px-3 text-black hover:text-white hover:bg-[#D9118A] rounded font-medium transition-colors">Careers</a>
          <a href="#" className="block py-2 px-3 text-[#D9118A] hover:text-white hover:bg-[#D9118A] rounded font-medium transition-colors">Pricing</a>
          <a href="#" className="block text-center bg-[#D9118A] hover:bg-[#b80e72] text-white font-semibold px-4 py-2.5 rounded transition-colors mt-2">Contact Us</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
