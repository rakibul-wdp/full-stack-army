import React from "react";

interface ButtonProps {
  title: string;
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, children }) => {
  return (
    <button title={title} onClick={onClick} className="btn btn-primary">
      {children}
    </button>
  );
};

export default Button;
