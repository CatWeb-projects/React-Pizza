import React from 'react';
import { Link } from 'estafette-router';
import { PizzaContext } from 'contexts/PizzaContext';
import { Icon, Logo } from 'ui/atoms';

import './Header.scss';

export const Header = () => {
  const { cartPizzas } = React.useContext(PizzaContext);

  return (
    <div className="header">
      <Logo />

      <div className="header__cart">
        <Link to="/cart">
          <span>
            {cartPizzas.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
            ₽
          </span>

          <span>
            <Icon type="shopping-cart" />
            {cartPizzas && cartPizzas.length}
          </span>
        </Link>
      </div>
    </div>
  );
};
