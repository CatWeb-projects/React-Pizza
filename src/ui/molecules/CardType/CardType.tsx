import React from 'react';
import { PizzaContext } from 'contexts/PizzaContext';
import { Button, Icon } from 'ui/atoms';

import './CardType.scss';

export type CardTypes = 'visa' | 'master' | 'maestro' | '';

interface Props {
  onClose?: () => void;
  onPrevStep?: () => void;
}

export const CardType: React.FC<Props> = ({ onClose, onPrevStep }) => {
  const {
    cartPizzas,
    type,
    setType,
    cardInfo,
    setCardInfo,
    setCardType,
    setOrder
  } = React.useContext(PizzaContext);

  const selectCard = (newType: CardTypes) =>
    setType((prevType) => (newType === prevType ? '' : newType));

  const onCardPay = React.useCallback(
    () => {
      setCardInfo({
        ...cardInfo,
        cardType: type,
        totalSum: cartPizzas.reduce(
          (total, pizza) => total + pizza.price * pizza.quantity,
          0
        ),
        card_number: cardInfo.card_number,
        card_holder: cardInfo.card_holder,
        expiration_date: cardInfo.expiration_date,
        cvc: cardInfo.cvc
      });

      setCardType(false);
      setOrder(false);
    },
    // eslint-disable-next-line
    [cardInfo, type, cartPizzas]
  );

  // const onChange = React.useCallback(
  //   (event: any) => {
  //     const { name, value } = event.target;
  //     setCardInfo({
  //       ...cardInfo,
  //       [name]: isNaN(value) ? '' : Number(value) === 0 ? '' : Number(value)
  //     });
  //   },
  //   // eslint-disable-next-line
  //   [cardInfo, type]
  // );

  // const onChangeType = React.useCallback(
  //   (type) => {
  //     setCardInfo({ ...cardInfo, cardType: type });
  //   },
  //   // eslint-disable-next-line
  //   [cardInfo, type]
  // );

  const onAddCardNumber = (event: { target: any }) => {
    setCardInfo({
      ...cardInfo,
      card_number: event.target.value
        .replace(/[^0-9]+/gi, '')
        .replace(/(.{4})/g, '$1-')
        .substr(0, 19)
    });
  };

  const onAddCardHolder = (event: { target: { value: string } }) => {
    setCardInfo({
      ...cardInfo,
      card_holder: event.target.value.replace(/[^a-z]/gi, '')
    });
  };

  const onAddExpDate = (event: { target: { value: string } }) => {
    setCardInfo({
      ...cardInfo,
      expiration_date: event.target.value
        .replace(/[^0-9/]/gi, '')
        .substring(0, 5)
    });
  };

  const onAddCvc = (event: { target: { value: any } }) => {
    setCardInfo({
      ...cardInfo,
      cvc: event.target.value.substr(0, 3)
    });
  };

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
                onChange={onAddCardNumber}
                placeholder="****-****-****-****"
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
                onChange={onAddCardHolder}
              />
              <span>Владелец Карты</span>
            </div>

            <div className="card-type-container__card-additionals">
              <span>Срок Действия</span>
              <input
                type="text"
                placeholder="ММ/ГГ"
                name="expiration_date"
                value={
                  cardInfo.expiration_date === undefined || null
                    ? ''
                    : cardInfo.expiration_date
                }
                onChange={onAddExpDate}
              />
              <span>CVC/CVV</span>
              <input
                type="text"
                name="cvc"
                placeholder="***"
                value={cardInfo.cvc === undefined || null ? '' : cardInfo.cvc}
                onChange={onAddCvc}
              />
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

          <Button className="next" onClick={onCardPay}>
            Оплатить
          </Button>
        </div>
      </div>
    </div>
  );
};
