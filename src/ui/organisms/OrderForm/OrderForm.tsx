import React from 'react';
import { Button } from 'ui/atoms';

import './OrderForm.scss';

interface Props {
  onClose?: () => void;
  onPayment?: () => void;
}

export const OrderForm: React.FC<Props> = ({ onClose, onPayment }) => {
  return (
    <div className="order-container">
      <div className="order-container__wrapper">
        <div className="order-container__main-title">
          <h3>Checkout</h3>
        </div>

        <div className="order-container__form-info">
          <form action="">
            <div className="order-container__form-group">
              <label htmlFor="name">Имя*</label>
              <input type="text" placeholder="Имя*" />
            </div>

            <div className="order-container__form-group">
              <label htmlFor="phone">Телефон*</label>
              <input type="text" placeholder="Телефон*" />
            </div>

            <div className="order-container__form-group">
              <label htmlFor="email">Email</label>
              <input type="text" placeholder="Email" />
            </div>

            <div className="order-container__form-group">
              <label htmlFor="address">Адрес*</label>
              <input type="text" placeholder="Адрес*" />
            </div>

            <div className="order-container__apartment">
              <div className="order-container__apartment-wrapper">
                <label htmlFor="apartment">Квартира/Офис*</label>
                <input type="text" placeholder="Квартира/Офис*" />
              </div>

              <div className="order-container__apartment-wrapper">
                <label htmlFor="entrance">Подъезд</label>
                <input type="text" placeholder="Подъезд" />
              </div>

              <div className="order-container__apartment-wrapper">
                <label htmlFor="floor">Этаж</label>
                <input type="text" placeholder="Этаж" />
              </div>

              <div className="order-container__apartment-wrapper">
                <label htmlFor="code">Код</label>
                <input type="text" placeholder="Код" />
              </div>
            </div>

            <div className="order-container__next-div">
              <Button onClick={onPayment} className="next">
                Тип Оплаты
              </Button>
            </div>
          </form>

          <div className="order-container__img">
            <img src="/images/delivery.jpg" alt="delivery" />
          </div>
        </div>

        <div className="order-container__close">
          <Button onClick={onClose} className="close">
            X
          </Button>
        </div>
      </div>
    </div>
  );
};
