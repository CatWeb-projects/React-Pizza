import React from 'react';
import { Link } from 'estafette-router';

import './Header.scss';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__logo-container">
        <div className="header__logo">
          <Link to="/">
            <img src="pizza-logo.svg" alt="pizza" />
          </Link>
        </div>
        <div className="header__logo-info">
          <span>React Pizza</span>
          <span>Самая вкусная пицца во вселенной</span>
        </div>
      </div>
      <div className="header__cart">
        <Link to="/cart">
          <span>520 Р.</span>
          <span>
            <i className="fas fa-shopping-cart"></i>3
          </span>
        </Link>
      </div>
    </div>
  );
};
