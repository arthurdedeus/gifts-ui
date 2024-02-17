import React from 'react';
import { useCart } from '../contexts/CartContext';
import { ActionType } from '../enums';

export const Cart = () => {
  const { state, dispatch } = useCart();

  const handleRemoveItem = (id: number) => {
    dispatch({ type: ActionType.REMOVE_ITEM, payload: { id } });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) {
      dispatch({ type: ActionType.REMOVE_ITEM, payload: { id } });
    }
    dispatch({ type: ActionType.UPDATE_QUANTITY, payload: { id, quantity } });
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
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
          </li>
        ))}
      </ul>
      <div>Total Price: ${totalPrice.toFixed(2)}</div>
    </div>
  );
};
