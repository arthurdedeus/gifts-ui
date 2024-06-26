import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCart } from '../contexts/CartContext';
import { AppRoutes } from '../enums';
import { formatCurrency } from '../utils';
import { Button } from './Button';
import { Cart } from './Cart';
import { Footer } from './Footer';

interface CartDrawerProps {
  isOpen: boolean;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen }) => {
  const { totalPrice } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const body = document.body;
    const originalStyle = window.getComputedStyle(body).overflow;

    if (isOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = originalStyle;
    }

    return () => {
      body.style.overflow = originalStyle;
    };
  }, [isOpen]);

  const handleProceedToCheckout = () => {
    navigate(AppRoutes.CHECKOUT);
  };

  return (
    <div
      className="cart-drawer"
      style={{
        position: 'fixed',
        top: 0,
        right: isOpen ? '0' : '-100%',
        width: '300px',
        height: '100%',
        backgroundColor: '#fff',
        boxShadow: '-2px 0 5px rgba(0,0,0,0.5)',
        transition: 'right 0.3s ease-in-out',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          padding: '10px',
          paddingTop: '60px',
          borderBottom: '1px solid #ccc',
        }}
      >
        <h2>Seu Carrinho</h2>
      </div>
      <div
        style={{
          overflowY: 'auto',
          flex: 1,
        }}
      >
        <Cart />
      </div>
      <Footer>
        <p>Total: {formatCurrency(totalPrice)}</p>
        <Button onClick={handleProceedToCheckout} text="Ir para Checkout" />
      </Footer>
    </div>
  );
};
