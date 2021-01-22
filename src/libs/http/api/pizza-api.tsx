import axios, { Canceler } from 'axios';

const { CancelToken } = axios;

const baseUrl = 'https://3x6vhe5b45.api.quickmocker.com';

export const pizzasItems = {
  action: (): Promise<any> =>
    axios.get(`${baseUrl}/pizzas`, {
      cancelToken: new CancelToken((c: Canceler) => (pizzasItems.cancel = c))
    }),
  cancel: (() => null) as Canceler
};
