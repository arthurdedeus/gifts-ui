import { toast } from 'react-toastify';

import { useCart } from '../contexts/CartContext';
import { ActionType } from '../enums';
import { CartItem } from '../types';

type CartProps = {
  isCheckout?: boolean;
};

// TODO: Extract this to separate files
type CartItemProps = {
  item: CartItem;
  handleRemoveItem: (id: number, name: string) => void;
  handleUpdateQuantity: (id: number, quantity: number, name: string) => void;
};

const DrawerCartItem = ({ item, handleRemoveItem, handleUpdateQuantity }: CartItemProps) => {
  return (
    <li
      key={item.id}
      style={{
        marginBottom: '15px',
      }}
    >
      <div>
        {item.name} - ${item.price}
      </div>
      <div>Quantidade: {item.quantity}</div>
      <button onClick={() => handleRemoveItem(item.id, item.name)}>Remover</button>
      <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1, item.name)}>+</button>
      <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1, item.name)}>-</button>
    </li>
  );
};

const CheckoutCartItem = ({ item, handleRemoveItem, handleUpdateQuantity }: CartItemProps) => {
  return (
    <li
      key={item.id}
      style={{
        marginBottom: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <img
          src={item.imageUrl}
          alt={item.name}
          style={{ width: '50px', height: '50px', marginRight: '15px' }}
        />
        {item.name} ${item.price}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          margin: '5px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginRight: '15px',
          }}
        >
          Quantidade: {item.quantity}
          <div>
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1, item.name)}>
              +
            </button>
            <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1, item.name)}>
              -
            </button>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          Total: ${item.price * item.quantity}
          <button onClick={() => handleRemoveItem(item.id, item.name)}>Remover</button>
        </div>
      </div>
    </li>
  );
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
