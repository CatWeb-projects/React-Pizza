import axios, { Canceler } from 'axios';
import { PizzaProps } from './pizza-api.types';

const { CancelToken } = axios;

const baseUrl = 'http://localhost:3005';

export const pizzasItems = {
  action: (): Promise<{ data: PizzaProps[] }> =>
    axios.get(`${baseUrl}/pizzas`, {
      cancelToken: new CancelToken((c: Canceler) => (pizzasItems.cancel = c))
    }),
  cancel: (() => null) as Canceler
};
