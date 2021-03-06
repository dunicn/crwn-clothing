interface CartActionTypeInterface {
  TOGGLE_CART_HIDDEN: string;
  ADD_ITEM: string;
  REMOVE_ITEM: string;
  CLEAR_ITEM_FROM_CART: string;
  CLEAR_CART: string;
  SET_CART_FROM_FIREBASE: string;
  UPDATE_CART_IN_FIREBASE: string;
}

const CartActionTypes: CartActionTypeInterface = {
  TOGGLE_CART_HIDDEN: 'TOOGLE_CART_HIDDEN',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_ITEM_FROM_CART: 'CLEAR_ITEM_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
  SET_CART_FROM_FIREBASE: 'SET_CART_FROM_FIREBASE',
  UPDATE_CART_IN_FIREBASE: 'UPDATE_CART_IN_FIREBASE',
};

export default CartActionTypes;
