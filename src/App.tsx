import React, { useEffect, useState } from 'react';
import './App.css';
import {GridContainer} from './components/GridContainer';
import { CartProvider } from './contexts/CartContext';
import { ToastContainer } from 'react-toastify';
import { Header } from './components/Header';
import { CartDrawer } from './components/CartDrawer';


function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;
      const isClickOnDrawer = target.closest('.cart-drawer');
      const isClickOnCartIcon = target.closest('.cart-icon');

      if (!isClickOnDrawer && !isClickOnCartIcon && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isDrawerOpen]);


  return (
    <CartProvider>
    <ToastContainer position="bottom-left" autoClose={2000} hideProgressBar closeButton={false} closeOnClick/>
    <div className="App">
      <Header handleCartIconClick={toggleDrawer} isDrawerOpen={isDrawerOpen}/>
      <CartDrawer
        isOpen={isDrawerOpen}
      />
      <GridContainer />
    </div>
  </CartProvider>
  );
}

export default App;
