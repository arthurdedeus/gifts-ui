import React from 'react';
import styled from 'styled-components';

// Define props types
interface ProductItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

// Styled component
const Item = styled.div`
  border: 1px solid #eee;
  padding: 10px;
  margin: 10px;
  text-align: center;
`;

export const ProductItem: React.FC<ProductItemProps> = ({ name, description, price, imageUrl }) => {
  return (
    <Item>
      <img src={imageUrl} alt={name} style={{ maxWidth: '100%' }} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>${price}</p>
      {/* Add to Cart Button */}
      {/* This can be implemented based on how you manage cart state */}
    </Item>
  );
};

