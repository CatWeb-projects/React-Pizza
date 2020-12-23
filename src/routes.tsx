import { MainLayout } from 'features/all/pages/MainLayout/MainLayout';
import { Cart } from 'features/cart/pages/Cart/Cart';

export interface Route {
  name: string;
  path: string;
  component: any;
  exact?: boolean;
  label?: string;
  parent?: string;
}

export const routes: Route[] =
  // prettier-ignore
  [
    {name: 'Main', path: '/', exact: true, component: MainLayout},

    { name: 'Cart', path: '/cart', component: Cart },
  ];
