import React from 'react';
import { connect } from 'react-redux';
import { Selector, createStructuredSelector } from 'reselect';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { ItemInterface } from '../cart-item/cart-item.component';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

interface CartDropdownInterface {
  cartItems: ItemInterface[];
  dispatch: any;
}

const CartDropdown: React.FC<CartDropdownInterface & RouteComponentProps> = ({
  cartItems,
  history,
  dispatch,
}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps: Selector<
  any,
  {
    cartItems: any;
  }
> = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
