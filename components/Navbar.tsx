
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
    <>
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 6px rgba(0, 109, 119, 0.3), 0 0 12px rgba(0, 109, 119, 0.15);
          }
          50% {
            box-shadow: 0 0 10px rgba(0, 109, 119, 0.4), 0 0 18px rgba(0, 109, 119, 0.25);
          }
        }

        @keyframes arrow-in {
          0% {
            opacity: 0.6;
            transform: translateX(-6px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes shine {
          0% {
            left: -40%;
          }
          100% {
            left: 140%;
          }
        }

        .cta-button {
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          animation: pulse-glow 2.5s infinite ease-in-out;
        }

        .cta-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -40%;
          width: 40%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.5), transparent);
          z-index: 1;
          opacity: 0;
        }

        .cta-button:hover::before {
          animation: shine 1.5s ease-in-out;
          opacity: 1;
        }

        .cta-button .cta-arrow {
          opacity: 0.6;
          transform: translateX(-6px);
          transition: all 0.3s ease;
        }

        .cta-button:hover .cta-arrow {
          animation: arrow-in 0.6s ease-in-out forwards;
        }
      `}</style>
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/30 backdrop-blur-lg border-b border-white/20 shadow-lg ${scrolled ? 'py-4' : 'py-6'}`}>
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
          <a href="https://wa.me/5533984435353?text=Olá.%20Eu%20estou%20vendo%20o%20seu%20site%20e%20gostaria%20de%20tirar%20umas%20dúvidas." target="_blank" rel="noopener noreferrer" className="relative bg-[#006D77] text-white px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 overflow-hidden cta-button">
            <span className="relative z-10">Agendar Atendimento</span> <span className="relative z-10 text-lg cta-arrow">→</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#006D77]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg absolute top-full left-0 right-0 shadow-xl p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <a href="#home" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium text-lg">Início</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium text-lg">Sobre</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium text-lg">Serviços</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium text-lg">Contato</a>
          <a href="https://wa.me/5533984435353?text=Olá.%20Eu%20estou%20vendo%20o%20seu%20site%20e%20gostaria%20de%20tirar%20umas%20dúvidas." target="_blank" rel="noopener noreferrer" className="relative bg-[#006D77] text-white px-6 py-4 rounded-xl font-bold text-center overflow-hidden cta-button">
            <span className="relative z-10">Agendar Atendimento</span>
          </a>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;
