import React from 'react';
import { PizzaContext, pizzas } from 'contexts/PizzaContext';
import { Pizza } from 'ui/molecules';

import './Products.scss';

export const Products = () => {
  const { saveFilteredCategory, filtered } = React.useContext(PizzaContext);

  return (
    <div className="products-container">
      <h2>Все Пиццы</h2>

      <div className="products-container__products">
        {(saveFilteredCategory ? filtered : pizzas && pizzas).map((pizza) => (
          <Pizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};
