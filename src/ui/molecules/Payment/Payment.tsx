import React from 'react';
import { Icon } from 'ui/atoms';

import './Payment.scss';

export type CardTypes = 'visa' | 'master' | 'maestro' | '';

interface Props {
  active?: any;
}

export const Payment: React.FC<Props> = ({ active }) => {
  const [type, setType] = React.useState<CardTypes>('');

  const selectCard = React.useCallback(
    (newType: CardTypes) =>
      setType((prevType) => (newType === prevType ? '' : newType)),
    []
  );

  console.log(type);

  return (
    <div className="payment-container">
      <div className="payment-container__wrapper">
        <div className="payment-container__cards-holder">
          <div
            className={`payment-container__cards ${
              type === 'visa' ? 'card-is-active' : ''
            }`}
            onClick={() => selectCard('visa')}
          >
            <Icon className="visa" type="visa" />
          </div>
          <div
            className={`payment-container__cards ${
              type === 'master' ? 'card-is-active' : ''
            }`}
            onClick={() => selectCard('master')}
          >
            <Icon className="master" type="master" />
          </div>
          <div
            className={`payment-container__cards ${
              type === 'maestro' ? 'card-is-active' : ''
            }`}
            onClick={() => selectCard('maestro')}
          >
            <Icon className="maestro" type="maestro" />
          </div>
        </div>
      </div>
    </div>
  );
};
