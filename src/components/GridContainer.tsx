import { useQuery } from 'react-query';

import styled from 'styled-components';

import { getGifts } from '../api/gifts';
import { ProductItem } from './ProductItem';

const StyledGridContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  padding: 20px;

  height: 100%;

  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

type GridContainerProps = {
  setIsDrawerOpen: (isOpen: boolean) => void;
};

export const GridContainer: React.FC<GridContainerProps> = ({ setIsDrawerOpen }) => {
  const { data } = useQuery('gifts', getGifts);

  return (
    <StyledGridContainer>
      {data?.results.map(gift => (
        <ProductItem key={gift.id} product={gift} setIsDrawerOpen={setIsDrawerOpen} />
      ))}
    </StyledGridContainer>
  );
};
