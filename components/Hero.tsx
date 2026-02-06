
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="bg-fusion-orange text-white min-h-[80vh] flex items-center"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl text-left">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase leading-tight tracking-tighter">
            Seu condomínio precisa da <span className="text-fusion-black shadow-sm">Fusion</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-xl">
            Transformando academias e áreas esportivas em espaços de convivência e bem-estar. A Fusion leva saúde, lazer e qualidade de vida para dentro dos condomínios.
          </p>
          <div className="mt-10">
            <a href="#contato" className="bg-fusion-black text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-800 transition-colors duration-300">
              Vamos começar?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
