
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Differentiators from './components/Differentiators';
import AppShowcase from './components/AppShowcase';
import Services from './components/Services';
import EventsCalendar from './components/EventsCalendar';
import Clients from './components/Clients';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-fusion-black">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Differentiators />
        <AppShowcase />
        <Services />
        <EventsCalendar />
        <Clients />
      </main>
      <Footer />
    </div>
  );
}

export default App;
