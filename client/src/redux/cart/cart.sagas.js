import { call, all, takeLatest, put, select } from 'redux-saga/effects';

import { getUserCartRef } from '../../firebase/firebase.utils';
import UserActionTypes from '../user/user.types';
import { clearCart, setCartFromFirebase, checkOutSuccess } from './cart.actions';
import { selectCurrentUser } from '../user/user.selectors';
import { selectCartItems } from '../cart/cart.selectors';
import CartActionTypes from './cart.types';

export function* clearCartSignOut() {
    yield put(clearCart());
};

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartSignOut)
};

export function* cartSagas() {
    yield(all([
        call(onSignOutSuccess),
        call(onCartChange),
        call(onUserSignIn),
        call(onCheckoutSuccess)
    ]))
};

export function* clearCartCheckoutSuccess() {
    yield put(checkOutSuccess());
};

export function* onCheckoutSuccess() {
    yield takeLatest(UserActionTypes.CHECKOUT_SUCCESS, clearCartCheckoutSuccess)
};

export function* checkCartFromFirebase({ payload: user }) {
    const cartRef = yield getUserCartRef(user.id);
    const cartSnapshot = yield cartRef.get();
    yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
};

export function* onUserSignIn() {
    yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
};

export function* UpdateCartInFirebase() {
    const currentUser = yield select(selectCurrentUser);
    if (currentUser) {
        try {
            const cartRef = yield getUserCartRef(currentUser.id);
            const cartItems = yield select(selectCartItems);
            yield cartRef.update({ cartItems });
        } catch (error) {
            console.log(error);
        }
    }
};

export function* onCartChange() {
    yield takeLatest([
        CartActionTypes.ADD_ITEM,
        CartActionTypes.REMOVE_ITEM,
        CartActionTypes.CLEAR_ITEM_FROM_CART,
        CartActionTypes.CLEAR_CART
    ],
    UpdateCartInFirebase)
};