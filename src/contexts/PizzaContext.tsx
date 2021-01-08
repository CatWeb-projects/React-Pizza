import React, { ReactNode } from 'react';

interface ProviderProps {
  children: ReactNode;
}

interface Pizza {
  id: number;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
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
  phone: number | string;
  email: string;
  address: string;
  apartment: number | string;
  entrance: number | string;
  floor: number | string;
  code: number | string;
}

interface Props {
  cartPizzas: CardPizza[];
  type: string;
  form: Form;
  setCardPizzas: React.Dispatch<React.SetStateAction<CardPizza[]>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setForm: React.Dispatch<React.SetStateAction<Form>>;
}

const defaultValue = {
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
  setCardPizzas: () => {},
  setType: () => {},
  setForm: () => {}
};

export const PizzaContext = React.createContext<Props>(defaultValue);

export const pizzas: Pizza[] = [
  {
    id: 0,
    imageUrl:
      'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg',
    name: 'Пепперони Фреш с перцем',
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 803,
    category: 0,
    rating: 4
  },
  {
    id: 1,
    imageUrl:
      'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg',
    name: 'Сырная',
    types: [0],
    sizes: [26, 40],
    price: 245,
    category: 1,
    rating: 6
  },
  {
    id: 2,
    imageUrl:
      'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg',
    name: 'Цыпленок барбекю',
    types: [0],
    sizes: [26, 40],
    price: 295,
    category: 1,
    rating: 4
  },
  {
    id: 3,
    imageUrl:
      'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg',
    name: 'Кисло-сладкий цыпленок',
    types: [1],
    sizes: [26, 30, 40],
    price: 275,
    category: 2,
    rating: 2
  },
  {
    id: 4,
    imageUrl:
      'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
    name: 'Чизбургер-пицца',
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 415,
    category: 3,
    rating: 8
  },
  {
    id: 5,
    imageUrl:
      'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg',
    name: 'Крэйзи пепперони',
    types: [0],
    sizes: [30, 40],
    price: 580,
    category: 2,
    rating: 2
  },
  {
    id: 6,
    imageUrl:
      'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg',
    name: 'Пепперони',
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 675,
    category: 1,
    rating: 9
  },
  {
    id: 7,
    imageUrl:
      'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg',
    name: 'Маргарита',
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 450,
    category: 4,
    rating: 10
  },
  {
    id: 8,
    imageUrl:
      'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg',
    name: 'Четыре сезона',
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 395,
    category: 5,
    rating: 10
  },
  {
    id: 9,
    imageUrl:
      'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg',
    name: 'Овощи и грибы 🌱',
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 285,
    category: 5,
    rating: 7
  }
];

export const ProviderContext = (props: ProviderProps) => {
  const [cartPizzas, setCardPizzas] = React.useState<CardPizza[]>([]);
  const [type, setType] = React.useState<string>('');
  const [form, setForm] = React.useState<any>({});

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

  const values = {
    cartPizzas,
    setCardPizzas,
    type,
    setType,
    form,
    setForm
  };

  const { children } = props;
  return (
    <PizzaContext.Provider value={values}>{children}</PizzaContext.Provider>
  );
};
