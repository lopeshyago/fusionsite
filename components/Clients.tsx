
import React from 'react';

const logos = [
  'Sesc', 'Senac', 'Fecomércio RJ', 'Refinatto', 'Quintas do Rio', 'Life Residencial', 'Carioca', 'Barra Golden'
];

const Clients: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black uppercase">
            Clientes e <span className="text-fusion-orange">Parceiros</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Confiança que se conquista com resultados e parcerias de sucesso.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-12 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <span className="text-2xl font-bold text-gray-500">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
