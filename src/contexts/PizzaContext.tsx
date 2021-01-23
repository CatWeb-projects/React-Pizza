import React, { ReactNode } from 'react';
import { useRequest } from 'estafette';
import { pizzasItems } from 'libs/http/api/pizza-api';

interface ProviderProps {
  children: ReactNode;
}

interface Pizza {
  id: number;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number[];
  category: number;
  rating: number;
}

interface CardPizza {
  id: number;
  name: string;
  price: number;
  size: number;
  type: number;
  imageUrl: string;
  quantity: number;
}

interface Form {
  name: string;
  phone: string;
  email: string;
  address: string;
  apartment: number | string;
  entrance: number | string;
  floor: number | string;
  code: number | string;
}

interface CardInfo {
  cardType: string;
  totalSum: number;
  card_number: string;
  card_holder: string;
  expiration_date: string;
  cvc: number;
}

interface Props {
  pizzas: Pizza[];
  cartPizzas: CardPizza[];
  type: string;
  form: Form;
  cardInfo: CardInfo;
  order: boolean;
  cardType: boolean;
  confirmation: boolean;
  filtered: Pizza[];
  saveFilteredCategory: number;
  selectType: string;
  setPizzas: React.Dispatch<React.SetStateAction<Pizza[]>>;
  setCardPizzas: React.Dispatch<React.SetStateAction<CardPizza[]>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setForm: React.Dispatch<React.SetStateAction<Form>>;
  setCardInfo: React.Dispatch<React.SetStateAction<CardInfo>>;
  setOrder: React.Dispatch<React.SetStateAction<boolean>>;
  setCardType: React.Dispatch<React.SetStateAction<boolean>>;
  setConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
  setFiltered: React.Dispatch<React.SetStateAction<Pizza[]>>;
  setSaveFilteredCategory: React.Dispatch<React.SetStateAction<number>>;
  setSelectType: React.Dispatch<React.SetStateAction<string>>;
}

const defaultValue = {
  pizzas: [],
  id: 0,
  imageUrl: '',
  name: '',
  types: [],
  sizes: [],
  price: 0,
  category: 0,
  rating: 0,
  cartPizzas: [],
  type: '',
  form: {
    name: '',
    phone: '',
    email: '',
    address: '',
    apartment: '',
    entrance: '',
    floor: '',
    code: ''
  },
  cardInfo: {
    cardType: '',
    totalSum: 0,
    card_number: '',
    card_holder: '',
    expiration_date: '',
    cvc: 0
  },
  order: false,
  cardType: false,
  confirmation: false,
  filtered: [],
  saveFilteredCategory: 0,
  selectType: 'popularity',
  setPizzas: () => {},
  setCardPizzas: () => {},
  setType: () => {},
  setForm: () => {},
  setCardInfo: () => {},
  setOrder: () => {},
  setCardType: () => {},
  setConfirmation: () => {},
  setFiltered: () => {},
  setSaveFilteredCategory: () => {},
  setSelectType: () => {}
};

export const PizzaContext = React.createContext<Props>(defaultValue);

// export const pizzas: Pizza[] = [
//   {
//     id: 0,
//     imageUrl:
//       'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg',
//     name: 'Пепперони Фреш с перцем',
//     types: [0, 1],
//     sizes: [26, 30, 40],
//     price: [245, 435, 575],
//     category: 4,
//     rating: 4
//   },
//   {
//     id: 1,
//     imageUrl:
//       'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg',
//     name: 'Сырная',
//     types: [0],
//     sizes: [26, 30, 40],
//     price: [245, 435, 575],
//     category: 5,
//     rating: 6
//   },
//   {
//     id: 2,
//     imageUrl:
//       'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg',
//     name: 'Цыпленок барбекю',
//     types: [0],
//     sizes: [26, 40],
//     price: [445, 845],
//     category: 1,
//     rating: 6
//   },
//   {
//     id: 3,
//     imageUrl:
//       'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg',
//     name: 'Кисло-сладкий цыпленок',
//     types: [1],
//     sizes: [26, 30, 40],
//     price: [295, 475, 625],
//     category: 3,
//     rating: 4
//   },
//   {
//     id: 4,
//     imageUrl:
//       'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
//     name: 'Чизбургер-пицца',
//     types: [0, 1],
//     sizes: [26, 30, 40],
//     price: [395, 625, 775],
//     category: 2,
//     rating: 8
//   },
//   {
//     id: 5,
//     imageUrl:
//       'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg',
//     name: 'Крэйзи пепперони',
//     types: [0],
//     sizes: [30, 40],
//     price: [695, 845],
//     category: 4,
//     rating: 2
//   },
//   {
//     id: 6,
//     imageUrl:
//       'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg',
//     name: 'Пепперони',
//     types: [0, 1],
//     sizes: [26, 30, 40],
//     price: [395, 625, 775],
//     category: 4,
//     rating: 3
//   },
//   {
//     id: 7,
//     imageUrl:
//       'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg',
//     name: 'Маргарита',
//     types: [0, 1],
//     sizes: [26, 30, 40],
//     price: [345, 525, 695],
//     category: 5,
//     rating: 5
//   },
//   {
//     id: 8,
//     imageUrl:
//       'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg',
//     name: 'Четыре сезона',
//     types: [0, 1],
//     sizes: [26, 30, 40],
//     price: [395, 625, 795],
//     category: 1,
//     rating: 6
//   },
//   {
//     id: 9,
//     imageUrl:
//       'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg',
//     name: 'Овощи и грибы 🌱',
//     types: [0, 1],
//     sizes: [26, 30, 40],
//     price: [285, 450, 600],
//     category: 2,
//     rating: 7
//   },
//   {
//     id: 10,
//     imageUrl:
//       'https://dodopizza-a.akamaihd.net/static/Img/Products/b3c4109c40e24b618c47562a93c992cf_233x233.jpeg',
//     name: 'Цезарь',
//     types: [0, 1],
//     sizes: [26, 30, 40],
//     price: [395, 645, 795],
//     category: 5,
//     rating: 9
//   },
//   {
//     id: 11,
//     imageUrl:
//       'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/44bfc7f0-792c-4bd4-a2bc-df322565c611.jpg',
//     name: 'Цыпленок ранч',
//     types: [0, 1],
//     sizes: [26, 30, 40],
//     price: [445, 725, 895],
//     category: 3,
//     rating: 10
//   },
//   {
//     id: 12,
//     imageUrl:
//       'https://dodopizza-a.akamaihd.net/static/Img/Products/f5efd84790134654b9eb84c89f2c9ca8_233x233.jpeg',
//     name: 'Нежный лосось',
//     types: [0, 1],
//     sizes: [26, 30, 40],
//     price: [495, 795, 935],
//     category: 3,
//     rating: 9
//   },
//   {
//     id: 13,
//     imageUrl:
//       'https://dodopizza-a.akamaihd.net/static/Img/Products/26fa2948b6c74113afb9d09a3262fc26_233x233.jpeg',
//     name: 'Ветчина и грибы',
//     types: [0, 1],
//     sizes: [26, 30, 40],
//     price: [345, 525, 695],
//     category: 1,
//     rating: 6
//   },
//   {
//     id: 14,
//     imageUrl:
//       'https://dodopizza-a.akamaihd.net/static/Img/Products/12faf8763c694ce7a51afe75401d19d6_233x233.jpeg',
//     name: 'Аррива!',
//     types: [0, 1],
//     sizes: [26, 30, 40],
//     price: [395, 625, 775],
//     category: 3,
//     rating: 9
//   },
//   {
//     id: 15,
//     imageUrl:
//       'https://dodopizza-a.akamaihd.net/static/Img/Products/efed3525d49b4ccfbcef9278570419db_233x233.jpeg',
//     name: 'Карбонара',
//     types: [0, 1],
//     sizes: [26, 30, 40],
//     price: [395, 625, 775],
//     category: 5,
//     rating: 5
//   },
//   {
//     id: 16,
//     imageUrl:
//       'https://dodopizza-a.akamaihd.net/static/Img/Products/32ab88d1819048e285a91d91b9ef4451_233x233.jpeg',
//     name: 'Песто',
//     types: [0, 1],
//     sizes: [26, 30, 40],
//     price: [445, 695, 845],
//     category: 3,
//     rating: 8
//   },
//   {
//     id: 17,
//     imageUrl:
//       'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/acaac700-4c9a-4fde-b7c2-4483f52e8427.jpg',
//     name: 'Мексиканская 🌶️🌶️',
//     types: [0, 1],
//     sizes: [26, 30, 40],
//     price: [445, 695, 845],
//     category: 4,
//     rating: 6
//   },
//   {
//     id: 18,
//     imageUrl:
//       'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/95e5c389-8861-4fb3-99b6-0c2af50615a8.jpg',
//     name: 'Мясная',
//     types: [0, 1],
//     sizes: [26, 30, 40],
//     price: [445, 695, 845],
//     category: 1,
//     rating: 7
//   },
//   {
//     id: 19,
//     imageUrl:
//       'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/a38eebac-9fab-44ac-a417-620957548a41.jpg',
//     name: 'Цыпленок барбекю',
//     types: [0, 1],
//     sizes: [26, 30, 40],
//     price: [445, 695, 845],
//     category: 3,
//     rating: 7
//   },
//   {
//     id: 20,
//     imageUrl:
//       'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/704adfe0-982d-4bb8-9a2a-5554c356df87.jpg',
//     name: 'Супермясная',
//     types: [0, 1],
//     sizes: [26, 30, 40],
//     price: [495, 795, 935],
//     category: 1,
//     rating: 6
//   },
//   {
//     id: 21,
//     imageUrl:
//       'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/78a8d351-ec50-49b8-ba8e-6cc18611cc13.jpg',
//     name: 'Сырный цыпленок',
//     types: [0, 1],
//     sizes: [26, 30, 40],
//     price: [445, 695, 845],
//     category: 3,
//     rating: 5
//   }
// ];

export const ProviderContext = (props: ProviderProps) => {
  const [pizzas, setPizzas] = React.useState<Pizza[]>([]);
  const [cartPizzas, setCardPizzas] = React.useState<CardPizza[]>([]);
  const [type, setType] = React.useState<string>('');
  const [form, setForm] = React.useState<any>({});
  const [cardInfo, setCardInfo] = React.useState<any>({});
  const [order, setOrder] = React.useState<boolean>(false);
  const [cardType, setCardType] = React.useState<boolean>(false);
  const [confirmation, setConfirmation] = React.useState<boolean>(false);
  const [filtered, setFiltered] = React.useState<Pizza[]>([]);
  const [
    saveFilteredCategory,
    setSaveFilteredCategory
  ] = React.useState<number>(0);
  const [selectType, setSelectType] = React.useState<string>('popularity');

  const { request, data } = useRequest<Pizza[]>();

  React.useEffect(() => {
    onFetch();

    return () => {
      pizzasItems.cancel();
    };
    //eslint-disable-next-line
  }, []);

  const onFetch = () => request(pizzasItems.action());

  React.useMemo(() => setPizzas(data), [data]);

  React.useEffect(() => {
    const data = localStorage.getItem('cart-products');
    if (data) {
      setCardPizzas(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('cart-products', JSON.stringify(cartPizzas));
  }, [cartPizzas]);

  React.useEffect(() => {
    const data = localStorage.getItem('get-form');
    if (data) {
      setForm(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('get-form', JSON.stringify(form));
  }, [form]);

  React.useEffect(() => {
    const data = localStorage.getItem('card-type');
    if (data) {
      setType(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('card-type', JSON.stringify(type));
  }, [type]);

  React.useEffect(() => {
    const data = localStorage.getItem('card');
    if (data) {
      setCardInfo(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('card', JSON.stringify(cardInfo));
  }, [cardInfo]);

  const values = {
    pizzas,
    setPizzas,
    cartPizzas,
    setCardPizzas,
    type,
    setType,
    form,
    setForm,
    cardInfo,
    setCardInfo,
    order,
    setOrder,
    cardType,
    setCardType,
    confirmation,
    setConfirmation,
    filtered,
    setFiltered,
    saveFilteredCategory,
    setSaveFilteredCategory,
    selectType,
    setSelectType
  };

  const { children } = props;
  return (
    <PizzaContext.Provider value={values}>{children}</PizzaContext.Provider>
  );
};
