import React from 'react';
import { PizzaContext } from 'contexts/PizzaContext';
import { Button } from 'ui/atoms';

import './OrderForm.scss';

interface Props {
  onClose?: () => void;
  onPayment?: () => void;
  form: {
    name: string;
    phone: number;
    email: string;
    address: string;
    apartment: number;
    entrance: number;
    floor: number;
    code: number;
  };
}

export const OrderForm: React.FC<Props> = ({ onClose, onPayment }) => {
  const { form, setForm } = React.useContext(PizzaContext);

  const onAddName = (event: { target: { value: any } }) => {
    setForm({ ...form, name: event.target.value });
  };

  const onAddPhone = (event: { target: { value: any } }) => {
    setForm({ ...form, phone: Number(event.target.value) });
  };

  const onAddEmail = (event: { target: { value: any } }) => {
    setForm({ ...form, email: event.target.value });
  };

  const onAddAddress = (event: { target: { value: any } }) => {
    setForm({ ...form, address: event.target.value });
  };

  const onAddApartment = (event: { target: { value: any } }) => {
    setForm({ ...form, apartment: Number(event.target.value) });
  };

  const onAddEntrance = (event: { target: { value: any } }) => {
    setForm({ ...form, entrance: Number(event.target.value) });
  };

  const onAddFloor = (event: { target: { value: any } }) => {
    setForm({ ...form, floor: Number(event.target.value) });
  };

  const onAddCode = (event: { target: { value: any } }) => {
    setForm({ ...form, code: Number(event.target.value) });
  };

  return (
    <div className="order-container">
      <div className="order-container__wrapper">
        <div className="order-container__main-title">
          <h3>Checkout</h3>
        </div>

        <div className="order-container__form-info">
          <form onSubmit={onPayment}>
            <div className="order-container__form-group">
              <label htmlFor="name">Имя*</label>
              <input
                type="text"
                placeholder="Имя*"
                value={form.name === undefined || null ? '' : form.name}
                onChange={onAddName}
              />
            </div>

            <div className="order-container__form-group">
              <label htmlFor="phone">Телефон*</label>
              <input
                type="text"
                placeholder="Телефон*"
                value={form.phone === undefined || null ? 0 : form.phone}
                onChange={onAddPhone}
              />
            </div>

            <div className="order-container__form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Email"
                value={form.email === undefined || null ? '' : form.email}
                onChange={onAddEmail}
              />
            </div>

            <div className="order-container__form-group">
              <label htmlFor="address">Адрес*</label>
              <input
                type="text"
                placeholder="Адрес*"
                value={form.address === undefined || null ? '' : form.address}
                onChange={onAddAddress}
              />
            </div>

            <div className="order-container__apartment">
              <div className="order-container__apartment-wrapper">
                <label htmlFor="apartment">Квартира/Офис*</label>
                <input
                  type="text"
                  placeholder="Квартира/Офис*"
                  value={
                    form.apartment === undefined || null ? 0 : form.apartment
                  }
                  onChange={onAddApartment}
                />
              </div>

              <div className="order-container__apartment-wrapper">
                <label htmlFor="entrance">Подъезд</label>
                <input
                  type="text"
                  placeholder="Подъезд"
                  value={
                    form.entrance === undefined || null ? 0 : form.entrance
                  }
                  onChange={onAddEntrance}
                />
              </div>

              <div className="order-container__apartment-wrapper">
                <label htmlFor="floor">Этаж</label>
                <input
                  type="text"
                  placeholder="Этаж"
                  value={form.floor === undefined || null ? 0 : form.floor}
                  onChange={onAddFloor}
                />
              </div>

              <div className="order-container__apartment-wrapper">
                <label htmlFor="code">Код</label>
                <input
                  type="text"
                  placeholder="Код"
                  value={form.code === undefined || null ? 0 : form.code}
                  onChange={onAddCode}
                />
              </div>
            </div>

            <div className="order-container__next-div">
              <Button className="next" onClick={onPayment}>
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
