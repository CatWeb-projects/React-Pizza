import React from 'react';
import { PizzaContext } from 'contexts/PizzaContext';
import { Button, Logo } from 'ui/atoms';

import './Cart.scss';

export const Cart = () => {
  const { cartPizzas, setCardPizzas } = React.useContext(PizzaContext);

  console.log(cartPizzas);

  const clearCart = () => {
    setCardPizzas([]);
  };

  return (
    <div className="cart-container">
      <div className="cart-container__logo">
        <Logo />
      </div>

      <div className="cart-content">
        <div className="cart-content__number">
          {cartPizzas && <h3>{cartPizzas.length} Товары в вашей корзине</h3>}
        </div>

        <div className="cart-content__header">
          <div className="cart-content__header-wrapper">
            <div>Товар(ы)</div>
          </div>
          <div className="cart-content__header-wrapper">
            <div>Цена</div>
            <div>Кол.</div>
            <div>Итого:</div>
          </div>
        </div>

        <div className="cart-content__item-wrapper">
          {cartPizzas &&
            cartPizzas.map((pizza) => (
              <div className="cart-content__item" key={pizza.id}>
                <div className="cart-content__pizza">
                  <div className="cart-content__img">
                    <img src={pizza.imageUrl} alt={pizza.imageUrl} />
                  </div>
                  <div className="cart-content__pizza-info">
                    <div className="cart-content__title">{pizza.name}</div>
                    <div className="cart-content__size">{pizza.size} см</div>
                    <div className="cart-content__type">{pizza.type}</div>
                  </div>
                </div>

                <div className="cart-content__info">
                  <div className="cart-content__total-price">
                    {pizza.price} ₽
                  </div>
                  <div className="cart-content__quantity">1</div>
                  <div className="cart-content__price">{pizza.price} ₽</div>
                </div>
              </div>
            ))}
        </div>

        <div className="cart-content__total">
          Итого: {cartPizzas.reduce((total, item) => total + item.price, 0)} ₽
        </div>
      </div>
      <Button onClick={clearCart}>Clear Cart</Button>
    </div>
  );
};
