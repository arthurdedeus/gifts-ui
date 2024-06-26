import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { pink } from '../../colors';
import { AppRoutes } from '../../enums';
import { CartIcon } from '../CartIcon';
import './Header.css';

type StyledHeaderProps = {
  isCheckout: boolean;
};
const StyledHeader = styled.header<StyledHeaderProps>`
  width: 100%;
  padding: 10px 10px;
  background-color: ${pink};
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 60px;

  @media (max-width: 768px) {
    justify-content: ${({ isCheckout }) => (isCheckout ? 'flex-start' : 'space-between')};
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
    <StyledHeader className="header" isCheckout={isCheckout}>
      <h1 style={{ margin: 0, cursor: 'pointer', fontSize: '1.8rem' }} onClick={handletTitleClick}>
        Presentes Carla e Arthur
      </h1>
      {!isCheckout && <CartIcon onClick={handleCartIconClick} />}
    </StyledHeader>
  );
};
