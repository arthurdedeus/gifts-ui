import React from 'react';
import './Header.css';
import { CartIcon } from '../CartIcon';

type HeaderProps = {
  handleCartIconClick: () => void;
  isDrawerOpen: boolean;
};

export const Header = ({ handleCartIconClick, isDrawerOpen }: HeaderProps) => {
  return (
    <header
    className="header"
    style={{
      width: '100%',
      padding: '10px 20px',
      backgroundColor: '#333',
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxSizing: 'border-box',
    }}>
      <h1 style={{ margin: 0 }}>My Shop</h1>
      <CartIcon onClick={handleCartIconClick} isDrawerOpen={isDrawerOpen}/>
    </header>
  );
};
