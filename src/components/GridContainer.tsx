import React from 'react';

import styled from 'styled-components';

import { Product } from '../types';
import { ProductItem } from './ProductItem';

const StyledGridContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  padding: 20px;

  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

interface GridContainerProps {}

const initialProducts = [
  {
    id: 1,
    name: 'Custom Wedding Mug',
    description: 'A beautiful mug customized for your special day.',
    price: 15.99,
    imageUrl: '/images/capy.jpeg',
  },
  {
    id: 2,
    name: 'Custom Wedding Mug',
    description: 'A beautiful mug customized for your special day.',
    price: 0.01,
    imageUrl: '/images/capy.jpeg',
  },
  {
    id: 3,
    name: 'Custom Wedding Mug',
    description: 'A beautiful mug customized for your special day.',
    price: 15.99,
    imageUrl: '/images/capy.jpeg',
  },
  {
    id: 4,
    name: 'Custom Wedding Mug',
    description: 'A beautiful mug customized for your special day.',
    price: 15.99,
    imageUrl: '/images/capy.jpeg',
  },
  {
    id: 5,
    name: 'Custom Wedding Mug',
    description: 'A beautiful mug customized for your special day.',
    price: 15.99,
    imageUrl: '/images/capy.jpeg',
  },
  {
    id: 6,
    name: 'Custom Wedding Mug',
    description: 'A beautiful mug customized for your special day.',
    price: 15.99,
    imageUrl: '/images/capy.jpeg',
  },
  {
    id: 7,
    name: 'Custom Wedding Mug',
    description: 'A beautiful mug customized for your special day.',
    price: 15.99,
    imageUrl: '/images/capy.jpeg',
  },
  {
    id: 8,
    name: 'Custom Wedding Mug',
    description: 'A beautiful mug customized for your special day.',
    price: 15.99,
    imageUrl: '/images/capy.jpeg',
  },
  {
    id: 9,
    name: 'Custom Wedding Mug',
    description: 'A beautiful mug customized for your special day.',
    price: 15.99,
    imageUrl: '/images/capy.jpeg',
  },
  {
    id: 10,
    name: 'Custom Wedding Mug',
    description: 'A beautiful mug customized for your special day.',
    price: 15.99,
    imageUrl: '/images/capy.jpeg',
  },
  {
    id: 11,
    name: 'Custom Wedding Mug',
    description: 'A beautiful mug customized for your special day.',
    price: 15.99,
    imageUrl: '/images/capy.jpeg',
  },
  {
    id: 12,
    name: 'Custom Wedding Mug',
    description: 'A beautiful mug customized for your special day.',
    price: 15.99,
    imageUrl: '/images/capy.jpeg',
  },
  {
    id: 13,
    name: 'Custom Wedding Mug',
    description: 'A beautiful mug customized for your special day.',
    price: 15.99,
    imageUrl: '/images/capy.jpeg',
  },
];

export const GridContainer: React.FC<GridContainerProps> = () => {
  const [products, setProducts] = React.useState<Product[]>(initialProducts);

  return (
    <StyledGridContainer>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </StyledGridContainer>
  );
};
