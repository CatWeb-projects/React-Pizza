import React from 'react';
import { PizzaContext } from 'contexts/PizzaContext';
import { Button, Icon } from 'ui/atoms';

import './Pizza.scss';

interface Props {
  pizza: {
    id: number;
    imageUrl?: string;
    name?: string;
    types?: number[];
    sizes?: number[];
    price?: number[];
    category?: number;
    rating?: number;
  };
}

export const Pizza: React.FC<Props> = ({ pizza }) => {
  const { cartPizzas, setCardPizzas } = React.useContext(PizzaContext);

  const [saveId, setSaveId] = React.useState<number>();
  const [pizzaSize, setPizzaSize] = React.useState<number>(0);
  const [pizzaType, setPizzaType] = React.useState<number>(0);
  const [pizzaPrice, setPizzaPrice] = React.useState<number>();

  const addToCart = React.useCallback(
    (id, name, price, size, type, imageUrl) => {
      if (size === 0) {
        return null;
      }

      if (cartPizzas.find((item) => item.name === name && item.size === size)) {
        setCardPizzas(
          cartPizzas.map((pizza) => ({
            ...pizza,
            quantity:
              pizza.name === name && pizza.size === size
                ? pizza.quantity + 1
                : pizza.quantity
          }))
        );
      } else {
        setCardPizzas([
          ...cartPizzas,
          { id, name, price, size, type, imageUrl, quantity: 1 }
        ]);
      }
    },
    // eslint-disable-next-line
    [cartPizzas]
  );

  const selectSize = React.useCallback(
    (id: number, size: number) => {
      if (pizza.id === id && pizza.sizes) {
        setSaveId(pizza.id);
        pizza.sizes.filter((match) => match === size);
        setPizzaSize(size);
        const priceValue = pizza.sizes.indexOf(size);
        setPizzaPrice(pizza.price && pizza.price[priceValue]);
      }
      return null;
    },
    [pizza]
  );

  const selectCakeType = React.useCallback(
    (id: number, type: number) => {
      if (pizza.id === id && pizza.types) {
        setSaveId(pizza.id);
        pizza.types.filter((match) => match === type);
        setPizzaType(type);
      }
      return null;
    },
    [pizza]
  );

  return (
    pizza && (
      <div key={pizza.id} className="products-container__pizza">
        <div className="products-container__img">
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
          <span>
            {pizzaPrice
              ? `${pizzaPrice} ₽`
              : `От ${pizza.price && pizza.price[0]} ₽`}
          </span>
          <Button
            onClick={() =>
              addToCart(
                Math.round(Math.random() * 100000),
                pizza.name,
                pizzaPrice,
                pizzaSize,
                pizzaType,
                pizza.imageUrl
              )
            }
          >
            <Icon type="plus" />
            Добавить
          </Button>
        </div>
      </div>
    )
  );
};
