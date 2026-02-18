// src/components/Header.tsx
import React, { useState } from 'react';
import { Button } from './Button';
import { HiMenu, HiX } from 'react-icons/hi';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para rolar até a seção
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Fecha o menu mobile ao clicar
    }
  };

  return (
    <header className="relative z-30 flex w-full items-center justify-between px-5 py-8 sm:px-10">
      <div 
        className="cursor-pointer text-3xl font-bold" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        João Guilherme Pontes de Paiva
      </div>

      <nav className="hidden items-center gap-4 md:flex">
        <Button variant="outline" onClick={() => scrollToSection('about')}>Sobre mim</Button>
        <Button variant="outline" onClick={() => scrollToSection('projects')}>Projetos</Button>
        <Button variant="outline" onClick={() => scrollToSection('contact')}>Contato</Button>
      </nav>

      <div className="z-40 flex items-center md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl">
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 z-10 bg-background/70 backdrop-blur-sm"
        ></div>
      )}

      {isMenuOpen && (
        <div className="absolute top-full left-0 z-20 flex w-full flex-col items-end gap-6 bg-[#151C25] py-8 px-5 md:hidden">
          <Button className="w-full" variant="outline" onClick={() => scrollToSection('about')}>About</Button>
          <Button className="w-full" variant="outline" onClick={() => scrollToSection('projects')}>Projects</Button>
          <Button className="w-full" variant="outline" onClick={() => scrollToSection('contact')}>Contact</Button>
        </div>
      )}
    </header>
  );
};