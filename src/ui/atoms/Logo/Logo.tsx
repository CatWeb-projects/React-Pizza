import React from 'react';
import { Link } from 'estafette-router';
import { Icon } from 'ui/atoms';

export const Logo = () => {
  return (
    <div className="header__logo-container">
      <div className="header__logo">
        <Link to="/">
          <Icon type="pizza-logo" />
        </Link>
      </div>

      <div className="header__logo-info">
        <span>React Pizza</span>
        <span>Самая вкусная пицца во вселенной</span>
      </div>
    </div>
  );
};
