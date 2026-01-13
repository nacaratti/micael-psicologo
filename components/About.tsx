
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#F8FBFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <span className="text-[#006D77] font-semibold tracking-wider text-sm uppercase">Profissional</span>
            <h2 className="text-4xl font-bold text-gray-900">Sobre mim</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Sou psicólogo formado em Psicologia Clínica pelo UNIFACIG, com atuação voltada para jovens, adultos e idosos, tanto em atendimentos presenciais quanto online. Trabalho a partir da abordagem psicanalítica, oferecendo um espaço ético, sigiloso e acolhedor, no qual você pode se escutar com liberdade e aprofundar seu processo terapêutico.
              </p>
              <p>
                Ofereço horários flexíveis, adaptados à sua rotina, para tornar o acesso à terapia mais prático e possível no dia a dia. Comprometido com a qualidade do cuidado clínico, estou em constante aprimoramento por meio da participação em eventos, grupos de estudo e supervisão profissional, mantendo uma escuta qualificada e atualizada.
              </p>
            </div>
            
          </div>

          <div className="order-1 lg:order-2">
            <div className="aspect-[1.4/1] rounded-[2.5rem] overflow-hidden shadow-xl">
              <img
                src="/images/micael02-opt.jpg"
                alt="Psicólogo no consultório"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
