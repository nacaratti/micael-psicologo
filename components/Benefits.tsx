
import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#006D77] font-semibold tracking-wider text-sm uppercase border-2 border-[#006D77] px-6 py-2 rounded-full inline-block">Benefícios</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Porque fazer terapia on-line?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça os benefícios de ter uma vida saudável e tranquila com a comodidade de poder se expressar e falar de qualquer lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Benefits Grid (4 items) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {BENEFITS.map((benefit) => (
              <div key={benefit.id} className="p-8 border border-gray-100 rounded-3xl hover:shadow-lg transition-all bg-white group">
                <div className="w-12 h-12 bg-[#EDF6F9] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#006D77]/10 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Featured Card */}
          <div className="bg-[#006D77] text-white p-10 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-6 relative z-10">
              <span className="text-white/60 text-lg">→</span>
              <h3 className="text-3xl font-bold leading-tight">Expressar-se ficou mais fácil.</h3>
              <p className="text-white/80">Terapia no seu ritmo, no seu espaço, com conforto e acolhimento.</p>
            </div>
            
            <div className="mt-12 relative z-10">
               <img 
                 src="\images\videocall.png" 
                 alt="Online Session" 
                 className="rounded-2xl w-full object-cover aspect-video"
               />
            </div>

            {/* Background Pattern */}
            <div className="absolute top-0 right-0 p-4 opacity-10">
               <div className="grid grid-cols-4 gap-2">
                 {[...Array(16)].map((_, i) => (
                   <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
