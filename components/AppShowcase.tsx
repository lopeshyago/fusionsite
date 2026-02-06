
import React from 'react';

const AppShowcase: React.FC = () => {
  return (
    <section className="bg-fusion-orange text-white py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight">
              Tecnologia que Aproxima e Facilita
            </h2>
            <div className="inline-block bg-fusion-black text-white py-2 px-6 rounded-lg mt-6 mb-4 font-bold text-lg">
              APLICATIVO FUSION
            </div>
            <p className="text-lg">
              Nosso aplicativo exclusivo conecta alunos, professores e síndicos em um único ambiente. Com ele, é possível acompanhar presenças, acessar cronogramas, agendar aulas, receber comunicados e participar de eventos – tudo de forma prática, transparente e integrada.
            </p>
          </div>
          <div className="flex justify-center">
             <img src="https://i.imgur.com/Kz87u4p.png" alt="Aplicativo Fusion" className="max-w-xs md:max-w-sm rounded-3xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
