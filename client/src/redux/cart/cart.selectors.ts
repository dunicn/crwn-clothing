import { OutputSelector, createSelector } from 'reselect';
import { ItemInterface } from '../../components/cart-item/cart-item.component';

const selectCart = (state: any) => state.cart;

export const selectCartItems: OutputSelector<any, any, (res: any) => any> =
  createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartHidden: OutputSelector<any, any, (res: any) => any> =
  createSelector([selectCart], (cart) => cart.hidden);

export const selectCartItemsCount: OutputSelector<any, any, (res: any) => any> =
  createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity: number, cartItem: ItemInterface) =>
        accumulatedQuantity + cartItem.quantity!,
      0
    )
  );

export const selectCartTotal: OutputSelector<any, any, (res: any) => any> =
  createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity: number, cartItem: ItemInterface) =>
        accumulatedQuantity + cartItem.quantity! * cartItem.price!,
      0
    )
  );
