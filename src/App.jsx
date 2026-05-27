import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SplitCTA from './components/SplitCTA';
import PhotoRow from './components/PhotoRow';
import About from './components/About';
import ElectricianFull from './components/ElectricianFull';
import Services from './components/Services';
import ServicesBanner from './components/ServicesBanner';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SplitCTA />
        <PhotoRow />
        <About />
        <ElectricianFull />
        <Services />
        <ServicesBanner />
        <Testimonials />
        <Gallery />
        <Pricing />
        <Blog />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
