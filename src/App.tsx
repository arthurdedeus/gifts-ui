import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './App.css';
import { CartProvider } from './contexts/CartContext';
import { Router } from './pages/Router';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ToastContainer
          position="bottom-left"
          autoClose={2000}
          hideProgressBar
          closeButton={false}
          closeOnClick
        />
        <div className="App">
          <Router />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
