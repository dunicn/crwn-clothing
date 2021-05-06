import CartActionTypes from './cart.types';

import { ItemInterface } from '../../components/cart-item/cart-item.component';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem: (item: ItemInterface) => any = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem: (item: ItemInterface) => any = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart: (item: ItemInterface) => any = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});

export const UpdateCartInFirebase = () => ({
  type: CartActionTypes.UPDATE_CART_IN_FIREBASE,
});

export const checkOutSuccess = () => ({
  type: CartActionTypes.CLEAR_CART,
});

export const setCartFromFirebase = (cartItems: any) => ({
  type: CartActionTypes.SET_CART_FROM_FIREBASE,
  payload: cartItems,
});
