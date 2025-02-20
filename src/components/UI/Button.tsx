import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost";
  children: ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = "primary", 
  children, 
  className = "",
  ...props 
}) => {
  let buttonClasses = `py-2 px-4 rounded focus:outline-none transition-colors duration-300 ${className}`;

  switch (variant) {
    case "primary":
      buttonClasses += " bg-blue-600 hover:bg-blue-700 text-white";
      break;
    case "secondary":
      buttonClasses += " bg-gray-200 hover:bg-gray-300 text-gray-800";
      break;
    case "danger":
      buttonClasses += " bg-red-600 hover:bg-red-700 text-white";
      break;
    case "ghost":
      buttonClasses += " hover:bg-gray-100 text-gray-700";
      break;
    default:
      buttonClasses += " bg-blue-600 hover:bg-blue-700 text-white";
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
