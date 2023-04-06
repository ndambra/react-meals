import { createContext, useReducer } from 'react';

const CartContext = createContext();

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';

const initialCart = {
  items: [],
  totalAmount: 0,
};

// TODO: could probably split the reducer out into another file to clean it up a bit
// enhance logic, add an update_to_cart (add_to_cart has too much going on)
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const updatedTotal =
        state.totalAmount + action.payload.price * action.payload.qty;

      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let updatedItem;
      let updatedItems;
      if (existingItemIndex >= 0) {
        const existingItem = state.items[existingItemIndex];
        updatedItem = {
          ...existingItem,
          qty: existingItem.qty + action.payload.qty,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotal,
      };
    case REMOVE_FROM_CART:
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      const existingCartItem = state.items[existingCartItemIndex];
      const updatedTotalPrice = state.totalAmount - existingCartItem.price;
      let itemsAfterRemove;
      if (existingCartItem.qty === 1) {
        itemsAfterRemove = state.items.filter(
          (item) => item.id !== action.payload
        );
      } else {
        const newItem = { ...existingCartItem, qty: existingCartItem.qty - 1 };
        itemsAfterRemove = [...state.items];
        itemsAfterRemove[existingCartItemIndex] = newItem;
      }

      return {
        items: itemsAfterRemove,
        totalAmount: updatedTotalPrice,
      };
    case CLEAR_CART:
    default:
      return initialCart;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialCart);

  const addItemToCartHandler = (addItem) => {
    dispatch({ type: ADD_TO_CART, payload: addItem });
  };

  const removeItemToCartHandler = (id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
  };

  const clearCartHandler = () => {
    dispatch({ type: CLEAR_CART });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={{ cartContext }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
export default CartContext;
