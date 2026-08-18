import React, { ReactNode } from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

interface ButtonProps {
  variant?: "primary" | "outline";
  href: string;
  children: ReactNode;
  icon?: LucideIcon | IconType;
  iconPosition?: "left" | "right";
  className?: string;
  iconClassName?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  target?: string;
}

export const Button = ({
  variant = "outline",
  href,
  children,
  icon: Icon,
  iconPosition = "left",
  className = "",
  iconClassName = "",
  onClick,
  target,
}: ButtonProps) => {
  const widthStyle = className.includes("w-") ? "" : "w-full sm:w-auto";
  const baseStyles =
    `${widthStyle} flex items-center justify-center gap-2 h-[45px] rounded-[3px] font-normal transition-all duration-300 ease-in-out uppercase text-[14px] md:text-[15px] leading-none tracking-wide relative overflow-hidden group px-6`;

  const variants = {
    primary:
      "bg-[#CB000D] text-white border-1 border-transparent hover:bg-[#CB000D]/90 shadow-lg",
    outline:
      "border-1 border-white/20 text-white hover:bg-transparent hover:text-white border-[#CB000D]/90",
  };

  const content = (
    <>
      <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
      {Icon && iconPosition === "left" && (
        <Icon size={18} className={iconClassName} />
      )}
      {children}
      {Icon && iconPosition === "right" && (
        <Icon size={18} className={iconClassName} />
      )}
    </>
  );

  const isExternalOrPdf =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.toLowerCase().includes(".pdf");

  if (isExternalOrPdf) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={target || "_blank"}
        rel="noopener noreferrer"
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

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
