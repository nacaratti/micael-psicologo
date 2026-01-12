
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-[#006D77] font-bold text-xl">+ Psicólogo Clínico</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-700 hover:text-[#006D77] transition-colors font-medium">Início</a>
          <a href="#about" className="text-gray-700 hover:text-[#006D77] transition-colors font-medium">Sobre</a>
          <a href="#services" className="text-gray-700 hover:text-[#006D77] transition-colors font-medium">Serviços</a>
          <a href="#contact" className="text-gray-700 hover:text-[#006D77] transition-colors font-medium">Contato</a>
          <button className="bg-[#006D77] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#005f66] transition-all flex items-center gap-2">
            Agendar Atendimento <span className="text-lg">→</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#006D77]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-xl p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <a href="#home" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium text-lg">Início</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium text-lg">Sobre</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium text-lg">Serviços</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium text-lg">Contato</a>
          <button className="bg-[#006D77] text-white px-6 py-4 rounded-xl font-bold">
            Agendar Atendimento
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
