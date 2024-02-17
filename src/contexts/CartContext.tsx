import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { CartItem } from '../types'; // Assuming you have this from earlier
import { ActionType } from '../enums';

// Cart context state type
interface CartState {
  items: CartItem[];
}

// Action types for the cart reducer
type CartAction =
  | { type: ActionType.ADD_ITEM; payload: CartItem }
  | { type: ActionType.REMOVE_ITEM; payload: { id: number } }
  | { type: ActionType.UPDATE_QUANTITY; payload: { id: number; quantity: number } };

// Try loading initial cart items from local storage
const loadInitialState = (): CartState => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : { items: [] };
};

const initialState: CartState = loadInitialState();

// Create the context
const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({ state: initialState, dispatch: () => null });

// Cart reducer to handle actions
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case ActionType.ADD_ITEM:
      // Check if item is already in the cart
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex > -1) {
        // Update quantity if item exists
        const updatedItems = state.items.map((item, index) =>
          index === existingItemIndex ? { ...item, quantity: item.quantity + action.payload.quantity } : item
        );
        return { ...state, items: updatedItems };
      } else {
        // Add new item
        return { ...state, items: [...state.items, action.payload] };
      }
    case ActionType.REMOVE_ITEM:
      return { ...state, items: state.items.filter(item => item.id !== action.payload.id) };
    case ActionType.UPDATE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
      };
    default:
      return state;
  }
};

// CartProvider component to wrap the application
export const CartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
