import React, { useEffect } from 'react';

import { Cart } from './Cart';

interface CartDrawerProps {
  isOpen: boolean;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen }) => {
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
        padding: '20px',
        boxSizing: 'border-box',
        paddingTop: '60px',
        overflowY: 'auto',
      }}
    >
      <Cart />
    </div>
  );
};
