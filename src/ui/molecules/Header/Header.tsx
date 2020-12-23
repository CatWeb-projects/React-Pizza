import React from 'react';
import { Link } from 'estafette-router';
import { PizzaContext } from 'contexts/PizzaContext';

import './Header.scss';
import { Logo } from 'ui/atoms';

export const Header = () => {
  const { cartPizzas } = React.useContext(PizzaContext);

  return (
    <div className="header">
      <Logo />

      <div className="header__cart">
        <Link to="/cart">
          <span>
            {cartPizzas.reduce((total, item) => total + item.price, 0)}₽
          </span>

          <span>
            <i className="fas fa-shopping-cart"></i>
            {cartPizzas && cartPizzas.length}
          </span>
        </Link>
      </div>
    </div>
  );
};
