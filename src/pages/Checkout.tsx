import styled from 'styled-components';

import { Cart } from '../components/Cart';
import { CheckoutForm } from '../components/CheckoutForm';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useCart } from '../contexts/CartContext';
import { formatCurrency } from '../utils';

const CartReviewContainer = styled.div`
  overflow-y: auto;
  flex: 1;
  width: 100%;
`;

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
      <CartReviewContainer>
        <Cart isCheckout={true} />
      </CartReviewContainer>
      <Footer style={{ marginBottom: '80px', width: '100%', height: '40%' }}>
        <div>
          <h3>Total: {formatCurrency(totalPrice)}</h3>
        </div>
        <CheckoutForm />
      </Footer>
    </div>
  );
};
