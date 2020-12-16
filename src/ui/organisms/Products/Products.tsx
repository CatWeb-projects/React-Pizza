import React from 'react';
import { pizzas, PizzaContext } from 'Context/Context';

import './Products.scss';

export const Products = () => {
  const { pizzaSize, setPizzaSize } = React.useContext(PizzaContext);
  const [saveId, setSaveId] = React.useState<number>();

  const addToCart = (name: string, price: number, size: number) => {
    console.log(name, price, size, 'add');
    console.log({
      name: name,
      price: price,
      size: size
    });
  };

  const selectSize = (id: number, size: number) => {
    pizzas.map((pizza) => {
      if (pizza.id === id) {
        setSaveId(pizza.id);
        pizza.sizes.filter((match) => match === size);
        setPizzaSize(size);
      }
    });
  };

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
                      onClick={(e: any) => console.log(e.target.value)}
                      key={type}
                      className="products-container__type"
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
                  onClick={() => addToCart(pizza.name, pizza.price, pizzaSize)}
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
