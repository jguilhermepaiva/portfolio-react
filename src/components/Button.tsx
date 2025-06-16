import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
  className?: string; // Para permitir classes adicionais
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'outline', onClick, className }) => {
  const baseStyles = 'rounded-lg px-6 py-2.5 font-semibold transition-all duration-200 ease-in-out';

  const variantStyles = {
    primary: 'text-[#151C25] border-2 border-primary hover:bg-transparent hover:text-primary',
    outline: 'border-2 border-text-secondary text-text hover:border-primary hover:text-primary',
  };

  return (
    <button onClick={onClick} className={clsx(baseStyles, variantStyles[variant], className)}>
      {children}
    </button>
  );
};