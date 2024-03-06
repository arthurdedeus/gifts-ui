import { useNavigate } from 'react-router-dom';

import { AppRoutes } from '../../enums';
import { CartIcon } from '../CartIcon';
import './Header.css';

type HeaderProps = {
  isCheckout?: boolean;
  handleCartIconClick?: () => void;
  isDrawerOpen?: boolean;
};

export const Header = ({ isCheckout = false, handleCartIconClick, isDrawerOpen }: HeaderProps) => {
  const navigate = useNavigate();

  const handletTitleClick = () => {
    navigate(AppRoutes.HOME);
  };

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
        height: '60px',
      }}
    >
      <h1 style={{ margin: 0, cursor: 'pointer' }} onClick={handletTitleClick}>
        My Shop
      </h1>
      {!isCheckout && <CartIcon onClick={handleCartIconClick} isDrawerOpen={isDrawerOpen} />}
    </header>
  );
};
