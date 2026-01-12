
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Quote Section (Mini component inline for context) */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="flex flex-col md:flex-row items-center gap-12 bg-[#F8FBFC] p-12 rounded-[3rem] border border-gray-100">
               <div className="flex-shrink-0 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img src="https://picsum.photos/seed/freud/200/200" alt="Sigmund Freud" className="w-full h-full object-cover" />
               </div>
               <div className="text-left space-y-6">
                 <span className="text-4xl text-[#006D77] block opacity-30 italic">"</span>
                 <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-tight">
                    Nós somos feitos do que não lembramos, e agimos segundo o que esquecemos.
                 </p>
                 <div className="flex items-center justify-between">
                    <p className="font-bold text-[#006D77] uppercase tracking-widest text-sm">Sigmund Freud</p>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-full border border-gray-200 hover:bg-white transition-colors">←</button>
                      <button className="p-2 rounded-full border border-gray-200 hover:bg-white transition-colors">→</button>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        <Benefits />
        <About />
        <Services />
        <Blog />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
