import { toast } from 'react-toastify';

import { useCart } from '../../contexts/CartContext';
import { ActionType } from '../../enums';
import { CheckoutCartItem } from './CheckoutCartItem';
import { DrawerCartItem } from './DrawerCartItem';

type CartProps = {
  isCheckout?: boolean;
};

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
      <ul
        style={{
          // TODO: Make this responsive
          padding: '0 15px',
          listStyleType: 'none',
        }}
      >
        {state.items.map(item => (
          <ItemComponent
            key={item.id}
            item={item}
            handleRemoveItem={handleRemoveItem}
            handleUpdateQuantity={handleUpdateQuantity}
          />
        ))}
      </ul>
    </div>
  );
};
