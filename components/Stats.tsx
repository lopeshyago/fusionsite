
import React from 'react';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  { value: 10000, label: 'horas de serviço', symbol: '+' },
  { value: 10000, label: 'alunos ativos', symbol: '' },
  { value: 80, label: 'profissionais', symbol: '+' },
  { value: 10, label: 'condomínios atendidos', symbol: '+' },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-fusion-black text-white py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black uppercase">
            Soluções Esportivas que <span className="text-fusion-orange">Transformam</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Com uma equipe experiente e apaixonada, a Fusion é referência em assessoria esportiva para condomínios, reconhecida pela alta taxa de retenção de alunos e pela qualidade no atendimento.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4">
              <p className="text-4xl sm:text-6xl font-black text-fusion-orange">
                {stat.symbol}
                <AnimatedCounter end={stat.value} />
              </p>
              <p className="mt-2 text-base sm:text-lg text-gray-400 capitalize">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
