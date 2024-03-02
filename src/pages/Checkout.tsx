import React from 'react';

import { Cart } from '../components/Cart';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useCart } from '../contexts/CartContext';

export const Checkout: React.FC = () => {
  const { totalPrice } = useCart();
  return (
    <div
      style={{
        position: 'fixed',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Header isCheckout={false} />
      <div
        style={{
          borderBottom: '1px solid #ccc',
          width: '100%',
        }}
      >
        <h2>Checkout</h2>
      </div>
      <div
        style={{
          overflowY: 'auto',
          flex: 1,
          width: '100%',
        }}
      >
        <Cart isCheckout={true} />
      </div>
      <Footer style={{ marginBottom: '60px', width: '100%' }}>
        <p>Total: ${totalPrice.toFixed(2)}</p>
        <button> Ir para pagamento </button>
      </Footer>
    </div>
  );
};
