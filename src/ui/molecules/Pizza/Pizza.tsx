import React from 'react';
import { pizzas, PizzaContext } from 'contexts/PizzaContext';
import { Button } from 'ui/atoms';

import './Pizza.scss';

interface Props {
  pizza: {
    id: number;
    imageUrl?: string;
    name?: string;
    types?: number[];
    sizes?: number[];
    price?: number;
    category?: number;
    rating?: number;
  };
}

export const Pizza: React.FC<Props> = ({ pizza }) => {
  const { cartPizzas, setCardPizzas } = React.useContext(PizzaContext);
  const [saveId, setSaveId] = React.useState<number>();
  const [pizzaSize, setPizzaSize] = React.useState<number>(0);
  const [pizzaType, setPizzaType] = React.useState<number>(0);

  const addToCart = React.useCallback(
    (name, price, size, type) => {
      if (size === 0) {
        return null;
      }
      setCardPizzas([...cartPizzas, { name, price, size, type }]);
    },
    // eslint-disable-next-line
    [cartPizzas]
  );
  console.log(cartPizzas);

  const selectSize = React.useCallback((id: number, size: number) => {
    pizzas.map((pizza) => {
      if (pizza.id === id) {
        setSaveId(pizza.id);
        pizza.sizes.filter((match) => match === size);
        setPizzaSize(size);
      }
      return null;
    });
  }, []);

  const selectCakeType = React.useCallback((id: number, type: number) => {
    pizzas.map((pizza) => {
      if (pizza.id === id) {
        setSaveId(pizza.id);
        pizza.types.filter((match) => match === type);
        setPizzaType(type);
      }
      return null;
    });
  }, []);

  return (
    pizza && (
      <div key={pizza.id} className="products-container__pizza">
        <div className="products-container__logo">
          <img src={pizza.imageUrl} alt={pizza.imageUrl} />
        </div>
        <div className="products-container__title">{pizza.name}</div>
        <div className="products-container__select">
          <div className="products-container__types">
            {pizza.types &&
              pizza.types.map((type) => (
                <Button
                  value={type === 0 ? 'Тонкое' : 'Традиционное'}
                  onClick={() => selectCakeType(pizza.id, type)}
                  key={type}
                  className={`products-container__type ${
                    saveId === pizza.id && pizzaType === type ? 'active' : ''
                  }`}
                >
                  {type === 0 ? 'Тонкое' : 'Традиционное'}
                </Button>
              ))}
          </div>

          <div className="products-container__sizes">
            {pizza.sizes &&
              pizza.sizes.map((size) => (
                <Button
                  value={`${size} см`}
                  onClick={() => selectSize(pizza.id, size)}
                  key={size}
                  className={`products-container__size ${
                    saveId === pizza.id && pizzaSize === size ? 'active' : ''
                  }`}
                >{`${size} см`}</Button>
              ))}
          </div>
        </div>
        <div className="products-container__price">
          <span>От {`${pizza.price} ₽`}</span>
          <Button
            onClick={() =>
              addToCart(pizza.name, pizza.price, pizzaSize, pizzaType)
            }
          >
            <i className="fas fa-plus"></i>Добавить
          </Button>
        </div>
      </div>
    )
  );
};
