import React from 'react';
import { Button } from './Button';
import clsx from 'clsx';

const NavLink: React.FC<{ children: React.ReactNode; isActive?: boolean }> = ({ children, isActive }) => {
  return (
    <button
      className={clsx(
        'rounded-lg px-5 py-2.5 text-base font-medium transition-all duration-200',
        {
          'bg-primary text-background': isActive,
          'text-text hover:text-primary': !isActive,
        }
      )}
    >
      {children}
    </button>
  );
};

export const Header: React.FC = () => {
  return (
    <header className="flex w-full items-center justify-between px-5 py-8 sm:px-10">
      <div className="cursor-pointer text-3xl font-bold">
        JG
      </div>

      <nav className="hidden items-center gap-4 md:flex">
        <NavLink isActive>About</NavLink>
        <NavLink>Projects</NavLink>
        <Button>Contact</Button>
      </nav>

      {/* <div className="cursor-pointer text-2xl font-mono">
        %  Placeholder do ícone 
      </div> */}

    </header>
  );
};