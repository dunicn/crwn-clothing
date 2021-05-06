import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import { ItemInterface } from '../cart-item/cart-item.component';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from './collection-item.styles';

interface CollectionItemInterface {
  item: ItemInterface;
  addItem: (item: ItemInterface) => void;
}

const CollectionItem: React.FC<CollectionItemInterface> = ({
  item,
  addItem,
}) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};
const mapDispatchToProps = (dispatch: any) => ({
  addItem: (item: ItemInterface) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
