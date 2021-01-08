import React from 'react';
import { PizzaContext } from 'contexts/PizzaContext';
import { Button, Icon } from 'ui/atoms';

import './CardType.scss';

export type CardTypes = 'visa' | 'master' | 'maestro' | '';

interface Props {
  onClose?: () => void;
  onPrevStep?: () => void;
  onNextStep?: () => void;
}

export const CardType: React.FC<Props> = ({
  onClose,
  onPrevStep,
  onNextStep
}) => {
  const { type, setType } = React.useContext(PizzaContext);

  const selectCard = (newType: CardTypes) =>
    setType((prevType) => (newType === prevType ? '' : newType));

  return (
    <div className="card-type-container">
      <div className="card-type-container__wrapper">
        <div className="card-type-container__cards-holder">
          <div
            className={`card-type-container__cards ${
              type === 'visa' ? 'card-is-active' : ''
            }`}
            onClick={() => selectCard('visa')}
          >
            <Icon className="visa" type="visa" />
          </div>
          <div
            className={`card-type-container__cards ${
              type === 'master' ? 'card-is-active' : ''
            }`}
            onClick={() => selectCard('master')}
          >
            <Icon className="master" type="master" />
          </div>
          <div
            className={`card-type-container__cards ${
              type === 'maestro' ? 'card-is-active' : ''
            }`}
            onClick={() => selectCard('maestro')}
          >
            <Icon className="maestro" type="maestro" />
          </div>
        </div>
        <div className="card-type-container__buttons">
          <Button className="close" onClick={onClose}>
            Закрыть
          </Button>
          <Button className="prev" onClick={onPrevStep}>
            Назад
          </Button>
          <Button className="next" onClick={onNextStep}>
            Далее
          </Button>
        </div>
      </div>
    </div>
  );
};
