import React from 'react';
import { useRequest } from 'estafette';
import { pizzasItems } from 'libs/http/api/pizza-api';

interface ProviderProps {
  children: React.ReactNode;
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
  apartment: number;
  entrance: number;
  floor: number;
  code: number;
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
  loading: boolean;
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
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
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
    apartment: 0,
    entrance: 0,
    floor: 0,
    code: 0
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
  loading: true,
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
  setSelectType: () => {},
  setLoading: () => {}
};

export const PizzaContext = React.createContext<Props>(defaultValue);

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
  const [loading, setLoading] = React.useState<boolean>(true);

  const { request, data, loading: load } = useRequest<Pizza[]>();

  React.useEffect(() => {
    onFetch();

    return () => {
      pizzasItems.cancel();
    };
    //eslint-disable-next-line
  }, []);

  const onFetch = () => request(pizzasItems.action());

  React.useMemo(() => setPizzas(data), [data]);
  React.useMemo(() => setLoading(load), [load]);

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
    setSelectType,
    loading,
    setLoading
  };

  const { children } = props;
  return (
    <PizzaContext.Provider value={values}>{children}</PizzaContext.Provider>
  );
};
