import React from 'react';

import './cart-item.styles.scss';

export interface ItemInterface {
  imageUrl?: string;
  price?: number;
  name?: string;
  quantity?: number;
  id?: string;
  item?: any; //cart-dropdown
}

const CartItem: React.FC<ItemInterface> = ({ item }) => (
  <div className='cart-item'>
    <img src={item.imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{}</span>
      <span className='price'>
        {' '}
        {item.quantity} x ${item.price}
      </span>
    </div>
  </div>
);

export default React.memo(CartItem);
