import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Stats from './components/Stats';
import OurClients from './components/OurClients';
import CTA from './components/CTA';
import Enquiry from './components/Enquiry';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-amber-600 selection:text-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Features />
        <Gallery />
        <Stats />
        <OurClients />
        <CTA />
        <Enquiry />
      </main>
      <Footer />
    </div>
  );
};

export default App;