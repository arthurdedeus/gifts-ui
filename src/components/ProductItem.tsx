import React from 'react';
import styled from 'styled-components';
import { useCart } from '../contexts/CartContext';
import { Product } from '../types';
import { ActionType } from '../enums';

// Define props types
interface ProductItemProps {
  product: Product;
}

// Styled component
const Item = styled.div`
  border: 1px solid #eee;
  padding: 10px;
  margin: 10px;
  text-align: center;
`;

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const {dispatch} = useCart();

  const handleAddToCart = () => {
    console.log(product.id)
    dispatch({ type: ActionType.ADD_ITEM, payload: { ...product, quantity: 1 } });
  }

  return (
    <Item>
      <img src={product.imageUrl} alt={product.name} style={{ maxWidth: '100%' }} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {/* This can be implemented based on how you manage cart state */}
    </Item>
  );
};

