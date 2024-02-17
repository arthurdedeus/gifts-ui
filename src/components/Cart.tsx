import React from 'react';
import { useCart } from '../contexts/CartContext';
import { ActionType } from '../enums';
import { toast } from 'react-toastify';

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

  const totalPrice = state.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {state.items.length === 0 && <p>Your cart is empty</p>}
      <ul>
        {state.items.map(item => (
          <li key={item.id}>
            <div>{item.name} - ${item.price}</div>
            <div>Quantity: {item.quantity}</div>
            <button onClick={() => handleRemoveItem(item.id, item.name)}>Remover</button>
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1, item.name)}>+</button>
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1, item.name)}>-</button>
          </li>
        ))}
      </ul>
      <div>Total Price: ${totalPrice.toFixed(2)}</div>
    </div>
  );
};
