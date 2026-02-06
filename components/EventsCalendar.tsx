
import React from 'react';

const events = [
  { month: 'JAN', name: 'Colônia de Férias', color: 'bg-orange-500' },
  { month: 'FEV', name: 'Carnaval Infantil', color: 'bg-yellow-400' },
  { month: 'MAR', name: 'Dia da Mulher', color: 'bg-pink-500' },
  { month: 'ABR', name: 'Páscoa', color: 'bg-purple-400' },
  { month: 'MAI', name: 'Mês das Mães', color: 'bg-indigo-500' },
  { month: 'JUN', name: 'Festa Junina', color: 'bg-green-500' },
  { month: 'JUL', name: 'Colônia de Férias', color: 'bg-blue-500' },
  { month: 'AGO', name: 'Dia dos Pais', color: 'bg-amber-600' },
  { month: 'SET', name: 'Dia da Árvore', color: 'bg-lime-500' },
  { month: 'OUT', name: 'Dia das Crianças', color: 'bg-rose-500' },
  { month: 'NOV', name: 'Ação de Graças', color: 'bg-cyan-500' },
  { month: 'DEZ', name: 'Natal', color: 'bg-red-600' },
];

const EventsCalendar: React.FC = () => {
  return (
    <section className="bg-fusion-black text-white py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black uppercase">
            Eventos <span className="text-fusion-orange">Temáticos</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Muito além da academia, criamos experiências que unem todas as idades e fortalecem o senso de comunidade.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {events.map((event) => (
            <div key={event.month} className={`${event.color} text-white p-4 rounded-lg flex flex-col sm:flex-row items-center sm:space-x-4 text-center sm:text-left`}>
              <div className="font-black text-2xl">{event.month}</div>
              <div className="font-semibold">{event.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;
