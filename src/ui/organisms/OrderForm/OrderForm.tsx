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

  const onAddFormInfo = React.useCallback(
    (event: any) => {
      event.preventDefault();

      setForm({
        ...form,
        name: form.name,
        phone: form.phone,
        email: form.email,
        address: form.address,
        apartment: form.apartment,
        entrance: form.entrance,
        floor: form.floor,
        code: form.code
      });

      setMessage('Адрес Сохранён');

      setTimeout(() => {
        setMessage('');
      }, 3000);
    },
    // eslint-disable-next-line
    [form]
  );

  console.log(form);

  const onChangeValue = React.useCallback(
    (event: { target: { value: any; name: string } }) => {
      const { name, value } = event.target;
      setForm({
        ...form,
        [name]: isNaN(value) ? value : Number(value) === 0 ? '' : Number(value)
      });
    },
    // eslint-disable-next-line
    [form]
  );

  const onAddName = (event: { target: { value: string } }) => {
    setForm({ ...form, name: event.target.value.replace(/[^a-z\s]+/gi, '') });
  };

  const onAddPhone = (event: { target: { value: string } }) => {
    setForm({
      ...form,
      phone: event.target.value.replace(/[^0-9]/gi, '')
    });
  };

  const onAddEmail = (event: { target: { value: string } }) => {
    setForm({
      ...form,
      email: event.target.value.replace(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/gi,
        ''
      )
    });
  };

  // const onAddAddress = (event: { target: { value: string } }) => {
  //   setForm({ ...form, address: event.target.value });
  // };

  // const onAddApartment = (event: { target: { value: number | string } }) => {
  //   setForm({
  //     ...form,
  //     apartment: form.apartment === 0 ? '' : Number(event.target.value)
  //   });
  // };

  // const onAddEntrance = (event: { target: { value: number | string } }) => {
  //   setForm({
  //     ...form,
  //     entrance: form.entrance === 0 ? '' : Number(event.target.value)
  //   });
  // };

  // const onAddFloor = (event: { target: { value: number | string } }) => {
  //   setForm({
  //     ...form,
  //     floor: form.floor === 0 ? '' : Number(event.target.value)
  //   });
  // };

  // const onAddCode = (event: { target: { value: number | string } }) => {
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
                onChange={onAddName}
              />
            </div>

            <div className="order-container__form-group">
              <label htmlFor="phone">Телефон*</label>
              <input
                type="text"
                placeholder="Телефон*"
                name="phone"
                value={form.phone === undefined || null ? '' : form.phone}
                onChange={onAddPhone}
              />
            </div>

            <div className="order-container__form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={form.email === undefined || null ? '' : form.email}
                onChange={onAddEmail}
              />
            </div>

            <div className="order-container__form-group">
              <label htmlFor="address">Адрес*</label>
              <input
                type="text"
                placeholder="Адрес*"
                name="address"
                value={form.address === undefined || null ? '' : form.address}
                onChange={onChangeValue}
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
                  onChange={onChangeValue}
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
                  onChange={onChangeValue}
                />
              </div>

              <div className="order-container__apartment-wrapper">
                <label htmlFor="floor">Этаж</label>
                <input
                  type="text"
                  placeholder="Этаж"
                  name="floor"
                  value={form.floor === undefined || null ? '' : form.floor}
                  onChange={onChangeValue}
                />
              </div>

              <div className="order-container__apartment-wrapper">
                <label htmlFor="code">Код</label>
                <input
                  type="text"
                  placeholder="Код"
                  name="code"
                  value={form.code === undefined || null ? '' : form.code}
                  onChange={onChangeValue}
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
