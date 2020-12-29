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
        </form>
        <div className="order-container__img">
          <img src="./static/img/delivery.jpg" alt="delivery" />
        </div>
      </div>
      <div className="order-container__close">
        <Button onClick={onClick}>Close</Button>
      </div>
    </div>
  );
};
