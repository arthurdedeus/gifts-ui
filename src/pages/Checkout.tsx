import React from 'react';

import { Cart } from '../components/Cart';
import { Header } from '../components/Header';

export const Checkout: React.FC = () => {
  return (
    <div>
      {/* TODO: Standardize prop name */}
      <Header showCartIcon={false} />
      <h1>Checkout</h1>
      <Cart isCheckout={true} />
    </div>
  );
};
