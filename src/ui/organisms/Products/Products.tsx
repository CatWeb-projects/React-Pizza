import React from 'react';
import { pizzas, PizzaContext } from 'Context/Context';

import './Products.scss';

export const Products = () => {
  const [saveId, setSaveId] = React.useState<number>();
  const [pizzaSize, setPizzaSize] = React.useState<number>(0);
  const [pizzaType, setPizzaType] = React.useState<number>(0);

  const addToCart = (
    name: string,
    price: number,
    size: number,
    type: number
  ) => {
    console.log(name, price, size, type, 'add');
    console.log({
      name: name,
      price: price,
      size: size,
      type: type
    });
  };

  const selectSize = React.useCallback((id: number, size: number) => {
    pizzas.map((pizza) => {
      if (pizza.id === id) {
        setSaveId(pizza.id);
        pizza.sizes.filter((match) => match === size);
        setPizzaSize(size);
      }
    });
  }, []);

  const selectCakeType = React.useCallback((id: number, type: number) => {
    pizzas.map((pizza) => {
      if (pizza.id === id) {
        setSaveId(pizza.id);
        pizza.types.filter((match) => match === type);
        setPizzaType(type);
      }
      console.log(id);
      console.log(type);
    });
  }, []);

  return (
    <div className="products-container">
      <h2>Все Пиццы</h2>

      <div className="products-container__products">
        {pizzas &&
          pizzas.map((pizza) => (
            <div key={pizza.id} className="products-container__pizza">
              <div className="products-container__logo">
                <img src={pizza.imageUrl} alt="" />
              </div>
              <div className="products-container__title">{pizza.name}</div>
              <div className="products-container__select">
                <div className="products-container__types">
                  {pizza.types.map((type) => (
                    <button
                      value={type === 0 ? 'Тонкое' : 'Традиционное'}
                      onClick={() => selectCakeType(pizza.id, type)}
                      key={type}
                      className={`products-container__type ${
                        saveId === pizza.id && pizzaType === type
                          ? 'active'
                          : ''
                      }`}
                    >
                      {type === 0 ? 'Тонкое' : 'Традиционное'}
                    </button>
                  ))}
                </div>

                <div className="products-container__sizes">
                  {pizza.sizes.map((size: number) => (
                    <button
                      value={`${size} см`}
                      onClick={() => selectSize(pizza.id, size)}
                      key={size}
                      className={`products-container__size ${
                        saveId === pizza.id && pizzaSize === size
                          ? 'active'
                          : ''
                      }`}
                    >{`${size} см`}</button>
                  ))}
                </div>
              </div>
              <div className="products-container__price">
                <span>От {`${pizza.price} ₽`}</span>
                <button
                  onClick={() =>
                    addToCart(pizza.name, pizza.price, pizzaSize, pizzaType)
                  }
                >
                  <i className="fas fa-plus"></i>Добавить
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
