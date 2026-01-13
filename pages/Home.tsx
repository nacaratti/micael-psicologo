import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import About from '../components/About';
import Services from '../components/Services';
import Blog from '../components/Blog';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <About />
        <Services />
        <Blog />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
