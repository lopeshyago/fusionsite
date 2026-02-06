
import React from 'react';

const differentiators = [
  "Assessoria completa de esportes e eventos",
  "Aplicativo exclusivo para gestão e comunicação",
  "Cronograma anual de eventos temáticos",
  "Equipe técnica qualificada e supervisionada",
  "Planejamento personalizado para cada condomínio",
  "Resultados visíveis em engajamento e satisfação"
];

const Differentiators: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black uppercase">
            Nossos <span className="text-fusion-orange">Diferenciais</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            O que faz da Fusion uma escolha inteligente para o seu condomínio?
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((text, index) => (
            <div key={index} className={`p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 ${
                index % 3 === 0 ? 'bg-fusion-orange text-white' : 
                index % 3 === 1 ? 'bg-gray-100 text-fusion-black' : 
                'bg-fusion-black text-white'
              }`}
            >
              <p className="text-2xl font-bold">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
