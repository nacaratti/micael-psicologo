
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const QUESTIONS = [
  {
    question: "A terapia online é realmente sigilosa e confidencial?",
    answer: "Sim, a terapia online segue os mesmos preceitos éticos da presencial, utilizando plataformas criptografadas que garantem o sigilo profissional."
  },
  {
    question: "Eu posso fazer a sessão de qualquer lugar?",
    answer: "Sim, desde que você tenha acesso a uma internet estável e um local privativo onde se sinta confortável para falar livremente."
  },
  {
    question: "Como devo me preparar para a sessão online?",
    answer: "Recomenda-se o uso de fones de ouvido, estar em um local silencioso e garantir que seu dispositivo esteja carregado."
  },
  {
    question: "E se a minha conexão de internet cair no meio da sessão?",
    answer: "Nós estabelecemos previamente um plano de contingência, podendo migrar para ligação telefônica ou reagendar a parte restante."
  },
  {
    question: "Posso começar a terapia online e depois passar para o formato presencial?",
    answer: "Isso depende da disponibilidade de agenda no consultório físico, mas é uma transição comum e possível de ser negociada."
  },
  {
    question: "A sessão tem um tempo de duração?",
    answer: "Geralmente as sessões têm duração de 50 minutos, tempo padrão para o processo terapêutico."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#F8FBFC]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#006D77] font-semibold tracking-wider text-sm uppercase">Perguntas frequentes</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Respostas para suas perguntas</h2>
          <p className="text-gray-600">
            Aqui, você encontra respostas rápidas e claras sobre como funcionam meus serviços, agendamentos, e muito mais.
          </p>
        </div>

        <div className="space-y-4">
          {QUESTIONS.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left group"
              >
                <span className="font-semibold text-gray-800 group-hover:text-[#006D77] transition-colors">
                  {item.question}
                </span>
                <div className={`p-2 rounded-full bg-[#EDF6F9] text-[#006D77] transition-transform duration-300 ${openIndex === index ? 'rotate-90' : ''}`}>
                  <ChevronRight size={20} />
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
