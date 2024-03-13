import React from 'react';
import ReactDOM from 'react-dom/client';
import { CreateRouter } from 'estafette-router';
import { ProviderContext } from 'contexts/PizzaContext';
import { routes } from 'routes';

import 'styles/styles.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ProviderContext>
    <CreateRouter routes={routes} />
  </ProviderContext>
);
