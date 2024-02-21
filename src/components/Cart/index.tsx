import { toast } from 'react-toastify';

import styled from 'styled-components';

import { useCart } from '../../contexts/CartContext';
import { ActionType } from '../../enums';
import { CheckoutCartItem } from './CheckoutCartItem';
import { DrawerCartItem } from './DrawerCartItem';

type CartProps = {
  isCheckout?: boolean;
};

type CartItemListProps = CartProps;

const CartItemsList = styled.ul<CartItemListProps>`
  list-style-type: none;
  padding: 0 15px;

  @media (min-width: 768px) {
    padding: ${props => (props.isCheckout ? '0 150px' : '0 15px')};
  }
`;

export const Cart = ({ isCheckout = false }: CartProps) => {
  const { state, dispatch } = useCart();

  const handleRemoveItem = (id: number, name: string) => {
    dispatch({ type: ActionType.REMOVE_ITEM, payload: { id } });
    toast.success(`${name} removed from cart!`);
  };

  const handleUpdateQuantity = (id: number, quantity: number, name: string) => {
    if (quantity < 1) {
      dispatch({ type: ActionType.REMOVE_ITEM, payload: { id } });
      toast.success(`${name} removed from cart!`);
    } else {
      dispatch({ type: ActionType.UPDATE_QUANTITY, payload: { id, quantity } });
      toast.success(`${name} updated!`);
    }
  };

  const ItemComponent = isCheckout ? CheckoutCartItem : DrawerCartItem;

  return (
    <div>
      {state.items.length === 0 && <p>Your cart is empty</p>}
      <CartItemsList isCheckout={isCheckout}>
        {state.items.map(item => (
          <ItemComponent
            key={item.id}
            item={item}
            handleRemoveItem={handleRemoveItem}
            handleUpdateQuantity={handleUpdateQuantity}
          />
        ))}
      </CartItemsList>
    </div>
  );
};
