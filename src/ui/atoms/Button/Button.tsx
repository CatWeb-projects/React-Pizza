import React from 'react';
import './Button.scss';

interface Props {
  children: React.ReactNode;
  value?: string | number;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<Props> = ({ children, onClick, className }) => {
  return (
    <button
      className={`categories-button ${className}`}
      onClick={onClick && (() => onClick())}
    >
      {children}
    </button>
  );
};
