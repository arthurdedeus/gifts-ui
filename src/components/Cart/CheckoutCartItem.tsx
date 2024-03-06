import styled from 'styled-components';

import { CartItemProps } from '../../types';
import { formatCurrency } from '../../utils';
import { Icon } from '../Icon';

const ItemContainer = styled.li`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  width: 100%;
`;

const Image = styled.img`
  width: 125px;
  height: 125px;
  margin-right: 15px;
  border-radius: 10px;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 125px;
  justify-content: space-between;
`;

const ProductName = styled.span`
  font-size: 16px;
  margin: 0;
  font-weight: 600;
  text-align: left;
`;

const ProductDescription = styled.span`
  font-size: 12px;
  margin: 0;
  padding: 0;
  justify-content: flex-start;
  font-weight: 400;
  text-align: left;
`;

const Price = styled.span`
  font-size: 12px;
  font-weight: 600;
`;

const QuantityContainer = styled.div`
  display: flex;
  padding-top: 5px;
  align-items: center;
`;

export const CheckoutCartItem = ({
  item,
  handleRemoveItem,
  handleUpdateQuantity,
}: CartItemProps) => {
  return (
    <ItemContainer key={item.id}>
      <Image src={item.imageUrl} alt={item.name} />
      <ProductContainer>
        <ProductName>{item.name}</ProductName>
        <ProductDescription>{item.description}</ProductDescription>
        <Price>{formatCurrency(item.price * item.quantity)}</Price>
        <QuantityContainer>
          <button
            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1, item.name)}
            style={{ marginRight: '5px' }}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1, item.name)}
            style={{ marginLeft: '5px' }}
          >
            +
          </button>
          <Icon
            name="delete"
            style={{ fontSize: '24px', cursor: 'pointer', marginLeft: '15px' }}
            onClick={() => handleRemoveItem(item.id, item.name)}
          />
        </QuantityContainer>
      </ProductContainer>
    </ItemContainer>
  );
};
