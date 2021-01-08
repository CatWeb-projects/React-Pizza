import React from 'react';

import { PizzaContext } from 'contexts/PizzaContext';
import { Button } from 'ui/atoms';

import './OrderForm.scss';

interface Props {
  onClose?: () => void;
  onCashPayment?: () => void;
  onCardPayment?: () => void;
}

export const OrderForm: React.FC<Props> = ({
  onClose,
  onCashPayment,
  onCardPayment
}) => {
  const { form, setForm } = React.useContext(PizzaContext);

  const [message, setMessage] = React.useState<string>();

  const onAddFormInfo = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: isNaN(value) ? value : Number(value) === 0 ? '' : Number(value)
    });

    setMessage('Адрес Сохранён');
  };

  console.log(form);

  //A longer method I tried before

  // const onAddName = (event: { target: { value: string } }) => {
  //   setForm({ ...form, name: event.target.value });
  // };

  // const onAddPhone = (event: { target: { value: number | string } }) => {
  //   setForm({
  //     ...form,
  //     phone: form.phone === 0 ? '' : Number(event.target.value)
  //   });
  // };

  // const onAddEmail = (event: { target: { value: any } }) => {
  //   setForm({ ...form, email: event.target.value });
  // };

  // const onAddAddress = (event: { target: { value: any } }) => {
  //   setForm({ ...form, address: event.target.value });
  // };

  // const onAddApartment = (event: { target: { value: number | string } }) => {
  //   setForm({
  //     ...form,
  //     apartment: form.apartment === 0 ? '' : Number(event.target.value)
  //   });
  // };

  // const onAddEntrance = (event: { target: { value: any } }) => {
  //   setForm({
  //     ...form,
  //     entrance: form.entrance === 0 ? '' : Number(event.target.value)
  //   });
  // };

  // const onAddFloor = (event: { target: { value: any } }) => {
  //   setForm({
  //     ...form,
  //     floor: form.floor === 0 ? '' : Number(event.target.value)
  //   });
  // };

  // const onAddCode = (event: { target: { value: any } }) => {
  //   setForm({
  //     ...form,
  //     code: form.code === 0 ? '' : Number(event.target.value)
  //   });
  // };

  return (
    <div className="order-container">
      <div className="order-container__wrapper">
        <div className="order-container__main-title">
          <h3>Checkout</h3>
        </div>

        <div className="order-container__form-info">
          <form onSubmit={onAddFormInfo}>
            <div className="order-container__form-group">
              <label htmlFor="name">Имя*</label>
              <input
                type="text"
                placeholder="Имя*"
                name="name"
                value={form.name === undefined || null ? '' : form.name}
                onChange={onAddFormInfo}
              />
            </div>

            <div className="order-container__form-group">
              <label htmlFor="phone">Телефон*</label>
              <input
                type="text"
                placeholder="Телефон*"
                name="phone"
                value={form.phone === undefined || null ? '' : form.phone}
                onChange={onAddFormInfo}
              />
            </div>

            <div className="order-container__form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={form.email === undefined || null ? '' : form.email}
                onChange={onAddFormInfo}
              />
            </div>

            <div className="order-container__form-group">
              <label htmlFor="address">Адрес*</label>
              <input
                type="text"
                placeholder="Адрес*"
                name="address"
                value={form.address === undefined || null ? '' : form.address}
                onChange={onAddFormInfo}
              />
            </div>

            <div className="order-container__apartment">
              <div className="order-container__apartment-wrapper">
                <label htmlFor="apartment">Квартира/Офис*</label>
                <input
                  type="text"
                  placeholder="Квартира/Офис*"
                  name="apartment"
                  value={
                    form.apartment === undefined || null ? '' : form.apartment
                  }
                  onChange={onAddFormInfo}
                />
              </div>

              <div className="order-container__apartment-wrapper">
                <label htmlFor="entrance">Подъезд</label>
                <input
                  type="text"
                  placeholder="Подъезд"
                  name="entrance"
                  value={
                    form.entrance === undefined || null ? '' : form.entrance
                  }
                  onChange={onAddFormInfo}
                />
              </div>

              <div className="order-container__apartment-wrapper">
                <label htmlFor="floor">Этаж</label>
                <input
                  type="text"
                  placeholder="Этаж"
                  name="floor"
                  value={form.floor === undefined || null ? '' : form.floor}
                  onChange={onAddFormInfo}
                />
              </div>

              <div className="order-container__apartment-wrapper">
                <label htmlFor="code">Код</label>
                <input
                  type="text"
                  placeholder="Код"
                  name="code"
                  value={form.code === undefined || null ? '' : form.code}
                  onChange={onAddFormInfo}
                />
              </div>
            </div>

            <div className="order-container__next-div">
              <h5>Тип Оплаты</h5>

              {message && <span>{message}</span>}

              <div className="order-container__type-of-payment">
                <Button
                  className="next"
                  generalType="submit"
                  onClick={() => onAddFormInfo}
                >
                  Сохранить Адрес
                </Button>

                <Button className="next" onClick={onCashPayment}>
                  Наличные
                </Button>

                <Button className="next" onClick={onCardPayment}>
                  Карточкой онлайн
                </Button>
              </div>
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
