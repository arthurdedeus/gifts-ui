import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styled from 'styled-components';

import { useCart } from '../contexts/CartContext';
import { ActionType } from '../enums';
import { Product } from '../types';
import { formatCurrency } from '../utils';
import { Image } from './Image';

interface ProductItemProps {
  product: Product;
}

const Item = styled.div`
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    margin: 2px;
    & h2 {
      font-size: 1.2rem;
    }
  }
`;

export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    toast.success(`${product.name} added to cart!`);
    dispatch({ type: ActionType.ADD_ITEM, payload: { ...product, quantity: 1 } });
  };

  return (
    <Item>
      <Image src={product.image} alt={product.name} size="md" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{formatCurrency(product.price)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </Item>
  );
};
