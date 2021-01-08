import React from 'react';
import { Button } from 'ui/atoms';

import './Confirmation.scss';

interface Props {
  onCheckout?: () => void;
}

export const Confirmation: React.FC<Props> = ({ onCheckout }) => {
  return (
    <div className="confirmation-container">
      <div className="confirmation-container__wrapper">
        <h3>Заказ получен, курьер выехал к вам.</h3>
        <Button className="confirmation" onClick={onCheckout}>
          OK
        </Button>
      </div>
    </div>
  );
};
