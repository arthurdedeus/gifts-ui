import { toast } from 'react-toastify';

import { useCart } from '../contexts/CartContext';
import { ActionType } from '../enums';

export const Cart = () => {
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

  return (
    <div>
      {state.items.length === 0 && <p>Your cart is empty</p>}
      <ul>
        {state.items.map(item => (
          <li
            key={item.id}
            style={{
              marginBottom: '15px',
            }}
          >
            <div>
              {item.name} - ${item.price}
            </div>
            <div>Quantity: {item.quantity}</div>
            <button onClick={() => handleRemoveItem(item.id, item.name)}>Remover</button>
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1, item.name)}>
              +
            </button>
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1, item.name)}>
              -
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
