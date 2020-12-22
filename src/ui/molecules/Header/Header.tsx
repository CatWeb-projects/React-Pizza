import React from 'react';
import { Link } from 'estafette-router';
import { PizzaContext } from 'contexts/PizzaContext';

import './Header.scss';

export const Header = () => {
  const { cartPizzas } = React.useContext(PizzaContext);

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
          <span>
            {cartPizzas.reduce((total, item) => total + item.price, 0)} Р.
          </span>
          <span>
            <i className="fas fa-shopping-cart"></i>
            {cartPizzas.length}
          </span>
        </Link>
      </div>
    </div>
  );
};
