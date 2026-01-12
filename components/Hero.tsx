
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
            <a href="https://wa.me/5533984435353?text=Olá.%20Eu%20estou%20vendo%20o%20seu%20site%20e%20gostaria%20de%20tirar%20umas%20dúvidas." target="_blank" rel="noopener noreferrer" className="bg-[#006D77] text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all flex items-center gap-2">
              Contato <span className="text-xl">→</span>
            </a>
            <a href="https://wa.me/5533984435353?text=Olá.%20Eu%20estou%20vendo%20o%20seu%20site%20e%20gostaria%20de%20tirar%20umas%20dúvidas." target="_blank" rel="noopener noreferrer" className="border-2 border-gray-200 text-gray-800 px-8 py-4 rounded-full font-bold hover:bg-white hover:border-[#006D77] transition-all">
              WhatsApp ↗
            </a>
          </div>

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
