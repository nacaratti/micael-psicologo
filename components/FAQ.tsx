
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const QUESTIONS = [
  {
    question: "A terapia online é realmente sigilosa e confidencial?",
    answer: "Sim. A confidencialidade é a base da nossa profissão e é garantida pelo Código de Ética do Psicólogo. Utilizo plataformas seguras para as sessões e me comprometo a manter absoluto sigilo sobre tudo que é tratado."
  },
  {
    question: "Eu posso fazer a sessão de qualquer lugar?",
    answer: "Sim, você pode fazer a sessão de onde estiver. A flexibilidade de local é uma das grandes vantagens do atendimento online. O mais importante é que o lugar seja seguro e privado para você."
  },
  {
    question: "Como devo me preparar para a sessão online?",
    answer: "O ideal é que você se prepare encontrando um local tranquilo e privado, onde não será interrompido(a) e se sinta à vontade para falar com liberdade. Usar fones de ouvido pode ajudar muito a garantir a sua privacidade."
  },
  {
    question: "E se a minha conexão de internet cair no meio da sessão?",
    answer: "Imprevistos técnicos podem acontecer. Se a conexão falhar, nós faremos contato por telefone ou outra via alternativa previamente combinada para que a sessão seja concluída normalmente."
  },
  {
    question: "Posso começar a terapia online e depois passar para o formato presencial?",
    answer: "Sim. A transição de um formato para outro é possível e pode ser combinada entre nós, caso você sinta necessidade ou prefira continuar presencialmente."
  },
  {
    question: "A sessão tem um tempo de duração?",
    answer: "As sessões têm uma duração média de 50 minutos, mas o tempo pode variar de acordo com o andamento de cada encontro. O mais importante é o processo que se desenvolve, e não a duração exata da sessão."
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
