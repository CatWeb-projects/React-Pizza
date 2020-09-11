import React from 'react';
import './Header.scss';
import { Button } from 'ui/atoms/Button/Button';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__logo-container">
        <div className="header__logo">
          <img src="pizza-logo.svg" alt="" />
        </div>
        <div className="header__logo-info">
          <span>React Pizza</span>
          <span>Самая вкусная пицца во вселенной</span>
        </div>
      </div>
      <div className="header__cart">
        <a href="#">
          <span>520 Р.</span>
          <span>
            <i className="fas fa-shopping-cart"></i>3
          </span>
        </a>
      </div>
    </div>
  );
};
