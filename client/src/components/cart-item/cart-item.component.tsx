import React from 'react';

import './cart-item.styles.scss';

export interface ItemInterface {
  imageUrl?: string;
  price?: number;
  name?: string;
  quantity?: number;
  id?: string;
}

const CartItem: React.FC<ItemInterface> = ({
  imageUrl,
  price,
  name,
  quantity,
}) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {' '}
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default React.memo(CartItem);
