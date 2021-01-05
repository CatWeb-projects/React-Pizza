import React from 'react';
import SVG from 'react-inlinesvg';

interface Props {
  className?: string;
  type?: string;
  size?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  label?: string;
  disabled?: boolean;
  active?: boolean;
}

export const Icon = ({
  className = '',
  type,
  size = 'small',
  onClick,
  children,
  label,
  disabled,
  active
}: Props) => {
  const defaultProps = {
    className: `zh-icon icon-size-${size} zh-icon-${type}  ${
      active ? ' active' : ''
    }${disabled ? ' disabled' : ''} ${className}`,
    width: '1em',
    height: '1em',
    onClick
  };

  switch (type) {
    default:
      return <SVG src={`/svg/${type}.svg`} {...defaultProps} />;
  }
};
