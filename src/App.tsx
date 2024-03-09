import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './App.css';
import { CartProvider } from './contexts/CartContext';
import { Router } from './pages/Router';

const queryClient = new QueryClient();

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
        <QueryClientProvider client={queryClient}>
          <div className="App">
            <Router />
          </div>
        </QueryClientProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
