
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Call to Action Banner */}
        <div className="bg-[#006D77] rounded-[3rem] p-12 md:p-20 text-center text-white mb-24 relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
              Seu processo terapêutico começa com um ato
            </h2>
            <p className="text-white/80 max-w-xl mx-auto text-lg">
              Agende um atendimento hoje mesmo e encontre um espaço de acolhimento e cuidado para o seu processo pessoal.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a href="https://wa.me/5533984435353?text=Olá.%20Eu%20estou%20vendo%20o%20seu%20site%20e%20gostaria%20de%20tirar%20umas%20dúvidas." target="_blank" rel="noopener noreferrer" className="bg-white text-[#006D77] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all">
                Contato →
              </a>
              <a href="https://wa.me/5533984435353?text=Olá.%20Eu%20estou%20vendo%20o%20seu%20site%20e%20gostaria%20de%20tirar%20umas%20dúvidas." target="_blank" rel="noopener noreferrer" className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                Agendar Atendimento ↗
              </a>
            </div>
          </div>
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
          <div className="space-y-6">
            <span className="text-[#006D77] font-bold text-2xl">+ Psicólogo Clínico</span>
            <p className="text-gray-500 max-w-xs text-sm">
              © 2026 Micael Saturnino. Todos os direitos reservados.
            </p>
          </div>

          <div className="hidden lg:block"></div>

          <div className="space-y-8">
            <h4 className="font-bold text-gray-900 text-lg">Contatos</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-gray-600">
                <div className="p-2 bg-[#EDF6F9] rounded-lg text-[#006D77]">
                  <Mail size={18} />
                </div>
                <span>micael.s.saturnino@gmail.com</span>
              </li>
              <li className="flex items-start gap-4 text-gray-600">
                <div className="p-2 bg-[#EDF6F9] rounded-lg text-[#006D77]">
                  <Phone size={18} />
                </div>
                <span>+55 (33) 98443-5353</span>
              </li>
              <li className="flex items-start gap-4 text-gray-600">
                <div className="p-2 bg-[#EDF6F9] rounded-lg text-[#006D77]">
                  <MapPin size={18} />
                </div>
                <span>Av. Jacob D Neto, 439, Sala 202, Centro, São João do Manhuaçu - MG</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-100 text-center text-xs text-gray-400">
          <p>Feito com dedicação para sua saúde mental.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
