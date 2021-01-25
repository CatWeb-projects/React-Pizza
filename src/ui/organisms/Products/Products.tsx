import React from 'react';
import { PizzaContext } from 'contexts/PizzaContext';
import { Pizza } from 'ui/molecules';
import { Loader } from 'ui/atoms';

import './Products.scss';

export const Products = () => {
  const { pizzas, saveFilteredCategory, filtered, loading } = React.useContext(
    PizzaContext
  );

  return (
    <div className="products-container">
      <h2>Все Пиццы</h2>

      {loading && <Loader />}
      <div className="products-container__products">
        {pizzas &&
          (saveFilteredCategory ? filtered : pizzas).map((pizza) => (
            <Pizza key={pizza.id} pizza={pizza} />
          ))}
      </div>
    </div>
  );
};
