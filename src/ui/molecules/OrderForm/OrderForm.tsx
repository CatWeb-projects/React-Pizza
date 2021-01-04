import React from 'react';
import { Button } from 'ui/atoms';

import './OrderForm.scss';

interface Props {
  onClick: () => void;
}

export const OrderForm: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="order-container">
      <div className="order-container__wrapper">
        <div className="order-container__main-title">
          <h3>Checkout</h3>
        </div>
        <div className="order-container__form-info">
          <form action="">
            <div className="order-container__form-group">
              <label htmlFor="name">Name*</label>
              <div className="order-container__name">
                <input type="text" placeholder="Name*" />
              </div>
            </div>
            <div className="order-container__form-group">
              <label htmlFor="phone">Phone*</label>
              <div className="order-container__phone">
                <input type="text" placeholder="Phone*" />
              </div>
            </div>
            <div className="order-container__form-group">
              <label htmlFor="email">Email</label>
              <div className="order-container__email">
                <input type="text" placeholder="Email" />
              </div>
            </div>
            <div className="order-container__form-group">
              <label htmlFor="address">Address</label>
              <div className="order-container__address">
                <input type="text" placeholder="Address" />
              </div>
            </div>
          </form>
          <div className="order-container__img">
            <img src="/images/delivery.jpg" alt="delivery" />
          </div>
        </div>
        <div className="order-container__close">
          <Button onClick={onClick} className="close">
            X
          </Button>
        </div>
      </div>
    </div>
  );
};
