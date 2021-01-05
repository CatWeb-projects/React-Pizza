import React from 'react';
import { Link } from 'estafette-router';

export const Logo = () => {
  return (
    <div className="header__logo-container">
      <div className="header__logo">
        <Link to="/">
          <img src="/images/pizza-logo.svg" alt="pizza" />
        </Link>
      </div>

      <div className="header__logo-info">
        <span>React Pizza</span>
        <span>Самая вкусная пицца во вселенной</span>
      </div>
    </div>
  );
};
