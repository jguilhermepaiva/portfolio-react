import React, { useState } from 'react';
import { Button } from './Button'; // Nosso único e poderoso botão
import { HiMenu, HiX } from 'react-icons/hi';

// O COMPONENTE NavLink FOI REMOVIDO DAQUI

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-30 flex w-full items-center justify-between px-5 py-8 sm:px-10">
      <div className="cursor-pointer text-3xl font-bold">
        JG
      </div>

      {/* NAVEGAÇÃO PARA DESKTOP AGORA USANDO O COMPONENTE BUTTON */}
      <nav className="hidden items-center gap-4 md:flex">
        <Button variant="outline" isActive={true}>About</Button>
        <Button variant="outline">Projects</Button>
        <Button variant="outline">Contact</Button>
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

      {/* MENU MOBILE AGORA TAMBÉM USANDO O COMPONENTE BUTTON */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 z-20 flex w-full flex-col items-end gap-6 bg-background py-8 px-2 md:hidden">
          <Button variant="outline" isActive={true}>About</Button>
          <Button variant="outline">Projects</Button>
          <Button variant="outline">Contact</Button>
        </div>
      )}
    </header>
  );
};