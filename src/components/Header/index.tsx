import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { AppRoutes } from '../../enums';
import { CartIcon } from '../CartIcon';
import './Header.css';

type StyledHeaderProps = {
  isCheckout: boolean;
};
const StyledHeader = styled.header<StyledHeaderProps>`
  width: 100%;
  padding: 10px 10px;
  background-color: #c4c4c4;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 60px;

  @media (max-width: 768px) {
    justify-content: ${({ isCheckout }) => (isCheckout ? 'center' : 'space-between')};
  }
`;

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
    <StyledHeader
      className="header"
      isCheckout={isCheckout}
      // style={{
      //   width: '100%',
      //   padding: '10px 10px',
      //   backgroundColor: '#c4c4c4',
      //   color: '#fff',
      //   display: 'flex',
      //   justifyContent: justifyContent,
      //   alignItems: 'center',
      //   boxSizing: 'border-box',
      //   height: '60px',

      // }}
    >
      <h1 style={{ margin: 0, cursor: 'pointer' }} onClick={handletTitleClick}>
        Presentes Carla e Arthur
      </h1>
      {!isCheckout && <CartIcon onClick={handleCartIconClick} isDrawerOpen={isDrawerOpen} />}
    </StyledHeader>
  );
};
