
import React from 'react';

const DumbbellIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-fusion-orange"><path d="M14.4 14.4 9.6 9.6"/><path d="M18.657 5.343a2.828 2.828 0 1 1 4 4L14 18l-4 4-4-4 8.657-8.657Z"/><path d="m8 16 4-4"/><path d="m12 20 4-4"/><path d="m16 12 4-4"/><path d="m21 7-4 4"/><path d="m3 21 4-4"/><path d="M12.4 12.4 8 16.8"/><path d="m5.343 18.657a2.828 2.828 0 0 0 0-4l-1.414-1.414a2 2 0 0 0-2.828 0l-1.414 1.414a2 2 0 0 0 0 2.828l1.414 1.414a2 2 0 0 0 2.828 0Z"/></svg>
);
const BallIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-fusion-orange"><circle cx="12" cy="12" r="10"/><path d="M12 12a5.66 5.66 0 0 0-5.66 5.66"/><path d="M12 12a5.66 5.66 0 0 1 5.66 5.66"/><path d="M12 12a5.66 5.66 0 0 1-5.66-5.66"/><path d="M12 12a5.66 5.66 0 0 0 5.66-5.66"/></svg>
);
const WavesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-fusion-orange"><path d="M3 6c.79 1.5 2.5 2 4 2 2.5 0 4-2 6-2 1.5 0 3 .5 4 2 1.5.5 3 0 3-2"/><path d="M3 12c.79 1.5 2.5 2 4 2 2.5 0 4-2 6-2 1.5 0 3 .5 4 2 1.5.5 3 0 3-2"/><path d="M3 18c.79 1.5 2.5 2 4 2 2.5 0 4-2 6-2 1.5 0 3 .5 4 2 1.5.5 3 0 3-2"/></svg>
);

const services = [
  { icon: <DumbbellIcon />, title: "Treinamento & Bem-estar", description: "Treinamento funcional, Pilates, GAP, alongamento e dança." },
  { icon: <BallIcon />, title: "Esportes de Quadra", description: "Vôlei, beach tennis, futebol e outras modalidades para integração e diversão." },
  { icon: <WavesIcon />, title: "Atividades Aquáticas", description: "Natação adulto e infantil e hidroginástica para todas as idades." },
];

const Services: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black uppercase">
            Serviços <span className="text-fusion-orange">Segmentados</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Atividades para todas as idades e objetivos, promovendo saúde e integração.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-fusion-orange">
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
