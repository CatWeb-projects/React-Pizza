import React from 'react';
import './Button.scss';

interface Props {
  children: React.ReactNode;
  value?: string | number;
  onClick?: () => void;
  className?: string;
  type?: 'primary' | 'invert' | 'transparent' | 'icon';
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({
  children,
  onClick,
  className = '',
  type = 'primary',
  disabled,
  ...props
}) => {
  const onClickHandler = (): void => {
    if (onClick !== undefined) {
      return onClick();
    }
  };

  return (
    <button
      className={`button button-type-${type} ${
        disabled ? 'disabled' : ''
      } ${className}`}
      onClick={onClickHandler}
      {...props}
    >
      {children}
    </button>
  );
};
