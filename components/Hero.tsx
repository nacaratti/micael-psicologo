
import React from 'react';
import { CheckCircle, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 bg-[#F8FBFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in slide-in-from-left duration-1000">
          <h1 className="text-4xl md:text-6xl  text-gray-900 leading-[1.1]">
            Terapia online onde você estiver, com sessões seguras e flexíveis.
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            Dar o primeiro passo para cuidar da sua saúde mental é um ato de coragem.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="https://wa.me/5533984435353?text=Olá.%20Eu%20estou%20vendo%20o%20seu%20site%20e%20gostaria%20de%20tirar%20umas%20dúvidas." target="_blank" rel="noopener noreferrer" className="relative bg-[#006D77] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 overflow-hidden cta-button">
              <span className="relative z-10">Contato</span>
              <span className="relative z-10 text-xl cta-arrow">→</span>
            </a>
            <a href="https://wa.me/5533984435353?text=Olá.%20Eu%20estou%20vendo%20o%20seu%20site%20e%20gostaria%20de%20tirar%20umas%20dúvidas." target="_blank" rel="noopener noreferrer" className="relative border-2 border-gray-200 bg-white text-gray-800 px-8 py-4 rounded-full font-bold flex items-center gap-2 overflow-hidden cta-button-white">
              <span className="relative z-10">WhatsApp</span>
              <span className="relative z-10 cta-arrow">↗</span>
            </a>
          </div>

          <style jsx>{`
            @keyframes pulse-glow {
              0%, 100% {
                box-shadow: 0 0 6px rgba(0, 109, 119, 0.3), 0 0 12px rgba(0, 109, 119, 0.15);
              }
              50% {
                box-shadow: 0 0 10px rgba(0, 109, 119, 0.4), 0 0 18px rgba(0, 109, 119, 0.25);
              }
            }

            @keyframes pulse-glow-white {
              0%, 100% {
                box-shadow: 0 0 4px rgba(200, 200, 200, 0.3), 0 0 8px rgba(200, 200, 200, 0.15);
              }
              50% {
                box-shadow: 0 0 8px rgba(0, 109, 119, 0.3), 0 0 14px rgba(0, 109, 119, 0.2);
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
              animation: shine 1.0s ease-in-out;
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

            .cta-button-white {
              transition: all 0.3s ease;
            }

            .cta-button-white:hover {
              animation: pulse-glow-white 2.5s infinite ease-in-out;
            }

            .cta-button-white::before {
              content: "";
              position: absolute;
              top: 0;
              left: -40%;
              width: 40%;
              height: 100%;
              background: linear-gradient(120deg, transparent, rgba(0, 109, 119, 0.2), transparent);
              z-index: 1;
              opacity: 0;
            }

            .cta-button-white:hover::before {
              animation: shine 1.0s ease-in-out;
              opacity: 1;
            }

            .cta-button-white .cta-arrow {
              opacity: 0.6;
              transform: translateX(-6px);
              transition: all 0.3s ease;
            }

            .cta-button-white:hover .cta-arrow {
              animation: arrow-in 0.6s ease-in-out forwards;
            }
          `}</style>

          <div className="flex flex-wrap gap-8 pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-full shadow-sm">
                <ShieldCheck className="w-6 h-6 text-[#006D77]" />
              </div>
              <div>
                <p className="font-bold text-gray-900 leading-none">Psicólogo Clínico</p>
                <p className="text-sm text-gray-500">CRP-04/74923</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-full shadow-sm">
                <CheckCircle className="w-6 h-6 text-[#006D77]" />
              </div>
              <div>
                <p className="font-bold text-gray-900 leading-none">Ética e qualidade</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative animate-in zoom-in duration-1000">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
            <img
              src="/images/micael01-opt.jpg"
              alt="Micael Saturnino"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white/80 text-sm mb-1 uppercase tracking-widest font-medium">Psicólogo</p>
              <h3 className="text-white text-3xl font-bold">Micael Saturnino</h3>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#83C5BE]/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#006D77]/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
