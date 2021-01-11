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
  const { cartPizzas, type, setType, cardInfo, setCardInfo } = React.useContext(
    PizzaContext
  );

  const selectCard = (newType: CardTypes) =>
    setType((prevType) => (newType === prevType ? '' : newType));

  // const onCardPay = (event: any) => {
  //   event.preventDefault();
  //   const { name, value } = event.target;

  //   setCardInfo({ ...cardInfo, [name]: value });
  // };

  const onCardPay = (event: any) => {
    const { name, value } = event.target;

    setCardInfo({
      ...cardInfo,
      [name]: value,
      cardType: type,
      totalSum: cartPizzas.reduce(
        (total, pizza) => total + pizza.price * pizza.quantity,
        0
      )
    });
  };

  console.log(cardInfo, 'cards');
  console.log(type, 'type');

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

        <div className="card-type-container__card-pay">
          <div className="card-type-container__total">
            <h2>
              Итого:
              {cartPizzas.reduce(
                (total, pizza) => total + pizza.price * pizza.quantity,
                0
              )}
              ₽
            </h2>
          </div>

          <div className="card-type-container__card-info">
            <div className="card-type-container__card-number">
              <input
                type="text"
                name="card_number"
                value={
                  cardInfo.card_number === undefined || null
                    ? ''
                    : cardInfo.card_number
                }
                onChange={onCardPay}
              />
              <span>Номер Карты</span>
            </div>

            <div className="card-type-container__card-holder">
              <input
                type="text"
                name="card_holder"
                value={
                  cardInfo.card_holder === undefined || null
                    ? ''
                    : cardInfo.card_holder
                }
                onChange={onCardPay}
              />
              <span>Владелец Карты</span>
            </div>

            <div className="card-type-container__card-additionals">
              <input
                type="text"
                placeholder="ММ/ГГ"
                name="expiration_date"
                value={
                  cardInfo.expiration_date === undefined || null
                    ? ''
                    : cardInfo.expiration_date
                }
                onChange={onCardPay}
              />
              <span>Срок Действия</span>
              <input
                type="text"
                name="cvc"
                placeholder="CVC/CVV"
                value={cardInfo.cvc === undefined || null ? '' : cardInfo.cvc}
                onChange={onCardPay}
              />
              <span>CVC/CVV</span>
            </div>
          </div>
        </div>

        <div className="card-type-container__buttons">
          <Button className="close" onClick={onClose}>
            Закрыть
          </Button>

          <Button className="prev" onClick={onPrevStep}>
            Назад
          </Button>

          <Button className="next" onClick={() => onCardPay}>
            Оплатить
          </Button>
        </div>
      </div>
    </div>
  );
};
