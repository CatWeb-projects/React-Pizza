import React from 'react';
import 'ui/templates/MainLayout/MainLayout.scss';
import { Header } from 'ui/molecules/Header/Header';
import { ProviderContext } from 'Context/Context';
import { Categories } from 'ui/molecules/Categories/Categories';
import { Products } from 'ui/organisms/Products/Products';

export const MainLayout = () => {
  return (
    <ProviderContext>
      <div className="main-container">
        <Header />
        <Categories />
        <Products />
      </div>
    </ProviderContext>
  );
};
