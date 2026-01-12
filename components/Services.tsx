
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#006D77] font-semibold tracking-wider text-sm uppercase">Atendimento</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight">
            Ofereço atendimentos psicológicos que abrangem diferentes demandas emocionais e psíquicas.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-20">
          {SERVICES.map((service) => {
            const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Activity;
            return (
              <div key={service.id} className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-[#EDF6F9] rounded-2xl flex items-center justify-center group-hover:bg-[#006D77] transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-[#006D77] group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
