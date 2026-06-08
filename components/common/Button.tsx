import React, { ReactNode } from 'react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'outline';
  href: string;
  children: ReactNode;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  iconClassName?: string;
  onClick?: () => void;
  target?: string;
}

export const Button = ({
  variant = 'outline',
  href,
  children,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  iconClassName = '',
  onClick,
  target
}: ButtonProps) => {
  const baseStyles = "w-full sm:w-auto flex items-center justify-center gap-2 h-[45px] rounded-[3px] font-normal transition-all duration-300 ease-in-out uppercase text-[14px] md:text-[15px] leading-none tracking-wide relative overflow-hidden group px-6";
  
  const variants = {
    primary: "bg-[#CB000D] text-white border-1 border-transparent hover:bg-[#CB000D]/90 shadow-lg",
    outline: "border-1 border-white/20 text-white hover:bg-transparent hover:text-white border-[#CB000D]/90"
  };

  const content = (
    <>
      <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
      {Icon && iconPosition === 'left' && <Icon size={18} className={iconClassName} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={18} className={iconClassName} />}
    </>
  );

  return (
    <Link 
      href={href}
      onClick={onClick}
      target={target}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {content}
    </Link>
  );
};

export default Button;
