import React from 'react';
import clsx from 'clsx';

interface ButtonComponentProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset"; // Adicionamos o tipo aqui
}

export const Button: React.FC<ButtonComponentProps> = ({ 
  children, 
  variant = 'outline', 
  isActive, 
  onClick, 
  className,
  type = "button" // Valor padrão é "button"
}) => {
  const baseStyles = 'rounded-lg px-6 py-2.5 font-semibold transition-all duration-300 ease-in-out shadow-lg shadow-black/30 hover:-translate-y-0.5';

  const variantStyles = {
    primary: 'bg-primary text-background border-2 border-primary hover:bg-transparent hover:text-primary',
    outline: 'border-2 border-text-secondary text-text hover:border-primary hover:text-primary',
  };
  
  const activeStyles = 'bg-primary text-background border-2 border-primary';

  return (
    <button 
      type={type} // Agora o HTML entende se é um submit ou não
      onClick={onClick} 
      className={clsx(baseStyles, isActive ? activeStyles : variantStyles[variant], className)}
    >
      {children}
    </button>
  );
};