import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About'; 

function App() {
  return (
    // Definimos a cor de fundo aqui para cobrir a tela inteira
    <div className="bg-[#151C25] text-text">
      <main className="mx-auto max-w-7xl">
        <Header />
        <Hero />
        <div className='h-0.5 bg-[#55E5A4]'></div>
        <About />
      </main>
    </div>
  );
}

export default App;