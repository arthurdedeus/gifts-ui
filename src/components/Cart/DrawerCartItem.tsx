import { CartItemProps } from '../../types';

export const DrawerCartItem = ({ item, handleRemoveItem, handleUpdateQuantity }: CartItemProps) => {
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
