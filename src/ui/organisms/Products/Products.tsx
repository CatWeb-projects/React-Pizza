import React from 'react';
import { PizzaContext } from 'contexts/PizzaContext';
import { Pizza } from 'ui/molecules';

import './Products.scss';

export const Products = () => {
  const { pizzas, saveFilteredCategory, filtered } = React.useContext(
    PizzaContext
  );

  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (pizzas) {
      setLoading(false);
    }
    return;
  }, [pizzas]);

  return (
    <div className="products-container">
      <h2>Все Пиццы</h2>

      {loading ? <h1>loading...</h1> : null}
      <div className="products-container__products">
        {pizzas &&
          (saveFilteredCategory ? filtered : pizzas).map((pizza) => (
            <Pizza key={pizza.id} pizza={pizza} />
          ))}
      </div>
    </div>
  );
};
