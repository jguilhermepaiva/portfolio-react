import React from 'react';
import clsx from 'clsx';

interface ButtonComponentProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  isActive?: boolean; // <-- Nova propriedade
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonComponentProps> = ({ children, variant = 'outline', isActive, onClick, className }) => {
  const baseStyles = 'rounded-lg px-6 py-2.5 font-semibold transition-all duration-300 ease-in-out shadow-lg shadow-black/30 hover:-translate-y-0.5';

  const variantStyles = {
    primary: 'bg-primary text-background border-2 border-primary hover:bg-transparent hover:text-primary',
    outline: 'border-2 border-text-secondary text-text hover:border-primary hover:text-primary',
  };
  
  // Estilo para o botão ativo
  const activeStyles = 'bg-primary text-background border-2 border-primary';

  return (
    <button 
      onClick={onClick} 
      // A lógica do clsx agora prioriza o estilo ativo
      className={clsx(baseStyles, isActive ? activeStyles : variantStyles[variant], className)}
    >
      {children}
    </button>
  );
};