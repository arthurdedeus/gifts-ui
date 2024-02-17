import React from 'react';
import './App.css';
import {GridContainer} from './components/GridContainer';
import { CartProvider } from './contexts/CartContext';
import { Cart } from './components/Cart';


function App() {
  return (
    <CartProvider>
    <div className="App">
      <GridContainer />
      <Cart />
    </div>
  </CartProvider>
  );
}

export default App;
