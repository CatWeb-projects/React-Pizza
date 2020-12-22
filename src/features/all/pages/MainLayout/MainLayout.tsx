import React from 'react';
import { Products } from 'ui/organisms';
import { Categories, Header } from 'ui/molecules';

import 'features/all/pages/MainLayout/MainLayout.scss';

export const MainLayout = () => {
  return (
    <div className="main-container">
      <Header />
      <Categories />
      <Products />
    </div>
  );
};
