import React from 'react';
import { PizzaContext } from 'contexts/PizzaContext';
import { OrderForm } from 'ui/organisms';
import { Payment } from 'ui/molecules';
import { Button, Logo } from 'ui/atoms';

import './Cart.scss';

export const Cart = () => {
  const { cartPizzas, setCardPizzas } = React.useContext(PizzaContext);
  const [order, setOrder] = React.useState<boolean>(false);
  const [payment, setPayment] = React.useState<boolean>(false);

  const clearCart = () => {
    setCardPizzas([]);
  };

  const onDelete = React.useCallback(
    (id: number) => {
      setCardPizzas(cartPizzas.filter((filter) => filter.id !== id));
    },
    // eslint-disable-next-line
    [cartPizzas]
  );

  const onOrder = () => setOrder((s) => !s);
  const onPayment = () => {
    setPayment((s) => !s);
    setOrder(false);
  };

  const Close = () => setOrder(false);

  const minusQuantity = (id: number) => {
    setCardPizzas((prevPizzas) =>
      prevPizzas.map((pizza) =>
        pizza.id === id
          ? {
              ...pizza,
              quantity: pizza.quantity === 1 ? 1 : pizza.quantity - 1
            }
          : pizza
      )
    );
  };

  const plusQuantity = (id: number) => {
    setCardPizzas((prevPizzas) =>
      prevPizzas.map((pizza) =>
        pizza.id === id
          ? {
              ...pizza,
              quantity: pizza.quantity === 20 ? 20 : pizza.quantity + 1
            }
          : pizza
      )
    );
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
          <div className="cart-content__header-info">
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

                    <div className="cart-content__type">
                      {pizza.type === 0 ? 'Тонкое' : 'Традиционное'}
                    </div>

                    <div
                      className="cart-content__delete"
                      onClick={() => onDelete(pizza.id)}
                    >
                      Удалить
                    </div>
                  </div>
                </div>

                <div className="cart-content__info">
                  <div className="cart-content__total-price">
                    {pizza.price} ₽
                  </div>

                  <div className="cart-content__quantity">
                    <Button
                      className="counter"
                      onClick={() => minusQuantity(pizza.id)}
                    >
                      -
                    </Button>

                    {pizza.quantity}
                    <Button
                      className="counter"
                      onClick={() => plusQuantity(pizza.id)}
                    >
                      +
                    </Button>
                  </div>

                  <div className="cart-content__price">
                    {pizza.price * pizza.quantity} ₽
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="cart-content__total">
          Итого:
          {cartPizzas.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          )}
          ₽
        </div>
      </div>

      <div className="cart-content__buttons">
        <Button className="cart-button cart-button-clear" onClick={clearCart}>
          Очистить корзину
        </Button>
        <Button className="cart-button cart-button-order" onClick={onOrder}>
          Оформить заказ
        </Button>
      </div>

      {order && <OrderForm onClose={Close} onPayment={onPayment} />}

      {payment && <Payment />}
    </div>
  );
};