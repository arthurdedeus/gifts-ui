import React from 'react';
import './App.css';
import {GridContainer} from './components/GridContainer';
import { CartProvider } from './contexts/CartContext';
import { Cart } from './components/Cart';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <CartProvider>
    <ToastContainer position="bottom-left" autoClose={2000} hideProgressBar closeButton={false} closeOnClick/>
    <div className="App">
      <GridContainer />
      <Cart />
    </div>
  </CartProvider>
  );
}

export default App;
