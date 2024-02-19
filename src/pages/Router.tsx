import { Route, Routes } from 'react-router-dom';

import { AppRoutes } from '../enums';
import { Checkout } from './Checkout';
import { Home } from './Home';

export const Router = () => {
  return (
    <Routes>
      <Route path={AppRoutes.HOME} element={<Home />} />
      <Route path={AppRoutes.CHECKOUT} element={<Checkout />} />
    </Routes>
  );
};
