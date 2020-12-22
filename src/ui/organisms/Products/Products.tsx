import React from 'react';
import { pizzas } from 'contexts/PizzaContext';
import { Pizza } from 'ui/molecules';

import './Products.scss';

export const Products = () => {
  return (
    <div className="products-container">
      <h2>Все Пиццы</h2>

      <div className="products-container__products">
        {pizzas &&
          pizzas.map((pizza) => <Pizza key={pizza.id} pizza={pizza} />)}
      </div>
    </div>
  );
};
