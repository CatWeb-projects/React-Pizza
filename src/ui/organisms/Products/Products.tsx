import React, { useState, useCallback } from 'react';
import { pizzas } from 'Context/Context';
import './Products.scss';

export const Products = () => {
  const [active, setActive] = useState<boolean>(false);
  const [pizzaSize, setPizzaSize] = useState<any>();

  const addToCart = useCallback((name: string, price: number) => {
    console.log(name, price);
  }, []);

  const selectSize = useCallback(
    (e: any) => {
      e.preventDefault();
      console.log(e.target.value);
    },
    [pizzaSize]
  );

  return (
    <div className="products-container">
      <h2>Все Пиццы</h2>
      <div className="products-container__products">
        {pizzas &&
          pizzas.map((pizza: any) => (
            <div key={pizza.id} className="products-container__pizza">
              <div className="products-container__logo">
                <img src={pizza.imageUrl} alt="" />
              </div>
              <div className="products-container__title">{pizza.name}</div>
              <div className="products-container__select">
                <div className="products-container__types">
                  {pizza.types.map((type: any, i: number) => (
                    <button
                      value={type === 0 ? 'Тонкое' : 'Традиционное'}
                      onClick={(e: any) => console.log(e.target.value)}
                      key={i + 1}
                      className="products-container__type"
                    >
                      {type === 0 ? 'Тонкое' : 'Традиционное'}
                    </button>
                  ))}
                </div>
                <div className="products-container__sizes">
                  {pizza.sizes.map((size: number, i: number) => (
                    <button
                      value={`${size} см`}
                      onClick={selectSize}
                      key={i + 1}
                      className="products-container__size"
                    >{`${size} см`}</button>
                  ))}
                </div>
              </div>
              <div className="products-container__price">
                <span>От {`${pizza.price} ₽`}</span>
                <button onClick={() => addToCart(pizza.name, pizza.price)}>
                  <i className="fas fa-plus"></i>Добавить
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
