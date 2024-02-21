import { CartItemProps } from '../../types';

export const CheckoutCartItem = ({
  item,
  handleRemoveItem,
  handleUpdateQuantity,
}: CartItemProps) => {
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
